import { motion } from 'framer-motion';
import { Heart, BookOpen, Mic, MessageCircle } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide14Notes } from './notes';
export { slide14Notes };

const items = [
  { icon: <Heart className="w-5 h-5" />, text: 'Qualquer mesa segue a mesma lógica', color: 'from-red-500 to-pink-500' },
  { icon: <BookOpen className="w-5 h-5" />, text: 'Treino leva à confiança — pratique em qualquer mesa disponível', color: 'from-blue-500 to-cyan-500' },
  { icon: <Mic className="w-5 h-5" />, text: 'Próxima aula: Microfones — tipos, aplicações e posicionamento', color: 'from-purple-500 to-violet-500' },
  { icon: <MessageCircle className="w-5 h-5" />, text: 'Perguntas finais? Este é o momento!', color: 'from-emerald-500 to-green-500' },
];

export const Slide14_Closing: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/33379549/pexels-photo-33379549.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Encerramento" subtitle="Obrigado pela participação!" badge="Fim" />
    <div className="relative z-10 w-full max-w-3xl my-auto space-y-3">
      {items.map((item, i) => (
        <motion.div key={i} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }}
          className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm"
        >
          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.color}`}>{item.icon}</div>
          <p className="text-white text-sm font-bold">{item.text}</p>
        </motion.div>
      ))}
    </div>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
      className="relative z-10 text-center text-slate-500 text-xs"
    >
      Material de apoio disponível em: material.audiosemmisterio.com.br
    </motion.div>
  </div>
);
