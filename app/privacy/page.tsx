import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { NoiseTexture } from "../components/NoiseTexture";

export const metadata: Metadata = {
  title: "Privacy Policy - Dory",
  description: "Privacy Policy for joindory.com",
};

export default function PrivacyPage() {
  return (
    <>
      <NoiseTexture />
      <Nav />
      <main className="relative pt-32 pb-20" style={{ background: "linear-gradient(180deg, #f6f8fb 0%, white 40%)" }}>
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(44, 145, 255, 0.08), transparent)" }} />
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Last updated: May 5, 2026
          </p>

          <div className="prose-legal space-y-10 text-[15px] leading-relaxed text-foreground/90">
            <section>
              <h2 className="text-lg font-semibold mb-3">1. Who We Are</h2>
              <p>
                Dory (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
                operates the joindory.com website. This Privacy Policy explains
                what personal information we collect, how we use it, and your
                rights under the Personal Information Protection and Electronic
                Documents Act (PIPEDA) and Quebec&apos;s Act respecting the
                protection of personal information in the private sector (Law
                25).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                2. What We Collect
              </h2>
              <h3 className="text-[15px] font-medium mb-2 mt-4">
                Waitlist form data
              </h3>
              <p>
                When you join the waitlist we collect your name, email address,
                city, role (landlord, tenant, both, or other), number of doors
                you manage (if applicable), and any free-text feedback you
                provide.
              </p>

              <h3 className="text-[15px] font-medium mb-2 mt-4">
                Cookies and tracking pixels
              </h3>
              <p>
                We use cookies and similar technologies to understand how
                visitors interact with the site. You can manage your cookie
                preferences through the consent banner displayed on your first
                visit.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Send you product updates and early-access communications
                </li>
                <li>Plan our launch and improve the product</li>
                <li>
                  Measure site traffic and advertising performance
                </li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information. We do not use your
                data for automated decision-making or profiling.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                4. Who We Share Data With
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Resend</strong> — email delivery for waitlist
                  confirmations and updates
                </li>
                <li>
                  <strong>Meta (Facebook)</strong> — advertising measurement via
                  the Meta Pixel, subject to your cookie consent
                </li>
                <li>
                  <strong>Google</strong> — advertising measurement, subject to
                  your cookie consent
                </li>
              </ul>
              <p className="mt-3">
                These providers process data on our behalf and are bound by
                their own privacy policies. We do not share your information
                with any other third parties.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                5. Storage and Security
              </h2>
              <p>
                Your data is stored on servers in North America.
                We take reasonable measures to protect your information from
                unauthorized access, loss, or misuse.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">6. Retention</h2>
              <p>
                We retain waitlist data for as long as it is needed to
                communicate with you about Dory. You can request deletion of
                your data at any time by contacting us (see below).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">7. Your Rights</h2>
              <p>
                Under PIPEDA and Quebec Law 25, you have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>
                  Access the personal information we hold about you
                </li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw consent for future communications</li>
                <li>
                  File a complaint with the Office of the Privacy Commissioner
                  of Canada or the Commission d&apos;acc&egrave;s &agrave;
                  l&apos;information du Qu&eacute;bec
                </li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email us at{" "}
                <a
                  href="mailto:info@joindory.com"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  info@joindory.com
                </a>
                . We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                8. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. The
                &quot;Last updated&quot; date at the top reflects the most
                recent revision. We encourage you to review this page
                periodically.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">9. Contact</h2>
              <p>
                For privacy-related questions or to exercise your rights,
                contact us at{" "}
                <a
                  href="mailto:info@joindory.com"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  info@joindory.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
