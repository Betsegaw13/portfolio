"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [visibleProjects, setVisibleProjects] =
    useState<number[]>([]);

  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements =
      section.querySelectorAll<HTMLElement>(
        "[data-project-index]"
      );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(
            entry.target.getAttribute(
              "data-project-index"
            )
          );

          setVisibleProjects((current) =>
            current.includes(index)
              ? current
              : [...current, index]
          );
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#0B1120]
        px-6
        py-28
        text-[#F8FAFC]
        md:px-10
        lg:py-36
        scroll-mt-24
      "
    >
      {/* =====================================================
          BACKGROUND GRID
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* =====================================================
          AMBIENT LIGHT
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-40
          h-[500px]
          w-[500px]
          rounded-full
          blur-3xl
        "
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.055), transparent 70%)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-20
          h-[450px]
          w-[450px]
          rounded-full
          blur-3xl
        "
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.035), transparent 70%)",
        }}
      />

      <Container>
        {/* ===================================================
            SECTION HEADER
            =================================================== */}

        <div
          className="
            relative
            mb-20
            flex
            flex-col
            justify-between
            gap-8
            lg:mb-28
            lg:flex-row
            lg:items-end
          "
        >
          <div>
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
              Selected Work
            </p>

            <h2
              className="
                max-w-[850px]
                text-5xl
                font-bold
                uppercase
                leading-[0.9]
                tracking-[-0.055em]
                sm:text-6xl
                lg:text-8xl
              "
            >
              Selected
              <br />

              <span className="text-[#94A3B8]">
                Projects.
              </span>
            </h2>
          </div>

          <div className="max-w-[430px] lg:pb-2">
            <p
              className="
                text-sm
                leading-7
                text-[#64748B]
                sm:text-base
                sm:leading-8
              "
            >
              A selection of projects I&apos;ve
              built across web development,
              software, and embedded systems.
              Each project started with a problem
              to solve and gave me an opportunity
              to learn, experiment, and build
              something useful.
            </p>
          </div>
        </div>

        {/* ===================================================
            FEATURED PROJECT
            =================================================== */}

        {featuredProject && (
          <div
            data-project-index="0"
            className={`
              relative
              transition-all
              duration-1000
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                visibleProjects.includes(0)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }
            `}
          >
            <div
              className="
                mb-5
                flex
                items-center
                justify-between
                border-b
                border-[#1E293B]
                pb-4
              "
            >
              <div className="flex items-center gap-4">
                <span
                  className="
                    font-mono
                    text-[10px]
                    tracking-[0.2em]
                    text-[#38BDF8]
                  "
                >
                  01
                </span>

                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#64748B]
                  "
                >
                  Featured Project
                </span>
              </div>

              <span
                className="
                  hidden
                  text-[9px]
                  font-mono
                  tracking-[0.2em]
                  text-[#475569]
                  sm:block
                "
              >
                SELECTED WORK
              </span>
            </div>

            <Card
              project={featuredProject}
              featured
            />
          </div>
        )}

        {/* ===================================================
            OTHER PROJECTS
            =================================================== */}

        {otherProjects.length > 0 && (
          <div className="mt-28 lg:mt-40">
            <div
              className="
                mb-12
                flex
                items-end
                justify-between
                border-b
                border-[#1E293B]
                pb-5
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.35em]
                    text-[#38BDF8]
                  "
                >
                  More Work
                </p>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-semibold
                    tracking-[-0.03em]
                    text-[#F8FAFC]
                    sm:text-3xl
                  "
                >
                  Other projects
                </h3>
              </div>

              <span
                className="
                  font-mono
                  text-[9px]
                  tracking-[0.2em]
                  text-[#475569]
                "
              >
                {String(
                  otherProjects.length
                ).padStart(2, "0")}{" "}
                PROJECTS
              </span>
            </div>

            <div className="space-y-6">
              {otherProjects.map(
                (project, index) => {
                  const projectIndex =
                    index + 1;

                  return (
                    <div
                      key={project.title}
                      data-project-index={
                        projectIndex
                      }
                      className={`
                        transition-all
                        duration-1000
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${
                          visibleProjects.includes(
                            projectIndex
                          )
                            ? "translate-y-0 opacity-100"
                            : "translate-y-16 opacity-0"
                        }
                      `}
                      style={{
                        transitionDelay: `${Math.min(
                          index * 100,
                          400
                        )}ms`,
                      }}
                    >
                      <Card project={project} />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        )}

        {/* ===================================================
            END STATEMENT
            =================================================== */}

        <div className="mt-32 lg:mt-44">
  <div
    className="
      border-t
      border-[#1E293B]
      pt-10
      text-center
      sm:pt-12
    "
  >
    <span
      className="
        mb-6
        inline-block
        font-mono
        text-[9px]
        tracking-[0.25em]
        text-[#475569]
      "
    >
      04 / BUILDING
    </span>

    <p
      className="
        mx-auto
        max-w-[800px]
        text-xl
        font-medium
        leading-8
        tracking-[-0.02em]
        text-[#CBD5E1]
        sm:text-2xl
        lg:text-3xl
        lg:leading-10
      "
    >
      I enjoy taking an idea,
      figuring out how it should work,
      and turning it into a{" "}
      <span className="text-[#38BDF8]">
        working product.
      </span>
    </p>
  </div>
</div>
      </Container>
    </section>
  );
}