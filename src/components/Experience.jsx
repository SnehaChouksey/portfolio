import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/mock';
import { Trophy, Award } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'trophy':
        return <Trophy size={32} />;
      case 'award':
        return <Award size={32} />;
      default:
        return <Award size={32} />;
    }
  };

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
          className="mb-20 text-center"
        >
          <div className="max-w-3xl mx-auto p-12 border border-gray-700 bg-[#1a1f2e] hover:border-purple-500 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
            <p className="text-3xl font-bold text-white mb-6 leading-tight">
              "Building intelligent systems that don't just work—they think."
            </p>
            <p className="text-sm tracking-wider text-blue-400 uppercase">
              Engineering Philosophy
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-32"
        >
          <h2 className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-6 text-center">
            Recognition
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {portfolioData.experience.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-[#1a1f2e] border border-gray-700 p-6 hover:border-gray-600 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#222938] text-gray-500 group-hover:text-gray-400 transition-all duration-300">
                    {getIcon(achievement.icon)}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs tracking-wider text-gray-500 mb-2">
                      {achievement.year}
                    </div>
                    <h4 className="text-lg font-bold text-gray-400 mb-2 group-hover:text-gray-300 transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
