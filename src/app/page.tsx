"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { DownloadCta } from "@/components/download-cta";
import { Footer } from "@/components/footer";

const Hero = dynamic(
  () => import("@/components/hero").then((mod) => ({ default: mod.Hero })),
  { ssr: false }
);

const FeatureSection = dynamic(
  () =>
    import("@/components/feature-section").then((mod) => ({
      default: mod.FeatureSection,
    })),
  { ssr: false }
);

const Capabilities = dynamic(
  () =>
    import("@/components/capabilities").then((mod) => ({
      default: mod.Capabilities,
    })),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="px-5 pb-8 pt-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Header />
        <Hero />
        <FeatureSection />
        <Capabilities />
        <DownloadCta />
        <Footer />
      </div>
    </main>
  );
}
