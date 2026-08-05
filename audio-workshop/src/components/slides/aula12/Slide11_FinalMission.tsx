import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, AlertTriangle, Shirt, Mic, Speaker, MonitorSpeaker, Disc3, Laptop, Cable } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { ScenarioBuilder } from '../../ui/ScenarioBuilder';
import { SystemSimulator } from '../../ui/SystemSimulator';
import { slide11Notes } from './notes';
export { slide11Notes };

const equipmentList = ['1 Mesa', '2 Caixas', '2 Microfones', 'Notebook', 'Cabos', 'Pedestais'];

const palcoZones = [
  { id: 'front', label: 'Frente do Palco', hint: 'Caixas principais direcionadas ao público', className: '' },
  { id: 'stage', label: 'Palco', hint: 'Microfones, pedestais e monitores', className: '' },
  { id: 'control', label: 'Controle', hint: 'Mesa, notebook e cabos', className: '' },
];

const palcoItems = [
  { id: 'spk1', label: 'Caixa 1', icon: <Speaker className="w-3.5 h-3.5" />, zone: 'front' },
  { id: 'spk2', label: 'Caixa 2', icon: <Speaker className="w-3.5 h-3.5" />, zone: 'front' },
  { id: 'mon1', label: 'Monitor 1', icon: <MonitorSpeaker className="w-3.5 h-3.5" />, zone: 'stage' },
  { id: 'mon2', label: 'Monitor 2', icon: <MonitorSpeaker className="w-3.5 h-3.5" />, zone: 'stage' },
  { id: 'mic1', label: 'Microfone 1', icon: <Mic className="w-3.5 h-3.5" />, zone: 'stage' },
  { id: 'mic2', label: 'Microfone 2', icon: <Mic className="w-3.5 h-3.5" />, zone: 'stage' },
  { id: 'stands', label: 'Pedestais', icon: <Shirt className="w-3.5 h-3.5" />, zone: 'stage' },
  { id: 'mixer', label: 'Mesa', icon: <Disc3 className="w-3.5 h-3.5" />, zone: 'control' },
  { id: 'notebook', label: 'Notebook', icon: <Laptop className="w-3.5 h-3.5" />, zone: 'control' },
  { id: 'cables', label: 'Cabos', icon: <Cable className="w-3.5 h-3.5" />, zone: 'control' },
];

const problems = [
  { id: 'feedback', label: 'Microfonia', icon: '🔊' },
  { id: 'audio', label: 'Notebook sem áudio', icon: '💻' },
  { id: 'low', label: 'Microfone baixo', icon: '🎤' },
  { id: 'phase', label: 'Canal invertido', icon: '🔄' },
  { id: 'cable', label: 'Cabo defeituoso', icon: '🔌' },
];

export const Slide11_FinalMission: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(900);
  const [phase, setPhase] = useState<'setup' | 'problems' | 'done'>('setup');

  useEffect(() => {
    if (phase !== 'setup') return;
    if (timeLeft <= 0) { setPhase('problems'); return; }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, phase]);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const pct = (timeLeft / 900) * 100;

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-8 md:p-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wall_of_Sound_%28QuadFest%29.jpg/1280px-Wall_of_Sound_%28QuadFest%29.jpg" alt="Evento" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Missão Final" subtitle="15 minutos antes do evento — monte o sistema e resolva os problemas" badge="Desafio Final" />
      <div className="relative z-10 w-full max-w-5xl space-y-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border ${
            timeLeft < 120 ? 'bg-red-500/20 border-red-500/40 text-red-300' : 'bg-slate-900/80 border-slate-700 text-slate-300'
          }`}>
            <Clock className="w-4 h-4" />
            <span>{mins}:{secs.toString().padStart(2, '0')}</span>
          </div>
          <div className="w-48 h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${pct}%` }}
              className={`h-full rounded-full ${timeLeft < 120 ? 'bg-red-500' : 'bg-gradient-to-r from-blue-500 to-cyan-400'}`}
            />
          </div>
          <span className="text-xs text-slate-500">15 min</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm text-left">Equipamentos Disponíveis</h3>
            <div className="flex flex-wrap gap-2">
              {equipmentList.map((eq, i) => (
                <motion.div
                  key={eq}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs"
                >
                  <Shirt className="w-3 h-3 text-cyan-400" />
                  {eq}
                </motion.div>
              ))}
            </div>
            {phase === 'setup' ? (
              <ScenarioBuilder
                title="Monte o Palco"
                zones={palcoZones}
                items={palcoItems}
                accent="amber"
              />
            ) : (
              <AnimatePresence mode="wait">
                <motion.div key="problems" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                  <h3 className="text-white font-bold text-sm text-left">Problemas Detectados</h3>
                  {problems.map((p, i) => (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-left"
                    >
                      <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                      <span className="text-sm text-slate-200">{p.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm text-left">Simulador</h3>
            <SystemSimulator />
          </div>
        </div>

        {phase === 'setup' && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={() => setPhase('problems')}
            className="px-8 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-sm hover:from-amber-400 hover:to-orange-500 transition-all cursor-pointer"
          >
            Tempo esgotado — Ver problemas
          </motion.button>
        )}
      </div>
    </div>
  );
};
