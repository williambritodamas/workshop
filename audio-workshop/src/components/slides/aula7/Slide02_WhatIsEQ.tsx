import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Music } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide02Notes } from './notes';
export { slide02Notes };

export const Slide02_WhatIsEQ: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa digital" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="O que é Equalização?" subtitle="Podemos mudar o som sem trocar o microfone?" badge="Introdução" />
      <div className="relative z-10 w-full max-w-4xl my-auto flex flex-col items-center gap-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm text-center max-w-xl"
        >
          <HelpCircle className="w-10 h-10 text-blue-400 mx-auto mb-3" />
          <p className="text-white text-xl md:text-2xl font-bold">Podemos mudar o som sem trocar o microfone?</p>
        </motion.div>
        {!revealed ? (
          <button onClick={() => setRevealed(true)}
            className="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm hover:from-blue-500 hover:to-cyan-500 transition-all"
          >
            Revelar resposta
          </button>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="space-y-4 w-full max-w-xl"
          >
            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm text-center">
              <span className="text-emerald-400 text-2xl font-black">Sim!</span>
              <p className="text-slate-300 mt-2">Utilizando a <span className="text-emerald-400 font-bold">Equalização</span>.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <Music className="w-5 h-5 text-blue-400" />
                <span className="text-white font-bold text-sm">Como funciona?</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                A Equalização altera o <span className="text-blue-400 font-bold">equilíbrio</span> entre graves, médios e agudos do som.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

