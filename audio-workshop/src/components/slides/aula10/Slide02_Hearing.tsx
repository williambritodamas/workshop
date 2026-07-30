import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';
import { slide02Notes } from './notes';
export { slide02Notes };

export const Slide02_Hearing: React.FC = () => {
  const [phase, setPhase] = useState<'scream' | 'explain'>('scream');

  useEffect(() => {
    const t = setTimeout(() => setPhase('explain'), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center text-center p-8 md:p-16 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950" />
      {phase === 'scream' && (
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
          className="relative z-10 flex flex-col items-center gap-6">
          <Volume2 className="w-24 h-24 md:w-32 md:h-32 text-red-500" />
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-black text-red-500 tracking-widest drop-shadow-[0_0_40px_rgba(239,68,68,0.5)]">
            PIIIIIIIIIIIIII...
          </motion.span>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
            className="text-slate-500 text-sm">(doloroso, não?)</motion.p>
        </motion.div>
      )}
      {phase === 'explain' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center gap-4">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="p-6 rounded-3xl bg-red-500/10 border-2 border-red-500/40">
            <Volume2 className="w-16 h-16 md:w-20 md:h-20 text-red-400" />
          </motion.div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-black text-white drop-shadow-2xl">
            Microfonia
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-400 font-light max-w-xl">
            O temido <span className="text-red-400 font-bold">feedback</span> de áudio
          </motion.p>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}
            className="text-slate-500 text-sm max-w-md">
            Também conhecido como "acoplamento acústico" ou "loop de realimentação".
          </motion.p>
        </motion.div>
      )}
    </div>
  );
};
