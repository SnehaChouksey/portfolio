import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/mock';

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai', label: 'Generative AI' },
    { id: 'tools', label: 'Tools & DevOps' },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#222938] py-32 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-sm tracking-[0.3em] text-blue-400 uppercase mb-6">
            Expertise
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-12 leading-tight">
            Technical Skills
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 text-sm tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-[#1a1f2e] text-gray-300 border border-gray-700 hover:border-blue-500'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioData.skills[activeCategory]?.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#1a1f2e] p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h4>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full h-1 bg-gray-700 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Specialized in building <span className="text-blue-400 font-bold">production-ready SaaS applications</span> with
            expertise in <span className="text-purple-400 font-bold">RAG pipelines</span>, <span className="text-green-400 font-bold">async architectures</span>, and
            modern <span className="text-yellow-400 font-bold">full-stack development</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
