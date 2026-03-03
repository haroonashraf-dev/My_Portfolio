import React from "react";
import { motion } from "framer-motion";
import { User, Rocket, Award } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
              Who I Am
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              A Freelance Developer <br />
              with a Passion for{" "}
              <span className="gradient-text">Clean Code</span>
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Hi, I’m Haroon — a web developer who builds high-performance,
              user-friendly websites that help businesses grow and generate
              revenue. I specialize in creating beautiful, responsive interfaces
              that not only look great but deliver real results. I’m passionate
              about turning ideas into reality through clean, efficient code.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              I build responsive, high-performance websites that help businesses
              grow and stand out online.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
                  <Rocket size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200">
                    Solution Oriented
                  </h4>
                  <p className="text-sm text-slate-500">
                    I don't just write code, I solve business problems.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200">Fast Learner</h4>
                  <p className="text-sm text-slate-500">
                    Adapting quickly to new tools and technologies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <img
  src="/img/profile-photo.jpeg"
  alt="Haroon Portrait"
  className="w-full h-full object-cover rotate-90 py-10"
/>
              </div>
            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-[#1e293b] border border-white/10 p-6 rounded-2xl shadow-2xl">
              <div className="text-4xl font-bold gradient-text">2+</div>
              <div className="text-sm text-slate-400 font-medium">
                Years Freelancing
              </div>
            </div>

            {/* Project Card */}
            <div className="absolute -top-6 -right-6 md:-right-12 bg-[#1e293b] border border-white/10 p-6 rounded-2xl shadow-2xl">
              <div className="text-4xl font-bold gradient-text">30+</div>
              <div className="text-sm text-slate-400 font-medium">
                Projects Delivered
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
