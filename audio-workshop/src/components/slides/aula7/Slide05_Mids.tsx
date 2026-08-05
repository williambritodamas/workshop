import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { FrequencyBandCard } from '../../ui/FrequencyBandCard';
import { slide05Notes } from './notes';
export { slide05Notes };

export const Slide05_Mids: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa digital" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Conhecendo os Médios" subtitle="Onde a voz ganha vida" badge="Médios" />
    <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
      <div className="w-full lg:w-1/2">
        <FrequencyBandCard
          icon={<Mic className="w-6 h-6" />}
          title="Médios (Mid)"
          description="Os médios são onde a maior parte da voz humana aparece. São responsáveis pela clareza e presença."
          examples={['Voz humana', 'Violão', 'Saxofone', 'Guitarra']}
          color="border-emerald-500/30 bg-emerald-500/10"
          delay={0}
        />
      </div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <h4 className="text-white font-bold text-sm mb-2">Com médios...</h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            A voz fica <span className="text-emerald-400 font-bold">clara, presente e inteligível</span>. Cada palavra se destaca.
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm">
          <h4 className="text-red-400 font-bold text-sm mb-2">Sem médios...</h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            A fala perde <span className="text-red-400 font-bold">clareza e presença</span>. O som parece distante e abafado.
          </p>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="grid grid-cols-2 gap-3"
        >
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
            <span className="text-emerald-400 text-xs font-bold">Com Médios ✓</span>
          </div>
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
            <span className="text-red-400 text-xs font-bold">Sem Médios ✗</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

