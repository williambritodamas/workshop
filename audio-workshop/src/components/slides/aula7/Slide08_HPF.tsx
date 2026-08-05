import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Wind, Footprints, CheckCircle2 } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { HPFAnimation } from '../../ui/HPFAnimation';
import { slide08Notes } from './notes';
export { slide08Notes };

const noises = [
  { icon: <Wind className="w-4 h-4" />, text: 'Vibração do palco', color: 'text-red-400' },
  { icon: <Wind className="w-4 h-4" />, text: 'Ar-condicionado', color: 'text-amber-400' },
  { icon: <Footprints className="w-4 h-4" />, text: 'Passos no palco', color: 'text-amber-400' },
  { icon: <Wind className="w-4 h-4" />, text: 'Vento no microfone', color: 'text-red-400' },
];

export const Slide08_HPF: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa digital" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="O HPF (High Pass Filter)" subtitle="Peneirando os graves indesejados" badge="HPF" />
      <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/2 space-y-4"
        >
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            <Mic className="w-5 h-5 text-blue-400" />
            <span className="text-slate-300 text-xs">Microfone <span className="text-blue-400 font-bold">→</span> HPF <span className="text-blue-400 font-bold">→</span> Mesa</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            <p className="text-slate-300 text-sm leading-relaxed">
              O HPF <span className="text-blue-400 font-bold">remove graves muito baixos</span> que normalmente não ajudam na voz.
            </p>
          </div>
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-slate-500">Ruídos que o HPF elimina:</span>
            {noises.map((n, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800"
              >
                <span className={n.color}>{n.icon}</span>
                <span className="text-slate-300 text-xs">{n.text}</span>
              </motion.div>
            ))}
          </div>
          <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <p className="text-slate-300 text-xs">É como peneirar areia para retirar pedras grandes.</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          className="w-full lg:w-1/2 flex flex-col items-center gap-4"
        >
          <HPFAnimation active={active} />
          <button onClick={() => setActive(!active)}
            className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
              active ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {active ? 'Desativar HPF' : 'Ativar HPF'}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

