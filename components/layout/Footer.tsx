import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-10 bg-white dark:bg-gray-900">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left - Name */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold dark:text-white">
              BETSEGAW MERID
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Electrical & Computer Engineering Student
            </p>
          </div>

          {/* Middle - Links */}
          <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-300">
            <a href="#home" className="hover:text-blue-600 transition">Home</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>

          {/* Right - Social */}
          <div className="flex gap-4 text-sm">
            <a
              href="https://github.com/Betsegaw13"
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              GitHub
            </a>

            <a
              href="https://et.linkedin.com/in/betsegaw-merid-92aa57306"
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:betsegaw.merid@aastustudent.edu.et"
              className="hover:text-blue-600 transition"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="text-center text-xs text-gray-500 mt-8">
          © {new Date().getFullYear()} ANIYA. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}