import React from 'react';
import { motion } from 'framer-motion';

interface ImageCardProps {
  imageSrc?: string;
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  delay?: number;
  active?: boolean;
  onClick?: () => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  imageSrc,
  icon,
  title,
  subtitle,
  delay = 0,
  active = false,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer ${
        active
          ? 'border-blue-500 bg-slate-800/90 shadow-lg shadow-blue-500/20'
          : 'border-slate-800 bg-slate-900/80 hover:border-blue-500/50 hover:bg-slate-800/60'
      }`}
    >
      {imageSrc && (
        <div className="relative h-48 md:h-56 w-full overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>
      )}

      <div className={`p-6 flex flex-col items-center text-center ${!imageSrc ? 'py-10' : ''}`}>
        {icon && (
          <div className="mb-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all">
            {icon}
          </div>
        )}
        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-2 text-sm md:text-base text-slate-400 group-hover:text-slate-300">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
};
