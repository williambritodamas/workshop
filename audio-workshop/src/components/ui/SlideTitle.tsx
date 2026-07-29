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
      className={`flex flex-col mb-8 shrink-0 ${center ? 'items-center text-center' : 'items-start text-left'}`}
    >
      {badge && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-md">
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
