import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Layout, Database } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Frontend React', icon: <Layout className="text-blue-500" />, desc: 'Modern reactive UIs with Framer Motion & Tailwind/CSS.' },
    { name: 'Backend Node.js', icon: <Server className="text-green-500" />, desc: 'Scalable REST and GraphQL APIs.' },
    { name: 'Database Architecture', icon: <Database className="text-purple-500" />, desc: 'PostgreSQL, MongoDB, and Redis optimization.' },
    { name: 'System Design', icon: <Code2 className="text-orange-500" />, desc: 'Microservices and cloud infrastructure.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="about" className="section bg-white" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About Me</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--accent-primary)', marginBottom: '3rem', borderRadius: '2px' }} />
        </motion.div>

        <div className="grid grid-2 text-secondary" style={{ gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            <p style={{ marginBottom: '1.5rem' }}>
              Hello! My name is Naufal Azmi and I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom templates — turns out hacking together HTML & CSS taught me a lot about architecture & design!
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(140px, 200px))', gap: '10px 10px', marginTop: '20px', padding: 0, listStyle: 'none' }}>
              {['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Next.js', 'Framer Motion'].map((tech, i) => (
                <li key={i} style={{ position: 'relative', paddingLeft: '20px', fontSize: '1rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)', content: '▹' }}>▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid"
            style={{ gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="glass hover-lift" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(248, 250, 252, 0.8)' }}>
                <div style={{ padding: '1rem', background: '#fff', borderRadius: '12px', width: 'fit-content', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                  {skill.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{skill.name}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
