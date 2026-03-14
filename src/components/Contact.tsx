import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section flex-center" style={{ minHeight: '80vh', textAlign: 'center', flexDirection: 'column' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <p style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            What's Next?
          </p>
          <h2 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            Get In Touch
          </h2>
          
          <p className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '3rem' }}>
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a 
            href="mailto:hello@example.com"
            className="glass transition-smooth hover-lift"
            style={{ 
              display: 'inline-block',
              padding: '1.25rem 2.5rem', 
              color: 'var(--accent-primary)', 
              fontWeight: 600, 
              border: '1px solid var(--accent-primary)',
              borderRadius: '8px',
              fontSize: '1.1rem',
              marginBottom: '4rem'
            }}
          >
            Say Hello
          </a>

          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            {[
              { icon: <Github size={24} />, href: '#' },
              { icon: <Linkedin size={24} />, href: '#' },
              { icon: <Twitter size={24} />, href: '#' },
              { icon: <Mail size={24} />, href: 'mailto:hello@example.com' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -5 }}
                className="text-muted transition-smooth"
                style={{ transition: 'color 0.2s' }}
                onMouseOver={e => e.currentTarget.style.color='var(--accent-primary)'} 
                onMouseOut={e => e.currentTarget.style.color='var(--text-muted)'}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '4rem', paddingBottom: '2rem' }}>
        <p className="text-muted" style={{ fontSize: '0.9rem', fontFamily: 'monospace' }}>
          Designed & Built by Naufal Azmi
        </p>
      </div>
    </section>
  );
};

export default Contact;
