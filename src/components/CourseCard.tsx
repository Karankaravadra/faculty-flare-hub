
import { Calendar, Users, Clock } from 'lucide-react';

interface CourseCardProps {
  title: string;
  instructor: string;
  students: number;
  duration: string;
  nextSession: string;
  image: string;
}

export const CourseCard = ({ title, instructor, students, duration, nextSession, image }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 animate-fade-in">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl font-semibold line-clamp-2">{title}</h3>
          <p className="text-white/80 text-sm mt-1">{instructor}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{students} students</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{duration}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-primary mb-4">
          <Calendar size={16} />
          <span>Next session: {nextSession}</span>
        </div>
        <button className="w-full bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
          Join Live Session
        </button>
      </div>
    </div>
  );
};
