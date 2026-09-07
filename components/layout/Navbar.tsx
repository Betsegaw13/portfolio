"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);

  /* =========================================================
     SHOW / HIDE NAVBAR ON SCROLL
     ========================================================= */

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar at the very top
      if (currentScrollY < 30) {
        setVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Scrolling down → hide
      if (currentScrollY > lastScrollY + 5) {
        setVisible(false);
        setMobileOpen(false);
      }

      // Scrolling up → show
      else if (currentScrollY < lastScrollY - 5) {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     SMOOTH SCROLL
     ========================================================= */

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      const offset = 90;

      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: "smooth",
      });
    }

    setMobileOpen(false);
  };

  return (
    <>
      {/* =====================================================
          DESKTOP NAVBAR
          ===================================================== */}

      <header
        className={`
          fixed
          left-1/2
          top-0
          z-[100]
          hidden
          -translate-x-1/2
          md:block
          transition-all
          duration-500
          ease-out
          ${
            visible
              ? "translate-y-0 opacity-100"
              : "-translate-y-24 pointer-events-none opacity-0"
          }
        `}
      >
        {/* Outer glass shell */}
        <nav
          aria-label="Main navigation"
          className="
            flex
            w-fit
            items-center
            justify-center
            rounded-b-[30px]
            border-x
            border-b
            border-[#38BDF8]/10
            bg-[#0B1120]/55
            px-5
            py-4
            shadow-[0_12px_40px_rgba(0,0,0,0.18)]
            backdrop-blur-[24px]
          "
        >
          {/* Inner navigation pill */}
          <div
            className="
              flex
              items-center
              gap-1
              rounded-full
              border
              border-white/10
              bg-[#111827]/80
              px-2
              py-2
              shadow-[0_4px_20px_rgba(0,0,0,0.18)]
            "
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() =>
                  setHoveredItem(item.name)
                }
                onMouseLeave={() =>
                  setHoveredItem(null)
                }
                className="
                  group
                  relative
                  whitespace-nowrap
                  rounded-full
                  px-4
                  py-2
                  text-[13px]
                  font-medium
                  text-[#CBD5E1]
                  transition-colors
                  duration-200
                  hover:text-[#38BDF8]
                "
              >
                {/* =================================================
                    ROLLING / SLIDING HOVER EFFECT
                    ================================================= */}

                {hoveredItem === item.name && (
                  <motion.span
                    layoutId="navbar-hover-pill"
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-[#38BDF8]/10
                      ring-1
                      ring-inset
                      ring-[#38BDF8]/15
                    "
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 30,
                      mass: 0.6,
                    }}
                  />
                )}

                {/* Text */}
                <span className="relative z-10">
                  {item.name}
                </span>

                {/* Tiny underline */}
                <span
                  className="
                    absolute
                    bottom-[5px]
                    left-1/2
                    h-px
                    w-0
                    -translate-x-1/2
                    bg-[#38BDF8]
                    transition-all
                    duration-300
                    group-hover:w-4
                  "
                />
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* =====================================================
          MOBILE NAVBAR
          ===================================================== */}

      <header
        className={`
          fixed
          inset-x-4
          top-4
          z-[100]
          md:hidden
          transition-all
          duration-500
          ease-out
          ${
            visible
              ? "translate-y-0 opacity-100"
              : "-translate-y-24 pointer-events-none opacity-0"
          }
        `}
      >
        <nav
          aria-label="Mobile navigation"
          className="
            overflow-hidden
            rounded-2xl
            border
            border-[#38BDF8]/15
            bg-[#0B1120]/75
            shadow-[0_18px_60px_rgba(0,0,0,0.30)]
            backdrop-blur-[24px]
          "
        >
          {/* ===================================================
              MOBILE TOP BAR
              =================================================== */}

          <div className="flex h-[58px] items-center justify-end px-4">
            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              onClick={() =>
                setMobileOpen((value) => !value)
              }
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-white
                transition-all
                duration-300
                hover:border-[#38BDF8]/40
                hover:bg-[#38BDF8]/10
                hover:text-[#38BDF8]
              "
            >
              <span
                className={`
                  text-xl
                  leading-none
                  transition-transform
                  duration-300
                  ${
                    mobileOpen
                      ? "rotate-90"
                      : "rotate-0"
                  }
                `}
              >
                {mobileOpen ? "×" : "☰"}
              </span>
            </button>
          </div>

          {/* ===================================================
              MOBILE MENU
              =================================================== */}

          <div
            className={`
              overflow-hidden
              transition-all
              duration-500
              ease-out
              ${
                mobileOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div
              className="
                border-t
                border-white/10
                px-5
                py-3
              "
            >
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() =>
                    scrollToSection(item.id)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    border-b
                    border-white/5
                    py-4
                    text-left
                    text-sm
                    font-medium
                    text-[#CBD5E1]
                    transition-all
                    duration-300
                    hover:pl-2
                    hover:text-[#38BDF8]
                  "
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[10px] tracking-wider text-[#38BDF8]/40">
                      0{index + 1}
                    </span>

                    <span>{item.name}</span>
                  </span>

                  <span className="text-[#38BDF8]/40">
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}