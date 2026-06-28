"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Calendar,
  Bell,
  Barcode,
  ChatCircleText,
  Users,
  Export,
} from "@phosphor-icons/react";

const capabilities = [
  {
    icon: Bell,
    label: "Dose reminders",
    detail: "Timed alerts for every prescription so nothing slips through.",
  },
  {
    icon: Calendar,
    label: "Medication schedules",
    detail: "Set daily, weekly, or as-needed routines that stick.",
  },
  {
    icon: Barcode,
    label: "Label scanning",
    detail: "Point your camera at a label to add it in seconds.",
  },
  {
    icon: ChatCircleText,
    label: "AI medication guidance",
    detail: "Ask questions, check interactions, and get dosage info in plain language.",
  },
  {
    icon: Users,
    label: "Caregiver updates",
    detail: "Share digests so family and carers know what happened today.",
  },
  {
    icon: Export,
    label: "Doctor-ready reports",
    detail: "Export adherence summaries formatted for clinic visits.",
  },
];

export function Capabilities() {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.55fr_1fr]">
        <div>
          <h3 className="font-[family-name:var(--font-geist)] text-3xl leading-tight tracking-tight text-white sm:text-4xl">
            What it covers
          </h3>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-[var(--muted)]">
            Dose reminders, medication schedules, label scanning, AI guidance,
            caregiver digests, and adherence summaries.
          </p>
        </div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {capabilities.map((cap, i) => (
            <div
              key={cap.label}
              className="rounded-2xl border border-white/[0.07] bg-[var(--surface-light)] p-5 hover:border-white/[0.12] transition-colors duration-200"
            >
              <cap.icon
                weight="duotone"
                className="h-6 w-6"
                style={{
                  color: i % 2 === 0 ? "var(--accent)" : "var(--accent-warm)",
                }}
              />
              <h4 className="mt-3 font-semibold text-white">{cap.label}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
                {cap.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
