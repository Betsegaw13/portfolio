import { projects } from "@/data/projects";
import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Projects() {
  const featuredProject = projects.find((project) => project.featured);

  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-10 bg-gray-50 dark:bg-gray-900 scroll-mt-24"
    >
      <Container>
        <SectionTitle title="Projects" />

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 dark:text-white">
              ⭐ Featured Project
            </h3>

            <Card
              project={featuredProject}
              featured
            />
          </div>
        )}

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Card
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}