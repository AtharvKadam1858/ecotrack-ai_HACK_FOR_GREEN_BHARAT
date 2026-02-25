import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, TrendingUp, Target, Users, Plus, BarChart3, Share2, Trophy } from 'lucide-react';

type TabType = 'overview' | 'trends' | 'goals' | 'community';

const tabs = [
  { id: 'overview' as TabType, label: 'Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
  { id: 'trends' as TabType, label: 'Trends', icon: <TrendingUp className="w-4 h-4" /> },
  { id: 'goals' as TabType, label: 'Goals', icon: <Target className="w-4 h-4" /> },
  { id: 'community' as TabType, label: 'Community', icon: <Users className="w-4 h-4" /> },
];

function OverviewTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white/5 rounded-xl p-6">
        <h4 className="text-lg font-semibold mb-4">Your Impact Summary</h4>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Monthly Reduction:</span>
            <span className="text-emerald-400 font-semibold">-23%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Trees Saved:</span>
            <span className="text-emerald-400 font-semibold">127</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Credits Earned:</span>
            <span className="text-emerald-400 font-semibold">45</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Global Rank:</span>
            <span className="text-yellow-400 font-semibold">#1,247</span>
          </div>
        </div>
      </div>
      <div className="bg-white/5 rounded-xl p-6">
        <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
        <div className="space-y-3">
          <button className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition flex items-center gap-3">
            <Plus className="w-5 h-5 text-emerald-400" />
            Log Daily Activity
          </button>
          <button className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition flex items-center gap-3">
            <BarChart3 className="w-5 h-5 text-blue-400" />
            View Detailed Report
          </button>
          <button className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition flex items-center gap-3">
            <Share2 className="w-5 h-5 text-purple-400" />
            Share Progress
          </button>
        </div>
      </div>
    </div>
  );
}

function TrendsTab() {
  const weeklyData = [
    { week: 'Week 1', value: 85 },
    { week: 'Week 2', value: 78 },
    { week: 'Week 3', value: 72 },
    { week: 'Week 4', value: 65 },
  ];

  return (
    <div className="bg-white/5 rounded-xl p-6">
      <h4 className="text-lg font-semibold mb-6">Carbon Footprint Trends</h4>
      <div className="space-y-4">
        {weeklyData.map((item, index) => (
          <div key={item.week} className="flex items-center gap-4">
            <span className="w-16 text-gray-400">{item.week}</span>
            <div className="flex-1 bg-white/10 rounded-full h-6 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full flex items-center justify-end pr-2"
              >
                <span className="text-xs font-medium">{item.value}kg</span>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-400/30 rounded-xl">
        <p className="text-sm text-gray-300">
          📉 You've reduced your weekly emissions by <span className="text-emerald-400 font-semibold">23.5%</span> this month!
        </p>
      </div>
    </div>
  );
}

function GoalsTab() {
  const goals = [
    { name: 'Reduce Transport Emissions', progress: 75, color: 'emerald' },
    { name: 'Solar Panel Installation', progress: 40, color: 'blue' },
    { name: 'Zero Waste Week', progress: 90, color: 'purple' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white/5 rounded-xl p-6">
        <h4 className="text-lg font-semibold mb-4">Active Goals</h4>
        <div className="space-y-4">
          {goals.map((goal) => (
            <div key={goal.name}>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">{goal.name}</span>
                <span className="text-gray-400">{goal.progress}%</span>
              </div>
              <div className="bg-white/10 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${goal.progress}%` }}
                  className={`h-full rounded-full ${
                    goal.color === 'emerald' ? 'bg-emerald-400' :
                    goal.color === 'blue' ? 'bg-blue-400' : 'bg-purple-400'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white/5 rounded-xl p-6">
        <h4 className="text-lg font-semibold mb-4">Set New Goal</h4>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Goal name"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="number"
            placeholder="Target reduction (tons CO₂)"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="date"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 py-2 rounded-lg font-medium">
            Create Goal
          </button>
        </div>
      </div>
    </div>
  );
}

function CommunityTab() {
  const leaderboard = [
    { rank: 1, name: 'Alex Green', reduction: '-42%', medal: '🥇' },
    { rank: 2, name: 'Sam Eco', reduction: '-38%', medal: '🥈' },
    { rank: 3, name: 'Jordan Clean', reduction: '-35%', medal: '🥉' },
    { rank: 4, name: 'You', reduction: '-23%', medal: '' },
  ];

  const challenges = [
    { name: 'Bike to Work Week', participants: 234, color: 'emerald' },
    { name: 'Meatless Monday', participants: 567, color: 'blue' },
    { name: 'Plastic Free July', participants: 892, color: 'purple' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white/5 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold">Leaderboard</h4>
          <Trophy className="w-5 h-5 text-yellow-400" />
        </div>
        <div className="space-y-3">
          {leaderboard.map((user) => (
            <div key={user.rank} className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <span>{user.medal || `${user.rank}.`}</span>
                {user.name}
              </span>
              <span className="text-emerald-400">{user.reduction}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white/5 rounded-xl p-6">
        <h4 className="text-lg font-semibold mb-4">Community Challenges</h4>
        <div className="space-y-3">
          {challenges.map((challenge) => (
            <div
              key={challenge.name}
              className={`border border-${challenge.color}-400/30 rounded-lg p-3`}
              style={{
                borderColor: challenge.color === 'emerald' ? 'rgba(16, 185, 129, 0.3)' :
                            challenge.color === 'blue' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(139, 92, 246, 0.3)'
              }}
            >
              <h5 className="font-medium mb-1">{challenge.name}</h5>
              <p className="text-sm text-gray-400">{challenge.participants} participants</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white/5 rounded-xl p-6">
        <h4 className="text-lg font-semibold mb-4">Share Impact</h4>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {['twitter', 'facebook', 'whatsapp', 'instagram'].map((social) => (
            <button
              key={social}
              className="bg-white/5 hover:bg-white/10 p-3 rounded-lg transition"
            >
              <Share2 className="w-5 h-5 mx-auto" />
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-400">Share your progress and inspire others!</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  return (
    <section id="dashboard" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
        >
          Interactive Dashboard
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
        >
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'overview' && <OverviewTab />}
              {activeTab === 'trends' && <TrendsTab />}
              {activeTab === 'goals' && <GoalsTab />}
              {activeTab === 'community' && <CommunityTab />}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
