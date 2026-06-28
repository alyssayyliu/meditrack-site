import Image from "next/image";

export function Header() {
  return (
    <header className="flex items-center justify-between gap-6 py-4">
      <div className="flex items-center gap-3">
        <Image
          src="/images/app-icon.png"
          alt="MediTrack app icon"
          width={40}
          height={40}
          className="rounded-xl"
          priority
        />
        <span className="font-semibold text-lg tracking-tight text-white">
          MediTrack
        </span>
      </div>
      <nav className="flex items-center gap-1 text-sm text-[var(--muted)]">
        <a href="#features" className="px-3 py-2 rounded-lg hover:text-white">
          Features
        </a>
        <a href="#download" className="px-3 py-2 rounded-lg hover:text-white">
          Download
        </a>
      </nav>
    </header>
  );
}
