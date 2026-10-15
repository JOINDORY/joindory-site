import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { NoiseTexture } from "../components/NoiseTexture";

export const metadata: Metadata = {
  title: "Terms of Service: Dory",
  description: "Terms of Service for joindory.com",
};

export default function TermsPage() {
  return (
    <>
      <NoiseTexture />
      <Nav />
      <main className="relative pt-32 pb-20" style={{ background: "linear-gradient(180deg, #f6f8fb 0%, white 40%)" }}>
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(44, 145, 255, 0.08), transparent)" }} />
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Last updated: May 5, 2026
          </p>

          <div className="prose-legal space-y-10 text-[15px] leading-relaxed text-foreground/90">
            <section>
              <h2 className="text-lg font-semibold mb-3">1. Scope</h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your use of
                the joindory.com website and waitlist operated by Dory
                (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
                accessing the site or submitting a waitlist form, you agree to
                these Terms.
              </p>
              <p className="mt-3">
                The site is a pre-launch marketing page. It does not provide
                access to the Dory property management platform at this time.
                Features described on the site reflect planned functionality and
                may change before general availability.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                2. Waitlist and Data Collection
              </h2>
              <p>
                When you join the waitlist you provide your name, email address,
                city, role, and optionally the number of doors you manage and
                free-text feedback. We use this information to communicate
                product updates, gauge launch demand, and improve Dory. See our{" "}
                <a
                  href="/privacy"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>{" "}
                for full details on how your data is handled.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">3. Eligibility</h2>
              <p>
                You must be at least 18 years old and legally capable of
                entering into a binding agreement under the laws of your
                province of residence.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                4. Intellectual Property
              </h2>
              <p>
                All content on this site, including text, graphics, logos,
                illustrations, and code, is owned by Dory or its licensors and
                protected by Canadian and international intellectual property
                laws. You may not reproduce, distribute, or create derivative
                works from any site content without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                5. Disclaimer of Warranties
              </h2>
              <p>
                This site and all information on it are provided &quot;as
                is&quot; and &quot;as available&quot; without warranties of any
                kind, express or implied. We do not warrant that the site will
                be uninterrupted, error-free, or free of harmful components.
              </p>
              <p className="mt-3">
                Descriptions of product features, including credit-building and
                rent reporting, reflect planned functionality. We do not
                guarantee that any specific feature will be available at launch
                or at any particular time.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                6. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Dory and its
                officers, directors, employees, and agents shall not be liable
                for any indirect, incidental, special, consequential, or
                punitive damages arising from your use of or inability to use
                the site, including but not limited to loss of data, profits, or
                business opportunities.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                7. Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of the Province of Quebec
                and the federal laws of Canada applicable therein. Any dispute
                arising under these Terms shall be subject to the exclusive
                jurisdiction of the courts of Quebec.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">8. Changes</h2>
              <p>
                We may update these Terms at any time. The &quot;Last
                updated&quot; date at the top of this page reflects the most
                recent revision. Continued use of the site after changes
                constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">9. Contact</h2>
              <p>
                Questions about these Terms? Reach us at{" "}
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
