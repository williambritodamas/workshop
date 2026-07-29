import { motion } from 'framer-motion';
import { Mic, Music, Monitor, Laptop } from 'lucide-react';

interface ChannelStripProps {
  number: number;
  source: string;
  icon?: React.ReactNode;
  color?: string;
  delay?: number;
  active?: boolean;
}

const defaultIcons: Record<string, React.ReactNode> = {
  'Microfone': <Mic className="w-4 h-4" />,
  'Violão': <Music className="w-4 h-4" />,
  'Notebook': <Laptop className="w-4 h-4" />,
  'Palestrante': <Monitor className="w-4 h-4" />,
};

export const ChannelStrip: React.FC<ChannelStripProps> = ({ number, source, icon, color = 'blue', delay = 0, active = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`flex flex-col items-center p-3 rounded-2xl border transition-all duration-500 ${
        active ? `border-${color}-500/60 bg-${color}-500/15 shadow-lg shadow-${color}-500/10` : 'border-slate-800 bg-slate-900/60'
      }`}
    >
      <div className="flex items-center gap-1.5 mb-2">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${active ? `bg-${color}-500 text-white` : 'bg-slate-800 text-slate-500'}`}>
          {number}
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-wider ${active ? `text-${color}-400` : 'text-slate-600'}`}>Ch</span>
      </div>
      <div className={`p-2 rounded-full ${active ? `bg-${color}-500/20 text-${color}-400` : 'bg-slate-800 text-slate-500'} transition-all duration-500`}>
        {icon || defaultIcons[source] || <Mic className="w-4 h-4" />}
      </div>
      <span className={`mt-1.5 text-[10px] font-bold text-center leading-tight ${active ? 'text-white' : 'text-slate-500'}`}>
        {source}
      </span>
      <div className="w-full mt-2 flex flex-col items-center gap-0.5">
        <div className="w-1.5 h-6 rounded-full bg-slate-800 relative overflow-hidden">
          <div className={`absolute bottom-0 w-full rounded-full transition-all duration-500 ${active ? `bg-${color}-400` : 'bg-slate-700'}`} style={{ height: active ? '40%' : '20%' }} />
        </div>
        <div className={`w-2 h-2 rounded-full ${active ? 'bg-green-500' : 'bg-slate-800'} transition-all duration-500`} />
        <div className={`w-2 h-2 rounded-full ${active ? 'bg-amber-500' : 'bg-slate-800'} transition-all duration-500`} />
      </div>
    </motion.div>
  );
};
