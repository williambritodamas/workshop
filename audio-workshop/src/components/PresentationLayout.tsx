import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PresenterNotesModal } from './ui/PresenterNotesModal';
import type { PresenterNote } from '../types/presentation';
import {
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  Volume2,
  FileText,
  ArrowLeft,
  Eye,
  EyeOff,
} from 'lucide-react';

interface PresentationLayoutProps {
  children: React.ReactNode[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
  currentLesson: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  onLessonChange: (lesson: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) => void;
  slideNotes?: PresenterNote[];
  slideTitles?: string[];
}

export const PresentationLayout: React.FC<PresentationLayoutProps> = ({
  children,
  currentSlide,
  onSlideChange,
  currentLesson,
  onLessonChange,
  slideNotes,
  slideTitles,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(true);
  const totalSlides = children.length;

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      onSlideChange(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, onSlideChange]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      onSlideChange(currentSlide - 1);
    }
  }, [currentSlide, onSlideChange]);

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

  // Sincroniza estado fullscreen com eventos do navegador
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Alternar Modo Fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err: Error) => {
        console.error(`Erro ao entrar em fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch((err: Error) => {
        console.error(`Erro ao sair do fullscreen: ${err.message}`);
      });
    }
  };

  return (
    <div className="relative w-screen h-screen bg-slate-950 text-slate-100 overflow-hidden select-none font-sans">
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
      <div className="w-full h-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentLesson}-${currentSlide}`}
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.02, x: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full h-full"
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
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl">
        {/* Seletor de Aula */}
        <div className="flex items-center gap-1.5 pr-3 border-r border-slate-800 text-xs font-semibold">
          <Volume2 className="w-4 h-4 text-blue-400 hidden sm:block" />
          <div className="flex bg-slate-950 p-1 rounded-full border border-slate-800">
            <button
              onClick={() => onLessonChange(1)}
              className={`px-2.5 py-1 rounded-full transition-all ${
                currentLesson === 1
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Aula 1
            </button>
            <button
              onClick={() => onLessonChange(2)}
              className={`px-2.5 py-1 rounded-full transition-all ${
                currentLesson === 2
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Aula 2
            </button>
            <button
              onClick={() => onLessonChange(3)}
              className={`px-2.5 py-1 rounded-full transition-all ${
                currentLesson === 3
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Aula 3
            </button>
            <button
              onClick={() => onLessonChange(4)}
              className={`px-2.5 py-1 rounded-full transition-all ${
                currentLesson === 4
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Aula 4
            </button>
            <button
              onClick={() => onLessonChange(5)}
              className={`px-2.5 py-1 rounded-full transition-all ${
                currentLesson === 5
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Aula 5
            </button>
            <button
              onClick={() => onLessonChange(6)}
              className={`px-2.5 py-1 rounded-full transition-all ${
                currentLesson === 6
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Aula 6
            </button>
            <button
              onClick={() => onLessonChange(7)}
              className={`px-2.5 py-1 rounded-full transition-all ${
                currentLesson === 7
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Aula 7
            </button>
            <button
              onClick={() => onLessonChange(8)}
              className={`px-2.5 py-1 rounded-full transition-all ${
                currentLesson === 8
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Aula 8
            </button>
            <button
              onClick={() => onLessonChange(9)}
              className={`px-2.5 py-1 rounded-full transition-all ${
                currentLesson === 9
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Aula 9
            </button>
            <button
              onClick={() => onLessonChange(10)}
              className={`px-2.5 py-1 rounded-full transition-all ${
                currentLesson === 10
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Aula 10
            </button>
          </div>
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

          {/* Botão Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full hover:bg-slate-800 transition-all text-slate-300 hover:text-white"
            title="Alternar Tela Cheia"
          >
            {isFullscreen ? (
              <Minimize className="w-4 h-4 text-blue-400" />
            ) : (
              <Maximize className="w-4 h-4" />
            )}
          </button>
        </div>
      </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};
