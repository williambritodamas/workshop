import { motion } from 'framer-motion';
import { Heart, Music, Volume2 } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { ConfettiEffect } from '../../ui/ConfettiEffect';
import { slide16Notes } from './notes';
export { slide16Notes };

export const Slide16_Closing: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-8 md:p-16 overflow-hidden">
    <ConfettiEffect active={true} />
    <div className="absolute inset-0 z-0">
      <img src="/images/sound-reinforcement.jpg" alt="Operador durante evento" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-950/60 to-slate-950/80" />
    </div>
    <div className="relative z-10 w-full max-w-4xl my-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SlideTitle title="Obrigado!" subtitle="Continue praticando. Continue aprendendo. Continue ouvindo." badge="Fim" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="max-w-2xl mx-auto p-8 rounded-3xl bg-slate-950/60 backdrop-blur-md border border-white/10"
      >
        <div className="text-5xl mb-4 text-amber-400/80">"</div>
        <p className="text-xl md:text-2xl text-slate-100 font-light italic leading-relaxed">
          As pessoas esquecem quem operou o som. Mas nunca esquecem quando o som foi ruim.{' '}
          <span className="text-amber-400 font-semibold not-italic">Faça com que lembrem apenas da mensagem.</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex items-center justify-center gap-4 text-slate-500 text-sm"
      >
        <Music className="w-4 h-4 text-blue-400" />
        <Volume2 className="w-4 h-4 text-cyan-400" />
        <Heart className="w-4 h-4 text-red-400" />
      </motion.div>
    </div>
  </div>
);
