
import { Navbar } from "@/components/Navbar";
import { CoursesSection } from "@/components/CoursesSection";

const Courses = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32">
        <CoursesSection />
      </div>
    </div>
  );
};

export default Courses;
