
import { Navbar } from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Excellence in Education
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated to providing world-class education and fostering tomorrow's leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-gray-600">
                To provide exceptional education that empowers students to achieve their full potential
                and make meaningful contributions to society through innovative teaching, research, and
                community engagement.
              </p>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-gray-600">
                To be a leading institution of higher education, recognized globally for academic
                excellence, innovative research, and the success of our graduates.
              </p>
            </div>
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h2 className="text-2xl font-bold text-gray-900">Core Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Excellence</h3>
                    <p className="text-gray-600">Pursuing the highest standards in teaching and research</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovation</h3>
                    <p className="text-gray-600">Embracing creative approaches and new technologies</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Integrity</h3>
                    <p className="text-gray-600">Maintaining high ethical standards in all we do</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
