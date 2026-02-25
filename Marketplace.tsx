import { motion } from 'framer-motion';
import { ShoppingCart, TreeDeciduous, Wind, Sun } from 'lucide-react';

interface MarketplaceProps {
  showNotification: (message: string) => void;
}

const projects = [
  {
    id: 1,
    title: 'Amazon Reforestation',
    description: 'Support reforestation in the Amazon rainforest',
    price: 15,
    image: '/images/reforestation.jpg',
    icon: <TreeDeciduous className="w-5 h-5" />,
    color: 'emerald',
  impact: '1 ton = 5 trees planted',
  location: 'Brazil',
  verified: true,
  },
  {
    id: 2,
    title: 'Wind Energy Project',
    description: 'Invest in clean wind energy generation',
    price: 12,
    image: '/images/wind-energy.jpg',
    icon: <Wind className="w-5 h-5" />,
    color: 'blue',
    impact: '1 ton = 2.5 MWh clean energy',
    location: 'Denmark',
    verified: true,
  },
  {
    id: 3,
    title: 'Solar Farm Initiative',
    description: 'Support community solar installations',
    price: 18,
    image: '/images/solar-farm.jpg',
    icon: <Sun className="w-5 h-5" />,
    color: 'yellow',
    impact: '1 ton = 3 MWh solar power',
    location: 'California, USA',
    verified: true,
  },
];

export default function Marketplace({ showNotification }: MarketplaceProps) {
  return (
    <section id="marketplace" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
        >
          Carbon Credit Marketplace
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Offset your carbon footprint by supporting verified environmental projects worldwide
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  {project.verified && (
                    <span className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-300 text-xs px-3 py-1 rounded-full">
                      ✓ Verified
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className={`bg-${project.color}-500/20 backdrop-blur-sm p-2 rounded-lg`}
                    style={{ backgroundColor: project.color === 'emerald' ? 'rgba(16, 185, 129, 0.2)' : project.color === 'blue' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(245, 158, 11, 0.2)' }}
                  >
                    <span className={
                      project.color === 'emerald' ? 'text-emerald-400' :
                      project.color === 'blue' ? 'text-blue-400' : 'text-yellow-400'
                    }>
                      {project.icon}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    {project.impact}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    {project.location}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <div>
                    <span className="text-emerald-400 font-bold text-lg">${project.price}</span>
                    <span className="text-gray-400 text-sm">/ton</span>
                  </div>
                  <motion.button
                    onClick={() => showNotification(`Carbon credits purchased for $${project.price}/ton!`)}
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Purchase
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
