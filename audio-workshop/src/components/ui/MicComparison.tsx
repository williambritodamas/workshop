import { motion } from 'framer-motion';
import { Mic, X, Check } from 'lucide-react';

interface MicComparisonProps {
  label: string;
  image: string;
  features: { label: string; value: boolean }[];
  isDynamic?: boolean;
}

export const MicComparison: React.FC<MicComparisonProps> = ({ label, image, features, isDynamic }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-5 md:p-6 rounded-3xl border-2 transition-all bg-slate-900/90 ${
        isDynamic ? 'border-blue-500/50 shadow-xl shadow-blue-500/10' : 'border-cyan-500/50 shadow-xl shadow-cyan-500/10'
      }`}
    >
      <div className="relative h-36 md:h-40 rounded-2xl overflow-hidden mb-4">
        <img src={image} alt={label} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className={`absolute top-3 left-3 p-2 rounded-xl ${isDynamic ? 'bg-blue-500/20 text-blue-400' : 'bg-cyan-500/20 text-cyan-400'}`}>
          {isDynamic ? <Mic className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
        </div>
      </div>

      <h3 className="text-lg font-extrabold text-white mb-3">{label}</h3>

      <div className="space-y-2">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-2.5">
            {f.value ? (
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <X className="w-4 h-4 text-red-400 shrink-0" />
            )}
            <span className="text-xs text-slate-300">{f.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
