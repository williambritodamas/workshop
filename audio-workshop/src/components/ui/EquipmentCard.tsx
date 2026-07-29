import React from 'react';
import { motion } from 'framer-motion';

interface EquipmentCardProps {
  imageSrc?: string;
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  tags?: string[];
  delay?: number;
  badge?: string;
  highlight?: boolean;
}

export const EquipmentCard: React.FC<EquipmentCardProps> = ({
  imageSrc,
  icon,
  title,
  subtitle,
  tags,
  delay = 0,
  badge,
  highlight = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
        highlight
          ? 'border-blue-500 bg-slate-900/90 shadow-xl shadow-blue-500/20'
          : 'border-slate-800 bg-slate-900/80 hover:border-blue-500/50 hover:bg-slate-800/80'
      }`}
    >
      {badge && (
        <div className="absolute top-3 right-3 z-10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-300 bg-blue-500/20 border border-blue-500/40 rounded-full backdrop-blur-md">
          {badge}
        </div>
      )}

      {imageSrc && (
        <div className="relative h-44 md:h-48 w-full overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>
      )}

      <div className={`p-6 flex flex-col ${!imageSrc ? 'py-8' : ''}`}>
        {icon && (
          <div className="mb-3 p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit group-hover:scale-110 transition-transform">
            {icon}
          </div>
        )}

        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            {subtitle}
          </p>
        )}

        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
