import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { Project } from "../types";

const projects: Project[] = [
  {
    id: "1",
    title: "Fashion E-Commerce Store",
    description:
      "A modern, conversion-focused e-commerce platform designed for fashion brands with seamless shopping experience and responsive UI.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Tailwind", "Framer Motion"],
    link: "#",
    details: "/fashion-details",
  },
  {
    id: "2",
    title: "E-Learning Hub (Full-Stack SaaS)",
    description:
      "A scalable LMS that allows instructors to create and monetize courses, while students enjoy a seamless learning experience.",
    image: "img/home.png",
    tags: ["Next.js", "TypeScript", "Shadcn UI"],
    link: "#",
    details: "/lms-details",
  },
  {
    id: "3",
    title: "Admin Analytics Dashboard",
    description:
      "An interactive admin dashboard with dynamic data visualization, reusable components, and scalable layout for SaaS platforms.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "CSS Modules"],
    link: "#",
    details: "/dashboard-details",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
              Case Studies
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold">Latest Projects</h3>
          </div>
          <p className="text-slate-400 max-w-md">
            A selection of my best work, highlighting performance, usability,
            and design that impresses clients.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-800/20 border border-white/5 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Optional Tags */}
                {project.tags.length > 0 && (
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
                )}

                {/* Title & Description */}
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.link}
                    className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center text-sm font-semibold"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Preview
                  </a>

                  {project.details && (
                    <Link
                      to={project.details}
                      className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <FileText size={16} />
                      Case Study
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;