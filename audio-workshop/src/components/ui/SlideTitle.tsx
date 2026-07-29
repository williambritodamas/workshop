import React from 'react';

interface SlideTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  center?: boolean;
}

export const SlideTitle: React.FC<SlideTitleProps> = ({
  title,
  subtitle,
  badge,
  center = true,
}) => {
  return (
    <div
      className={`relative z-20 flex flex-col px-6 py-4 rounded-2xl bg-slate-950/60 border border-white/5 backdrop-blur-sm mb-8 shrink-0 ${center ? 'items-center text-center' : 'items-start text-left'}`}
      style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
    >
      {badge && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-cyan-300 uppercase bg-blue-500/20 border border-cyan-500/30 rounded-full backdrop-blur-md shadow-lg">
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-2xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg md:text-xl font-semibold text-slate-100 max-w-3xl leading-relaxed drop-shadow-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};
