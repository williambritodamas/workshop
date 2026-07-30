import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { CertificatePreview } from '../../ui/CertificatePreview';
import { ConfettiEffect } from '../../ui/ConfettiEffect';
import { slide15Notes } from './notes';
export { slide15Notes };

export const Slide15_Certificate: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-8 md:p-16 overflow-hidden">
      <ConfettiEffect active={showConfetti} />
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Certificado" subtitle="Parabéns! Você concluiu o workshop." badge="Conclusão" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-xl my-auto space-y-6">
        <CertificatePreview />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { setShowConfetti(true); setTimeout(() => setShowConfetti(false), 4000); }}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-sm hover:from-amber-400 hover:to-orange-500 transition-all cursor-pointer shadow-lg shadow-amber-500/20"
        >
          <Award className="w-4 h-4" />
          Gerar Certificado
        </motion.button>
      </motion.div>
    </div>
  );
};
