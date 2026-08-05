import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide03Notes } from './notes';
export { slide03Notes };

export const Slide03_Dynamics: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="O que é Dinâmica?" subtitle="A diferença entre o som mais fraco e o mais forte" badge="Conceito" />
    <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <p className="text-slate-300 text-sm leading-relaxed">
            <span className="text-purple-400 font-bold">Dinâmica</span> é a variação entre os sons mais baixos e os mais altos em um áudio.
          </p>
        </div>
        <div className="space-y-2">
          {[
            { icon: <TrendingDown className="w-4 h-4" />, label: 'Som baixo', color: 'text-blue-400', bar: 'w-1/4' },
            { icon: <TrendingUp className="w-4 h-4" />, label: 'Som médio', color: 'text-amber-400', bar: 'w-1/2' },
            { icon: <TrendingUp className="w-4 h-4" />, label: 'Som muito alto', color: 'text-red-400', bar: 'w-full' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className={item.color}>{item.icon}</span>
              <span className="text-slate-300 text-xs w-20">{item.label}</span>
              <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-y-auto">
                <div className={`h-full rounded-full ${item.color.replace('text-', 'bg-')}`} style={{ width: item.bar === 'w-full' ? '100%' : item.bar === 'w-1/2' ? '50%' : '25%' }} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <h4 className="text-white font-bold text-sm mb-2">🚗 Comparação</h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            É como uma estrada onde alguns carros andam muito devagar e outros muito rápido. A <span className="text-purple-400 font-bold">compressão</span> é o guarda de trânsito que mantém todos em velocidade segura.
          </p>
        </div>
        <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm text-center">
          <p className="text-purple-300 text-sm font-bold">Grande dinâmica = difícil de ouvir confortavelmente</p>
        </div>
      </motion.div>
    </div>
  </div>
);

