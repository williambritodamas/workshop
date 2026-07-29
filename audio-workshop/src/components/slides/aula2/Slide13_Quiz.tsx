import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { QuizCard } from '../../ui/QuizCard';
import type { PresenterNote } from '../../../types/presentation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const slide13Notes: PresenterNote = {
  explanation: 'Use este slide para um momento leve e divertido no final da aula. Deixe os alunos tentarem adivinhar o nome do equipamento exibido na imagem antes de clicar em "Mostrar Resposta".',
  practicalExamples: [
    'Mostre detalhes visuais da imagem (conectores, botões, agulhas) para ajudar os alunos a deduzeirem.',
  ],
  audienceQuestions: [
    'Quem sabe o nome desse equipamento com vários pinos dourados?',
  ],
};

export const Slide13_Quiz: React.FC = () => {
  const quizItems = [
    {
      question: 'Qual equipamento é este?',
      img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
      title: 'Cabo XLR (Cannon)',
      desc: 'Utilizado principalmente para conectar microfones à mesa de som com sinal balanceado e trava de segurança.',
    },
    {
      question: 'Qual equipamento é este?',
      img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
      title: 'Mesa de Som (Console de Mixagem)',
      desc: 'Central que recebe múltiplos canais de som, permite misturar, equalizar e controlar o volume individual de cada um.',
    },
    {
      question: 'Qual equipamento é este?',
      img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800&auto=format&fit=crop',
      title: 'Caixa de Som (Alto-falante)',
      desc: 'Transforma energia elétrica em movimento no cone para gerar as ondas de pressão sonora no ar.',
    },
  ];

  const [currentQuiz, setCurrentQuiz] = useState(0);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="Quiz dos Equipamentos"
        subtitle="Identifique a imagem antes de revelar a resposta"
        badge="Teste de Conhecimento"
      />

      {/* Quiz Card Ativo */}
      <div className="w-full max-w-4xl my-auto flex flex-col items-center justify-center relative">
        <QuizCard
          question={quizItems[currentQuiz].question}
          imageSrc={quizItems[currentQuiz].img}
          answerTitle={quizItems[currentQuiz].title}
          answerDescription={quizItems[currentQuiz].desc}
        />

        {/* Seleção do Quiz */}
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={() => setCurrentQuiz(Math.max(0, currentQuiz - 1))}
            disabled={currentQuiz === 0}
            className="p-3 rounded-full bg-slate-900 border border-slate-800 disabled:opacity-30 hover:bg-slate-800 text-white transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-mono font-bold text-slate-400">
            Pergunta {currentQuiz + 1} de {quizItems.length}
          </span>
          <button
            onClick={() => setCurrentQuiz(Math.min(quizItems.length - 1, currentQuiz + 1))}
            disabled={currentQuiz === quizItems.length - 1}
            className="p-3 rounded-full bg-slate-900 border border-slate-800 disabled:opacity-30 hover:bg-slate-800 text-white transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-2 text-slate-400 text-sm text-center"
      >
        Utilize as setas acima para alternar entre as perguntas do Quiz!
      </motion.p>
    </div>
  );
};
