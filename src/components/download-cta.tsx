import { AppleLogo, GooglePlayLogo } from "@phosphor-icons/react";

const appStoreUrl =
  "https://apps.apple.com/us/app/meditrack-medication-manager/id6770387418";
const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.alyssa.meditrack";

export function DownloadCta() {
  return (
    <section
      id="download"
      className="flex flex-col gap-8 py-16 sm:flex-row sm:items-end sm:justify-between lg:py-24"
    >
      <div className="max-w-xl">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
          Download
        </p>
        <h3 className="font-[family-name:var(--font-geist)] mt-4 text-4xl leading-tight tracking-tight text-white sm:text-5xl">
          Available now on iPhone and Android.
        </h3>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--accent)] px-6 py-3.5 font-medium text-white"
        >
          <AppleLogo weight="fill" className="h-5 w-5" />
          <span>App Store</span>
        </a>
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[var(--line)] px-6 py-3.5 font-medium text-white"
        >
          <GooglePlayLogo weight="fill" className="h-5 w-5" />
          <span>Google Play</span>
        </a>
      </div>
    </section>
  );
}
