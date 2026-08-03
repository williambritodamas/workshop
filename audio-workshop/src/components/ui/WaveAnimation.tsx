import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface WaveAnimationProps {
  color?: string;
  animate?: boolean;
  speed?: number;
}

export const WaveAnimation: React.FC<WaveAnimationProps> = ({ color = '#3B82F6', animate = true, speed = 1 }) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current || !animate) return;
    const path = pathRef.current;
    const length = path.getTotalLength();
    let start = 0;
    let rafId: number;

    const tick = () => {
      start = (start - 0.3 * speed + length) % length;
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${start}`;
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [animate, speed]);

  const d = (() => {
    const pts: string[] = [];
    for (let i = 0; i <= 120; i++) {
      const x = (i / 120) * 100;
      const y = 50 - Math.sin((i / 120) * Math.PI * 4) * 35;
      pts.push(`${x},${y}`);
    }
    return `M${pts.join(' L')}`;
  })();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-24 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
        <path
          ref={pathRef}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
};
