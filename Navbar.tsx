import { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Menu, X } from 'lucide-react';

interface NavbarProps {
  onSignIn: () => void;
}

export default function Navbar({ onSignIn }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Marketplace', href: '#marketplace' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/50 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <Leaf className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                <div className="absolute inset-0 bg-emerald-400/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                EcoTrack AI
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-emerald-400 transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
              <motion.button
                onClick={onSignIn}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl md:hidden pt-20"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-2xl text-gray-300 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              onClick={() => {
                onSignIn();
                setIsMobileMenuOpen(false);
              }}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3 rounded-full text-xl font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Sign In
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
}
