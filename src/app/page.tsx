import Image from "next/image";

const appStoreUrl =
  "https://apps.apple.com/us/app/meditrack-medication-manager/id6770387418";
const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.alyssa.meditrack";

const sections = [
  {
    eyebrow: "Timeline",
    title: "See what is due, taken, skipped, or still hanging over the day.",
    body: "MediTrack keeps medication reminders, hydration, and check-ins in one timeline so the next action is obvious.",
    image: "/images/screenshots/shot-1.png",
    alt: "Meditrack timeline screenshot.",
  },
  {
    eyebrow: "Setup",
    title: "Build a schedule once, then stop reconstructing it every week.",
    body: "Add medications, store dosage details, and scan labels when the manual setup work is the thing slowing you down.",
    image: "/images/screenshots/shot-2.png",
    alt: "Meditrack medication setup screenshot.",
  },
  {
    eyebrow: "Reporting",
    title: "Share better context with caregivers and clinicians.",
    body: "Send updates, export adherence reports, and sync schedules into Google Calendar without moving data across multiple apps.",
    image: "/images/screenshots/shot-5.png",
    alt: "Meditrack report screenshot.",
  },
];

function AppStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M16.27 12.13c.02 2.25 1.97 3 1.99 3.01-.02.05-.31 1.08-1.02 2.13-.61.91-1.25 1.82-2.25 1.84-.98.02-1.3-.58-2.42-.58-1.13 0-1.48.56-2.38.6-.96.04-1.69-.97-2.31-1.88-1.27-1.84-2.24-5.19-.94-7.44.64-1.12 1.79-1.82 3.04-1.84.95-.02 1.84.64 2.42.64.58 0 1.67-.79 2.82-.67.48.02 1.83.19 2.69 1.44-.07.04-1.61.94-1.64 2.79Zm-2.05-6.53c.51-.62.85-1.48.75-2.34-.73.03-1.6.48-2.12 1.1-.47.54-.88 1.42-.77 2.26.8.06 1.62-.41 2.14-1.02Z" />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M3.5 2.8c-.3.31-.5.77-.5 1.35v15.7c0 .58.2 1.04.5 1.35l8.89-9.2L3.5 2.8Zm10.9 7.45 2.87-2.97L6.35 1.04l8.05 9.21Zm3.83 2.04-2.88-1.63-2.03 2.1 2.03 2.09 2.87-1.62c.9-.51.9-1.43.01-1.94Zm-11.88 10.67 10.92-6.25-2.87-2.96-8.05 9.21Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="px-5 pb-16 pt-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/images/app-icon.png"
              alt="MediTrack app icon"
              width={48}
              height={48}
              className="rounded-2xl"
              priority
            />
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-[var(--muted)]">
                Medication management
              </p>
              <h1 className="display-font text-2xl text-white">MediTrack</h1>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
            <a href="#features" className="px-2 py-1">
              Features
            </a>
            <a href="#download" className="px-2 py-1">
              Download
            </a>
          </nav>
        </header>

        <section className="grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
              Simpler medication tracking
            </p>
            <h2 className="display-font mt-4 max-w-3xl text-5xl leading-[1.02] tracking-tight text-white sm:text-6xl">
              Reminders, routines, and adherence history in one place.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              MediTrack helps you manage prescriptions, scan medication labels,
              send caregiver updates, and export doctor-ready reports without
              spreading the workflow across multiple apps.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-6 py-4 font-medium text-white"
              >
                <AppStoreIcon />
                <span>App Store</span>
              </a>
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[var(--line)] px-6 py-4 font-medium text-white"
              >
                <PlayStoreIcon />
                <span>Google Play</span>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/screenshots/shot-1.png"
              alt="Meditrack home screen screenshot."
              width={320}
              height={712}
              className="h-auto w-full max-w-[18rem] object-contain sm:max-w-[19rem]"
              priority
            />
          </div>
        </section>

        <section id="features" className="section-rule flex flex-col gap-16 py-16">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className={`grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="max-w-xl">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted)]">
                  {section.eyebrow}
                </p>
                <h3 className="display-font mt-4 text-4xl leading-tight text-white sm:text-5xl">
                  {section.title}
                </h3>
                <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                  {section.body}
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Image
                  src={section.image}
                  alt={section.alt}
                  width={280}
                  height={622}
                  className="h-auto w-full max-w-[15rem] object-contain sm:max-w-[16rem]"
                />
              </div>
            </article>
          ))}
        </section>

        <section className="section-rule py-16">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <h3 className="display-font text-3xl text-white sm:text-4xl">
                What it covers
              </h3>
            </div>
            <div className="text-[var(--muted)]">
              Dose reminders, medication schedules, label scanning, caregiver
              digests, and adherence summaries.
            </div>
            <div className="text-[var(--muted)]">
              Google Calendar sync and doctor-ready reporting are built in for
              the follow-up work after the reminder itself.
            </div>
          </div>
        </section>

        <section
          id="download"
          className="section-rule flex flex-col gap-8 py-16 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted)]">
              Download
            </p>
            <h3 className="display-font mt-4 text-4xl leading-tight text-white sm:text-5xl">
              Available now on iPhone and Android.
            </h3>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-6 py-4 font-medium text-white"
            >
              <AppStoreIcon />
              <span>App Store</span>
            </a>
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[var(--line)] px-6 py-4 font-medium text-white"
            >
              <PlayStoreIcon />
              <span>Google Play</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
