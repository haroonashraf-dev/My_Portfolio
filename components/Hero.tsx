import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  return (
   <section className="relative min-h-[80vh] md:min-h-screen flex flex-col items-center justify-center pt-16 md:pt-24 overflow-hidden bg-slate-900">
      {/* Background Decorative Blobs */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
        className="absolute top-1/4 -left-24 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 90, ease: 'linear' }}
        className="absolute bottom-1/4 -right-24 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl text-center px-4 md:px-8">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6"
        >
          <Terminal size={14} />
          <span>Currently Building Cutting-Edge Projects</span>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white"
        >
          Crafting <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">Exceptional</span> <br />
          Web Experiences
        </motion.h1>

        {/* Typewriter Intro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          <span className="text-white font-medium">Hi, I’m Haroon, </span>
          <TypeAnimation
            sequence={[
              'a Full-Stack Developer.',
              2000,
              'specializing in React & modern web technologies.',
              2000,
              'focused on building scalable, high-performance digital experiences.',
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
          />
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="#projects"
            className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center shadow-lg shadow-indigo-600/20 transition-all"
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

        {/* Floating Code Snippet Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.7, type: 'spring', stiffness: 100 }}
          className="mt-16 mx-auto max-w-2xl bg-[#1e293b]/50 border border-white/5 rounded-2xl p-6 backdrop-blur-xl shadow-2xl hidden md:block hover:scale-105 transition-transform"
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-amber-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <pre className="text-left font-mono text-sm text-slate-300">
            <code>
              <span className="text-purple-400">const </span>
              <span className="text-indigo-300">developer</span> = &#123;
              <br />
              &nbsp;&nbsp;name: <span className="text-emerald-400">'Haroon'</span>,<br />
              &nbsp;&nbsp;focus: <span className="text-emerald-400">'Frontend Architecture'</span>,<br />
              &nbsp;&nbsp;learning: <span className="text-emerald-400">'MERN Stack'</span>,<br />
              &nbsp;&nbsp;motto: <span className="text-emerald-400">'Clean code, happy users'</span><br />
              &#125;;
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;