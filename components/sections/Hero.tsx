import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-10"
    >
      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I’m <span className="text-blue-600">Betsegaw</span>
      </h1>

      {/* Role */}
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-6">
        Electrical & Computer Engineering student focused on{" "}
        <span className="font-semibold text-black dark:text-white">
          Full-Stack Development
        </span>
        , Embedded Systems, and UI Design.
      </p>

      {/* Description */}
      <p className="text-gray-500 dark:text-gray-400 max-w-xl mb-8">
        I build modern web applications and hardware-based systems that solve
        real-world problems. Currently growing as a software engineer and
        working on practical projects.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <Button href="#projects" variant="primary">
          View Projects
        </Button>

        <Button href="#contact" variant="secondary">
          Contact Me
        </Button>
      </div>
    </section>
  );
}