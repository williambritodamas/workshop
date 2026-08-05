import { motion } from 'framer-motion';
import { Music2 } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { FrequencyBandCard } from '../../ui/FrequencyBandCard';
import { slide06Notes } from './notes';
export { slide06Notes };

export const Slide06_Treble: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa digital" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Conhecendo os Agudos" subtitle="O brilho que dá definição" badge="Agudos" />
    <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
      <div className="w-full lg:w-1/2">
        <FrequencyBandCard
          icon={<Music2 className="w-6 h-6" />}
          title="Agudos (High)"
          description="Os agudos trazem brilho, ar e definição ao som. Dão a sensação de 'abertura' e detalhamento."
          examples={['Pratos', 'Chaves', 'Palmas', 'Triângulo']}
          color="border-amber-500/30 bg-amber-500/10"
          delay={0}
        />
      </div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <h4 className="text-white font-bold text-sm mb-2">Com agudos na medida...</h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            O som ganha <span className="text-amber-400 font-bold">brilho e definição</span>. Os detalhes aparecem.
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm">
          <h4 className="text-red-400 font-bold text-sm mb-2">Agudos demais...</h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            O som fica <span className="text-red-400 font-bold">estridente, cansativo</span>. Os "esses" assobiam e ouvidos se cansam rápido.
          </p>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm text-center"
        >
          <p className="text-amber-400 text-sm font-bold">⚠ O som ficou confortável com agudos no máximo?</p>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

