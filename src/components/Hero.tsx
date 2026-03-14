import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="section flex-center" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40vw', height: '40vw', background: 'var(--accent-primary)', opacity: 0.05, filter: 'blur(100px)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '30vw', height: '30vw', background: 'var(--accent-secondary)', opacity: 0.05, filter: 'blur(100px)', borderRadius: '50%' }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ maxWidth: '800px' }}
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
          >
            Hello, I am
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
          >
            <span style={{ display: 'block' }}>Naufal Azmi.</span>
            <span className="text-muted" style={{ display: 'block' }}>I build the web.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-secondary"
            style={{ fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.8 }}
          >
            I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a 
              href="#projects" 
              className="glass hover-lift transition-smooth"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', color: 'var(--accent-primary)', fontWeight: 600, border: '1px solid var(--accent-primary)' }}
            >
              Check out my work
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
