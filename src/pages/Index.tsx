
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CoursesSection } from "@/components/CoursesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <CoursesSection />
      </main>
    </div>
  );
};

export default Index;
