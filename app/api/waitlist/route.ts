import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, city, role, doors, pain } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "First name, last name, and email are required." }, { status: 400 });
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
