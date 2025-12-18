import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const canvasRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    // GSAP animation for name reveal
    if (nameRef.current) {
      const letters = nameRef.current.querySelectorAll('.letter');
      gsap.fromTo(
        letters,
        {
          opacity: 0,
          y: 50,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.05,
          ease: 'power4.out',
          delay: 0.5,
        }
      );
    }

    // Morphing tagline
    const interval = setInterval(() => {
      setCurrentTaglineIndex(
        (prev) => (prev + 1) % portfolioData.personal.taglines.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Particle animation with colors
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 60;
    const colors = ['#4F96FF', '#A855F7', '#10B981', '#F59E0B'];

    class Particle {
      constructor() {
        this.reset();
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(79, 150, 255, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const splitName = (name) => {
    return name.split('').map((char, index) => (
      <span key={index} className="letter inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1f2e]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mb-6 text-sm tracking-[0.3em] text-blue-400 uppercase"
        >
          Portfolio 2025
        </motion.div>

        <h1
          ref={nameRef}
          className="text-7xl md:text-9xl font-bold tracking-tight text-white mb-8"
          style={{ perspective: '1000px' }}
        >
          {splitName(portfolioData.personal.name)}
        </h1>

        <div className="h-16 mb-2 pb-10">
          <motion.p
            key={currentTaglineIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl pb-5 font-light bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            {portfolioData.personal.taglines[currentTaglineIndex]}
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting Intelligent Systems with Creative Frontends , Scalable Backends, and AI
          Integrations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex gap-6 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm tracking-wider uppercase transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-purple-500 text-purple-400 text-sm tracking-wider uppercase transition-all duration-300 hover:bg-purple-500 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
