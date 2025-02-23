
import { Navbar } from "@/components/Navbar";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Student Stories
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Students Say
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear directly from our students about their learning experiences and success stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {Array(5).fill(null).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                      className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    content: "The faculty's expertise and the interactive live sessions made learning complex topics much easier. I'm now confident in my skills and ready for industry challenges.",
    rating: 5,
    name: "Sarah Thompson",
    course: "Advanced Web Development",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    content: "The practical approach to learning and the support from professors helped me transition from a beginner to a competent professional.",
    rating: 5,
    name: "Michael Chang",
    course: "Machine Learning Fundamentals",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    content: "The course structure and real-world projects gave me the perfect foundation for my career in digital marketing. Highly recommended!",
    rating: 5,
    name: "Emily Rodriguez",
    course: "Digital Marketing Strategy",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
];

export default Testimonials;
