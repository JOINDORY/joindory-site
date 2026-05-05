import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-12 border-t border-glass-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-3">
            <Image
              src="/brand/dorylogowhite.svg"
              alt="Dory"
              width={80}
              height={26}
              className="h-5 w-auto opacity-60"
            />
            <p className="text-sm text-muted-foreground/60">
              Property management for landlords in Quebec and Ontario.
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-3">
            <div className="flex items-center gap-5">
              <a
                href="mailto:hello@joindory.com"
                className="text-sm text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              >
                hello@joindory.com
              </a>
              <a
                href="https://linkedin.com/company/joindory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/joindory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              >
                Instagram
              </a>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground/40">
              <span>&copy; {new Date().getFullYear()} Dory</span>
              <a href="#" className="hover:text-muted-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-muted-foreground transition-colors">Privacy</a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted-foreground/30">
          Coming soon: Centris listings, tenant marketplace, AI tools.
        </p>
      </div>
    </footer>
  );
}
