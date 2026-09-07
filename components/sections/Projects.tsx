"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import Container from "../ui/Container";
import Card from "../ui/Card";

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

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

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
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
      className="relative overflow-hidden bg-[#0B1120] px-6 py-24 text-[#F8FAFC] sm:px-10 lg:px-16 lg:py-32 xl:px-20 scroll-mt-24"
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="absolute -right-32 top-20 h-[450px] w-[450px] rounded-full bg-[#38BDF8]/5 blur-[130px]" />

        <div className="absolute -left-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#38BDF8]/5 blur-[130px]" />
      </div>

      <Container>
        {/* ===================================================
            HEADER
            =================================================== */}

        <div className="relative mb-16 max-w-[850px] lg:mb-20">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#38BDF8] sm:text-xs">
            Selected Work
          </p>

          <h2 className="text-5xl font-black leading-[0.88] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
            Projects
            <span className="text-[#94A3B8]">.</span>
          </h2>

          <p className="mt-7 max-w-[650px] text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
            A selection of projects I&apos;ve built across web development,
            software, and embedded systems. Each one started with a problem to
            solve and an opportunity to build something useful.
          </p>
        </div>

        {/* ===================================================
            FEATURED PROJECT
            =================================================== */}

        {featuredProject && (
          <div
            data-project-index="0"
            className={`relative transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              visibleProjects.includes(0)
                ? "translate-y-0 opacity-100"
                : "translate-y-14 opacity-0"
            }`}
          >
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
          <div className="mt-16 lg:mt-24">
            <div className="mb-8 h-px w-full bg-[#1E293B]" />

            <div className="mb-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#38BDF8]">
                More Work
              </p>
            </div>

            <div className="space-y-5">
              {otherProjects.map(
                (project, index) => {
                  const projectIndex = index + 1;

                  return (
                    <div
                      key={project.title}
                      data-project-index={projectIndex}
                      className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        visibleProjects.includes(
                          projectIndex
                        )
                          ? "translate-y-0 opacity-100"
                          : "translate-y-12 opacity-0"
                      }`}
                      style={{
                        transitionDelay: `${index * 100}ms`,
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
       </Container>
    </section>
  );
}