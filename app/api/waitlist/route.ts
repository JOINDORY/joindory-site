import { NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiter (resets on cold start, good enough for Vercel serverless)
const rateMap = new Map<string, number[]>();
const RATE_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT = 3; // max submissions per window
const MIN_SUBMIT_TIME_MS = 3_000; // minimum 3 seconds between page load and submit

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateMap.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) return true;
  recent.push(now);
  rateMap.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  try {
    // Rate limiting by IP
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { firstName, lastName, email, city, role, doors, pain, _t } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "First name, last name, and email are required." }, { status: 400 });
    }

    // Timestamp validation — reject if submitted faster than a human could fill the form
    if (typeof _t === "number") {
      const elapsed = Date.now() - _t;
      if (elapsed < MIN_SUBMIT_TIME_MS) {
        // Bot submitted too fast — silently accept to not reveal the check
        return NextResponse.json({ success: true });
      }
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // Send emails via Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Notify the team
      await resend.emails.send({
        from: "Dory Waitlist <waitlist@joindory.com>",
        to: "info@joindory.com",
        subject: `Waitlist signup: ${firstName} ${lastName} (${role || "—"})`,
        text: [
          `Name: ${firstName} ${lastName}`,
          `Email: ${email}`,
          `City: ${city || "—"}`,
          `Role: ${role || "—"}`,
          doors ? `Doors: ${doors}` : null,
          pain ? `Pain point: ${pain}` : null,
        ]
          .filter(Boolean)
          .join("\n"),
      });

      // Confirmation to the user
      await resend.emails.send({
        from: "Dory <hello@joindory.com>",
        to: email,
        subject: "You're on the Dory waitlist",
        text: [
          `Hey ${firstName},`,
          "",
          "Thanks for joining the Dory waitlist. You're in.",
          "",
          "We'll reach out with early access and founding pricing as we get closer to launch.",
          "",
          "In the meantime, if you have questions or feedback, just reply to this email.",
          "",
          "— The Dory Team",
          "joindory.com",
        ].join("\n"),
      });
    }

    // Store in Notion database
    const notionKey = process.env.NOTION_API_KEY;
    const notionDb = process.env.NOTION_DATABASE_ID;

    if (notionKey && notionDb) {
      await fetch("https://api.notion.com/v1/pages", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${notionKey}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          parent: { database_id: notionDb },
          properties: {
            "First Name": { title: [{ text: { content: firstName } }] },
            "Last Name": { rich_text: [{ text: { content: lastName } }] },
            Email: { email },
            City: { rich_text: [{ text: { content: city || "" } }] },
            Role: { select: role ? { name: role } : null },
            Doors: { rich_text: [{ text: { content: doors || "" } }] },
            "Pain Point": { rich_text: [{ text: { content: pain || "" } }] },
          },
        }),
      });
    }

    // Fallback log if neither service is configured
    if (!process.env.RESEND_API_KEY && !notionKey) {
      console.error("[waitlist-fallback]", JSON.stringify(body));
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
