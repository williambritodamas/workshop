import { motion } from 'framer-motion';
import { Drum } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { FrequencyBandCard } from '../../ui/FrequencyBandCard';
import { slide04Notes } from './notes';
export { slide04Notes };

export const Slide04_Bass: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa digital" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Conhecendo os Graves" subtitle="A base que dá peso ao som" badge="Graves" />
    <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
      <div className="w-full lg:w-1/2">
        <FrequencyBandCard
          icon={<Drum className="w-6 h-6" />}
          title="Graves (Bass)"
          description="Os graves dão peso e corpo ao som. São as frequências mais baixas, que sentimos no peito."
          examples={['Bumbo', 'Trovão', 'Baixo elétrico', 'Subwoofer']}
          color="border-blue-500/30 bg-blue-500/10"
          delay={0}
        />
      </div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <h4 className="text-white font-bold text-sm mb-2">Sem graves...</h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            O som fica <span className="text-blue-400 font-bold">fino, sem corpo</span>. Como ouvir música em um rádio pequeno.
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm">
          <h4 className="text-red-400 font-bold text-sm mb-2">Graves demais...</h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            O som fica <span className="text-red-400 font-bold">embolado, abafado</span>. A voz se perde e tudo vira "trovão".
          </p>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm text-center"
        >
          <p className="text-amber-400 text-sm font-bold">💡 O que você percebe quando tiramos os graves?</p>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

