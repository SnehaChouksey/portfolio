import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/mock';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen bg-[#1a1f2e] py-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Subtle background animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm tracking-[0.3em] text-blue-400 uppercase mb-6">
            Get in Touch
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight">
            Let's Build Intelligent
            <br />
            Systems Together
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 ">
          <motion.a
            href={`mailto:${portfolioData.personal.email}`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group p-8 bg-[#222938] border border-gray-700 hover:border-blue-500 transition-all duration-300 text-center hover:shadow-lg hover:shadow-blue-500/20"
          >
            <div className="inline-flex p-4 bg-[#1a1f2e] text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 mb-4">
              <Mail size={24} />
            </div>
            <h4 className="text-xs tracking-wider text-gray-500 uppercase mb-3">
              Email
            </h4>
            <p className="text-white text-sm group-hover:text-blue-400 transition-colors break-all">
              {portfolioData.personal.email}
            </p>
          </motion.a>

          

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group p-8 bg-[#222938] border border-gray-700 hover:border-purple-500 transition-all duration-300 text-center hover:shadow-lg hover:shadow-purple-500/20"
          >
            <div className="inline-flex p-4 bg-[#1a1f2e] text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 mb-4">
              <MapPin size={24} />
            </div>
            <h4 className="text-xs tracking-wider text-gray-500 uppercase mb-3">
              Location
            </h4>
            <p className="text-white text-sm group-hover:text-purple-400 transition-colors">
              {portfolioData.personal.location}
            </p>
          </motion.div>

          <motion.a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group p-8 bg-[#222938] border border-gray-700 hover:border-blue-500 transition-all duration-300 text-center hover:shadow-lg hover:shadow-blue-500/20"
          >
            <div className="inline-flex p-4 bg-[#1a1f2e] text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 mb-4">
              <Linkedin size={24} />
            </div>
            <h4 className="text-xs tracking-wider text-gray-500 uppercase mb-3">
              LinkedIn
            </h4>
            <p className="text-white text-sm group-hover:text-blue-400 transition-colors">
              Connect
            </p>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="inline-block px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm tracking-wider uppercase transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50"
          >
            Start a Conversation
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-32 pt-12 border-t border-gray-700 text-center"
        >
          <p className="text-sm text-gray-500 mb-2">
            © 2025 {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Designed & Developed with Intelligence
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
