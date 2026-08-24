"use client";

import { useEffect, useRef, useState } from "react";

const storySteps = [
  {
    number: "01",
    title: "ENGINEERING",
    text: "My journey started with Electrical and Computer Engineering, where I developed a strong foundation in understanding how software, electronics, and physical systems work together.",
  },
  {
    number: "02",
    title: "BUILDING",
    text: "I enjoy turning ideas into practical products. From web applications to embedded systems, I focus on building technology that is useful, reliable, and thoughtfully designed.",
  },
  {
    number: "03",
    title: "CONNECTING",
    text: "My strongest interest is at the intersection of software and hardware — connecting interfaces, intelligent systems, and real-world devices into meaningful solutions.",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "FULL-STACK",
    description: "React, Next.js, Tailwind CSS",
  },
  {
    number: "02",
    title: "EMBEDDED",
    description: "Arduino, Sensors, Hardware Integration",
  },
  {
    number: "03",
    title: "UI / UX",
    description: "Figma, Interfaces, User Experience",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame: number | null = null;

    const updateProgress = () => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const scrollableDistance =
        section.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) {
        setProgress(0);
        return;
      }

      const rawProgress =
        -rect.top / scrollableDistance;

      const nextProgress = Math.max(
        0,
        Math.min(1, rawProgress)
      );

      setProgress(nextProgress);
    };

    const handleScroll = () => {
      if (frame !== null) return;

      frame = window.requestAnimationFrame(() => {
        updateProgress();
        frame = null;
      });
    };

    updateProgress();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );

      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  /*
   * =========================================================
   * STORY PROGRESS
   *
   * The story now starts sooner so the user does not have
   * to scroll through a large empty intro period.
   * =========================================================
   */

  const storyProgress = Math.max(
    0,
    Math.min(
      1,
      (progress - 0.12) / 0.62
    )
  );

  const activeStoryIndex = Math.min(
    storySteps.length - 1,
    Math.floor(
      storyProgress * storySteps.length
    )
  );

  const localStoryProgress =
    (storyProgress * storySteps.length) % 1;

  /*
   * =========================================================
   * INTRO
   *
   * Shorter intro phase.
   * The note remains centered/slightly lower,
   * but transitions to the story much faster.
   * =========================================================
   */

  const introProgress = Math.max(
    0,
    Math.min(
      1,
      progress / 0.16
    )
  );

  const introOpacity =
    progress < 0.07
      ? 1
      : Math.max(
          0,
          1 -
            (progress - 0.07) /
              0.09
        );

  const introTranslateY =
    -introProgress * 45;

  /*
   * =========================================================
   * STORY CONTENT
   * =========================================================
   */

  const storyOpacity = Math.max(
    0,
    Math.min(
      1,
      (progress - 0.10) * 9
    )
  );

  /*
   * =========================================================
   * WHAT I BUILD
   *
   * Starts a little earlier so the About section
   * finishes naturally.
   * =========================================================
   */

  const focusProgress = Math.max(
    0,
    Math.min(
      1,
      (progress - 0.74) / 0.20
    )
  );

  /*
   * =========================================================
   * STORY EXIT
   * =========================================================
   */

  const storyExitOpacity =
    progress >= 0.72
      ? Math.max(
          0,
          Math.min(
            1,
            1 -
              (progress - 0.72) /
                0.10
          )
        )
      : 1;

  /*
   * =========================================================
   * CARD STYLE
   *
   * All three cards share one physical position.
   * =========================================================
   */

  const getCardStyle = (
    index: number
  ) => {
    const distance =
      index -
      activeStoryIndex;

    const isActive =
      index ===
      activeStoryIndex;

    /*
     * Future card
     */

    if (index > activeStoryIndex) {
      return {
        opacity: 0,
        transform:
          "translateY(70px) scale(0.97)",
        filter: "blur(3px)",
      };
    }

    /*
     * Active card
     */

    if (isActive) {
      return {
        opacity: 1,
        transform: `translateY(${
          (1 -
            localStoryProgress) *
          4
        }px) scale(${
          1 +
          localStoryProgress *
            0.006
        })`,
        filter: "blur(0px)",
      };
    }

    /*
     * Previous card
     */

    return {
      opacity: Math.max(
        0,
        1 -
          Math.abs(distance) *
            1.6
      ),

      transform: `
        translateY(${
          -Math.abs(
            distance
          ) * 55
        }px)
        scale(${
          Math.max(
            0.95,
            1 -
              Math.abs(
                distance
              ) *
                0.025
          )
        })
      `,

      filter: `blur(${Math.min(
        3,
        Math.abs(
          distance
        ) * 2
      )}px)`,
    };
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="
        relative
        bg-[#0B1120]
        text-[#F8FAFC]
      "
      style={{
        minHeight: "300vh",
      }}
    >
      {/* =====================================================
          STICKY STORY STAGE
          ===================================================== */}

      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ===================================================
            BACKGROUND GRID
            =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-40
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.035) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* ===================================================
            AMBIENT GLOW
            =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-[35%]
            top-[20%]
            h-[500px]
            w-[500px]
            rounded-full
            blur-3xl
          "
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,233,0.06), transparent 68%)",
          }}
        />

        {/* ===================================================
            MAIN CONTAINER
            =================================================== */}

        <div
          className="
            relative
            mx-auto
            h-full
            max-w-[1180px]
            px-6
            sm:px-8
            lg:px-10
          "
        >

          {/* =================================================
              INTRODUCTION
              ================================================= */}

          <div
            className="
              absolute
              inset-0
              z-10
              flex
              items-center
              justify-center
              px-6
              pb-[5vh]
              sm:px-8
              sm:pb-[6vh]
              lg:px-10
              lg:pb-[8vh]
            "
            style={{
              opacity: introOpacity,

              transform: `translateY(${introTranslateY}px)`,

              pointerEvents:
                progress > 0.22
                  ? "none"
                  : "auto",
            }}
          >
            <div
              className="
                w-full
                max-w-[820px]
              "
            >

              <p
                className="
                  mb-5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.38em]
                  text-[#38BDF8]
                  sm:text-xs
                "
              >
                My Story
              </p>

              {/* Original note */}

              <p
                className="
                  text-base
                  leading-8
                  text-[#94A3B8]
                  sm:text-lg
                  lg:text-xl
                  lg:leading-9
                "
              >
                I am an Electrical and
                Computer Engineering
                student focused on
                building practical
                technology that brings
                software, hardware, and
                human-centered design
                together.
              </p>

              {/* Original introduction */}

              <p
                className="
                  mt-7
                  text-base
                  leading-8
                  text-[#94A3B8]
                  sm:text-lg
                  lg:text-xl
                  lg:leading-9
                "
              >
                I recently completed my
                fourth year in{" "}
                <strong
                  className="
                    font-semibold
                    text-[#F8FAFC]
                  "
                >
                  Electrical and Computer
                  Engineering
                </strong>{" "}
                at Addis Ababa Science and
                Technology University
                (AASTU).
              </p>

              <p
                className="
                  mt-6
                  text-base
                  leading-8
                  text-[#94A3B8]
                  sm:text-lg
                  lg:text-xl
                  lg:leading-9
                "
              >
                Engineering has given me a
                strong interest in
                understanding how different
                technologies work together —
                and, more importantly, how
                they can be used to solve
                real-world problems.
              </p>

              {/* Small line */}

              <div
                className="
                  mt-9
                  h-px
                  w-16
                  bg-[#38BDF8]
                "
              />

              <p
                className="
                  mt-4
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#475569]
                "
              >
                Continue scrolling
              </p>

            </div>
          </div>

          {/* =================================================
              STORY CONTENT
              ================================================= */}

          <div
            className="
              absolute
              inset-0
              z-20
              flex
              items-center
              justify-center
            "
            style={{
              opacity:
                storyOpacity *
                storyExitOpacity,

              pointerEvents:
                progress >= 0.76
                  ? "none"
                  : "auto",
            }}
          >
            <div className="w-full">

              {/* =================================================
                  STORY HEADER
                  ================================================= */}

              <div
                className="
                  mx-auto
                  mb-7
                  max-w-[900px]
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      h-px
                      w-10
                      bg-[#38BDF8]
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.32em]
                      text-[#38BDF8]
                    "
                  >
                    My Journey
                  </span>
                </div>
              </div>

              {/* =================================================
                  STORY CARD STAGE
                  ================================================= */}

              <div
                className="
                  relative
                  mx-auto
                  h-[360px]
                  w-full
                  max-w-[900px]
                "
              >
                {storySteps.map(
                  (
                    step,
                    index
                  ) => {
                    const isActive =
                      index ===
                      activeStoryIndex;

                    const style =
                      getCardStyle(
                        index
                      );

                    return (
                      <article
                        key={
                          step.number
                        }
                        className="
                          absolute
                          inset-0
                          overflow-hidden
                          rounded-2xl
                          border
                          bg-[#0F172A]
                          px-7
                          py-8
                          sm:px-10
                          sm:py-10
                        "
                        style={{
                          opacity:
                            storyExitOpacity *
                            style.opacity,

                          transform:
                            style.transform,

                          filter:
                            style.filter,

                          zIndex:
                            isActive
                              ? 30
                              : 10 -
                                index,

                          transition:
                            "opacity 350ms ease, transform 450ms cubic-bezier(0.22,1,0.36,1), filter 350ms ease, border-color 400ms ease, background-color 400ms ease",

                          borderColor:
                            isActive
                              ? "rgba(56,189,248,0.38)"
                              : "rgba(30,41,59,0.9)",

                          backgroundColor:
                            isActive
                              ? "rgba(15,23,42,0.96)"
                              : "rgba(15,23,42,0.72)",

                          boxShadow:
                            isActive
                              ? "0 25px 80px rgba(0,0,0,0.25)"
                              : "none",
                        }}
                      >

                        {/* Active blue line */}

                        <div
                          className="
                            absolute
                            bottom-0
                            left-0
                            top-0
                            w-px
                          "
                          style={{
                            background:
                              "linear-gradient(to bottom, #38BDF8, rgba(56,189,248,0.05))",

                            opacity:
                              isActive
                                ? 1
                                : 0.3,
                          }}
                        />

                        {/* Top glow */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            right-7
                            top-7
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-[#38BDF8]
                          "
                          style={{
                            opacity:
                              isActive
                                ? 1
                                : 0.25,

                            boxShadow:
                              isActive
                                ? "0 0 16px rgba(56,189,248,0.8)"
                                : "none",
                          }}
                        />

                        {/* Card content */}

                        <div
                          className="
                            flex
                            h-full
                            items-center
                          "
                        >
                          <div
                            className="
                              flex
                              w-full
                              gap-5
                              sm:gap-7
                            "
                          >

                            <span
                              className="
                                pt-1
                                font-mono
                                text-[10px]
                                font-semibold
                                tracking-[0.18em]
                                text-[#38BDF8]
                              "
                            >
                              {
                                step.number
                              }
                            </span>

                            <div className="flex-1">

                              <h3
                                className="
                                  text-2xl
                                  font-bold
                                  tracking-[0.05em]
                                  text-[#F8FAFC]
                                  sm:text-3xl
                                "
                              >
                                {
                                  step.title
                                }
                              </h3>

                              <div
                                className="
                                  mt-6
                                  h-px
                                  w-16
                                  bg-[#38BDF8]
                                "
                              />

                              <p
                                className="
                                  mt-7
                                  max-w-[700px]
                                  text-sm
                                  leading-7
                                  text-[#94A3B8]
                                  sm:text-base
                                  sm:leading-8
                                "
                              >
                                {
                                  step.text
                                }
                              </p>

                            </div>
                          </div>
                        </div>

                      </article>
                    );
                  }
                )}
              </div>

              {/* =================================================
                  STORY NAVIGATION
                  ================================================= */}

              <div
                className="
                  mx-auto
                  mt-7
                  flex
                  max-w-[900px]
                  justify-center
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-5
                  "
                >
                  {storySteps.map(
                    (
                      step,
                      index
                    ) => (
                      <div
                        key={
                          step.number
                        }
                        className="
                          flex
                          items-center
                          gap-2
                          transition-opacity
                          duration-300
                        "
                        style={{
                          opacity:
                            index ===
                            activeStoryIndex
                              ? 1
                              : 0.25,
                        }}
                      >
                        <span
                          className="
                            font-mono
                            text-[9px]
                            text-[#38BDF8]
                          "
                        >
                          {
                            step.number
                          }
                        </span>

                        <span
                          className="
                            h-px
                            bg-[#38BDF8]
                            transition-all
                            duration-300
                          "
                          style={{
                            width:
                              index ===
                              activeStoryIndex
                                ? "34px"
                                : "14px",
                          }}
                        />

                        <span
                          className="
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-[#94A3B8]
                          "
                        >
                          {
                            step.title
                          }
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* =================================================
              WHAT I BUILD
              ================================================= */}

          <div
            className="
              absolute
              inset-0
              z-30
              flex
              items-center
              justify-center
            "
            style={{
              opacity:
                focusProgress,

              transform: `translateY(${
                (1 -
                  focusProgress) *
                45
              }px)`,

              pointerEvents:
                focusProgress >
                0.5
                  ? "auto"
                  : "none",
            }}
          >
            <div className="w-full">

              <div
                className="
                  mx-auto
                  max-w-[1000px]
                "
              >

                <p
                  className="
                    mb-4
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.38em]
                    text-[#38BDF8]
                  "
                >
                  What I Build
                </p>

                <h3
                  className="
                    mb-10
                    text-3xl
                    font-semibold
                    tracking-[-0.03em]
                    text-[#F8FAFC]
                    sm:text-4xl
                  "
                >
                  Areas of focus
                </h3>

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-5
                    sm:grid-cols-3
                  "
                >
                  {focusAreas.map(
                    (area) => (
                      <div
                        key={
                          area.number
                        }
                        className="
                          group
                          relative
                          min-h-[190px]
                          overflow-hidden
                          rounded-2xl
                          border
                          border-[#1E293B]
                          bg-[#0F172A]/90
                          p-7
                          backdrop-blur-sm
                          transition-all
                          duration-500
                          hover:-translate-y-1
                          hover:border-[#38BDF8]/40
                          hover:bg-[#111827]
                        "
                      >

                        <div
                          className="
                            absolute
                            bottom-0
                            left-0
                            top-0
                            w-px
                            bg-gradient-to-b
                            from-[#38BDF8]
                            to-transparent
                            opacity-50
                            transition-opacity
                            duration-500
                            group-hover:opacity-100
                          "
                        />

                        <div
                          className="
                            flex
                            items-center
                            justify-between
                          "
                        >

                          <span
                            className="
                              font-mono
                              text-[9px]
                              tracking-[0.18em]
                              text-[#38BDF8]
                            "
                          >
                            {
                              area.number
                            }
                          </span>

                          <span
                            className="
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-[#38BDF8]/40
                              transition-all
                              duration-300
                              group-hover:bg-[#38BDF8]
                              group-hover:shadow-[0_0_12px_rgba(56,189,248,0.7)]
                            "
                          />

                        </div>

                        <h4
                          className="
                            mt-12
                            text-sm
                            font-bold
                            tracking-[0.12em]
                            text-[#F8FAFC]
                          "
                        >
                          {
                            area.title
                          }
                        </h4>

                        <p
                          className="
                            mt-4
                            text-xs
                            leading-6
                            text-[#64748B]
                          "
                        >
                          {
                            area.description
                          }
                        </p>

                      </div>
                    )
                  )}
                </div>

                {/* =================================================
                    GOAL
                    ================================================= */}

                <div
                  className="
                    mt-10
                    border-t
                    border-[#1E293B]
                    pt-8
                  "
                >
                  <p
                    className="
                      max-w-[900px]
                      text-lg
                      font-medium
                      leading-8
                      text-[#CBD5E1]
                      sm:text-2xl
                    "
                  >
                    My goal is simple:{" "}
                    <span className="text-[#38BDF8]">
                      build technology that
                      works, feels intentional,
                      and creates real value.
                      I believe good technology
                      should do more than
                      function — it should solve
                      meaningful problems, make
                      people's lives easier, and
                      feel natural to use. Whether
                      I am building a web
                      application, working with
                      embedded systems, or
                      connecting software with
                      hardware, I want every
                      project to have a clear
                      purpose and make a real
                      difference.
                    </span>
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* =================================================
              SCROLL PROGRESS INDICATOR
              ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-7
              right-6
              hidden
              items-center
              gap-3
              sm:flex
            "
          >
            <span
              className="
                font-mono
                text-[9px]
                tracking-[0.2em]
                text-[#475569]
              "
            >
              ABOUT
            </span>

            <div
              className="
                h-px
                w-16
                overflow-hidden
                bg-[#1E293B]
              "
            >
              <div
                className="
                  h-full
                  bg-[#38BDF8]
                "
                style={{
                  width: `${
                    progress * 100
                  }%`,
                }}
              />
            </div>

            <span
              className="
                font-mono
                text-[9px]
                text-[#475569]
              "
            >
              {String(
                Math.round(
                  progress * 100
                )
              ).padStart(2, "0")}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}