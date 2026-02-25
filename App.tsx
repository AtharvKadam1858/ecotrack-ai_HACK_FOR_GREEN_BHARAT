import { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveMetrics from './components/LiveMetrics';
import CarbonCalculator from './components/CarbonCalculator';
import Analytics from './components/Analytics';
import Marketplace from './components/Marketplace';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Scene3D from './components/Scene3D';

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-950 via-slate-950 to-teal-950 text-white overflow-x-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950/80 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar onSignIn={() => setIsAuthOpen(true)} />

        <main>
          <Hero />
          <LiveMetrics />
          <CarbonCalculator showNotification={showNotification} />
          <Analytics />
          <Marketplace showNotification={showNotification} />
          <Dashboard />
        </main>

        <Footer />
      </div>

      {/* Auth Modal */}
      <AnimatePresence>
        {isAuthOpen && (
          <AuthModal onClose={() => setIsAuthOpen(false)} showNotification={showNotification} />
        )}
      </AnimatePresence>

      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed top-24 right-6 z-50"
          >
            <div className="backdrop-blur-xl bg-emerald-500/20 border border-emerald-400/30 rounded-xl px-6 py-4 flex items-center gap-3 shadow-2xl">
              <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">{notification}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
