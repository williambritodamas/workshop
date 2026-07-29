import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PresenterNote } from '../../types/presentation';
import { FileText, X, HelpCircle, Lightbulb, MessageSquare, Flame } from 'lucide-react';

interface PresenterNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  notes?: PresenterNote;
  slideTitle: string;
}

export const PresenterNotesModal: React.FC<PresenterNotesModalProps> = ({
  isOpen,
  onClose,
  notes,
  slideTitle,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-16 right-4 md:right-8 z-50 w-[92vw] md:w-[480px] max-h-[75vh] bg-slate-900/95 border border-blue-500/40 rounded-3xl p-6 shadow-2xl backdrop-blur-xl overflow-y-auto flex flex-col text-slate-200"
        >
          {/* Cabeçalho do Modal */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4 sticky top-0 bg-slate-900/90 backdrop-blur-md pt-1 z-10">
            <div className="flex items-center gap-2 text-blue-400 font-bold">
              <FileText className="w-5 h-5" />
              <span>Notas do Apresentador</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <h3 className="text-lg font-bold text-white mb-4 leading-tight">
            {slideTitle}
          </h3>

          {!notes ? (
            <p className="text-sm text-slate-400 italic">Nenhuma nota cadastrada para este slide.</p>
          ) : (
            <div className="flex flex-col gap-5 text-sm">
              {/* Explicação Detalhada */}
              <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                <h4 className="font-bold text-blue-300 flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-yellow-400" /> Explicação Detalhada
                </h4>
                <p className="text-slate-300 leading-relaxed">{notes.explanation}</p>
              </div>

              {/* Exemplos Práticos */}
              {notes.practicalExamples && notes.practicalExamples.length > 0 && (
                <div>
                  <h4 className="font-bold text-cyan-300 flex items-center gap-2 mb-2">
                    <Flame className="w-4 h-4 text-cyan-400" /> Exemplos Práticos
                  </h4>
                  <ul className="list-disc list-inside space-y-1.5 text-slate-300">
                    {notes.practicalExamples.map((ex: string, i: number) => (
                      <li key={i}>{ex}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Perguntas para Interagir */}
              {notes.audienceQuestions && notes.audienceQuestions.length > 0 && (
                <div>
                  <h4 className="font-bold text-indigo-300 flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-indigo-400" /> Perguntas para a Plateia
                  </h4>
                  <ul className="list-disc list-inside space-y-1.5 text-slate-300">
                    {notes.audienceQuestions.map((q: string, i: number) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Demonstrações ao Vivo */}
              {notes.liveDemos && notes.liveDemos.length > 0 && (
                <div>
                  <h4 className="font-bold text-emerald-300 flex items-center gap-2 mb-2">
                    <HelpCircle className="w-4 h-4 text-emerald-400" /> Demonstração Prática
                  </h4>
                  <ul className="list-disc list-inside space-y-1.5 text-slate-300">
                    {notes.liveDemos.map((demo: string, i: number) => (
                      <li key={i}>{demo}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
