import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Leaf, TrendingDown } from 'lucide-react';

interface CalculatorProps {
  showNotification: (message: string) => void;
}

export default function CarbonCalculator({ showNotification }: CalculatorProps) {
  const [formData, setFormData] = useState({
    transport: '',
    electricity: '',
    diet: 'meat',
    waste: '',
  });
  const [result, setResult] = useState<{
    daily: number;
    annual: number;
    score: number;
  } | null>(null);

  const calculateCarbon = () => {
    const transport = parseFloat(formData.transport) || 0;
    const electricity = parseFloat(formData.electricity) || 0;
    const waste = parseFloat(formData.waste) || 0;

    const transportEmissions = transport * 0.12;
    const electricityEmissions = (electricity * 0.5) / 30;
    const dietEmissions = formData.diet === 'meat' ? 7.2 : formData.diet === 'vegetarian' ? 3.8 : 2.9;
    const wasteEmissions = waste * 0.6 / 7;

    const dailyTotal = transportEmissions + electricityEmissions + dietEmissions + wasteEmissions;
    const annualTotal = dailyTotal * 365 / 1000;
    const ecoScore = Math.max(0, 100 - annualTotal * 10);

    setResult({
      daily: dailyTotal,
      annual: annualTotal,
      score: ecoScore,
    });

    showNotification('Carbon footprint calculated successfully!');
  };

  return (
    <section id="calculator" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
        >
          AI Carbon Calculator
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Transportation (km/day)</label>
              <input
                type="number"
                value={formData.transport}
                onChange={(e) => setFormData({ ...formData, transport: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                placeholder="Enter kilometers"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Electricity Usage (kWh/month)</label>
              <input
                type="number"
                value={formData.electricity}
                onChange={(e) => setFormData({ ...formData, electricity: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                placeholder="Enter kWh"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Diet Type</label>
              <select
                value={formData.diet}
                onChange={(e) => setFormData({ ...formData, diet: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
              >
                <option value="meat">Regular Meat Diet</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Waste Production (kg/week)</label>
              <input
                type="number"
                value={formData.waste}
                onChange={(e) => setFormData({ ...formData, waste: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                placeholder="Enter kg"
              />
            </div>
          </div>

          <motion.button
            onClick={calculateCarbon}
            className="w-full mt-8 bg-gradient-to-r from-emerald-500 to-teal-500 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calculator className="w-5 h-5" />
            Calculate My Carbon Footprint
          </motion.button>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-emerald-500/10 border border-emerald-400/30 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Leaf className="w-6 h-6 text-emerald-400" />
                Your Carbon Footprint Analysis
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-1">Daily Emissions</p>
                  <p className="text-2xl font-bold text-white">{result.daily.toFixed(2)} kg CO₂</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-1">Annual Emissions</p>
                  <p className="text-2xl font-bold text-white">{result.annual.toFixed(2)} tons CO₂</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-1">Eco Score</p>
                  <p className="text-2xl font-bold text-emerald-400">{Math.round(result.score)}/100</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 rounded-full h-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${result.score}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full"
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-400">
                  <span>High Impact</span>
                  <span>Low Impact</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/5 rounded-xl flex items-start gap-3">
                <TrendingDown className="w-5 h-5 text-emerald-400 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">AI Recommendation</p>
                  <p className="text-sm text-gray-400">
                    Consider using public transport or cycling to reduce your transportation emissions by up to 2.4 tons/year.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
