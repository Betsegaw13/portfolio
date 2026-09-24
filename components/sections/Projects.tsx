"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import Container from "../ui/Container";
import Card from "../ui/Card";

function ProjectReveal({
  children,
  index,
  className = "",
}: {
  children: ReactNode;
  index: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setVisible(true);
        observer.unobserve(entry.target);
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0px)"
          : "translateY(50px)",
        transition:
          "opacity 750ms ease-out, transform 750ms cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: visible
          ? `${Math.min(index * 80, 400)}ms`
          : "0ms",
      }}
    >
      {children}
    </div>
  );
}

export default function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-[#0B1120]
        px-6
        py-24
        text-[#F8FAFC]
        sm:px-10
        lg:px-16
        lg:py-32
        xl:px-20
        scroll-mt-24
      "
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
          <ProjectReveal index={0}>
            <Card
              project={featuredProject}
              featured
            />
          </ProjectReveal>
        )}

        {/* ===================================================
            OTHER PROJECTS
            =================================================== */}

        {otherProjects.length > 0 && (
          <div className="mt-16 lg:mt-24">
            <div className="mb-8 h-px w-full bg-[#1E293B]" />

            <h3 className="mb-8 text-2xl font-semibold tracking-[-0.02em] text-[#F8FAFC] sm:text-3xl">
              Other Projects
            </h3>

            <div className="space-y-5">
              {otherProjects.map((project, index) => (
                <ProjectReveal
                  key={project.title}
                  index={index + 1}
                >
                  <Card project={project} />
                </ProjectReveal>
              ))}
            </div>
          </div>
        )}

        {/* ===================================================
            CLOSING STATEMENT
            =================================================== */}

        <div className="flex justify-center px-4 pb-4 pt-24 text-center sm:pt-32 lg:pt-40">
          <p className="max-w-[760px] text-2xl font-medium leading-[1.35] tracking-[-0.02em] text-[#94A3B8] sm:text-3xl lg:text-4xl">
            I enjoy taking an idea, figuring out how it should work,
            and turning it into a{" "}
            <span className="text-[#38BDF8]">
              working product.
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
}