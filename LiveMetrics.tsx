import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, TreeDeciduous, Zap } from 'lucide-react';

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix: string;
  change: string;
  changeColor: string;
  delay: number;
}

function MetricCard({ icon, label, value, suffix, change, changeColor, delay }: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.25)' }}
      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-emerald-400">{icon}</div>
        <span className={`text-sm font-medium ${changeColor}`}>{change}</span>
      </div>
      <h3 className="text-gray-400 text-sm mb-2">{label}</h3>
      <p className="text-3xl font-bold">
        {displayValue.toLocaleString()}
        <span className="text-sm text-gray-500 ml-1">{suffix}</span>
      </p>
    </motion.div>
  );
}

export default function LiveMetrics() {
  const metrics = [
    {
      icon: <Globe className="w-8 h-8" />,
      label: 'CO₂ Saved Today',
      value: 2847,
      suffix: 'tons',
      change: '+2.3%',
      changeColor: 'text-emerald-400',
    },
    {
      icon: <Users className="w-8 h-8" />,
      label: 'Active Users',
      value: 12847,
      suffix: 'tracking',
      change: '+12%',
      changeColor: 'text-blue-400',
    },
    {
      icon: <TreeDeciduous className="w-8 h-8" />,
      label: 'Trees Equivalent',
      value: 56789,
      suffix: 'planted',
      change: '+8.7%',
      changeColor: 'text-yellow-400',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      label: 'Energy Reduced',
      value: 3421,
      suffix: 'MWh',
      change: '-5.2%',
      changeColor: 'text-purple-400',
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
        >
          Live Global Impact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} {...metric} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
