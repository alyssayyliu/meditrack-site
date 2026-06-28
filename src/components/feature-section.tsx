"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PhoneFrame } from "@/components/phone-frame";

interface Feature {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  accent: "blue" | "orange";
}

const features: Feature[] = [
  {
    eyebrow: "Track",
    title: "Track every medication with dosage, timing, and history.",
    body: "Add medications manually or scan the label. Store dosage details, set schedules, and review your full medication history in one place.",
    image: "/images/screenshots/med-details.png",
    alt: "MediTrack medication details screen",
    accent: "blue",
  },
  {
    eyebrow: "Schedule",
    title: "See your medication schedule and sync with Google Calendar.",
    body: "Plan doses across days, weeks, or months. Calendar sync keeps your medication routine alongside the rest of your day.",
    image: "/images/screenshots/calendar.png",
    alt: "MediTrack calendar view",
    accent: "orange",
  },
  {
    eyebrow: "Ask",
    title: "Ask questions about your medications in plain language.",
    body: "Check interactions, get dosage reminders, and find information about your prescriptions without searching the web.",
    image: "/images/screenshots/bot-chat.png",
    alt: "MediTrack AI assistant chat",
    accent: "blue",
  },
];

function accentColor(accent: "blue" | "orange") {
  return accent === "orange" ? "var(--accent-warm)" : "var(--accent)";
}

function RevealCard({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function FeatureSection() {
  return (
    <section id="features" className="flex flex-col gap-20 py-16 lg:py-24">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
          How it works
        </p>
        <h3 className="font-[family-name:var(--font-geist)] mt-4 text-4xl leading-tight tracking-tight text-white sm:text-5xl">
          Built for the full medication workflow
        </h3>
      </div>

      <RevealCard index={0}>
        <article className="overflow-hidden rounded-3xl bg-[var(--surface)] lg:grid lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex items-center justify-center p-8 lg:p-12">
            <PhoneFrame
              src={features[0].image}
              alt={features[0].alt}
              className="w-full max-w-[12rem] lg:max-w-[14rem]"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12 lg:pl-0">
            <p
              className="text-xs font-medium uppercase tracking-[0.22em]"
              style={{ color: accentColor(features[0].accent) }}
            >
              {features[0].eyebrow}
            </p>
            <h4 className="font-[family-name:var(--font-geist)] mt-3 text-3xl leading-tight tracking-tight text-white sm:text-4xl">
              {features[0].title}
            </h4>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">
              {features[0].body}
            </p>
          </div>
        </article>
      </RevealCard>

      <RevealCard index={1}>
        <article className="overflow-hidden rounded-3xl bg-[var(--surface)] lg:grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center p-8 lg:p-12 lg:pr-0 lg:order-1 order-2">
            <p
              className="text-xs font-medium uppercase tracking-[0.22em]"
              style={{ color: accentColor(features[1].accent) }}
            >
              {features[1].eyebrow}
            </p>
            <h4 className="font-[family-name:var(--font-geist)] mt-3 text-3xl leading-tight tracking-tight text-white sm:text-4xl">
              {features[1].title}
            </h4>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">
              {features[1].body}
            </p>
          </div>
          <div className="flex items-center justify-center p-8 lg:p-12 lg:order-2 order-1">
            <PhoneFrame
              src={features[1].image}
              alt={features[1].alt}
              className="w-full max-w-[12rem] lg:max-w-[14rem]"
            />
          </div>
        </article>
      </RevealCard>

      <RevealCard index={2}>
        <article className="flex flex-col items-center gap-10 rounded-3xl bg-[var(--surface)] p-8 text-center lg:p-16">
          <PhoneFrame
            src={features[2].image}
            alt={features[2].alt}
            className="w-full max-w-[14rem] lg:max-w-[16rem]"
          />
          <div className="max-w-2xl">
            <p
              className="text-xs font-medium uppercase tracking-[0.22em]"
              style={{ color: accentColor(features[2].accent) }}
            >
              {features[2].eyebrow}
            </p>
            <h4 className="font-[family-name:var(--font-geist)] mt-3 text-3xl leading-tight tracking-tight text-white sm:text-4xl">
              {features[2].title}
            </h4>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
              {features[2].body}
            </p>
          </div>
        </article>
      </RevealCard>
    </section>
  );
}
