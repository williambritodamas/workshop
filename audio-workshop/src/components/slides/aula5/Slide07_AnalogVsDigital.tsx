import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { MixerComparison } from '../../ui/MixerComparison';
import { slide07Notes } from './notes';
export { slide07Notes };

export const Slide07_AnalogVsDigital: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/33379549/pexels-photo-33379549.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Analógica × Digital" subtitle="Duas formas de fazer o mesmo trabalho" badge="Comparação" />
    <div className="relative z-10 w-full max-w-5xl my-auto">
      <MixerComparison />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        className="mt-6 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm max-w-xl mx-auto text-center"
      >
        <p className="text-slate-300 text-sm">
          <span className="text-blue-400 font-bold">💡 Mensagem principal:</span> As duas fazem o mesmo trabalho. 
          A diferença está na forma de operar.
        </p>
      </motion.div>
    </div>
  </div>
);
