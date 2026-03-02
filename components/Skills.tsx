
import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'React', category: 'frontend', level: 90 },
  { name: 'TypeScript', category: 'frontend', level: 85 },
  { name: 'Tailwind CSS', category: 'frontend', level: 95 },
  { name: 'Framer Motion', category: 'frontend', level: 80 },
  { name: 'Node.js', category: 'backend', level: 60 },
  { name: 'Express', category: 'backend', level: 55 },
  { name: 'MongoDB', category: 'backend', level: 50 },
  { name: 'Git & GitHub', category: 'tools', level: 85 },
  { name: 'Figma', category: 'tools', level: 70 },
  { name: 'Redux', category: 'frontend', level: 75 },
  { name: 'Ai Integration', category: 'learning', level: 30 },
];

const Skills: React.FC = () => {
  const categories = {
    frontend: 'Frontend Mastery',
    backend: 'Backend & MERN',
    tools: 'Dev Tools',
    learning: 'Currently Exploring'
  };

  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">Abilities</h2>
          <h3 className="text-3xl md:text-5xl font-bold">Technical Stack</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {(Object.keys(categories) as Array<keyof typeof categories>).map((cat) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-800/20 border border-white/5 p-8 rounded-3xl"
            >
              <h4 className="text-xl font-bold mb-8 text-indigo-400 border-b border-indigo-500/10 pb-4">
                {categories[cat]}
              </h4>
              <div className="space-y-6">
                {skills.filter(s => s.category === cat).map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-300">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${cat === 'learning' ? 'bg-amber-500' : 'bg-indigo-500'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
