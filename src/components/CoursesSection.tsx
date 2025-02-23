
import { CourseCard } from './CourseCard';

const courses = [
  {
    title: "Advanced Web Development",
    instructor: "Prof. Sarah Johnson",
    students: 245,
    duration: "12 weeks",
    nextSession: "Tomorrow, 10:00 AM",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    title: "Machine Learning Fundamentals",
    instructor: "Dr. Michael Chen",
    students: 189,
    duration: "16 weeks",
    nextSession: "Today, 2:00 PM",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    title: "Digital Marketing Strategy",
    instructor: "Prof. Emily Williams",
    students: 167,
    duration: "8 weeks",
    nextSession: "Thursday, 11:00 AM",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
];

export const CoursesSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Featured Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Popular Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from a wide range of courses designed to help you achieve your academic and professional goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={course.title} style={{ animationDelay: `${index * 200}ms` }}>
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
