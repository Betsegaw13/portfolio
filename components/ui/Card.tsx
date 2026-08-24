"use client";

import { useState } from "react";

type Project = {
  title: string;
  description: string;

  technologies?: string[];
  tech?: string[];

  image?: string;
  imageUrl?: string;

  github?: string;
  githubUrl?: string;

  live?: string;
  liveUrl?: string;

  demo?: string;

  featured?: boolean;
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
        rounded-[24px]
        border
        border-[#1E293B]
        bg-[#0F172A]
        transition-all
        duration-700
        hover:border-[#38BDF8]/30
        ${
          featured
            ? "lg:min-h-[620px]"
            : ""
        }
      `}
    >
      {/* ===================================================
          PROJECT IMAGE
          =================================================== */}

      {image && (
        <div
          className={`
            relative
            overflow-hidden
            bg-[#111827]
            ${
              featured
                ? "aspect-[16/9] lg:aspect-[2/1]"
                : "aspect-[16/9]"
            }
          `}
        >
          {/* Image loading background */}

          <div
            className={`
              absolute
              inset-0
              bg-[#111827]
              transition-opacity
              duration-700
              ${
                imageLoaded
                  ? "opacity-0"
                  : "opacity-100"
              }
            `}
          />

          <img
            src={image}
            alt={project.title}
            loading={
              featured
                ? "eager"
                : "lazy"
            }
            onLoad={() =>
              setImageLoaded(true)
            }
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-[1200ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.035]
            "
          />

          {/* Image overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#0B1120]
              via-transparent
              to-transparent
              opacity-80
            "
          />

          {/* Top controls */}

          <div
            className="
              absolute
              left-5
              right-5
              top-5
              flex
              items-center
              justify-between
              sm:left-7
              sm:right-7
              sm:top-7
            "
          >
            <span
              className="
                rounded-full
                border
                border-white/10
                bg-[#0B1120]/70
                px-3
                py-1.5
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#CBD5E1]
                backdrop-blur-md
              "
            >
              {featured
                ? "Featured"
                : "Project"}
            </span>

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-[#0B1120]/60
                text-[#38BDF8]
                backdrop-blur-md
                transition-all
                duration-500
                group-hover:border-[#38BDF8]/40
                group-hover:bg-[#38BDF8]
                group-hover:text-[#0B1120]
              "
            >
              ↗
            </span>
          </div>

          {/* Featured title */}

          {featured && (
            <div
              className="
                absolute
                bottom-7
                left-6
                right-6
                sm:bottom-10
                sm:left-10
                sm:right-10
              "
            >
              <p
                className="
                  mb-3
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#38BDF8]
                "
              >
                Featured Project
              </p>

              <h3
                className="
                  max-w-[850px]
                  text-3xl
                  font-bold
                  uppercase
                  leading-[0.95]
                  tracking-[-0.04em]
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {project.title}
              </h3>
            </div>
          )}
        </div>
      )}

      {/* ===================================================
          PROJECT CONTENT
          =================================================== */}

      <div
        className={`
          relative
          ${
            featured
              ? "p-6 sm:p-8 lg:p-10"
              : "p-6 sm:p-8"
          }
        `}
      >
        {/* Left accent */}

        <div
          className="
            absolute
            bottom-0
            left-0
            top-0
            w-px
            bg-gradient-to-b
            from-[#38BDF8]
            via-[#38BDF8]/30
            to-transparent
            opacity-50
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* =================================================
            NON-FEATURED TITLE
            ================================================= */}

        {!featured && (
          <div
            className="
              mb-7
              flex
              items-start
              justify-between
              gap-5
            "
          >
            <h3
              className="
                text-xl
                font-semibold
                tracking-[-0.02em]
                text-[#F8FAFC]
                transition-colors
                duration-300
                group-hover:text-[#38BDF8]
                sm:text-2xl
              "
            >
              {project.title}
            </h3>

            <span
              className="
                font-mono
                text-[9px]
                tracking-[0.2em]
                text-[#475569]
              "
            >
              ↗
            </span>
          </div>
        )}

        {/* =================================================
            DESCRIPTION
            ================================================= */}

        <p
          className={`
            text-sm
            leading-7
            text-[#94A3B8]
            sm:text-[15px]
            sm:leading-8
            ${
              featured
                ? "max-w-[780px]"
                : "max-w-[680px]"
            }
          `}
        >
          {project.description}
        </p>

        {/* =================================================
            BOTTOM INFORMATION
            ================================================= */}

        <div
          className="
            mt-8
            flex
            flex-col
            gap-6
            border-t
            border-[#1E293B]
            pt-6
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          {/* Technologies */}

          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map(
                (technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-[#1E293B]
                      px-3
                      py-1.5
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-[#64748B]
                      transition-colors
                      duration-300
                      group-hover:border-[#38BDF8]/20
                      group-hover:text-[#94A3B8]
                    "
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          )}

          {/* Project links */}

          <div
            className="
              flex
              shrink-0
              items-center
              gap-5
            "
          >
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
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
                  tracking-[0.2em]
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