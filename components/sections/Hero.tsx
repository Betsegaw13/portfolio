"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const capabilities = [
  {
    icon: "</>",
    title: "SOFTWARE",
    subtitle: "Web · AI · Cloud",
  },
  {
    icon: "◈",
    title: "EMBEDDED",
    subtitle: "MCU · IoT · Hardware",
  },
  {
    icon: "⚙",
    title: "ROBOTICS",
    subtitle: "Automation · Control",
  },
];

/*
 * Framer Motion easing is explicitly typed so TypeScript
 * does not infer this as number[].
 */
const cubicEase = [0.22, 1, 0.36, 1] as const;

/*
 * Main left-side reveal
 */
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicEase,
    },
  },
};

/*
 * Hero heading container
 */
const headlineContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

/*
 * Each headline line
 */
const headlineItem: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    skewY: 2,
  },

  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.7,
      ease: cubicEase,
    },
  },
};

/*
 * Floating capability cards
 */
const capabilityCard: Variants = {
  hidden: {
    opacity: 0,
    x: 35,
    scale: 0.94,
  },

  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: 0.35 + index * 0.12,
      duration: 0.6,
      ease: cubicEase,
    },
  }),
};

const headline = [
  {
    text: "Where",
    accent: false,
  },
  {
    text: "Software",
    accent: true,
  },
  {
    text: "meets",
    accent: false,
  },
  {
    text: "the physical",
    accent: false,
  },
  {
    text: "world.",
    accent: false,
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0B1120] text-[#F8FAFC]"
    >
      {/* =========================================================
          BACKGROUND
          ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Ambient glow */}
        <div className="absolute left-[8%] top-[16%] h-[320px] w-[320px] rounded-full bg-[#38BDF8]/5 blur-[120px]" />

        <div className="absolute right-[8%] top-[18%] h-[420px] w-[420px] rounded-full bg-[#38BDF8]/10 blur-[140px]" />

        <div className="absolute bottom-[-120px] left-[45%] h-[320px] w-[320px] rounded-full bg-[#38BDF8]/5 blur-[120px]" />
      </div>

      {/* =========================================================
          MAIN
          ========================================================= */}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] items-center px-6 py-28 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-20">

          {/* =====================================================
              LEFT
              ===================================================== */}

          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            className="relative z-20"
          >
            {/* Eyebrow */}

            <motion.div
              variants={fadeUp}
              className="mb-7 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#38BDF8]"
            >
              <span className="h-px w-10 bg-[#38BDF8]" />

             
            </motion.div>

            {/* =================================================
                HEADLINE
                ================================================= */}

            <motion.h1
              variants={headlineContainer}
              initial={shouldReduceMotion ? false : "hidden"}
              animate="visible"
              className="max-w-[760px] overflow-hidden text-[clamp(3.5rem,7vw,7rem)] font-black leading-[0.9] tracking-[-0.06em]"
            >
              {headline.map((line) => (
                <motion.span
                  key={line.text}
                  variants={headlineItem}
                  className={
                    line.accent
                      ? "block text-[#38BDF8]"
                      : "block text-[#F8FAFC]"
                  }
                >
                  {line.text}
                </motion.span>
              ))}
            </motion.h1>

            {/* =================================================
                IDENTITY
                ================================================= */}

            <motion.div
              variants={fadeUp}
              className="mt-9"
            >
              <h2 className="text-xl font-bold text-[#F8FAFC] sm:text-2xl">
                Betsegaw Merid
              </h2>

              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#94A3B8]">
                Full-Stack Developer
                <span className="mx-2 text-[#38BDF8]">
                  ·
                </span>
                Embedded Systems
                <span className="mx-2 text-[#38BDF8]">
                  ·
                </span>
                Robotics
              </p>
            </motion.div>

            {/* =================================================
                DESCRIPTION
                ================================================= */}

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-[610px] text-sm leading-7 text-[#94A3B8] sm:text-base"
            >
              I design and build modern software, embedded systems, and
              intelligent technology that turn real-world problems into
              practical solutions.
            </motion.p>

            {/* =================================================
                CAPABILITY PILLS
                ================================================= */}

            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap gap-2"
            >
              <span className="rounded-full border border-[#38BDF8]/20 bg-[#111827]/80 px-3 py-2 text-[10px] text-[#94A3B8] backdrop-blur-md">
                &lt;/&gt; Software
              </span>

              <span className="rounded-full border border-[#38BDF8]/20 bg-[#111827]/80 px-3 py-2 text-[10px] text-[#94A3B8] backdrop-blur-md">
                ◈ Embedded
              </span>

              <span className="rounded-full border border-[#38BDF8]/20 bg-[#111827]/80 px-3 py-2 text-[10px] text-[#94A3B8] backdrop-blur-md">
                ⚙ Robotics
              </span>
            </motion.div>

            {/* =================================================
                BUTTONS
                ================================================= */}

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC] px-7 py-3.5 text-sm font-bold text-[#0B1120] shadow-lg shadow-[#38BDF8]/10 transition-all duration-300 hover:-translate-y-1 hover:from-[#0EA5E9] hover:to-[#38BDF8] hover:shadow-xl hover:shadow-[#38BDF8]/20"
              >
                Explore My Work →
              </a>

              <a
                href="/resume/Betsegaw_Merid_CV.pdf"
                download
                className="font-bold text-[#94A3B8] transition-all duration-300 hover:text-[#38BDF8]"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT
              ===================================================== */}

          <div className="relative flex min-h-[560px] items-center justify-center lg:min-h-[650px]">

            {/* =================================================
                ORBIT
                ================================================= */}

            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.03, 1],
                      opacity: [0.35, 0.5, 0.35],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[390px] w-[390px] rounded-full border border-[#38BDF8]/10 sm:h-[500px] sm:w-[500px] lg:h-[560px] lg:w-[560px]"
            />

            <div className="absolute h-[280px] w-[280px] rounded-full bg-[#38BDF8]/10 blur-[100px] sm:h-[360px] sm:w-[360px]" />

            {/* =================================================
                PORTRAIT
                ================================================= */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 70,
                      scale: 0.88,
                    }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }
              }
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: cubicEase,
              }}
              className="relative z-10"
            >
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: [0, -9, 0],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="relative h-[500px] w-[310px] overflow-hidden rounded-[160px_160px_40px_40px] border border-[#38BDF8]/30 bg-[#111827] shadow-[0_0_90px_rgba(56,189,248,0.14)] sm:h-[580px] sm:w-[360px] lg:h-[620px] lg:w-[400px]">
                  <img
                    src="/images/hero.png"
                    alt="Betsegaw Merid"
                    className="h-full w-full object-cover object-top"
                  />

                  {/* Gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 rounded-[160px_160px_40px_40px] bg-gradient-to-t from-[#0B1120]/40 via-transparent to-transparent" />

                  {/* Inner glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-[160px_160px_40px_40px] shadow-[inset_0_0_70px_rgba(56,189,248,0.12)]" />
                </div>
              </motion.div>
            </motion.div>

            {/* =================================================
                FLOATING CARDS
                ================================================= */}

            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={capabilityCard}
                initial={shouldReduceMotion ? false : "hidden"}
                animate="visible"
                className={`absolute z-20 hidden w-[180px] rounded-2xl border border-[#38BDF8]/20 bg-[#111827]/80 p-3 shadow-xl backdrop-blur-xl sm:block ${
                  index === 0
                    ? "right-[0%] top-[11%]"
                    : index === 1
                      ? "left-[0%] top-[43%]"
                      : "right-[3%] bottom-[8%]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#F8FAFC]">
                      {item.title}
                    </p>

                    <p className="mt-1 text-[9px] text-[#94A3B8]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1120] to-transparent" />
    </section>
  );
}