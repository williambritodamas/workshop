import { motion } from 'framer-motion';
import { User, Mic, Volume2, Waves, Gauge, Disc3, LogOut, Speaker, Users } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide12Notes } from './notes';
export { slide12Notes };

const flow = [
  { icon: <User className="w-4 h-4" />, label: 'Pessoa' },
  { icon: <Mic className="w-4 h-4" />, label: 'Microfone' },
  { icon: <Volume2 className="w-4 h-4" />, label: 'Gain' },
  { icon: <Waves className="w-4 h-4" />, label: 'Equalização' },
  { icon: <Gauge className="w-4 h-4" />, label: 'Compressão' },
  { icon: <Disc3 className="w-4 h-4" />, label: 'Mesa' },
  { icon: <LogOut className="w-4 h-4" />, label: 'Saída' },
  { icon: <Speaker className="w-4 h-4" />, label: 'Caixa' },
  { icon: <Users className="w-4 h-4" />, label: 'Público' },
];

export const Slide12_ReviewFlow: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-8 md:p-16 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Palco evento" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Revisão Geral — Fluxo do Áudio" subtitle="O caminho completo do som" badge="Revisão" />
    <div className="relative z-10 w-full max-w-5xl my-auto">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
        {flow.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 backdrop-blur-sm shadow-lg shadow-blue-500/10">
              <span className="text-blue-400">{step.icon}</span>
              <span className="text-white text-sm font-bold whitespace-nowrap">{step.label}</span>
            </div>
            {i < flow.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: i * 0.12 + 0.3 }}
                className="hidden md:block w-6 h-0.5 bg-gradient-to-r from-blue-500/60 to-cyan-500/60"
              />
            )}
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-8 text-slate-400 text-sm max-w-xl mx-auto"
      >
        Cada etapa é essencial. Remova uma e o som não chega ao público com qualidade.
      </motion.p>
    </div>
  </div>
);
