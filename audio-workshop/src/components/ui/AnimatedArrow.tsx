import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface AnimatedArrowProps {
  direction?: 'right' | 'down';
  label?: string;
  delay?: number;
}

export const AnimatedArrow: React.FC<AnimatedArrowProps> = ({
  direction = 'right',
  label,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center justify-center p-2 text-blue-400 my-auto"
    >
      <motion.div
        animate={
          direction === 'right'
            ? { x: [0, 8, 0] }
            : { y: [0, 8, 0] }
        }
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        className="p-3 bg-blue-500/10 rounded-full border border-blue-500/30 shadow-lg shadow-blue-500/10"
      >
        {direction === 'right' ? (
          <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
        ) : (
          <ArrowDown className="w-6 h-6 md:w-8 md:h-8" />
        )}
      </motion.div>
      {label && (
        <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          {label}
        </span>
      )}
    </motion.div>
  );
};
