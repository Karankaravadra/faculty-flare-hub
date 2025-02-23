
import { GraduationCap, BookOpen, Users } from 'lucide-react';
import { useState } from 'react';
import { LoginForm } from './LoginForm';

export const HeroSection = () => {
  const [showStudentLogin, setShowStudentLogin] = useState(false);
  const [showFacultyLogin, setShowFacultyLogin] = useState(false);

  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Welcome to FacultyHub
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Empower Your Learning Journey
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join our community of learners and expert faculty members. Discover courses that will shape your future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setShowStudentLogin(true)}
              className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <GraduationCap size={20} />
              Student Login
            </button>
            <button 
              onClick={() => setShowFacultyLogin(true)}
              className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <Users size={20} />
              Faculty Login
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {showStudentLogin && (
        <LoginForm 
          type="student" 
          onClose={() => setShowStudentLogin(false)} 
        />
      )}

      {showFacultyLogin && (
        <LoginForm 
          type="faculty" 
          onClose={() => setShowFacultyLogin(false)} 
        />
      )}
    </section>
  );
};

const features = [
  {
    title: "Expert Faculty",
    description: "Learn from industry professionals and experienced academicians.",
    icon: Users,
  },
  {
    title: "Live Sessions",
    description: "Interactive live classes with real-time doubt resolution.",
    icon: BookOpen,
  },
  {
    title: "Certified Courses",
    description: "Get certified in your field of interest with our accredited courses.",
    icon: GraduationCap,
  },
];
