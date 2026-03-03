import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex flex-col items-center justify-center pt-16 md:pt-24 overflow-hidden bg-slate-900">
      {/* Background Blobs */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
        className="absolute top-16 -left-24 w-64 h-64 md:w-80 md:h-80 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 90, ease: 'linear' }}
        className="absolute bottom-16 -right-24 w-64 h-64 md:w-80 md:h-80 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"
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
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white"
        >
          Crafting{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
            Exceptional
          </span>{' '}
          <br />
          Web Experiences
        </motion.h1>

        {/* Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          <span className="text-white font-medium">Hi, I’m Haroon,</span>{' '}
          <TypeAnimation
            sequence={[
              ' a Full-Stack Developer.',
              2000,
              ' specializing in MERN Stack & modern web technologies.',
              2000,
              ' focused on building scalable, high-performance web apps.',
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
          />
        </motion.p>

        {/* Client Value Line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-slate-400 max-w-lg mx-auto mb-10"
        >
          I build websites that not only look great but also drive results for your business.
        </motion.p>

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

        {/* Floating Code Snippet */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.7, type: 'spring', stiffness: 100 }}
          className="mt-8 md:mt-12 mx-auto max-w-2xl bg-[#1e293b]/50 border border-white/5 rounded-2xl p-6 backdrop-blur-xl shadow-2xl hidden md:block hover:scale-105 transition-transform"
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
        {/* Mobile version */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.7 }}
  className="mt-8 mx-auto w-full max-w-sm bg-[#1e293b]/70 border border-white/10 rounded-2xl p-5 backdrop-blur-lg shadow-xl md:hidden"
>
  {/* Top “window buttons” for style */}
  <div className="flex items-center space-x-2 mb-3">
    <div className="w-3 h-3 rounded-full bg-red-500" />
    <div className="w-3 h-3 rounded-full bg-yellow-400" />
    <div className="w-3 h-3 rounded-full bg-green-500" />
  </div>

  {/* Code content */}
  <pre className="text-left font-mono text-sm sm:text-base text-slate-200 leading-relaxed">
    <code>
      <span className="text-purple-400">const </span>dev = {'{'}
      <br />
      &nbsp;&nbsp;name: <span className="text-emerald-400">'Haroon'</span>,
      <br />
      &nbsp;&nbsp;focus: <span className="text-emerald-400">'Frontend Architecture'</span>,
      <br />
      &nbsp;&nbsp;learning: <span className="text-emerald-400">'MERN Stack'</span>,
      <br />
      &nbsp;&nbsp;motto: <span className="text-emerald-400">'Clean code, happy users'</span>
      <br />
      {'};'}
    </code>
  </pre>
</motion.div>
      </div>
    </section>
  );
};

export default Hero;