
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-semibold text-primary">
              FacultyHub
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/queries">Student Queries</NavLink>
            <NavLink to="/testimonials">Testimonials</NavLink>
            <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg transition-colors duration-200">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/courses" onClick={() => setIsOpen(false)}>Courses</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
              <MobileNavLink to="/queries" onClick={() => setIsOpen(false)}>Student Queries</MobileNavLink>
              <MobileNavLink to="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</MobileNavLink>
              <button className="w-full bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg transition-colors duration-200 mt-4">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-gray-600 hover:text-primary transition-colors duration-200"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block text-gray-600 hover:text-primary transition-colors duration-200 py-2"
  >
    {children}
  </Link>
);
