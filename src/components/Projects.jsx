import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/mock';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen bg-[#1a1f2e] py-32 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-sm tracking-[0.3em] text-blue-400 uppercase mb-6">
            Featured Work
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-12 leading-tight">
            Projects
          </h3>
        </motion.div>

        <div className="space-y-24">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="border border-gray-700 hover:border-blue-500 transition-all duration-500 bg-[#222938] hover:shadow-xl hover:shadow-blue-500/20">
                <div className="p-8 md:p-12">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h4 className="text-4xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {project.name}
                      </h4>
                      <p className="text-lg text-gray-400">{project.tagline}</p>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[#1a1f2e] border border-gray-700 hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                        aria-label="View demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[#1a1f2e] border border-gray-700 hover:border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                        aria-label="View code"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <h5 className="text-sm tracking-wider text-blue-400 uppercase mb-4 font-bold">
                      Key Features
                    </h5>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-300"
                        >
                          <ChevronRight size={20} className="mr-2 mt-0.5 flex-shrink-0 text-blue-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h5 className="text-sm tracking-wider text-blue-400 uppercase mb-4 font-bold">
                      Tech Stack
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 text-xs tracking-wider bg-[#1a1f2e] text-gray-300 border border-gray-700 hover:border-blue-500 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => toggleProject(project.id)}
                    className="flex items-center text-sm tracking-wider uppercase text-blue-400 hover:text-purple-400 transition-colors group"
                  >
                    {expandedProject === project.id ? 'Hide' : 'View'} Architecture Highlights
                    <ChevronRight
                      size={16}
                      className={`ml-2 transition-transform duration-300 ${
                        expandedProject === project.id ? 'rotate-90' : ''
                      }`}
                    />
                  </button>

                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-gray-700"
                    >
                      <div className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-start text-gray-300 bg-[#1a1f2e] p-4 border-l-2 border-blue-500"
                          >
                            <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
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
