import React from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { AnimatedArrow } from '../../ui/AnimatedArrow';
import type { PresenterNote } from '../../../types/presentation';
import { Sliders, Zap, Speaker, Gauge } from 'lucide-react';

export const slide10Notes: PresenterNote = {
  explanation: 'Explique que o sinal que sai da mesa de som é muito fraco (sinal de linha/voltagem baixa). Ele não tem força física suficiente para movimentar os pesados cones das caixas de som passivas. O amplificador de potência é o "motor" que dá essa força bruta.',
  practicalExamples: [
    'Analogia do Carro: A mesa de som é o volante e os pedais (controle), enquanto o amplificador é o motor V8 que realmente faz as rodas (caixas) girarem.',
  ],
  audienceQuestions: [
    'Se usarmos uma caixa ativa (visto no slide 6), onde fica o amplificador?',
  ],
};

export const Slide10_Amplifier: React.FC = () => {
  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <SlideTitle
        title="O Amplificador de Potência"
        subtitle="Fornecendo a energia bruta necessária para mover as caixas acústicas"
        badge="Potência"
      />

      {/* Diagrama de Potência + Imagem / Analogia */}
      <div className="w-full max-w-5xl my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Fluxo: Mesa -> Amplificador -> Caixas Passivas */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
            {/* Mesa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-950 border border-slate-800 w-32"
            >
              <Sliders className="w-8 h-8 text-blue-400 mb-2" />
              <span className="text-sm font-bold text-white">Mesa</span>
              <span className="text-[10px] text-slate-400">Sinal fraco</span>
            </motion.div>

            <AnimatedArrow direction="right" label="Sinal de Linha" delay={0.2} />

            {/* Amplificador */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-yellow-500/20 border border-yellow-500/40 w-36 shadow-lg shadow-yellow-500/10"
            >
              <Zap className="w-8 h-8 text-yellow-400 mb-2 animate-bounce" />
              <span className="text-sm font-bold text-white">Amplificador</span>
              <span className="text-[10px] text-yellow-300 font-semibold">Múltiplicador de Força</span>
            </motion.div>

            <AnimatedArrow direction="right" label="Cabo Speakon" delay={0.4} />

            {/* Caixas Passivas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-950 border border-slate-800 w-32"
            >
              <Speaker className="w-8 h-8 text-emerald-400 mb-2" />
              <span className="text-sm font-bold text-white">Caixa Passiva</span>
              <span className="text-[10px] text-slate-400">Emite o Som</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-5 rounded-2xl bg-slate-900 border border-yellow-500/30 text-slate-300 text-sm md:text-base leading-relaxed"
          >
            <p className="text-white font-bold mb-1">
              "Algumas caixas precisam de um equipamento externo para fornecer potência."
            </p>
            <p className="text-slate-400 text-xs md:text-sm">
              Sem o amplificador, o sinal da mesa é fraco demais para mover os grandes alto-falantes de uma caixa passiva.
            </p>
          </motion.div>
        </div>

        {/* Analogia do Motor do Carro */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-b from-yellow-500/10 via-slate-900 to-slate-950 border border-yellow-500/30 shadow-2xl relative overflow-y-auto"
        >
          <div className="p-4 rounded-2xl bg-yellow-500/20 text-yellow-400 mb-4">
            <Gauge className="w-12 h-12" />
          </div>

          <span className="text-xs uppercase font-bold text-yellow-400 tracking-wider mb-2">
            Analogia Prática
          </span>

          <h3 className="text-2xl font-extrabold text-white mb-3">
            O Motor do Carro 🚗
          </h3>

          <p className="text-slate-300 text-sm leading-relaxed">
            A mesa de som é o volante e a chave da ignição. O amplificador é o <strong className="text-yellow-400">motor potente</strong> sob o capô que faz o veículo andar com força.
          </p>
        </motion.div>
      </div>

      {/* Rodapé */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-4 text-slate-400 text-sm text-center"
      >
        Lembre-se: Caixas ATIVAS já possuem o amplificador dentro delas!
      </motion.p>
    </div>
  );
};

