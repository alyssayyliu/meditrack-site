export function Footer() {
  return (
    <footer className="py-8 text-sm text-[var(--muted)]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <span>MediTrack</span>
        <div className="flex items-center gap-6">
          <a
            href="https://apps.apple.com/us/app/meditrack-medication-manager/id6770387418"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.alyssa.meditrack"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            Google Play
          </a>
        </div>
      </div>
    </footer>
  );
}
