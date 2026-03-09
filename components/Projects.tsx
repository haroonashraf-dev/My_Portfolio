import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Project } from "../types";

const projects: Project[] = [
  {
    id: "1",
    title: "TrendWave Store",
    description:
      "A modern fashion e-commerce platform designed for growing clothing brands. Built with a clean UI, optimized product browsing, responsive layout, and smooth user interactions for an enhanced shopping experience.",
    image:
      "https://plus.unsplash.com/premium_photo-1664475347754-f633cb166d13?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://stackblitz.com/edit/react-trendwave-demo?file=src/App.js",
    details: "/fashion-details",
  },
  {
    id: "2",
    title: "E-Learning Hub (Full-Stack SaaS)",
    description:
      "A scalable LMS that allows instructors to create and monetize courses, while students enjoy a seamless learning experience.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1400",
    tags: ["Next.js", "TypeScript", "Shadcn UI"],
    link: "#",
    details: "/lms-details",
  },
  {
    id: "3",
    title: "InsightBoard – Admin Analytics Dashboard",
    description:
      "A professional SaaS analytics dashboard designed for administrators to monitor performance metrics, user activity, and business insights. Built with modular components, structured layouts, and dynamic data visualization for scalability and clarity.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1400",
    tags: ["React", "CSS Modules", "Chart.js"],
    link: "#",
    details: "/dashboard-details",
  },
];

const cardVariants = {
  offscreen: { y: 40, opacity: 0 },
  onscreen: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", bounce: 0.3, duration: 0.6 } 
  }
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
              Case Studies
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold">Latest Projects</h3>
          </div>
          <p className="text-slate-400 max-w-md">
  Showcasing my top projects with clean design, seamless performance, and intuitive user experiences.
</p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, rotateX: 3, rotateY: 3 }}
              className="group bg-slate-800/20 border border-white/5 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay for hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
                  >
                    <ExternalLink size={16} />
                    Preview
                  </a>
                  {project.details && (
                    <Link
                      to={project.details}
                      className="flex items-center gap-2 px-4 py-2 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition"
                    >
                      <FileText size={16} />
                      Case Study
                    </Link>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-700/50 text-slate-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;