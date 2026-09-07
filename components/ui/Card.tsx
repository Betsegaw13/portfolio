"use client";

import { useState } from "react";

type Project = {
  title: string;
  description: string;

  technologies?: string[];
  tech?: string[];

  tags?: string[];

  image?: string;
  imageUrl?: string;

  github?: string;
  githubUrl?: string;

  live?: string;
  liveUrl?: string;

  demo?: string;

  featured?: boolean;

  status?: "Completed" | "In Progress";
  year?: string;
};

type CardProps = {
  project: Project;
  featured?: boolean;
};

export default function Card({
  project,
  featured = false,
}: CardProps) {
  const [imageLoaded, setImageLoaded] =
    useState(false);

  const technologies =
    project.technologies ??
    project.tech ??
    project.tags ??
    [];

  const image =
    project.image ??
    project.imageUrl;

  const github =
    project.github ??
    project.githubUrl;

  const live =
    project.live ??
    project.liveUrl ??
    project.demo;

  return (
    <article
      className={`
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-[#1E293B]
        bg-[#0F172A]/80
        backdrop-blur-xl
        shadow-[0_25px_70px_rgba(0,0,0,0.18)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#38BDF8]/35
        hover:shadow-[0_35px_90px_rgba(0,0,0,0.25)]
      `}
    >
      {/* ===================================================
          IMAGE
          =================================================== */}

      {image && (
        <div
          className={`
            relative
            overflow-hidden
            bg-[#111827]
            ${
              featured
                ? "aspect-[16/9] sm:aspect-[2/1]"
                : "aspect-[16/9]"
            }
          `}
        >
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-[#111827]" />
          )}

          <img
            src={image}
            alt={project.title}
            loading={featured ? "eager" : "lazy"}
            onLoad={() => setImageLoaded(true)}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-[1200ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.04]
            "
          />

          {/* Image gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-80" />

          {/* Hover glow */}
          <div className="pointer-events-none absolute inset-0 bg-[#38BDF8]/0 transition-all duration-700 group-hover:bg-[#38BDF8]/[0.035]" />

          {/* Project status */}
          <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0B1120]/70 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#CBD5E1] backdrop-blur-md">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  project.status === "In Progress"
                    ? "bg-amber-400"
                    : "bg-[#38BDF8]"
                }`}
              />

              {project.status ?? "Project"}
            </span>
          </div>

          {/* Open icon */}
          {(github || live) && (
            <a
              href={live ?? github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="
                absolute
                right-5
                top-5
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-[#0B1120]/70
                text-[#38BDF8]
                backdrop-blur-md
                transition-all
                duration-400
                hover:scale-110
                hover:border-[#38BDF8]/40
                hover:bg-[#38BDF8]
                hover:text-[#0B1120]
                sm:right-7
                sm:top-7
              "
            >
              ↗
            </a>
          )}

          {/* Featured title */}
          {featured && (
            <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
              <h3 className="max-w-[900px] text-3xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                {project.title}
              </h3>

              {project.year && (
                <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.22em] text-[#94A3B8]">
                  {project.year}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* ===================================================
          CONTENT
          =================================================== */}

      <div
        className={`relative ${
          featured
            ? "p-6 sm:p-8 lg:p-10"
            : "p-6 sm:p-8"
        }`}
      >
        {/* Cyan side accent */}
        <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-[#38BDF8] via-[#38BDF8]/30 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Non-featured title */}
        {!featured && (
          <div className="mb-6 flex items-start justify-between gap-5">
            <div>
              <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#F8FAFC] transition-colors duration-300 group-hover:text-[#38BDF8] sm:text-2xl">
                {project.title}
              </h3>

              {project.year && (
                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#475569]">
                  {project.year}
                </p>
              )}
            </div>

            {project.status && (
              <span className="shrink-0 text-[8px] uppercase tracking-[0.18em] text-[#64748B]">
                {project.status}
              </span>
            )}
          </div>
        )}

        {/* Description */}
        <p
          className={`text-sm leading-7 text-[#94A3B8] sm:text-[15px] sm:leading-8 ${
            featured
              ? "max-w-[800px]"
              : "max-w-[720px]"
          }`}
        >
          {project.description}
        </p>

        {/* =================================================
            BOTTOM
            ================================================= */}

        <div className="mt-8 flex flex-col gap-6 border-t border-[#1E293B] pt-6 sm:flex-row sm:items-end sm:justify-between">
          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-[#1E293B]
                    bg-[#0B1120]/40
                    px-3
                    py-1.5
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.1em]
                    text-[#64748B]
                    transition-all
                    duration-300
                    group-hover:border-[#38BDF8]/20
                    group-hover:text-[#94A3B8]
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex shrink-0 items-center gap-5">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#64748B]
                  transition-colors
                  duration-300
                  hover:text-[#F8FAFC]
                "
              >
                GitHub
              </a>
            )}

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#38BDF8]
                  transition-all
                  duration-300
                  hover:gap-3
                "
              >
                View Project
                <span>→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}