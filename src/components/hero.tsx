"use client";

import { motion } from "framer-motion";
import { AppleLogo, GooglePlayLogo } from "@phosphor-icons/react";
import { PhoneFrame } from "@/components/phone-frame";

const appStoreUrl =
  "https://apps.apple.com/us/app/meditrack-medication-manager/id6770387418";
const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.alyssa.meditrack";

export function Hero() {
  return (
    <section className="grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="font-[family-name:var(--font-geist)] text-5xl leading-[1.04] tracking-tight text-white sm:text-6xl">
          Reminders, routines, and adherence history in one place.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Manage prescriptions, scan labels, send caregiver updates, and export
          doctor-ready reports without switching apps.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
      </motion.div>

      <motion.div
        className="flex justify-center lg:justify-end"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        <PhoneFrame
          src="/images/screenshots/dashboard.png"
          alt="MediTrack dashboard"
          className="w-full max-w-[16rem] sm:max-w-[18rem]"
          priority
        />
      </motion.div>
    </section>
  );
}
