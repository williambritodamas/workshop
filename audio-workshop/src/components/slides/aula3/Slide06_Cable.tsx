import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide06Notes } from './notes';
import { HelpCircle, Droplets, X } from 'lucide-react';

export { slide06Notes };

export const Slide06_Cable: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="O Cabo"
        subtitle="O transporte do sinal"
        badge="Conexão"
      />

      <div className="w-full max-w-5xl my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 h-72 md:h-96 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Xlrcables.jpg/1280px-Xlrcables.jpg"
            alt="Cabos XLR"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
        </motion.div>

        <div className="lg:col-span-6 flex flex-col gap-5">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 p-5 rounded-3xl bg-slate-900/90 border border-slate-800"
          >
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
              <HelpCircle className="w-7 h-7" />
            </div>
            <div>
              <p className="text-lg font-bold text-white">O cabo aumenta o volume?</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 p-5 rounded-3xl bg-slate-900/90 border border-emerald-500/40"
          >
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
              <X className="w-7 h-7" />
            </div>
            <div>
              <p className="text-lg font-bold text-white">Não.</p>
              <p className="text-sm text-slate-400">Ele apenas transporta o sinal.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-start gap-4 p-5 rounded-3xl bg-gradient-to-r from-blue-900/30 via-slate-900 to-blue-900/30 border border-blue-500/30"
          >
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 shrink-0 mt-1">
              <Droplets className="w-7 h-7" />
            </div>
            <div>
              <p className="text-base md:text-lg font-bold text-white">É como um cano de água.</p>
              <p className="text-sm text-slate-400 mt-1">
                A água continua sendo a mesma. O cano só leva ela de um lugar para outro.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-4 text-slate-400 text-sm md:text-base text-center"
      >
        O cabo é o "caminho" que o som percorre entre os equipamentos.
      </motion.p>
    </div>
  );
};
