import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Globe, Rocket, Brain, Lock,
  ChevronRight, ArrowRight, Shield, Database, Cpu
} from 'lucide-react';
import { ParticlesBackground } from '../components/ParticlesBackground';
import { NavigationButtons } from '../components/NavigationButtons';
import { RegistrationPopup } from '../components/RegistrationPopup';
import { useScrollToTop } from '../hooks/useScrollToTop';

const tracks = [
  {
    id: 'lms-platform',
    icon: <Database className="w-12 h-12" />,
    title: "LMS Platform Development",
    description: "Build comprehensive Learning Management Systems",
    longDescription: "Create a full-featured LMS platform that addresses real-world educational needs. Your solution should include user management, course creation, assessment tools, progress tracking, and interactive learning features. Focus on scalability, user experience, and meeting specific company constraints that will be provided.",
    tools: ["React/Vue/Angular", "Node.js/Django/Laravel", "PostgreSQL/MongoDB", "AWS/Azure", "Docker"],
    color: "from-blue-500/20 to-purple-500/20"
  }
];

function TrackCard({ track, isSelected, onClick }) {
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        whileHover={{ scale: 1.02 }}
        onClick={() => onClick(track)}
        className={`relative cursor-pointer transition-all duration-300 ${
          isSelected ? 'lg:col-span-2 row-span-2' : ''
        }`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${track.color} rounded-3xl blur-xl transition-all duration-300 ${
          isSelected ? 'opacity-100' : 'opacity-50'
        }`}></div>
        
        <div className="relative h-full border border-white/10 rounded-3xl p-6 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0"></div>
          
          <div className="relative z-10">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${
                isSelected ? 'lg:w-20 lg:h-20' : ''
              }`}
            >
              {track.icon}
            </motion.div>

            <h3 className={`font-bold mb-4 transition-all duration-300 ${
              isSelected ? 'text-3xl lg:text-4xl' : 'text-2xl'
            }`}>
              {track.title}
            </h3>

            <p className="text-gray-300 mb-6">
              {isSelected ? track.longDescription : track.description}
            </p>

            {isSelected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h4 className="text-lg font-semibold mb-3">Problem Statement</h4>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <Lock className="w-5 h-5 text-blue-400" />
                    <p className="text-gray-400">Detailed requirements and company constraints will be released on September 23rd, 2025 at 6:00 PM</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Recommended Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {track.tools.map((tool, index) => (
                      <motion.span
                        key={tool}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-3 py-1 rounded-full bg-white/5 text-sm"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowRegistration(true);
                  }}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register for Skill Sprint
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      <RegistrationPopup
        isOpen={showRegistration}
        onClose={() => setShowRegistration(false)}
      />
    </>
  );
}

export default function Tracks() {
  useScrollToTop();
  const [selectedTrack, setSelectedTrack] = useState(null);
  const containerRef = useRef(null);

  const handleTrackClick = (track) => {
    setSelectedTrack(selectedTrack?.id === track.id ? null : track);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticlesBackground />
      <NavigationButtons />

      <div className="max-w-7xl mx-auto px-4 pt-24" ref={containerRef}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block mb-8 p-4 rounded-full bg-blue-500/5 backdrop-blur-sm"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Code className="w-12 h-12 text-blue-400" />
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
            Challenge Track
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Focus on building innovative LMS platforms with specific company constraints. This single track ensures all teams work on comparable solutions.
          </p>
        </motion.div>

        {/* Tracks Grid */}
        <div className="max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            {tracks.map(track => (
              <TrackCard
                key={track.id}
                track={track}
                isSelected={selectedTrack?.id === track.id}
                onClick={handleTrackClick}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}