import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cable, GripVertical, Tag, ArrowRight, Check } from 'lucide-react';

interface CableLine {
  id: string; x: number; y: number; w?: number; h?: number; color: string;
  angle?: number; label?: string; r?: number;
}

const messyCables: CableLine[] = [
  { id: 'c1', x: 20, y: 10, w: 60, h: 3, color: '#EF4444', angle: 15 },
  { id: 'c2', x: 40, y: 20, w: 50, h: 3, color: '#3B82F6', angle: -20 },
  { id: 'c3', x: 10, y: 35, w: 80, h: 3, color: '#F59E0B', angle: 45 },
  { id: 'c4', x: 30, y: 50, w: 55, h: 3, color: '#10B981', angle: -35 },
  { id: 'c5', x: 15, y: 65, w: 70, h: 3, color: '#A78BFA', angle: 60 },
  { id: 'c6', x: 25, y: 80, w: 45, h: 3, color: '#EC4899', angle: -50 },
  { id: 'knot1', x: 50, y: 28, r: 8, color: '#EF4444' },
  { id: 'knot2', x: 35, y: 55, r: 6, color: '#F59E0B' },
];

const organizedCables: CableLine[] = [
  { id: 'r1', x: 10, y: 10, w: 80, h: 3, color: '#EF4444', label: 'Microfone 1' },
  { id: 'r2', x: 10, y: 25, w: 80, h: 3, color: '#3B82F6', label: 'Microfone 2' },
  { id: 'r3', x: 10, y: 40, w: 80, h: 3, color: '#F59E0B', label: 'PA L' },
  { id: 'r4', x: 10, y: 55, w: 80, h: 3, color: '#10B981', label: 'PA R' },
  { id: 'r5', x: 10, y: 70, w: 80, h: 3, color: '#A78BFA', label: 'Monitor 1' },
  { id: 'r6', x: 10, y: 85, w: 80, h: 3, color: '#EC4899', label: 'Monitor 2' },
  { id: 'velcro1', x: 5, y: 8, w: 4, h: 80, color: '#475569' },
  { id: 'velcro2', x: 91, y: 8, w: 4, h: 80, color: '#475569' },
];

function MessyView() {
  return (
    <g>
      {messyCables.map((c) =>
        c.angle !== undefined ? (
          <line key={c.id} x1={c.x} y1={c.y} x2={c.x + (c.w || 1)} y2={c.y + (c.h || 1)}
            stroke={c.color} strokeWidth="3" strokeLinecap="round" opacity="0.7"
            transform={`rotate(${c.angle}, ${c.x + (c.w || 1) / 2}, ${c.y + (c.h || 1) / 2})`} />
        ) : (
          <circle key={c.id} cx={c.x} cy={c.y} r={c.r || 4} fill={c.color} opacity="0.5" />
        )
      )}
      <rect x="40" y="48" width="20" height="20" rx="10" fill="#EF4444" opacity="0.8" />
      <line x1="44" y1="52" x2="56" y2="64" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="56" y1="52" x2="44" y2="64" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <text x="50" y="78" textAnchor="middle" fill="#EF4444" fontSize="8" fontWeight="bold">BAGUNÇADO</text>
    </g>
  );
}

function OrganizedView() {
  return (
    <g>
      {organizedCables.map((c) =>
        c.label ? (
          <g key={c.id}>
            <line x1={c.x} y1={c.y} x2={c.x + (c.w || 1)} y2={c.y} stroke={c.color} strokeWidth="3" strokeLinecap="round" />
            <text x={c.x + (c.w || 1) + 2} y={c.y + 1.5} fill={c.color} fontSize="5" fontWeight="bold">{c.label}</text>
          </g>
        ) : (
          <g key={c.id}>
            <rect x={c.x} y={c.y} width={c.w || 1} height={c.h || 1} rx="2" fill={c.color} opacity="0.4" />
            <line x1={c.x + 1} y1={c.y + 1} x2={c.x + 1} y2={c.y + (c.h || 1) - 1} stroke="#64748B" strokeWidth="0.5" strokeDasharray="2,2" />
          </g>
        )
      )}
      <rect x="40" y="48" width="20" height="20" rx="10" fill="#10B981" opacity="0.8" />
      <polyline points="44,56 48,60 56,52" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <text x="50" y="78" textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="bold">ORGANIZADO</text>
    </g>
  );
}

export const CableOrganizer: React.FC = () => {
  const [organized, setOrganized] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <Cable className="w-4 h-4 text-amber-400" />
          <span>Organização de Cabos</span>
        </div>
        <button onClick={() => setOrganized(!organized)}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all cursor-pointer"
        >
          <ArrowRight className="w-3.5 h-3.5" />
          {organized ? 'Ver bagunçado' : 'Organizar cabos'}
        </button>
      </div>

      <div className="relative p-4 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm overflow-hidden">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <div className="text-center mb-2">
              <span className="text-xs font-bold text-slate-500">ANTES</span>
            </div>
            <svg viewBox="0 0 100 100" className="w-full h-40">
              <rect x="0" y="0" width="100" height="100" fill="#0F172A" rx="8" />
              <MessyView />
            </svg>
          </div>

          <div className="flex-1 relative">
            <div className="text-center mb-2">
              <span className="text-xs font-bold text-slate-500">DEPOIS</span>
            </div>
            <svg viewBox="0 0 100 100" className="w-full h-40">
              <rect x="0" y="0" width="100" height="100" fill="#0F172A" rx="8" />
              <AnimatePresence mode="wait">
                {organized ? (
                  <motion.g key="org" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.35 }}>
                    <OrganizedView />
                  </motion.g>
                ) : (
                  <motion.g key="messy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                    <MessyView />
                  </motion.g>
                )}
              </AnimatePresence>
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-3 text-xs text-slate-500 justify-center">
          <div className="flex items-center gap-1">
            <X className="w-3.5 h-3.5 text-red-400" />
            <span>Cabos cruzados</span>
          </div>
          <div className="flex items-center gap-1">
            <GripVertical className="w-3.5 h-3.5 text-slate-600" />
            <span>Velcro nas laterais</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="w-3.5 h-3.5 text-blue-400" />
            <span>Cabos etiquetados</span>
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-green-400" />
            <span>Sem riscos</span>
          </div>
        </div>
      </div>
    </div>
  );
};
