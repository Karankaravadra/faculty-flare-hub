
import { useState } from "react";
import { Eye, EyeOff, LucideIcon } from "lucide-react";

interface LoginFormProps {
  type: "student" | "faculty";
  onClose: () => void;
}

export const LoginForm = ({ type, onClose }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we'll add authentication logic later
    console.log("Login attempt:", { type, email, password });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {type === "student" ? "Student Login" : "Faculty Login"}
          </h2>
          <p className="text-gray-600 mt-1">
            Welcome back! Please enter your details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <button type="button" className="text-sm text-primary hover:text-primary-hover">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Sign in
          </button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <button type="button" className="text-primary hover:text-primary-hover">
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};
