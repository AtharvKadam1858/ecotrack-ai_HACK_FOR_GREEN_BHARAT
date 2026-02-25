import { motion } from 'framer-motion';
import { Leaf, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <Leaf className="w-8 h-8 text-emerald-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                EcoTrack AI
              </span>
            </motion.a>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering individuals and organizations to understand, reduce, and offset their carbon footprint with AI-powered insights.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-emerald-500/20 hover:text-emerald-400 transition-all"
                  whileHover={{ y: -2 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#calculator" className="hover:text-emerald-400 transition">Calculator</a></li>
              <li><a href="#analytics" className="hover:text-emerald-400 transition">Analytics</a></li>
              <li><a href="#marketplace" className="hover:text-emerald-400 transition">Marketplace</a></li>
              <li><a href="#dashboard" className="hover:text-emerald-400 transition">Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 EcoTrack AI. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span>Carbon Neutral Company</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
