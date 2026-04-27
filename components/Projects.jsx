import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "1",
    title: "Discover the New You with Faiza's Beauty Salon",
    description:
      "Step into a realm where beauty meets luxury and each detail is accomplished with accuracy and love. At Faiza's Salon, the most reliable ladies salon, we combine the two elements (science & art) to reveal your authentic beauty. Our team of skilled professionals is dedicated to providing personalized services that enhance your natural features and boost your confidence.",
    image:
      "https://bloomandblossom.ae/wp-content/uploads/2026/03/Nano-Banana-2-A-professional-salon-scene-featuring-a-beautiful-woman-with-flawless_-glowing-skin-rec_2-1.png",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://faiza-s-beauty-salon.vercel.app/",
  },
 
  {
    id: "2",
    title: "Revenue-Focused Fashion Store for Small Brands",
    description:
      "A revenue-focused fashion e-commerce platform built to help small clothing brands increase sales, improve user experience, and convert visitors into customers.Includes real-world business features like quick add-to-cart, stock urgency indicator, optimized checkout flow, and WhatsApp ordering — making it ideal for brands.",
    image:
      "https://plus.unsplash.com/premium_photo-1664475347754-f633cb166d13?q=80&w=870&auto=format&fit=crop",
    tags: ["React","JavaScript", "Tailwind CSS", "Framer Motion"],
    link: "https://trendwave-store.vercel.app/",
  },
  {
    id: "3",
    title: "E-Learning Hub (Full-Stack SaaS)",
    description:
      "A scalable LMS that allows instructors to create and monetize courses, while students enjoy a seamless learning experience.E-Learning Hub is a Learning Management System (LMS) which is a web-based platform designed to facilitate online education by providing an interactive and user-friendly environment for learners and instructors,  where students, instructors can collaborate seamlessly ",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1400",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Node.js", "Express", "MongoDB", "Shadcn UI"],
    link: "https://lms-wqmc.vercel.app/",
  },
   {
    id: "4",
    title: "Raising the Standard in Goat Farming",
    description:
      "Raising healthy, happy goats with passion and care to provide the very best for our community. At Bukhari Farm, we are dedicated to the art of goat farming, combining traditional practices with modern techniques to ensure the well-being of our animals and the quality of our products. We provide to the comfortable living conditions we maintain.",
    image:
      "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&q=80&w=2000",
    tags: ["React", "Tailwind CSS", "Framer Motion" , "Node.js", "Express", "MongoDB"],
    link: "https://bukhari-farm.vercel.app/",
  },
  {
    id: "5",
    title: "InsightBoard – Admin Analytics Dashboard",
    description:
      "A professional SaaS analytics dashboard designed for administrators to monitor performance metrics, user activity, and business insights.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1400",
    tags: ["React", "CSS Modules", "Chart.js"],
    link: "#",
  },
];

const cardVariants = {
  offscreen: { y: 40, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.6 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
              Case Studies
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold">
              Latest Projects
            </h3>
          </div>

          <p className="text-slate-400 max-w-md">
            Showcasing my top projects with clean design, seamless performance,
            and intuitive user experiences.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
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

                <h4 className="text-xl font-bold mb-2">
                  {project.title}
                </h4>

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