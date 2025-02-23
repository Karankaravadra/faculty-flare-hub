
import { Navbar } from "@/components/Navbar";
import { Send } from "lucide-react";

const Queries = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Student Support
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Have a Question?
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help! Submit your query and our faculty will get back to you soon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <form className="space-y-6 animate-fade-in">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Query subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Submit Query
              </button>
            </form>

            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "How do I join a live session?",
    answer: "Click the 'Join Live Session' button on any course card during the scheduled time. Make sure you're logged in to your student account.",
  },
  {
    question: "What if I miss a live session?",
    answer: "Don't worry! All live sessions are recorded and available for enrolled students to watch at their convenience.",
  },
  {
    question: "How can I contact my professor directly?",
    answer: "You can reach out to your professors through the course discussion forum or during their virtual office hours.",
  },
];

export default Queries;
