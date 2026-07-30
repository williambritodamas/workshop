import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Monitor, X, Clock, FileText, Lightbulb, HelpCircle, Wrench } from 'lucide-react';
import type { PresenterNote } from '../types/presentation';
import { sendMessage } from '../utils/presentationChannel';

interface PresenterViewProps {
  children: React.ReactNode[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
  currentLesson: number;
  onLessonChange: (lesson: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12) => void;
  slideNotes?: PresenterNote[];
  slideTitles?: string[];
  onClose: () => void;
}

export const PresenterView: React.FC<PresenterViewProps> = ({
  children,
  currentSlide,
  onSlideChange,
  currentLesson,
  onLessonChange,
  slideNotes,
  slideTitles,
  onClose,
}) => {
  const totalSlides = children.length;
  const notes = slideNotes?.[currentSlide];
  const title = slideTitles?.[currentSlide] || `Slide ${currentSlide + 1}`;

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      const next = currentSlide + 1;
      onSlideChange(next);
      sendMessage({ type: 'SLIDE_CHANGE', lesson: currentLesson, slide: next });
    }
  }, [currentSlide, totalSlides, onSlideChange, currentLesson]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      const prev = currentSlide - 1;
      onSlideChange(prev);
      sendMessage({ type: 'SLIDE_CHANGE', lesson: currentLesson, slide: prev });
    }
  }, [currentSlide, onSlideChange, currentLesson]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextSlide(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide(); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const goToSlide = (index: number) => {
    onSlideChange(index);
    sendMessage({ type: 'SLIDE_CHANGE', lesson: currentLesson, slide: index });
  };

  const handleLessonChange = (lesson: number) => {
    onLessonChange(lesson as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12);
    sendMessage({ type: 'LESSON_CHANGE', lesson, slide: 0 });
  };

  return (
    <div className="w-screen h-screen bg-slate-950 text-white flex flex-col overflow-hidden">
      {/* Top bar */}
      <div className="shrink-0 flex items-center justify-between px-6 py-3 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-red-400 transition-all" title="Encerrar modo apresentador">
            <X className="w-5 h-5" />
          </button>
          <div className="h-6 w-px bg-slate-800" />
          <div className="flex items-center gap-2">
            <Monitor className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-bold text-blue-400">Modo Apresentador</span>
          </div>
          <div className="h-6 w-px bg-slate-800" />
          <span className="text-sm text-slate-300 font-medium">Aula {currentLesson} — {title}</span>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={currentLesson}
            onChange={(e) => handleLessonChange(Number(e.target.value))}
            className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-200 cursor-pointer focus:outline-none focus:border-blue-500"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>Aula {i + 1}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex gap-0 min-h-0">
        {/* Left: slide preview */}
        <div className="flex-1 flex flex-col p-4 gap-3 min-w-0">
          <div className="flex-1 relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
            <div className="absolute inset-0 scale-[0.6] origin-top-left pointer-events-none" style={{ width: '166.66%', height: '166.66%' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentLesson}-${currentSlide}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  {children[currentSlide]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button onClick={prevSlide} disabled={currentSlide === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-semibold">
              <ChevronLeft className="w-4 h-4" /> Anterior
            </button>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-slate-500" />
              <span className="text-sm font-mono font-bold tabular-nums">
                {currentSlide + 1} <span className="text-slate-500">/</span> {totalSlides}
              </span>
            </div>
            <button onClick={nextSlide} disabled={currentSlide === totalSlides - 1}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-semibold">
              Próximo <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          {/* Progress bar */}
          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          {/* Slide list */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            {Array.from({ length: totalSlides }, (_, i) => (
              <button key={i} onClick={() => goToSlide(i)}
                className={`shrink-0 w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                  i === currentSlide
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Right: notes panel */}
        <div className="w-[420px] shrink-0 p-4 overflow-y-auto border-l border-slate-800">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-bold text-blue-400">Notas do Apresentador</span>
          </div>
          {notes ? (
            <div className="space-y-4">
              {notes.explanation && (
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                    <Lightbulb className="w-3.5 h-3.5" /> Explicação
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{notes.explanation}</p>
                </div>
              )}
              {notes.practicalExamples && notes.practicalExamples.length > 0 && (
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                    <Wrench className="w-3.5 h-3.5" /> Dicas Práticas
                  </div>
                  <ul className="space-y-1">
                    {notes.practicalExamples.map((ex, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">•</span> {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {notes.audienceQuestions && notes.audienceQuestions.length > 0 && (
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                    <HelpCircle className="w-3.5 h-3.5" /> Perguntas para Interação
                  </div>
                  <ul className="space-y-1">
                    {notes.audienceQuestions.map((q, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-amber-400 mt-0.5">?</span> {q}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {notes.liveDemos && notes.liveDemos.length > 0 && (
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 text-purple-300 text-xs font-semibold uppercase tracking-wider">
                    <Monitor className="w-3.5 h-3.5" /> Demonstrações
                  </div>
                  <ul className="space-y-1">
                    {notes.liveDemos.map((d, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5">▶</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {notes.curiosities && notes.curiosities.length > 0 && (
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                    <Lightbulb className="w-3.5 h-3.5" /> Curiosidades
                  </div>
                  <ul className="space-y-1">
                    {notes.curiosities.map((c, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400 mt-0.5">✦</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm text-slate-500 italic">Nenhuma nota disponível para este slide.</p>
          )}
        </div>
      </div>
    </div>
  );
};
