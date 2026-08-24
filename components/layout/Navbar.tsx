"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const clamp = (
  value: number,
  min: number = 0,
  max: number = 1
) => Math.min(Math.max(value, min), max);

const ease = (value: number) => {
  const x = clamp(value);
  return x * x * (3 - 2 * x);
};

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /*
   * ------------------------------------------------------------
   * ENTRY ANIMATION
   * ------------------------------------------------------------
   */

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setMounted(true);
    }, 150);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  /*
   * ------------------------------------------------------------
   * SCROLL PROGRESS
   * ------------------------------------------------------------
   *
   * 0 = fully open
   * 1 = completely gone
   *
   * The calculation is based on the actual Hero and Contact
   * positions rather than arbitrary page percentages.
   */

  useEffect(() => {
    let frame: number | null = null;

    const calculate = () => {
      const hero = document.getElementById("home");
      const contact = document.getElementById("contact");

      if (!hero) {
        setScrollProgress(0);
        frame = null;
        return;
      }

      const viewport = window.innerHeight;
      const scrollY = window.scrollY;

      const heroBottom =
        hero.offsetTop + hero.offsetHeight;

      /*
       * Begin closing once the visitor is clearly
       * leaving the Hero.
       */
      const start =
        heroBottom - viewport * 0.3;

      /*
       * Finish around the Contact section.
       */
      const end = contact
        ? contact.offsetTop +
          contact.offsetHeight * 0.35
        : start + viewport * 5;

      const raw =
        (scrollY - start) /
        Math.max(end - start, 1);

      setScrollProgress(clamp(raw));

      frame = null;
    };

    const onScroll = () => {
      if (frame !== null) return;

      frame = window.requestAnimationFrame(
        calculate
      );
    };

    calculate();

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      onScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );

      window.removeEventListener(
        "resize",
        onScroll
      );

      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  /*
   * Smooth the scroll value.
   */
  const p = ease(scrollProgress);

  /*
   * ------------------------------------------------------------
   * DESKTOP DIMENSIONS
   * ------------------------------------------------------------
   */

  const openWidth = 1740;
  const closedWidth = 92;

  const navbarWidth =
    openWidth -
    (openWidth - closedWidth) * p;

  const navbarHeight =
    78 - 28 * p;

  const top =
    16 - 7 * p;

  const right =
    18 + 8 * p;

  const radius =
    20 + 22 * p;

  /*
   * The navbar first physically closes,
   * then disappears.
   */
  const visibilityFade =
    p < 0.76
      ? 1
      : 1 - (p - 0.76) / 0.24;

  const opacity = mounted
    ? clamp(visibilityFade)
    : 0;

  /*
   * Content disappears before the shell.
   */
  const contentOpacity =
    p < 0.48
      ? 1
      : clamp(1 - (p - 0.48) / 0.36);

  /*
   * Subtle movement toward the right.
   */
  const translateY =
    -5 * p;

  /*
   * ------------------------------------------------------------
   * MOBILE
   * ------------------------------------------------------------
   */

  const mobileOpacity = mounted
    ? 1
    : 0;

  return (
    <>
      {/* ======================================================
          DESKTOP / TABLET NAVBAR
      ======================================================= */}

      <header
        className="
          fixed
          left-0
          top-0
          z-[100]
          hidden
          w-full
          justify-end
          pointer-events-none
          lg:flex
        "
      >
        <nav
          aria-label="Main navigation"
          className="
            pointer-events-auto
            relative
            overflow-hidden
            border
            bg-[#0B1120]/90
            backdrop-blur-xl
            shadow-[0_18px_70px_rgba(0,0,0,0.28)]
            will-change-[width,transform,opacity]
          "
          style={{
            width: `min(
              calc(100vw - ${right * 2}px),
              ${navbarWidth}px
            )`,
            height: `${navbarHeight}px`,
            marginTop: `${top}px`,
            marginRight: `${right}px`,
            paddingLeft: `${32 - 15 * p}px`,
            paddingRight: `${32 - 15 * p}px`,
            borderRadius: `${radius}px`,
            borderColor: `rgba(56,189,248,${
              0.12 * (1 - p) + 0.07
            })`,
            backgroundColor: `rgba(11,17,32,${
              0.82 + p * 0.12
            })`,
            opacity,
            transform: `translate3d(0,${translateY}px,0)`,
            transition:
              "width 700ms cubic-bezier(0.16,1,0.3,1)," +
              "height 700ms cubic-bezier(0.16,1,0.3,1)," +
              "margin-top 700ms cubic-bezier(0.16,1,0.3,1)," +
              "margin-right 700ms cubic-bezier(0.16,1,0.3,1)," +
              "padding 700ms cubic-bezier(0.16,1,0.3,1)," +
              "border-radius 700ms cubic-bezier(0.16,1,0.3,1)," +
              "opacity 300ms ease",
          }}
        >
          <div
            className="
              flex
              h-full
              w-full
              items-center
            "
            style={{
              opacity: contentOpacity,
            }}
          >
            {/* ==================================================
                BRAND
            ================================================== */}

            <a
              href="#home"
              className="
                group
                flex
                shrink-0
                items-center
                gap-3
              "
            >
              <span
                className="
                  flex
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-[#38BDF8]
                  bg-[#111827]
                  font-bold
                  text-[#F8FAFC]
                  shadow-[0_0_25px_rgba(56,189,248,0.10)]
                "
                style={{
                  width: `${46 - 8 * p}px`,
                  height: `${46 - 8 * p}px`,
                  fontSize: `${14 - 2 * p}px`,
                }}
              >
                BM
              </span>

              <div
                className="
                  overflow-hidden
                  whitespace-nowrap
                "
                style={{
                  width: `${210 * (1 - p)}px`,
                  opacity: clamp(1 - p * 1.4),
                }}
              >
                <p
                  className="
                    text-sm
                    font-bold
                    tracking-[0.28em]
                    text-[#F8FAFC]
                  "
                >
                  BETSEGAW
                </p>

                <p
                  className="
                    mt-0.5
                    text-[9px]
                    tracking-[0.13em]
                    text-[#94A3B8]
                  "
                >
                  Electrical & Computer Engineer
                </p>
              </div>
            </a>

            {/* ==================================================
                NAVIGATION
            ================================================== */}

            <div
              className="
                absolute
                left-1/2
                hidden
                -translate-x-1/2
                items-center
                lg:flex
              "
              style={{
                gap: `${2 + 2 * (1 - p)}px`,
                opacity: clamp(1 - p * 1.35),
                transform:
                  `translateX(-50%) translateX(${p * 22}px)`,
              }}
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="
                    whitespace-nowrap
                    rounded-full
                    font-medium
                    text-[#94A3B8]
                    transition-all
                    duration-200
                    hover:bg-[#38BDF8]/10
                    hover:text-[#38BDF8]
                  "
                  style={{
                    padding: `${8 - 2 * p}px ${
                      13 - 4 * p
                    }px`,
                    fontSize: `${13 - 1 * p}px`,
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* ==================================================
                RIGHT SIDE
            ================================================== */}

            <div
              className="
                ml-auto
                flex
                shrink-0
                items-center
              "
            >
              <a
                href="/resume/Betsegaw_Merid_CV.pdf"
                download
                className="
                  rounded-full
                  bg-[#38BDF8]
                  font-semibold
                  text-[#0B1120]
                  transition-all
                  duration-200
                  hover:bg-[#0EA5E9]
                  hover:shadow-[0_0_25px_rgba(56,189,248,0.18)]
                "
                style={{
                  padding: `${11 - 2 * p}px ${
                    22 - 6 * p
                  }px`,
                  fontSize: `${13 - 1 * p}px`,
                }}
              >
                ↓ <span>Download CV</span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* ======================================================
          MOBILE NAVBAR
      ======================================================= */}

      <header
        className="
          fixed
          left-4
          right-4
          top-4
          z-[100]
          lg:hidden
        "
        style={{
          opacity: mobileOpacity,
        }}
      >
        <nav
          className="
            relative
            rounded-2xl
            border
            border-[#38BDF8]/10
            bg-[#0B1120]/90
            shadow-[0_18px_60px_rgba(0,0,0,0.30)]
            backdrop-blur-xl
          "
        >
          <div
            className="
              flex
              h-[64px]
              items-center
              justify-between
              px-4
            "
          >
            <a
              href="#home"
              onClick={() =>
                setMenuOpen(false)
              }
              className="
                flex
                items-center
                gap-2.5
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-[#38BDF8]
                  bg-[#111827]
                  text-xs
                  font-bold
                  text-[#F8FAFC]
                "
              >
                BM
              </span>

              <div>
                <p
                  className="
                    text-xs
                    font-bold
                    tracking-[0.2em]
                    text-[#F8FAFC]
                  "
                >
                  BETSEGAW
                </p>

                <p
                  className="
                    text-[8px]
                    tracking-[0.08em]
                    text-[#94A3B8]
                  "
                >
                  ENGINEER
                </p>
              </div>
            </a>

            <button
              type="button"
              aria-label={
                menuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={menuOpen}
              onClick={() =>
                setMenuOpen((value) => !value)
              }
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#38BDF8]/20
                bg-[#111827]
                text-xl
                text-[#F8FAFC]
                transition-colors
                hover:border-[#38BDF8]
                hover:text-[#38BDF8]
              "
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>

          {/* MOBILE MENU */}

          <div
            className={`
              overflow-hidden
              transition-all
              duration-500
              ${
                menuOpen
                  ? "max-h-[600px] opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div className="border-t border-[#1E293B] px-5 py-3">
              {navItems.map(
                (item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-white/5
                      py-4
                      text-sm
                      font-medium
                      text-[#94A3B8]
                      transition-colors
                      hover:text-[#38BDF8]
                    "
                  >
                    <span>
                      {item.name}
                    </span>

                    <span
                      className="
                        font-mono
                        text-[9px]
                        text-[#38BDF8]/40
                      "
                    >
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>
                  </a>
                )
              )}

              <a
                href="/resume/Betsegaw_Merid_CV.pdf"
                download
                onClick={() =>
                  setMenuOpen(false)
                }
                className="
                  mt-4
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#38BDF8]
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  text-[#0B1120]
                  hover:bg-[#0EA5E9]
                "
              >
                ↓ &nbsp; Download CV
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}