
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6"
        >
          <Terminal size={14} />
          <span>Currently Doing Projects</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Crafting <span className="gradient-text">Exceptional</span> <br />
          Web Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I'm <span className="text-white font-medium">Haroon</span>, a Full-Stack Developer specialized in React,
          building performant, responsive, and visually stunning web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a 
            href="#projects" 
            className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all flex items-center shadow-2xl shadow-indigo-600/20"
          >
            View Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl font-bold transition-all"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Floating Code Snippet Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 mx-auto max-w-2xl bg-[#1e293b]/50 border border-white/5 rounded-2xl p-4 md:p-6 backdrop-blur-xl shadow-2xl hidden md:block"
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-amber-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="text-left font-mono text-sm space-y-1">
            <p className="text-purple-400">const <span className="text-indigo-300">developer</span> = &#123;</p>
            <p className="pl-6 text-slate-300">name: <span className="text-emerald-400">'Haroon'</span>,</p>
            <p className="pl-6 text-slate-300">focus: <span className="text-emerald-400">'Frontend Architecture'</span>,</p>
            <p className="pl-6 text-slate-300">learning: <span className="text-emerald-400">'MERN Stack'</span>,</p>
            <p className="pl-6 text-slate-300">motto: <span className="text-emerald-400">'Clean code, happy users'</span></p>
            <p className="text-purple-400">&#125;;</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
