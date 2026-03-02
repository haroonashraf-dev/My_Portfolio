
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter, Mail , Phone } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    // { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen">
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold gradient-text tracking-tighter">
            HAROON.DEV
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0f172a] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-2xl font-semibold text-slate-300 border-b border-white/10 pb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="w-full py-4 rounded-xl bg-indigo-600 text-white text-center font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>

      <footer className="bg-[#0f172a] border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold gradient-text mb-4">HAROON.DEV</h3>
              <p className="text-slate-400 max-w-sm">
                Creating immersive digital experiences with modern web technologies. 
                Always learning, always building.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Socials</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/haroonashraf-dev?tab=repositories" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"><Github size={20} /></a>
                <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"><Twitter size={20} /></a>
              </div>
            </div>
           <div>
  <h4 className="font-bold mb-4">Contact</h4>

  {/* Email */}
  <a
    href="mailto:haroonashraf.dev@gmail.com"
    className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-2"
  >
    <Mail size={16} />
    <span>haroonashraf.dev@gmail.com</span>
  </a>

  {/* Phone */}
  <a
    href="tel:+92137656641"
    className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
  >
    <Phone size={16} />
    <span>+92 137386619</span>
  </a>
</div>

          </div>
          <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Haroon. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
