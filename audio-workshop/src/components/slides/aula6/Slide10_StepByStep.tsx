import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { StepByStepAdjustment } from '../../ui/StepByStepAdjustment';
import { slide10Notes } from './notes';
export { slide10Notes };

export const Slide10_StepByStep: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Passo a Passo" subtitle="Como ajustar um canal corretamente" badge="Procedimento" />
    <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
        className="w-full lg:w-1/2"
      >
        <StepByStepAdjustment />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-blue-400 font-bold text-sm">💡 Dica importante</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Ajuste o Gain com a pessoa falando ou cantando no <span className="text-blue-400 font-bold">volume real de uso</span> — nem sussurrando, nem gritando.
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-amber-400 font-bold text-sm">⚠ Atenção</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Se o LED vermelho acender nos picos, <span className="text-amber-400 font-bold">reduza o Gain</span>. É melhor ter um sinal mais conservador do que clipado.
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-emerald-400 font-bold text-sm">✓ Meta</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            LED verde na maior parte do tempo, amarelo apenas nos picos, vermelho <span className="text-red-400 font-bold">NUNCA</span>.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);

