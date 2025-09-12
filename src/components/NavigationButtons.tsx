import React from 'react';
import { motion } from 'framer-motion';
import { Home, ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface NavigationButtonsProps {
  showBack?: boolean;
  showHome?: boolean;
  className?: string;
}

export function NavigationButtons({ showBack = true, showHome = true, className = '' }: NavigationButtonsProps) {
  const navigate = useNavigate();

  return (
    <div className={`fixed top-16 sm:top-20 left-2 sm:left-4 z-40 flex items-center gap-2 sm:gap-4 ${className}`}>
      {showBack && (
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass-card px-3 sm:px-4 py-2 flex items-center gap-1 sm:gap-2 text-white hover:bg-white/10 transition-colors text-sm sm:text-base"
        >
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: -4 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </motion.div>
          <span className="relative font-medium">
            Back
          </span>
        </motion.button>
      )}
      
      {showHome && (
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card px-3 sm:px-4 py-2 flex items-center gap-1 sm:gap-2 text-white hover:bg-white/10 transition-colors text-sm sm:text-base"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <span className="relative font-medium">
              Home
            </span>
          </motion.button>
        </Link>
      )}
    </div>
  );
}