import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const aulas = [
  { num: 1, title: 'Introdução ao Som' },
  { num: 2, title: 'Microfones' },
  { num: 3, title: 'Ganho e Sinal' },
  { num: 4, title: 'Equalização' },
  { num: 5, title: 'Mixagem' },
  { num: 6, title: 'Compressão' },
  { num: 7, title: 'Áudio ao Vivo' },
  { num: 8, title: 'Feedback e Microfonia' },
  { num: 9, title: 'Sistemas de Som' },
  { num: 10, title: 'Montagem de Palco' },
  { num: 11, title: 'Setup Completo' },
  { num: 12, title: 'Desafio Final' },
];

const nodePositions = aulas.map((_, i) => {
  const angle = (i / (aulas.length - 1)) * Math.PI;
  const rx = 200;
  const ry = 70;
  return {
    x: 220 + rx * Math.cos(angle - Math.PI),
    y: 60 - ry * Math.sin(angle - Math.PI),
  };
});

export const WorkshopTimeline: React.FC = () => {
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursor((prev) => (prev < aulas.length - 1 ? prev + 1 : prev));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const cursorPos = nodePositions[cursor];

  const pathD = nodePositions.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  return (
    <div className="w-full max-w-2xl mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
      <h3 className="text-white font-bold text-sm mb-4 text-center">Jornada de Aprendizado</h3>
      <svg viewBox="0 0 440 140" className="w-full">
        <path d={pathD} fill="none" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
        <path d={pathD} fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"
          strokeDasharray={`${(cursor / (aulas.length - 1)) * 1000} 1000`}
          style={{ transition: 'stroke-dasharray 0.8s ease' }}
        />
        {nodePositions.map((pos, i) => (
          <g key={aulas[i].num}>
            <circle cx={pos.x} cy={pos.y} r={i <= cursor ? 10 : 7}
              fill={i <= cursor ? '#3B82F6' : '#1E293B'}
              stroke={i <= cursor ? '#60A5FA' : '#475569'}
              strokeWidth="2"
              style={{ transition: 'all 0.5s ease' }}
            />
            <text x={pos.x} y={pos.y + 4} textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">
              {aulas[i].num}
            </text>
            <text x={pos.x} y={pos.y + 20} textAnchor="middle"
              fill={i <= cursor ? '#94A3B8' : '#475569'}
              fontSize="6" fontWeight="bold"
              style={{ transition: 'fill 0.5s ease' }}
            >
              {aulas[i].title}
            </text>
          </g>
        ))}
        {cursorPos && (
          <motion.circle cx={cursorPos.x} cy={cursorPos.y} r="14"
            fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.4"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </svg>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <span>Aula {cursor + 1} de {aulas.length}</span>
        <span className="text-blue-400 font-bold">{aulas[cursor].title}</span>
      </div>
    </div>
  );
};
