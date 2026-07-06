import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";

export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "Git",
    "Figma",
    "Arduino",
    "C++",
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-10 bg-white dark:bg-gray-900 scroll-mt-24"
    >
      <Container>
        <SectionTitle title="Skills" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill}
              className="border border-gray-200 dark:border-gray-700 rounded-xl py-4 px-3 text-center font-medium text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 hover:-translate-y-1 hover:shadow-md hover:border-blue-500 transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}