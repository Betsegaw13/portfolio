"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

const aboutImages = [
  "/images/about-1.png",
  "/images/about-2.png",
  "/images/about-3.png",
  "/images/about-4.png",
  "/images/about-5.png",
  "/images/about-6.png",
  "/images/about-7.png",
  "/images/about-8.png",
];

const storySteps = [
  {
    title: "Engineering",
    text: "My journey started with Electrical and Computer Engineering, where I developed a strong foundation in understanding how software, electronics, and physical systems work together.",
  },
  {
    title: "Building",
    text: "I enjoy turning ideas into practical products. From web applications to embedded systems, I focus on building technology that is useful, reliable, and thoughtfully designed.",
  },
  {
    title: "Connecting",
    text: "My strongest interest is at the intersection of software and hardware — connecting interfaces, intelligent systems, and real-world devices into meaningful solutions.",
  },
];

const focusAreas = [
  {
    title: "Full-Stack",
    description: "React, Next.js, Tailwind CSS",
  },
  {
    title: "Embedded",
    description: "Arduino, Sensors, Hardware Integration",
  },
  {
    title: "UI / UX",
    description: "Figma, Interfaces, User Experience",
  },
];

type Tab = "journey" | "focus";

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>("journey");
  const [currentImage, setCurrentImage] = useState(0);

  const shouldReduceMotion = useReducedMotion();

  /* =========================================================
     PHOTO SLIDESHOW
     ========================================================= */

  useEffect(() => {
    if (shouldReduceMotion || aboutImages.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % aboutImages.length);
    }, 3500);

    return () => {
      window.clearInterval(interval);
    };
  }, [shouldReduceMotion]);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B1120] px-6 py-16 text-[#F8FAFC] sm:px-10 lg:px-16 lg:py-24 xl:px-20"
    >
      {/* =========================================================
          BACKGROUND
          ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[3%] top-[18%] h-[280px] w-[280px] rounded-full bg-[#38BDF8]/5 blur-[120px]" />

        <div className="absolute bottom-[5%] right-[5%] h-[360px] w-[360px] rounded-full bg-[#38BDF8]/5 blur-[140px]" />

        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/20 to-transparent" />
      </div>

      {/* =========================================================
          MAIN CONTENT
          ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="grid items-start gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 xl:gap-16">
          {/* =====================================================
              LEFT / IMAGES
              ===================================================== */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -40,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-[350px] lg:mx-0 lg:max-w-[360px]"
          >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -inset-5 rounded-[160px] bg-[#38BDF8]/5 blur-3xl" />

            {/* =================================================
                FIRST IMAGE
                ================================================= */}

            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -5, 0],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[150px_150px_32px_32px] border border-[#38BDF8]/25 bg-[#111827] shadow-[0_25px_80px_rgba(0,0,0,0.3)]">
                <img
                  src="/images/about.png"
                  alt="Betsegaw Merid"
                  className="h-full w-full object-cover object-center"
                />

                {/* Bottom gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B1120]/95 via-[#0B1120]/55 to-transparent" />

                {/* Inner glow */}
                <div className="pointer-events-none absolute inset-0 rounded-[150px_150px_32px_32px] shadow-[inset_0_0_60px_rgba(56,189,248,0.10)]" />

                {/* Engineering · Building · Connecting */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F8FAFC]">
                      Engineering
                    </span>

                    <span className="text-[#38BDF8]">·</span>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F8FAFC]">
                      Building
                    </span>

                    <span className="text-[#38BDF8]">·</span>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F8FAFC]">
                      Connecting
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                SECOND IMAGE / SLIDESHOW
                ================================================= */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 35,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="relative mt-5 overflow-hidden rounded-[35px] border border-[#1E293B] bg-[#111827] shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              {/* Slideshow */}
              <div className="relative h-[420px] w-full overflow-hidden">
                <AnimatePresence mode="sync" initial={false}>
                  <motion.img
                    key={aboutImages[currentImage]}
                    src={aboutImages[currentImage]}
                    alt={`Betsegaw Merid ${currentImage + 1}`}
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 1.04,
                          }
                    }
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={
                      shouldReduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            scale: 1.02,
                          }
                    }
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.9,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </AnimatePresence>

                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1120]/55 via-transparent to-transparent" />
              </div>

              {/* Slideshow indicators */}
              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
                {aboutImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Show image ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentImage
                        ? "w-5 bg-[#38BDF8]"
                        : "w-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT / CONTENT
              ===================================================== */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 40,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: shouldReduceMotion ? 0 : 0.1,
              ease: "easeOut",
            }}
            className="min-w-0"
          >
            {/* Heading */}
            <h2 className="max-w-[680px] text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              I build things that
              <span className="mt-2 block text-[#38BDF8]">
                connect ideas to the real world.
              </span>
            </h2>

            {/* Introduction */}
            <p className="mt-6 max-w-[680px] text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8">
              I’m an Electrical and Computer Engineering student who enjoys
              figuring out how things work, building useful software, and
              bringing hardware and technology together to solve real
              problems.
            </p>

            <div className="mt-7 h-px w-16 bg-[#38BDF8]" />

            {/* ===================================================
                GLASS CONTENT PANEL
                =================================================== */}

            <div className="mt-7 rounded-[28px] border border-[#1E293B] bg-[#0F172A]/70 p-3 shadow-[0_25px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-4">
              {/* =================================================
                  TABS
                  ================================================= */}

              <div className="flex rounded-2xl border border-[#1E293B] bg-[#0B1120]/80 p-1">
                {/* My Journey */}
                <button
                  type="button"
                  onClick={() => setActiveTab("journey")}
                  aria-selected={activeTab === "journey"}
                  className="relative flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-300"
                >
                  {activeTab === "journey" && (
                    <motion.span
                      layoutId="about-tab-indicator"
                      className="absolute inset-0 rounded-xl bg-[#38BDF8]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 ${
                      activeTab === "journey"
                        ? "text-[#0B1120]"
                        : "text-[#94A3B8] hover:text-[#F8FAFC]"
                    }`}
                  >
                    My Journey
                  </span>
                </button>

                {/* What I Build */}
                <button
                  type="button"
                  onClick={() => setActiveTab("focus")}
                  aria-selected={activeTab === "focus"}
                  className="relative flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-300"
                >
                  {activeTab === "focus" && (
                    <motion.span
                      layoutId="about-tab-indicator"
                      className="absolute inset-0 rounded-xl bg-[#38BDF8]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 ${
                      activeTab === "focus"
                        ? "text-[#0B1120]"
                        : "text-[#94A3B8] hover:text-[#F8FAFC]"
                    }`}
                  >
                    What I Build
                  </span>
                </button>
              </div>

              {/* =================================================
                  TAB CONTENT
                  ================================================= */}

              <div className="relative mt-3 overflow-hidden rounded-2xl border border-[#1E293B] bg-[#0B1120]/60">
                <AnimatePresence mode="wait">
                  {/* =================================================
                      MY STORY
                      ================================================= */}

                  {activeTab === "journey" && (
                    <motion.div
                      key="journey"
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              opacity: 0,
                              x: 20,
                            }
                      }
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={
                        shouldReduceMotion
                          ? undefined
                          : {
                              opacity: 0,
                              x: -20,
                            }
                      }
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                      className="p-6 sm:p-8"
                    >
                      {/* My Story */}
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
                        My Story
                      </p>

                      <p className="mt-4 max-w-[720px] text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8">
                        I recently completed my fourth year in{" "}
                        <strong className="font-semibold text-[#F8FAFC]">
                          Electrical and Computer Engineering
                        </strong>{" "}
                        at Addis Ababa Science and Technology University
                        (AASTU).
                      </p>

                      <p className="mt-5 max-w-[720px] text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
                        Engineering has given me a strong interest in
                        understanding how different technologies work together
                        — and, more importantly, how they can be used to solve
                        real-world problems.
                      </p>

                      {/* Journey cards */}
                      <div className="mt-7 space-y-3">
                        {storySteps.map((step, index) => (
                          <motion.article
                            key={step.title}
                            initial={
                              shouldReduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: 20,
                                  }
                            }
                            whileInView={{
                              opacity: 1,
                              y: 0,
                            }}
                            viewport={{
                              once: true,
                              amount: 0.25,
                            }}
                            transition={{
                              delay: shouldReduceMotion
                                ? 0
                                : index * 0.1,
                              duration: 0.45,
                              ease: "easeOut",
                            }}
                            className="group relative overflow-hidden rounded-2xl border border-[#1E293B] bg-[#0F172A]/80 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#38BDF8]/35 hover:bg-[#111827] hover:shadow-[0_15px_40px_rgba(0,0,0,0.18)] sm:p-6"
                          >
                            {/* Accent line */}
                            <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-[#38BDF8] to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100" />

                            <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-[#F8FAFC] sm:text-base">
                              {step.title}
                            </h3>

                            <div className="mt-4 h-px w-10 bg-[#38BDF8]/60 transition-all duration-300 group-hover:w-16 group-hover:bg-[#38BDF8]" />

                            <p className="mt-4 text-xs leading-6 text-[#64748B] sm:text-sm sm:leading-7">
                              {step.text}
                            </p>
                          </motion.article>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* =================================================
                      WHAT I BUILD
                      ================================================= */}

                  {activeTab === "focus" && (
                    <motion.div
                      key="focus"
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              opacity: 0,
                              x: 20,
                            }
                      }
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={
                        shouldReduceMotion
                          ? undefined
                          : {
                              opacity: 0,
                              x: -20,
                            }
                      }
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                      className="p-6 sm:p-8"
                    >
                      {/* Areas of focus */}
                      <h3 className="mb-7 text-2xl font-bold tracking-[-0.03em] text-[#F8FAFC] sm:text-3xl">
                        Areas of focus
                      </h3>

                      {/* Focus cards */}
                      <div className="grid gap-3 sm:grid-cols-3">
                        {focusAreas.map((area, index) => (
                          <motion.article
                            key={area.title}
                            initial={
                              shouldReduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: 20,
                                  }
                            }
                            whileInView={{
                              opacity: 1,
                              y: 0,
                            }}
                            viewport={{
                              once: true,
                              amount: 0.25,
                            }}
                            transition={{
                              delay: shouldReduceMotion
                                ? 0
                                : index * 0.1,
                              duration: 0.45,
                              ease: "easeOut",
                            }}
                            className="group relative min-h-[180px] overflow-hidden rounded-2xl border border-[#1E293B] bg-[#0F172A]/80 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#38BDF8]/40 hover:bg-[#111827] hover:shadow-[0_15px_40px_rgba(0,0,0,0.18)]"
                          >
                            {/* Accent */}
                            <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-[#38BDF8] to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100" />

                            <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-[#F8FAFC]">
                              {area.title}
                            </h3>

                            <p className="mt-5 text-xs leading-6 text-[#64748B]">
                              {area.description}
                            </p>
                          </motion.article>
                        ))}
                      </div>

                      {/* Goal */}
                      <div className="mt-8 border-t border-[#1E293B] pt-7">
                        <p className="text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8">
                          My goal is simple:{" "}
                          <span className="font-medium text-[#38BDF8]">
                            build technology that works, feels intentional,
                            and creates real value.
                          </span>{" "}
                          I want every project to have a clear purpose and make
                          a real difference.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}