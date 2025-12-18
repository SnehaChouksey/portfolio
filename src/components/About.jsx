import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/mock';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      
      gsap.fromTo(
        items,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section
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
            About
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-12 leading-tight">
            From Engineering Systems to Engineering Intelligence .
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            {portfolioData.personal.bio}
          </p>
        </motion.div>

        <div ref={timelineRef} className="space-y-12">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl font-bold text-white mb-12"
          >
            Journey
          </motion.h4>

          <div className="relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-green-500" />

            {portfolioData.timeline.map((item, index) => (
              <div
                key={index}
                className="timeline-item relative pl-12 md:pl-24 pb-16 last:pb-0"
              >
                <div className="absolute left-0 md:left-8 top-0 w-4 h-4 -ml-[7px] md:-ml-[7px] rounded-full bg-blue-500 border-4 border-[#1a1f2e] shadow-lg shadow-blue-500/50" />
                
                <div className="group">
                  <div className="text-sm tracking-wider text-blue-400 mb-2">
                    {item.year}
                  </div>
                  <h5 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h5>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 grid md:grid-cols-2 gap-12"
        >
          <div className="p-8 bg-[#222938] border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <h5 className="text-xl font-bold text-white mb-4">Education</h5>
            <p className="text-gray-300 mb-2">
              {portfolioData.experience.education.degree}
            </p>
            <p className="text-sm text-gray-400 mb-1">
              {portfolioData.experience.education.institution}
            </p>
            <p className="text-sm text-gray-400">
              Class of {portfolioData.experience.education.year} 
            </p>
          </div>

          <div className="p-8 bg-[#222938] border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <h5 className="text-xl font-bold text-white mb-4">Location</h5>
            <p className="text-gray-300 mb-4">{portfolioData.personal.location}</p>
            <p className="text-sm text-gray-400">
              Available for Full Stack and Gen AI roles
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
