import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen px-6 py-10 text-center"
    >
      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
        Hi, I'm <span className="text-blue-600">Betsegaw Merid</span>
      </h1>

      {/* Role */}
      <p className="max-w-2xl text-base md:text-xl text-gray-600 dark:text-gray-300 mb-6">
        Electrical & Computer Engineer {" "}
        <span className="font-semibold text-black dark:text-white">
          | Full-Stack Developer |
        </span>
          Embedded Systems Enthusiast
      </p>

      {/* Description */}
      <p className="max-w-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
       I design and build modern web applications and embedded solutions with a focus on clean code, performance, and user experience. I'm passionate about creating technology that solves real-world problems.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
  <Button
    href="#projects"
    variant="primary"
    className="w-full sm:w-auto"
  >
    View Projects
  </Button>

  <a
    href="/resume/Betsegaw_Merid_CV.pdf"
    download
    className="inline-block w-full sm:w-auto px-6 py-3 rounded-lg font-medium text-center border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
  >
    📄 Download CV
  </a>

  <Button
    href="#contact"
    variant="secondary"
    className="w-full sm:w-auto"
  >
    Contact Me
  </Button>
</div>
    </section>
  );
}