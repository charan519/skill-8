import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date('2025-09-24T09:00:00'); // September 24, 2025 at 9:00 AM
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div
          key={unit}
          className="glass-card px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 text-center min-w-[70px] sm:min-w-[80px] md:min-w-[100px]"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <motion.span
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400"
            key={value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {String(value).padStart(2, '0')}
          </motion.span>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 capitalize mt-1">{unit}</p>
        </motion.div>
      ))}
    </div>
  );
}