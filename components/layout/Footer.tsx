"use client";

import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-[#1E293B]
        bg-[#0B1120]
        py-12
        text-[#F8FAFC]
        sm:py-14
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(56,189,248,0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(56,189,248,0.5) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <Container>
        <div
          className="
            relative
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* =================================================
              LEFT — BRAND
              ================================================= */}

          <div className="text-center lg:text-left">
            <a
              href="#home"
              className="
                inline-block
                text-lg
                font-bold
                tracking-[0.16em]
                text-[#F8FAFC]
                transition-colors
                duration-300
                hover:text-[#38BDF8]
              "
            >
              BETSEGAW MERID
            </a>

            <p
              className="
                mt-2
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#64748B]
              "
            >
              Electrical & Computer Engineer
            </p>

            <div className="mt-4 flex items-center justify-center gap-2 lg:justify-start">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#38BDF8]
                  shadow-[0_0_10px_rgba(56,189,248,0.7)]
                "
              />

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.24em]
                  text-[#475569]
                "
              >
                Available for opportunities
              </span>
            </div>
          </div>

          {/* =================================================
              CENTER — NAVIGATION
              ================================================= */}

          <nav
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-6
              gap-y-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#64748B]
            "
          >
            <a
              href="#home"
              className="
                transition-colors
                duration-300
                hover:text-[#38BDF8]
              "
            >
              Home
            </a>

            <a
              href="#about"
              className="
                transition-colors
                duration-300
                hover:text-[#38BDF8]
              "
            >
              About
            </a>

            <a
              href="#skills"
              className="
                transition-colors
                duration-300
                hover:text-[#38BDF8]
              "
            >
              Skills
            </a>

            <a
              href="#projects"
              className="
                transition-colors
                duration-300
                hover:text-[#38BDF8]
              "
            >
              Projects
            </a>

            <a
              href="#contact"
              className="
                transition-colors
                duration-300
                hover:text-[#38BDF8]
              "
            >
              Contact
            </a>
          </nav>

          {/* =================================================
              RIGHT — SOCIALS
              ================================================= */}

          <div className="flex items-center justify-center gap-3">
            <a
              href="https://github.com/Betsegaw13"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                flex
                h-9
                items-center
                rounded-full
                border
                border-[#1E293B]
                bg-[#0F172A]
                px-4
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#94A3B8]
                transition-all
                duration-300
                hover:border-[#38BDF8]/30
                hover:bg-[#111827]
                hover:text-[#38BDF8]
              "
            >
              GitHub
            </a>

            <a
              href="https://et.linkedin.com/in/betsegaw-merid-92aa57306"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                flex
                h-9
                items-center
                rounded-full
                border
                border-[#1E293B]
                bg-[#0F172A]
                px-4
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#94A3B8]
                transition-all
                duration-300
                hover:border-[#38BDF8]/30
                hover:bg-[#111827]
                hover:text-[#38BDF8]
              "
            >
              LinkedIn
            </a>

            <a
              href="mailto:betsegaw.merid@aastustudent.edu.et"
              aria-label="Email"
              className="
                flex
                h-9
                items-center
                rounded-full
                border
                border-[#1E293B]
                bg-[#0F172A]
                px-4
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#94A3B8]
                transition-all
                duration-300
                hover:border-[#38BDF8]/30
                hover:bg-[#111827]
                hover:text-[#38BDF8]
              "
            >
              Email
            </a>
          </div>
        </div>

        {/* ===================================================
            BOTTOM
            =================================================== */}

        <div
          className="
            relative
            mt-10
            border-t
            border-[#1E293B]
            pt-6
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-4
              text-center
              sm:flex-row
              sm:text-left
            "
          >
            <p
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#475569]
              "
            >
              © {new Date().getFullYear()} Betsegaw Merid.
              All rights reserved.
            </p>

            <p
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#334155]
              "
            >
              Built with React · Next.js · Tailwind CSS
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}