import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`} style={{ padding: isScrolled ? '1rem 0' : '1.5rem 0' }}>
      <div className="container flex-center" style={{ justifyContent: 'space-between' }}>
        <a href="#home" className="text-xl font-bold text-gradient">
          Naufal Azmi
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-center" style={{ gap: '2rem', display: 'none' }}>
           <div style={{ display: 'flex', gap: '2rem' }}>
              {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-secondary hover-primary transition-smooth" style={{ fontWeight: 500 }}>
                    {link.name}
                  </a>
              ))}
           </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none' /* Will fix via CSS utility later */ }}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass absolute w-full"
            style={{ marginTop: '1rem', padding: '1rem' }}
          >
            <div className="flex flex-col" style={{ gap: '1rem', display: 'flex', flexDirection: 'column' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-secondary p-2 block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
