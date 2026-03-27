import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const LmsDetails = () => {
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
        E-Learning Hub — Full-Stack LMS Platform
      </motion.h1>

      {/* Short Intro */}
      <p className="text-slate-400 text-lg max-w-3xl mb-16">
        A modern Learning Management System designed to help instructors 
        create and monetize courses while providing students with a seamless 
        and structured learning experience.
      </p>

      {/* Sections */}
      <div className="grid md:grid-cols-2 gap-16">

        {/* Problem */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p className="text-slate-400 leading-relaxed">
            Many online learning platforms feel overwhelming, slow, or poorly structured. 
            Instructors struggle with managing content efficiently, and students often 
            face confusing dashboards and inconsistent navigation.
          </p>
        </div>

        {/* Solution */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
          <p className="text-slate-400 leading-relaxed">
            I built a scalable full-stack LMS with role-based authentication, 
            intuitive dashboards, and structured course management. 
            The platform focuses on clarity, performance, and user experience.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-6">Key Features</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Role-based authentication (Admin, Instructor, Student)",
            "Course creation and structured content management",
            "Secure enrollment system",
            "Responsive and accessible UI",
            "Scalable architecture for SaaS growth"
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/40 border border-white/5 p-6 rounded-2xl"
            >
              <p className="text-slate-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Authentication System"].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm bg-indigo-600/20 text-indigo-400 rounded-lg"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>

    </div>
  );
};

export default LmsDetails;