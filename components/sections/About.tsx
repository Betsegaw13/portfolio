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
              I recently completed my fourth year in Electrical and Computer Engineering
              at Addis Ababa Science and Technology University (AASTU). I enjoy building
              software and hardware solutions that solve real-world problems through clean,
              practical, and user-focused design.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
            My primary interests are Full-Stack Web Development, Embedded Systems, and
            UI/UX Design. I enjoy creating modern web applications, working with new
            technologies, and transforming ideas into functional products.
            </p>

            <p className="text-gray-700 leading-relaxed">
             I am committed to building impactful software solutions, embracing new technologies, and creating applications that combine functionality, performance, and great user experience.
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