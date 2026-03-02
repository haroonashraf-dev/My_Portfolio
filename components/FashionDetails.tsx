import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const FashionDetails = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 md:px-20 py-20">
      
      {/* Back Button */}
      <Link
        to="/"
        className="flex items-center gap-2 text-slate-400 hover:text-white transition mb-12"
      >
        <ArrowLeft size={18} />
        Back to Projects
      </Link>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
      >
        Fashion E-Commerce Store
      </motion.h1>

      {/* Short Intro */}
      <p className="text-slate-400 text-lg max-w-3xl mb-16">
        A modern, conversion-focused e-commerce platform designed for fashion brands. 
        It offers smooth navigation, product filtering, secure checkout, and a fully responsive UI for maximum user engagement.
      </p>

      {/* Sections */}
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p className="text-slate-400 leading-relaxed">
            Many fashion e-commerce websites struggle with performance, conversion, 
            and responsive design. Shoppers often face slow loading times and confusing layouts.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
          <p className="text-slate-400 leading-relaxed">
            I developed a fast, responsive platform with advanced product filtering, 
            seamless cart management, and secure checkout. Focused on performance, aesthetics, and usability.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Advanced product filtering and search",
            "Seamless shopping cart and checkout flow",
            "Responsive and accessible UI",
            "Optimized for conversions and performance",
            "Scalable architecture for growth"
          ].map((feature, index) => (
            <div key={index} className="bg-slate-800/40 border border-white/5 p-6 rounded-2xl">
              <p className="text-slate-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {["React", "Tailwind CSS", "Framer Motion", "Responsive Design"].map((tech) => (
            <span key={tech} className="px-4 py-2 text-sm bg-indigo-600/20 text-indigo-400 rounded-lg">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FashionDetails;  