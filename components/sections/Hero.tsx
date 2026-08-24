"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0B1120] text-[#F8FAFC]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="absolute right-[10%] top-[20%] h-[450px] w-[450px] rounded-full bg-[#38BDF8]/5 blur-[120px]" />
      </div>

      {/* Main */}
      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1600px] items-center gap-10 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:px-16 xl:px-20">

        {/* LEFT */}
        <div className="relative z-20">

          <div className="mb-8 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#38BDF8]">
            <span className="h-px w-10 bg-[#38BDF8]" />
            Electrical & Computer Engineer
          </div>

          <h1 className="max-w-[720px] text-[clamp(4rem,7vw,7.5rem)] font-black leading-[0.87] tracking-[-0.06em]">
            <span className="block text-[#F8FAFC]">
              Where
            </span>

            <span className="block text-[#38BDF8]">
              Software
            </span>

            <span className="block text-[#F8FAFC]">
              meets
            </span>

            <span className="block text-[#F8FAFC]">
              the physical
            </span>

            <span className="block text-[#F8FAFC]">
              world.
            </span>
          </h1>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-[#F8FAFC] sm:text-2xl">
              Betsegaw Merid
            </h2>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#94A3B8]">
              Full-Stack Developer
              <span className="mx-2 text-[#38BDF8]">·</span>
              Embedded Systems
              <span className="mx-2 text-[#38BDF8]">·</span>
              Robotics
            </p>
          </div>

          <p className="mt-7 max-w-[620px] text-sm leading-7 text-[#94A3B8] sm:text-base">
            I design and build modern software, embedded systems, and
            intelligent technology that turn real-world problems into
            practical solutions.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            <span className="rounded-full border border-[#38BDF8]/20 bg-[#111827] px-3 py-2 text-[10px] text-[#94A3B8]">
              &lt;/&gt; Software
            </span>

            <span className="rounded-full border border-[#38BDF8]/20 bg-[#111827] px-3 py-2 text-[10px] text-[#94A3B8]">
              ◈ Embedded
            </span>

            <span className="rounded-full border border-[#38BDF8]/20 bg-[#111827] px-3 py-2 text-[10px] text-[#94A3B8]">
              ⚙ Robotics
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-[#38BDF8] px-6 py-3.5 text-sm font-semibold text-[#0B1120] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0EA5E9]"
            >
              Explore My Work →
            </a>

            <a
              href="/resume/Betsegaw_Merid_CV.pdf"
              download
              className="rounded-lg border border-[#94A3B8]/25 bg-[#111827] px-6 py-3.5 text-sm font-semibold text-[#F8FAFC] transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/50 hover:text-[#38BDF8]"
            >
              ↓ Download CV
            </a>
          </div>
        </div>

        {/* RIGHT / IMAGE */}
        <div className="relative flex min-h-[620px] items-center justify-center">

          {/* Orbit */}
          <div className="absolute h-[520px] w-[520px] rounded-full border border-[#38BDF8]/10 sm:h-[600px] sm:w-[600px]" />

          <div className="absolute h-[430px] w-[430px] rounded-full border border-[#38BDF8]/10 sm:h-[500px] sm:w-[500px]" />

          {/* Glow */}
          <div className="absolute h-[400px] w-[320px] rounded-full bg-[#38BDF8]/10 blur-[100px]" />

          {/* =================================================
              IMAGE ENTRANCE
          ================================================= */}

          <div
            className="
              relative
              z-10
              animate-[heroEnter_1.5s_cubic-bezier(0.22,1,0.36,1)_both]
            "
          >
            <div
              className="
                relative
                animate-[heroFloat_5s_ease-in-out_1.5s_infinite]
              "
            >
              <div
                className="
                  relative
                  h-[520px]
                  w-[320px]
                  overflow-hidden
                  rounded-[70px]
                  border
                  border-[#38BDF8]/40
                  bg-[#111827]
                  shadow-[0_0_80px_rgba(56,189,248,0.12)]
                  sm:h-[600px]
                  sm:w-[370px]
                  lg:h-[650px]
                  lg:w-[410px]
                "
              >
                <img
                  src="/images/hero.png"
                  alt="Betsegaw Merid"
                  className="h-full w-full object-cover object-top"
                />

                <div className="pointer-events-none absolute inset-0 rounded-[70px] shadow-[inset_0_0_70px_rgba(56,189,248,0.12)]" />
              </div>
            </div>
          </div>

          {/* SOFTWARE */}
          <div
            className="
              absolute
              right-[2%]
              top-[8%]
              z-20
              hidden
              w-[175px]
              animate-[cardEnter_900ms_ease-out_600ms_both]
              rounded-2xl
              border
              border-[#38BDF8]/25
              bg-[#111827]/90
              p-3
              backdrop-blur-xl
              sm:block
            "
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
                &lt;/&gt;
              </div>

              <div>
                <p className="text-xs font-bold text-[#F8FAFC]">
                  SOFTWARE
                </p>

                <p className="mt-1 text-[9px] text-[#94A3B8]">
                  Web · AI · Cloud
                </p>
              </div>
            </div>
          </div>

          {/* EMBEDDED */}
          <div
            className="
              absolute
              right-[-2%]
              top-[42%]
              z-20
              hidden
              w-[175px]
              animate-[cardEnter_900ms_ease-out_800ms_both]
              rounded-2xl
              border
              border-[#38BDF8]/25
              bg-[#111827]/90
              p-3
              backdrop-blur-xl
              sm:block
            "
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
                ◈
              </div>

              <div>
                <p className="text-xs font-bold text-[#F8FAFC]">
                  EMBEDDED
                </p>

                <p className="mt-1 text-[9px] text-[#94A3B8]">
                  MCU · IoT · Hardware
                </p>
              </div>
            </div>
          </div>

          {/* ROBOTICS */}
          <div
            className="
              absolute
              bottom-[5%]
              right-[12%]
              z-20
              hidden
              w-[175px]
              animate-[cardEnter_900ms_ease-out_1000ms_both]
              rounded-2xl
              border
              border-[#38BDF8]/25
              bg-[#111827]/90
              p-3
              backdrop-blur-xl
              sm:block
            "
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
                ⚙
              </div>

              <div>
                <p className="text-xs font-bold text-[#F8FAFC]">
                  ROBOTICS
                </p>

                <p className="mt-1 text-[9px] text-[#94A3B8]">
                  Automation · Control
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================
          ANIMATION KEYFRAMES
      ========================================================= */}

      <style>{`
        @keyframes heroEnter {
          0% {
            opacity: 0;
            transform:
              translate3d(90px, 70px, 0)
              scale(0.88)
              rotate(2deg);
            filter: blur(10px);
          }

          40% {
            opacity: 1;
            transform:
              translate3d(20px, -12px, 0)
              scale(1.02)
              rotate(-0.7deg);
            filter: blur(2px);
          }

          65% {
            transform:
              translate3d(-7px, 6px, 0)
              scale(1.01)
              rotate(0.25deg);
            filter: blur(0);
          }

          82% {
            transform:
              translate3d(3px, -3px, 0)
              scale(0.998)
              rotate(-0.1deg);
          }

          100% {
            opacity: 1;
            transform:
              translate3d(0, 0, 0)
              scale(1)
              rotate(0);
            filter: blur(0);
          }
        }

        @keyframes heroFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes cardEnter {
          0% {
            opacity: 0;
            transform:
              translate3d(35px, 25px, 0)
              scale(0.9);
          }

          70% {
            opacity: 1;
            transform:
              translate3d(-4px, -4px, 0)
              scale(1.02);
          }

          100% {
            opacity: 1;
            transform:
              translate3d(0, 0, 0)
              scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}