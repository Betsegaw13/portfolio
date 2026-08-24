"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPrisma,
  SiPostgresql,
  SiGit,
  SiFigma,
  SiArduino,
  SiCplusplus,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Prisma", icon: SiPrisma },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: SiGit },
  { name: "Figma", icon: SiFigma },
  { name: "Arduino", icon: SiArduino },
  { name: "C++", icon: SiCplusplus },
];

function SkillCard({
  name,
  Icon,
}: {
  name: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <div
      className="
        group
        relative
        flex
        h-[120px]
        w-[155px]
        shrink-0
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-xl
        border
        border-[#1E293B]
        bg-[#0F172A]
        transition-all
        duration-300
        hover:border-[#38BDF8]/40
        hover:bg-[#111C31]
        sm:h-[130px]
        sm:w-[165px]
      "
    >
      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-px
          origin-left
          scale-x-0
          bg-[#38BDF8]
          transition-transform
          duration-500
          group-hover:scale-x-100
        "
      />

      <Icon
        size={36}
        className="
          text-[#94A3B8]
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:text-[#38BDF8]
        "
      />

      <span
        className="
          mt-4
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.12em]
          text-[#CBD5E1]
          transition-colors
          duration-300
          group-hover:text-[#F8FAFC]
        "
      >
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#0B1120]
        py-24
        text-[#F8FAFC]
        sm:py-28
        scroll-mt-24
      "
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#38BDF8]/[0.035]
          blur-[120px]
        "
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-10">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#38BDF8]" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#38BDF8]
              "
            >
              Technical Skills
            </span>
          </div>

          <h2
            className="
              mt-6
              text-[clamp(3rem,7vw,6rem)]
              font-black
              uppercase
              leading-[0.9]
              tracking-[-0.055em]
            "
          >
            <span className="text-[#F8FAFC]">Tools I</span>{" "}
            <span className="text-[#94A3B8]">Build With.</span>
          </h2>

          <div
            className="
              mt-8
              h-px
              w-full
              bg-gradient-to-r
              from-[#38BDF8]/30
              via-[#1E293B]
              to-transparent
            "
          />
        </div>

        {/* Moving skills */}
        <div className="relative mt-14 w-full overflow-hidden">
          {/* Left fade */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              top-0
              z-20
              w-20
              bg-gradient-to-r
              from-[#0B1120]
              to-transparent
            "
          />

          {/* Right fade */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              right-0
              top-0
              z-20
              w-20
              bg-gradient-to-l
              from-[#0B1120]
              to-transparent
            "
          />

          {/* Track */}
          <div className="skills-track flex w-max">
            {/* Set 1 */}
            <div className="flex gap-4 pr-4">
              {skills.map((skill) => (
                <SkillCard
                  key={`first-${skill.name}`}
                  name={skill.name}
                  Icon={skill.icon}
                />
              ))}
            </div>

            {/* Set 2 - duplicate for seamless loop */}
            <div className="flex gap-4 pr-4">
              {skills.map((skill) => (
                <SkillCard
                  key={`second-${skill.name}`}
                  name={skill.name}
                  Icon={skill.icon}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom information */}
        <div
          className="
            mx-auto
            mt-10
            flex
            max-w-[1180px]
            items-center
            justify-between
            px-6
            sm:px-8
            lg:px-10
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#38BDF8]
                shadow-[0_0_12px_rgba(56,189,248,0.6)]
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#64748B]
              "
            >
              Technologies
            </span>
          </div>

          <span
            className="
              font-mono
              text-[9px]
              tracking-[0.2em]
              text-[#475569]
            "
          >
            12 TOOLS
          </span>
        </div>
      </div>
    </section>
  );
}