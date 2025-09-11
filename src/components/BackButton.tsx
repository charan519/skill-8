import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useBackNavigation } from '../hooks/useBackNavigation';

interface BackButtonProps {
  className?: string;
}

export function BackButton({ className = '' }: BackButtonProps) {
  const goBack = useBackNavigation();

  return (
    <button
      onClick={goBack}
      className={`inline-flex items-center text-gray-400 hover:text-white transition-colors group ${className}`}
    >
      <motion.div
        initial={{ x: 0 }}
        whileHover={{ x: -4 }}
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
      </motion.div>
      <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all group-hover:after:w-full">
        Back
      </span>
    </button>
  );
}