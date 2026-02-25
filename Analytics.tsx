import { motion } from 'framer-motion';
import { Bike, Sun, Leaf } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const predictionData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Predicted CO₂ (tons)',
      data: [12, 11.8, 11.5, 11.2, 10.8, 10.5, 10.2, 9.8, 9.5, 9.2, 8.8, 8.5],
      borderColor: '#10b981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      tension: 0.4,
      fill: true,
    },
    {
      label: 'Target CO₂ (tons)',
      data: [10, 10, 10, 9, 9, 8, 8, 7, 7, 6, 6, 5],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      fill: true,
    },
  ],
};

const breakdownData = {
  labels: ['Transport', 'Electricity', 'Diet', 'Waste', 'Other'],
  datasets: [
    {
      data: [35, 25, 20, 10, 10],
      backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#ef4444'],
      borderWidth: 0,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: { color: '#9ca3af' },
    },
  },
  scales: {
    y: {
      ticks: { color: '#9ca3af' },
      grid: { color: 'rgba(255, 255, 255, 0.05)' },
    },
    x: {
      ticks: { color: '#9ca3af' },
      grid: { color: 'rgba(255, 255, 255, 0.05)' },
    },
  },
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: { color: '#9ca3af' },
    },
  },
};

const recommendations = [
  {
    icon: <Bike className="w-6 h-6" />,
    title: 'Use Public Transport',
    description: 'Reduce emissions by 2.4 tons/year',
    color: 'emerald',
  bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-400/30',
    iconColor: 'text-emerald-400',
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: 'Switch to Solar',
    description: 'Save 3.1 tons CO₂/year',
    color: 'blue',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-400/30',
    iconColor: 'text-blue-400',
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Plant-Based Diet',
    description: 'Reduce by 1.8 tons/year',
    color: 'purple',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-400/30',
    iconColor: 'text-purple-400',
  },
];

export default function Analytics() {
  return (
    <section id="analytics" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
        >
          Predictive Analytics Dashboard
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4">12-Month Carbon Prediction</h3>
            <div className="h-[300px]">
              <Line data={predictionData} options={chartOptions} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4">Emission Sources Breakdown</h3>
            <div className="h-[300px]">
              <Doughnut data={breakdownData} options={doughnutOptions} />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold mb-6">AI Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendations.map((rec, index) => (
              <motion.div
                key={rec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`${rec.bgColor} border ${rec.borderColor} rounded-xl p-4 transition-all cursor-pointer`}
              >
                <div className={`${rec.iconColor} mb-2`}>{rec.icon}</div>
                <h4 className="font-semibold mb-1">{rec.title}</h4>
                <p className="text-sm text-gray-400">{rec.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
