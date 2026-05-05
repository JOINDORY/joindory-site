export function Footer() {
  return (
    <footer className="pt-3 pb-3 border-t border-black/[0.06]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-0.5 items-start">
            <img
              src="/brand/dorylogoblack.svg"
              alt="Dory"
              className="h-20 w-auto -ml-1 -mb-5"
            />
            <p className="text-sm text-muted-foreground mb-4">
              Property management for landlords.
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-3">
            <div className="flex items-center gap-5">
              <a
                href="mailto:info@joindory.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                info@joindory.com
              </a>
              <a
                href="https://linkedin.com/company/joindory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/joindory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Instagram
              </a>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>&copy; {new Date().getFullYear()} Dory</span>
              <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
              <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
