import { SlideTitle } from '../../ui/SlideTitle';
import { ControlCard } from '../../ui/ControlCard';
import { slide06Notes } from './notes';
import { SlidersHorizontal, Waves, Headphones, ArrowLeftRight, Bell, Ear, Volume2 } from 'lucide-react';
export { slide06Notes };

const controls = [
  { icon: <SlidersHorizontal className="w-6 h-6" />, name: 'Gain', description: 'Controla o nível de entrada do sinal.', detail: 'O Gain define a sensibilidade da entrada. Aumentar demais pode causar distorção (clip). O ajuste correto é aquele em que o sinal fica forte sem acender o LED de clip.', color: 'blue' },
  { icon: <Waves className="w-6 h-6" />, name: 'Equalizador', description: 'Ajusta graves, médios e agudos.', detail: 'O Equalizador (EQ) molda o timbre do som. Geralmente dividido em Low (graves), Mid (médios) e High (agudos). Use com moderação — menos é mais.', color: 'purple' },
  { icon: <Headphones className="w-6 h-6" />, name: 'Aux (AUX)', description: 'Envia áudio para monitores ou efeitos.', detail: 'Os auxiliares podem enviar sinal para monitores de palco (para o músico se ouvir) ou para processadores de efeito (reverb, delay). Cada AUX tem seu próprio nível.', color: 'amber' },
  { icon: <ArrowLeftRight className="w-6 h-6" />, name: 'Pan', description: 'Posiciona o som entre esquerda e direita.', detail: 'O Pan (panorama) distribui o sinal entre os lados esquerdo e direito do sistema estéreo. Centralizado = igual nos dois lados.', color: 'cyan' },
  { icon: <Bell className="w-6 h-6" />, name: 'Mute', description: 'Silencia o canal.', detail: 'Mute corta completamente o áudio do canal, independentemente da posição do Fader. Útil para silenciar microfones que não estão em uso.', color: 'red' },
  { icon: <Ear className="w-6 h-6" />, name: 'Solo', description: 'Permite ouvir apenas aquele canal.', detail: 'Solo isola o canal nos fones de ouvido do operador sem afetar o que a plateia ouve. Essencial para ajustar um canal individualmente.', color: 'emerald' },
  { icon: <Volume2 className="w-6 h-6" />, name: 'Fader', description: 'Controla o volume final do canal.', detail: 'O Fader é o controle de volume do canal. Diferente do Gain (que ajusta a sensibilidade), o Fader define quanto do sinal já processado vai para a saída.', color: 'blue' },
];

export const Slide06_Controls: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1774967550630-ce20e84afecb?q=80&w=1920&auto=format&fit=crop" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Conhecendo cada controle" subtitle="Clique em cada cartão para saber mais" badge="Controles" />
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {controls.map((c, i) => (
        <ControlCard key={i} {...c} delay={i * 0.05} />
      ))}
    </div>
  </div>
);
