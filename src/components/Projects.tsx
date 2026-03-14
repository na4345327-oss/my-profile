import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and beautiful data visualization using Recharts.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
      github: '#',
      external: '#',
    },
    {
      title: 'AI Chat Interface',
      description: 'A sleek, modern chat interface for AI models supporting markdown, code highlighting, and streaming responses. Built with performance in mind.',
      tech: ['TypeScript', 'Next.js', 'OpenAI API', 'Framer Motion'],
      github: '#',
      external: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with drag-and-drop functionality, real-time updates, and team workspaces.',
      tech: ['React', 'Firebase', 'Redux', 'Styled Components'],
      github: '#',
      external: '#',
    }
  ];

  return (
    <section id="projects" className="section bg-slate-50" style={{ background: '#f8fafc' }}>
      <div className="container">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}
        >
          <h2 className="text-gradient" style={{ fontSize: '2.5rem', margin: 0 }}>Some Things I've Built</h2>
          <div style={{ height: '1px', background: 'var(--text-muted)', flexGrow: 1, maxWidth: '300px', opacity: 0.3 }} />
        </motion.div>

        <div className="grid grid-3" style={{ gap: '2rem' }}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass hover-lift transition-smooth"
              style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', background: '#fff' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <Folder size={40} className="text-secondary" style={{ color: 'var(--accent-primary)' }} />
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={project.github} className="text-muted" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color='var(--text-muted)'}>
                    <Github size={20} />
                  </a>
                  <a href={project.external} className="text-muted" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color='var(--text-muted)'}>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                {project.title}
              </h3>
              
              <p className="text-secondary" style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1 }}>
                {project.description}
              </p>

              <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', fontFamily: 'monospace', color: 'var(--text-muted)' }}>
                {project.tech.map((tech, j) => (
                  <li key={j}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
