import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <Container>

        {/* Title (reusable component) */}
        
          <SectionTitle title="About Me" /> 
          
         

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left side text */}
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              I am an Electrical and Computer Engineering student passionate
              about building real-world systems that combine software and hardware.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              My interests include full-stack development, embedded systems,
              and UI/UX design. I enjoy turning ideas into practical applications.
            </p>

            <p className="text-gray-700 leading-relaxed">
              I am currently focused on improving my software engineering skills
              and building strong portfolio projects.
            </p>
          </div>

          {/* Right side highlight cards */}
          <div className="grid gap-4">

            <div className="p-5 bg-white border rounded-lg hover:shadow-sm transition">
              <h3 className="font-semibold mb-1">Frontend Development</h3>
              <p className="text-sm text-gray-600">
                React, Next.js, Tailwind CSS
              </p>
            </div>

            <div className="p-5 bg-white border rounded-lg hover:shadow-sm transition">
              <h3 className="font-semibold mb-1">Embedded Systems</h3>
              <p className="text-sm text-gray-600">
                Arduino, Sensors, Hardware Integration
              </p>
            </div>

            <div className="p-5 bg-white border rounded-lg hover:shadow-sm transition">
              <h3 className="font-semibold mb-1">UI / UX Design</h3>
              <p className="text-sm text-gray-600">
                Figma, Clean Interfaces, User Experience
              </p>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}