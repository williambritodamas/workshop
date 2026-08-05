import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Volume2, VolumeX } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide02Notes } from './notes';
export { slide02Notes };

export const Slide02_Problem: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="O Problema" subtitle="Como manter tudo confortável para quem está ouvindo?" badge="Desafio" />
      <div className="relative z-10 w-full max-w-4xl my-auto flex flex-col items-center gap-6">
        <div className="flex gap-6 w-full max-w-lg justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm text-center flex-1"
          >
            <VolumeX className="w-10 h-10 text-blue-400 mx-auto mb-2" />
            <span className="text-blue-300 text-xs font-bold">Pessoa falando muito baixo</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }}
            className="p-6 rounded-2xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm text-center flex-1"
          >
            <Volume2 className="w-10 h-10 text-red-400 mx-auto mb-2" />
            <span className="text-red-300 text-xs font-bold">Pessoa gritando</span>
          </motion.div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm max-w-md">
          <HelpCircle className="w-6 h-6 text-purple-400 mx-auto mb-2" />
          <p className="text-white text-sm font-bold text-center">Como manter tudo confortável para quem está ouvindo?</p>
        </div>
        {!revealed ? (
          <button onClick={() => setRevealed(true)}
            className="px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            Revelar resposta
          </button>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm text-center max-w-md"
          >
            <span className="text-emerald-400 text-2xl font-black">Compressão!</span>
            <p className="text-slate-300 mt-2 text-sm">O compressor reduz os picos e eleva os sons baixos, aproximando tudo de um nível equilibrado.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

