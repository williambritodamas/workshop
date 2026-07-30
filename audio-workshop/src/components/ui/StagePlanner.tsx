import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Speaker, Monitor, Disc3, Grid3x3 } from 'lucide-react';

interface EquipmentItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  x: number;
  y: number;
  placed: boolean;
}

const initialEquipment: EquipmentItem[] = [
  { id: 'mic-stand-1', label: 'Microfone 1', icon: <Mic className="w-5 h-5" />, x: 60, y: 50, placed: true },
  { id: 'mic-stand-2', label: 'Microfone 2', icon: <Mic className="w-5 h-5" />, x: 280, y: 50, placed: true },
  { id: 'speaker-l', label: 'Caixa L', icon: <Speaker className="w-5 h-5" />, x: 20, y: 130, placed: true },
  { id: 'speaker-r', label: 'Caixa R', icon: <Speaker className="w-5 h-5" />, x: 320, y: 130, placed: true },
  { id: 'monitor-1', label: 'Monitor 1', icon: <Monitor className="w-5 h-5" />, x: 100, y: 140, placed: true },
  { id: 'monitor-2', label: 'Monitor 2', icon: <Monitor className="w-5 h-5" />, x: 240, y: 140, placed: true },
  { id: 'mixer', label: 'Mesa', icon: <Disc3 className="w-5 h-5" />, x: 170, y: 90, placed: true },
  { id: 'sub', label: 'Sub', icon: <Speaker className="w-5 h-5" />, x: 170, y: 130, placed: true },
];

export const StagePlanner: React.FC = () => {
  const [equipment, setEquipment] = useState<EquipmentItem[]>(initialEquipment);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleGridClick = (e: React.MouseEvent<SVGRectElement>) => {
    if (!selectedId) return;
    const svg = e.currentTarget.closest('svg');
    if (!svg) return;
    const svgRect = svg.getBoundingClientRect();
    const scaleX = 340 / svgRect.width;
    const scaleY = 180 / svgRect.height;
    const x = Math.round((e.clientX - svgRect.left) * scaleX);
    const y = Math.round((e.clientY - svgRect.top) * scaleY);
    setEquipment((prev) =>
      prev.map((item) =>
        item.id === selectedId ? { ...item, x: Math.max(5, Math.min(335, x - 20)), y: Math.max(5, Math.min(175, y - 20)), placed: true } : item
      )
    );
    setSelectedId(null);
  };

  const selectedItem = equipment.find((e) => e.id === selectedId);

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <Grid3x3 className="w-4 h-4 text-emerald-400" />
          <span>Clique em um item, depois no palco para posicionar</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          {equipment.filter(e => e.placed).length}/{equipment.length}
        </div>
      </div>

      <div className="relative p-4 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
        <svg viewBox="0 0 340 180" className="w-full">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="none" />
              <circle cx="10" cy="10" r="0.8" fill="#1E293B" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="340" height="180" fill="url(#grid)" rx="12" />
          <rect x="0" y="155" width="340" height="25" fill="#1E293B" rx="3" />
          <text x="170" y="170" textAnchor="middle" fill="#64748B" fontSize="9" fontWeight="bold">PALCO</text>
          <rect x="0" y="153" width="340" height="2" fill="#334155" />
          <rect
            x="0" y="0" width="340" height="153"
            fill="transparent"
            className="cursor-crosshair"
            onClick={handleGridClick}
          />
          {equipment.map((item) => (
            <g key={item.id} onClick={() => setSelectedId(item.id)} className="cursor-pointer">
              <motion.rect
                x={item.x}
                y={item.y}
                width="40"
                height="28"
                rx="6"
                animate={{
                  stroke: selectedId === item.id ? '#10B981' : item.placed ? '#475569' : '#334155',
                  fill: selectedId === item.id ? '#10B98120' : item.placed ? '#1E293B' : '#0F172A',
                  scale: selectedId === item.id ? 1.08 : 1,
                }}
                transition={{ duration: 0.2 }}
                strokeWidth={selectedId === item.id ? 2 : 1}
              />
              <foreignObject x={item.x} y={item.y + 4} width="40" height="20">
                <div className="flex items-center justify-center text-white">
                  {item.icon}
                </div>
              </foreignObject>
              {selectedId === item.id && (
                <rect x={item.x - 2} y={item.y - 2} width="44" height="32" rx="8" fill="none" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6" />
              )}
              <text x={item.x + 20} y={item.y - 4} textAnchor="middle" fill={selectedId === item.id ? '#10B981' : '#94A3B8'} fontSize="7" fontWeight="bold">
                {item.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {selectedItem && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center"
        >
          <p className="text-emerald-300 text-xs font-semibold">
            Clique no palco para posicionar <span className="text-white">{selectedItem.label}</span>
          </p>
        </motion.div>
      )}

      <div className="flex flex-wrap gap-2 mt-3">
        {equipment.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedId === item.id
                ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300'
                : 'bg-slate-800 border border-slate-700 text-slate-400 hover:border-slate-500'
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};
