import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { MicrophonePositionDemo } from '../../ui/MicrophonePositionDemo';
import { slide05Notes } from './notes';
export { slide05Notes };

export const Slide05_Positioning: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/1726050/pexels-photo-1726050.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Microfone em estúdio" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Posicionamento do Microfone" subtitle="A regra mais importante contra microfonia" badge="Crítico" />
    <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="w-full lg:w-3/5">
        <MicrophonePositionDemo />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="w-full lg:w-2/5 space-y-3">
        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
          <p className="text-green-400 text-xs font-bold">✔ Correto</p>
          <p className="text-slate-300 text-xs mt-1">Cápsula apontada para longe das caixas. Zona nula do cardioidal voltada para o monitor.</p>
        </div>
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm">
          <p className="text-red-400 text-xs font-bold">❌ Errado</p>
          <p className="text-slate-300 text-xs mt-1">Cápsula apontada diretamente para a caixa de som ou monitor.</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <p className="text-slate-400 text-xs">Microfones cardioídais captam mais na frente e rejeitam atrás (180°). A zona nula é sua maior aliada.</p>
        </div>
      </motion.div>
    </div>
  </div>
);

