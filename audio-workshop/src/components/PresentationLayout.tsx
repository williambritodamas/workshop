import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PresenterNotesModal } from './ui/PresenterNotesModal';
import type { PresenterNote } from '../types/presentation';
import {
  ChevronLeft,
  ChevronRight,
  Monitor,
  Volume2,
  FileText,
  ArrowLeft,
  Eye,
  EyeOff,
} from 'lucide-react';
import { sendMessage } from '../utils/presentationChannel';

interface PresentationLayoutProps {
  children: React.ReactNode[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
  currentLesson: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  onLessonChange: (lesson: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12) => void;
  slideNotes?: PresenterNote[];
  slideTitles?: string[];
  onPresenterMode?: () => void;
}

export const PresentationLayout: React.FC<PresentationLayoutProps> = ({
  children,
  currentSlide,
  onSlideChange,
  currentLesson,
  onLessonChange,
  slideNotes,
  slideTitles,
  onPresenterMode,
}) => {
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(true);
  const totalSlides = children.length;

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      onSlideChange(currentSlide + 1);
      sendMessage({ type: 'SLIDE_CHANGE', lesson: currentLesson, slide: currentSlide + 1 });
    }
  }, [currentSlide, totalSlides, onSlideChange, currentLesson]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      onSlideChange(currentSlide - 1);
      sendMessage({ type: 'SLIDE_CHANGE', lesson: currentLesson, slide: currentSlide - 1 });
    }
  }, [currentSlide, onSlideChange, currentLesson]);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Suporte a teclas de navegação (Setas Esquerda, Direita, Espaço, N para notas)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key.toLowerCase() === 'n') {
        e.preventDefault();
        setIsNotesOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 'm') {
        e.preventDefault();
        setMenuVisible((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div 
      className="relative w-screen h-screen bg-slate-950 text-slate-100 overflow-hidden select-none font-sans"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Barra de Progresso Superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* Botão Voltar para página inicial */}
      <button
        onClick={() => onLessonChange(0)}
        className="absolute top-4 left-4 z-50 flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-all text-xs font-semibold shadow-lg"
        title="Voltar à página inicial"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Voltar</span>
      </button>

      {/* Botão Esconder/Exibir Menu */}
      <button
        onClick={() => setMenuVisible((prev) => !prev)}
        className="absolute bottom-20 right-4 z-50 p-2 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all shadow-lg"
        title={menuVisible ? 'Esconder Menu (M)' : 'Exibir Menu (M)'}
      >
        {menuVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>

      {/* Conteúdo do Slide Ativo */}
      <div className={`w-full relative overflow-hidden transition-all duration-300 ${menuVisible ? 'pb-[80px]' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentLesson}-${currentSlide}`}
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.02, x: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full h-full overflow-hidden hide-scrollbars"
          >
            {children[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal de Notas do Apresentador */}
      <PresenterNotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        notes={slideNotes ? slideNotes[currentSlide] : undefined}
        slideTitle={slideTitles ? slideTitles[currentSlide] : `Slide ${currentSlide + 1}`}
      />

      {/* Barra de Controle Inferior Flutuante */}
      <AnimatePresence>
        {menuVisible && (
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 md:gap-3 px-3 md:px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl w-max max-w-[95vw]">
        {/* Seletor de Aula */}
        <div className="flex items-center gap-1.5 pr-2 md:pr-3 border-r border-slate-800 text-xs font-semibold shrink-0">
          <Volume2 className="w-4 h-4 text-blue-400 hidden sm:block shrink-0" />
          <select
            value={currentLesson}
            onChange={(e) => onLessonChange(Number(e.target.value) as any)}
            className="bg-slate-950 border border-slate-800 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-200 cursor-pointer focus:outline-none focus:border-blue-500 hover:bg-slate-900 transition-colors"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
              <option key={num} value={num}>
                Aula {num}
              </option>
            ))}
          </select>
        </div>

        {/* Botão Anterior */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all text-slate-300 hover:text-white"
          title="Slide Anterior (←)"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Contador Numérico */}
        <span className="text-xs md:text-sm font-mono font-bold text-slate-300 px-2">
          {currentSlide + 1} <span className="text-slate-600">/</span> {totalSlides}
        </span>

        {/* Botão Próximo */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="p-2 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all text-slate-300 hover:text-white"
          title="Próximo Slide (→)"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Botão de Notas do Apresentador */}
        <div className="pl-3 border-l border-slate-800 flex items-center gap-2">
          <button
            onClick={() => setIsNotesOpen(!isNotesOpen)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              isNotesOpen
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
            title="Notas do Apresentador (Atalho: N)"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Notas</span>
          </button>

          {/* Modo Apresentador */}
          <button
            onClick={onPresenterMode}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/20"
            title="Abrir modo apresentador com duas telas"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden md:inline">2 Telas</span>
          </button>
        </div>
      </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};
