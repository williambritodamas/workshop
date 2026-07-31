import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

interface Pattern {
  id: string;
  name: string;
  description: string;
  useCase: string;
  svg: React.ReactNode;
}

const patterns: Pattern[] = [
  {
    id: 'omni',
    name: 'Omnidirecional',
    description: 'Capta o som igualmente de todas as direções.',
    useCase: 'Ideal para captar ambiente, corais ou múltiplas fontes ao redor.',
    svg: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 md:w-36 md:h-36">
        <circle cx="60" cy="60" r="45" fill="none" stroke="#3B82F6" strokeWidth="2" opacity={0.3} />
        <circle cx="60" cy="60" r="45" fill="rgba(59,130,246,0.08)" />
        <circle cx="60" cy="60" r="4" fill="#3B82F6" />
        <circle cx="60" cy="60" r="25" fill="none" stroke="#3B82F6" strokeWidth="1" opacity={0.15} />
      </svg>
    ),
  },
  {
    id: 'cardioide',
    name: 'Cardioide',
    description: 'Capta principalmente da frente, rejeita o fundo.',
    useCase: 'Padrão mais comum para vocais ao vivo e palestras.',
    svg: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 md:w-36 md:h-36">
        <path d="M60.00 14.00 L 62.41 14.09 L 64.80 14.38 L 67.15 14.85 L 69.46 15.50 L 71.70 16.32 L 73.87 17.32 L 75.94 18.48 L 77.90 19.79 L 79.75 21.25 L 81.46 22.83 L 83.03 24.53 L 84.46 26.34 L 85.72 28.23 L 86.83 30.21 L 87.76 32.24 L 88.53 34.31 L 89.12 36.42 L 89.54 38.53 L 89.80 40.65 L 89.88 42.75 L 89.80 44.82 L 89.56 46.84 L 89.17 48.80 L 88.63 50.70 L 87.97 52.51 L 87.17 54.22 L 86.27 55.84 L 85.26 57.34 L 84.17 58.73 L 83.00 60.00 L 81.77 61.14 L 80.48 62.15 L 79.16 63.04 L 77.82 63.79 L 76.47 64.41 L 75.11 64.91 L 73.78 65.29 L 72.47 65.55 L 71.19 65.70 L 69.96 65.75 L 68.78 65.70 L 67.67 65.57 L 66.63 65.37 L 65.66 65.09 L 64.76 64.76 L 63.95 64.39 L 63.23 63.98 L 62.58 63.55 L 62.02 63.11 L 61.54 62.67 L 61.14 62.23 L 60.81 61.82 L 60.55 61.43 L 60.35 61.07 L 60.20 60.76 L 60.10 60.49 L 60.04 60.28 L 60.01 60.13 L 60.00 60.03 L 60.00 60.00 L 60.00 60.03 L 59.99 60.13 L 59.96 60.28 L 59.90 60.49 L 59.80 60.76 L 59.65 61.07 L 59.45 61.43 L 59.19 61.82 L 58.86 62.23 L 58.46 62.67 L 57.98 63.11 L 57.42 63.55 L 56.77 63.98 L 56.05 64.39 L 55.24 64.76 L 54.34 65.09 L 53.37 65.37 L 52.33 65.57 L 51.22 65.70 L 50.04 65.75 L 48.81 65.70 L 47.53 65.55 L 46.22 65.29 L 44.89 64.91 L 43.53 64.41 L 42.18 63.79 L 40.84 63.04 L 39.52 62.15 L 38.23 61.14 L 37.00 60.00 L 35.83 58.73 L 34.74 57.34 L 33.73 55.84 L 32.83 54.22 L 32.03 52.51 L 31.37 50.70 L 30.83 48.80 L 30.44 46.84 L 30.20 44.82 L 30.12 42.75 L 30.20 40.65 L 30.46 38.53 L 30.88 36.42 L 31.47 34.31 L 32.24 32.24 L 33.17 30.21 L 34.28 28.23 L 35.54 26.34 L 36.97 24.53 L 38.54 22.83 L 40.25 21.25 L 42.10 19.79 L 44.06 18.48 L 46.13 17.32 L 48.30 16.32 L 50.54 15.50 L 52.85 14.85 L 55.20 14.38 L 57.59 14.09 L 60.00 14.00 Z" fill="rgba(59,130,246,0.12)" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="60" cy="60" r="4" fill="#3B82F6" />
      </svg>
    ),
  },
  {
    id: 'supercardioide',
    name: 'Supercardioide',
    description: 'Mais direcional que o cardioide, com rejeição lateral.',
    useCase: 'Indicado para palcos com monitores e ambientes ruidosos.',
    svg: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 md:w-36 md:h-36">
        <path d="M60.00 14.00 L 62.41 14.10 L 64.79 14.41 L 67.14 14.92 L 69.43 15.63 L 71.65 16.53 L 73.77 17.61 L 75.79 18.86 L 77.68 20.28 L 79.44 21.85 L 81.05 23.55 L 82.49 25.37 L 83.76 27.29 L 84.86 29.30 L 85.77 31.38 L 86.49 33.51 L 87.01 35.68 L 87.35 37.85 L 87.49 40.03 L 87.44 42.18 L 87.21 44.29 L 86.80 46.35 L 86.22 48.33 L 85.48 50.22 L 84.58 52.01 L 83.55 53.69 L 82.40 55.24 L 81.13 56.65 L 79.78 57.92 L 78.34 59.04 L 76.84 60.00 L 75.29 60.80 L 73.71 61.44 L 72.12 61.92 L 70.54 62.24 L 68.97 62.40 L 67.44 62.42 L 65.96 62.29 L 64.54 62.02 L 63.20 61.63 L 61.95 61.13 L 60.80 60.52 L 60.25 60.18 L 61.18 60.95 L 61.99 61.79 L 62.68 62.68 L 63.24 63.59 L 63.67 64.53 L 63.97 65.47 L 64.15 66.39 L 64.21 67.29 L 64.15 68.15 L 63.99 68.96 L 63.72 69.70 L 63.37 70.37 L 62.93 70.95 L 62.43 71.44 L 61.87 71.82 L 61.27 72.10 L 60.64 72.27 L 60.00 72.33 L 59.36 72.27 L 58.73 72.10 L 58.13 71.82 L 57.57 71.44 L 57.07 70.95 L 56.63 70.37 L 56.28 69.70 L 56.01 68.96 L 55.85 68.15 L 55.79 67.29 L 55.85 66.39 L 56.03 65.47 L 56.33 64.53 L 56.76 63.59 L 57.32 62.68 L 58.01 61.79 L 58.82 60.95 L 59.75 60.18 L 59.20 60.52 L 58.05 61.13 L 56.80 61.63 L 55.46 62.02 L 54.04 62.29 L 52.56 62.42 L 51.03 62.40 L 49.46 62.24 L 47.88 61.92 L 46.29 61.44 L 44.71 60.80 L 43.16 60.00 L 41.66 59.04 L 40.22 57.92 L 38.87 56.65 L 37.60 55.24 L 36.45 53.69 L 35.42 52.01 L 34.52 50.22 L 33.78 48.33 L 33.20 46.35 L 32.79 44.29 L 32.56 42.18 L 32.51 40.03 L 32.65 37.85 L 32.99 35.68 L 33.51 33.51 L 34.23 31.38 L 35.14 29.30 L 36.24 27.29 L 37.51 25.37 L 38.95 23.55 L 40.56 21.85 L 42.32 20.28 L 44.21 18.86 L 46.23 17.61 L 48.35 16.53 L 50.57 15.63 L 52.86 14.92 L 55.21 14.41 L 57.59 14.10 L 60.00 14.00 Z" fill="rgba(59,130,246,0.12)" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="60" cy="60" r="4" fill="#3B82F6" />
      </svg>
    ),
  },
  {
    id: 'hipercardioide',
    name: 'Hipercardioide',
    description: 'Altamente direcional, capta apenas o que está na frente.',
    useCase: 'Usado em cinema e gravações externas para isolar a fonte.',
    svg: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 md:w-36 md:h-36">
        <path d="M60.00 14.00 L 62.40 14.11 L 64.79 14.44 L 67.13 14.99 L 69.41 15.74 L 71.60 16.70 L 73.69 17.86 L 75.66 19.19 L 77.50 20.70 L 79.18 22.36 L 80.69 24.17 L 82.02 26.09 L 83.17 28.12 L 84.11 30.23 L 84.85 32.40 L 85.38 34.62 L 85.70 36.86 L 85.81 39.10 L 85.71 41.32 L 85.40 43.50 L 84.90 45.62 L 84.20 47.67 L 83.33 49.62 L 82.28 51.45 L 81.08 53.15 L 79.73 54.71 L 78.26 56.12 L 76.69 57.36 L 75.02 58.42 L 73.29 59.30 L 71.50 60.00 L 69.68 60.51 L 67.85 60.83 L 66.03 60.95 L 64.23 60.90 L 62.48 60.67 L 60.80 60.26 L 60.81 60.31 L 62.31 61.03 L 63.71 61.89 L 64.98 62.87 L 66.11 63.97 L 67.10 65.16 L 67.94 66.43 L 68.61 67.75 L 69.12 69.12 L 69.46 70.51 L 69.64 71.90 L 69.65 73.28 L 69.50 74.62 L 69.19 75.92 L 68.73 77.14 L 68.14 78.29 L 67.42 79.33 L 66.59 80.27 L 65.65 81.08 L 64.63 81.76 L 63.53 82.30 L 62.38 82.69 L 61.20 82.92 L 60.00 83.00 L 58.80 82.92 L 57.62 82.69 L 56.47 82.30 L 55.37 81.76 L 54.35 81.08 L 53.41 80.27 L 52.58 79.33 L 51.86 78.29 L 51.27 77.14 L 50.81 75.92 L 50.50 74.62 L 50.35 73.28 L 50.36 71.90 L 50.54 70.51 L 50.88 69.12 L 51.39 67.75 L 52.06 66.43 L 52.90 65.16 L 53.89 63.97 L 55.02 62.88 L 56.29 61.89 L 57.69 61.03 L 59.19 60.31 L 59.20 60.26 L 57.52 60.67 L 55.77 60.90 L 53.97 60.95 L 52.15 60.83 L 50.32 60.51 L 48.50 60.00 L 46.71 59.30 L 44.98 58.42 L 43.31 57.36 L 41.74 56.12 L 40.27 54.71 L 38.92 53.15 L 37.72 51.45 L 36.67 49.62 L 35.80 47.67 L 35.10 45.62 L 34.60 43.50 L 34.29 41.32 L 34.19 39.10 L 34.30 36.86 L 34.62 34.62 L 35.15 32.40 L 35.89 30.23 L 36.83 28.12 L 37.98 26.09 L 39.31 24.17 L 40.82 22.36 L 42.50 20.70 L 44.34 19.19 L 46.31 17.86 L 48.40 16.70 L 50.59 15.74 L 52.87 14.99 L 55.21 14.44 L 57.60 14.11 L 60.00 14.00 Z" fill="rgba(59,130,246,0.12)" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="60" cy="60" r="4" fill="#3B82F6" />
      </svg>
    ),
  },
  {
    id: 'bidirecional',
    name: 'Bidirecional (Figura 8)',
    description: 'Capta igualmente da frente e de trás, rejeita os lados.',
    useCase: 'Usado em entrevistas frente a frente e gravação em dupla.',
    svg: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 md:w-36 md:h-36">
        <path d="M60.00 14.00 L 62.40 14.13 L 64.78 14.50 L 67.11 15.13 L 69.35 15.99 L 71.50 17.08 L 73.52 18.39 L 75.39 19.91 L 77.09 21.61 L 78.61 23.48 L 79.92 25.50 L 81.01 27.65 L 81.87 29.89 L 82.50 32.22 L 82.87 34.60 L 83.00 37.00 L 82.87 39.40 L 82.50 41.78 L 81.87 44.11 L 81.01 46.35 L 79.92 48.50 L 78.61 50.52 L 77.09 52.39 L 75.39 54.09 L 73.52 55.61 L 71.50 56.92 L 69.35 58.01 L 67.11 58.87 L 64.78 59.50 L 62.40 59.87 L 60.00 60.00 L 62.40 60.13 L 64.78 60.50 L 67.11 61.13 L 69.35 61.99 L 71.50 63.08 L 73.52 64.39 L 75.39 65.91 L 77.09 67.61 L 78.61 69.48 L 79.92 71.50 L 81.01 73.65 L 81.87 75.89 L 82.50 78.22 L 82.87 80.60 L 83.00 83.00 L 82.87 85.40 L 82.50 87.78 L 81.87 90.11 L 81.01 92.35 L 79.92 94.50 L 78.61 96.52 L 77.09 98.39 L 75.39 100.09 L 73.52 101.61 L 71.50 102.92 L 69.35 104.01 L 67.11 104.87 L 64.78 105.50 L 62.40 105.87 L 60.00 106.00 L 57.60 105.87 L 55.22 105.50 L 52.89 104.87 L 50.65 104.01 L 48.50 102.92 L 46.48 101.61 L 44.61 100.09 L 42.91 98.39 L 41.39 96.52 L 40.08 94.50 L 38.99 92.35 L 38.13 90.11 L 37.50 87.78 L 37.13 85.40 L 37.00 83.00 L 37.13 80.60 L 37.50 78.22 L 38.13 75.89 L 38.99 73.65 L 40.08 71.50 L 41.39 69.48 L 42.91 67.61 L 44.61 65.91 L 46.48 64.39 L 48.50 63.08 L 50.65 61.99 L 52.89 61.13 L 55.22 60.50 L 57.60 60.13 L 60.00 60.00 L 57.60 59.87 L 55.22 59.50 L 52.89 58.87 L 50.65 58.01 L 48.50 56.92 L 46.48 55.61 L 44.61 54.09 L 42.91 52.39 L 41.39 50.52 L 40.08 48.50 L 38.99 46.35 L 38.13 44.11 L 37.50 41.78 L 37.13 39.40 L 37.00 37.00 L 37.13 34.60 L 37.50 32.22 L 38.13 29.89 L 38.99 27.65 L 40.08 25.50 L 41.39 23.48 L 42.91 21.61 L 44.61 19.91 L 46.48 18.39 L 48.50 17.08 L 50.65 15.99 L 52.89 15.13 L 55.22 14.50 L 57.60 14.13 L 60.00 14.00 Z" fill="rgba(59,130,246,0.12)" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="60" cy="60" r="4" fill="#3B82F6" />
      </svg>
    ),
  },
];

export const PolarPatternAnimation: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-6">
      {/* Seletor de padrões */}
      <div className="flex flex-wrap justify-center gap-2">
        {patterns.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setActive(idx)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              active === idx ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Diagrama + descrição */}
      <AnimatePresence mode="wait">
        <motion.div
          key={patterns[active].id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-3xl bg-slate-900/90 border border-blue-500/30 shadow-xl w-full"
        >
          <div className="shrink-0 flex items-center justify-center">
            {patterns[active].svg}
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
              <h3 className="text-lg font-extrabold text-white">{patterns[active].name}</h3>
            </div>
            <p className="text-sm text-slate-300 mb-2">{patterns[active].description}</p>
            <div className="flex items-start gap-2">
              <ArrowUp className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <p className="text-xs text-slate-400 italic">{patterns[active].useCase}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
