import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LogOut, Shield, User } from 'lucide-react';
import { useAutenticacao } from './contexts/AutenticacaoContext';
import { PresentationLayout } from './components/PresentationLayout';
import LessonSelector from './components/LessonSelector';
import { PresenterView } from './components/PresenterView';
import PresentationSlidesView from './components/PresentationSlidesView';
import { sendMessage } from './utils/presentationChannel';
import { registroAulas } from './components/slides/registroAulas';

interface AppConteudoProps {
  onSairLogin: () => void;
  onAbrirAdmin: () => void;
}

export const AppConteudo: React.FC<AppConteudoProps> = ({ onSairLogin, onAbrirAdmin }) => {
  const { usuarioAtual, podeAcesar, logout, isAdmin, recarregarUsuario } = useAutenticacao();
  const [currentLesson, setCurrentLesson] = useState<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [presenterMode, setPresenterMode] = useState(false);

  useEffect(() => {
    recarregarUsuario();
  }, [recarregarUsuario]);

  // Modo apresentação em tela cheia (apenas admin)
  if (new URLSearchParams(window.location.search).get('mode') === 'presentation') {
    if (!isAdmin) {
      window.location.search = '';
      return null;
    }
    return <PresentationSlidesView />;
  }

  const handleLessonChange = (lesson: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12) => {
    // Verificar acesso à aula
    if (lesson !== 0 && !podeAcesar(lesson)) {
      alert('Você não tem acesso a esta aula. Entre em contato com o administrador.');
      return;
    }
    setCurrentLesson(lesson);
    setCurrentSlide(0);
  };

  const handlePresenterMode = () => {
    // Modo apresentador é restrito ao admin
    if (!isAdmin) {
      alert('Apenas administradores podem abrir o modo apresentador.');
      return;
    }
    const url = window.location.origin + window.location.pathname + `?mode=presentation&lesson=${currentLesson}&slide=${currentSlide}`;
    window.open(url, 'presentation-window', 'width=1280,height=720');
    setPresenterMode(true);
  };

  const handleClosePresenter = () => {
    sendMessage({ type: 'CLOSE', lesson: currentLesson, slide: currentSlide });
    setPresenterMode(false);
  };

  const activeAula = currentLesson === 0 ? undefined : registroAulas[currentLesson];
  const activeSlides = activeAula?.slides ?? [];
  const activeNotes = activeAula?.notes ?? [];
  const activeTitles = activeAula?.titles ?? [];

  // LessonSelector customizado que só mostra aulas liberadas
  const handleSelectLeson = (lesson: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12) => {
    handleLessonChange(lesson as any);
  };

  const LessonSelectorComAutenticacao = () => {
    return (
      <div className="min-h-screen w-full p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Header com usuário e logout */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-6 left-6 right-6 max-w-7xl mx-auto z-50 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-blue-400" />
            <span className="text-white font-semibold text-sm md:text-base">{usuarioAtual?.nome}</span>
            {isAdmin && (
              <div className="px-2 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                <span className="text-xs font-bold text-purple-400 flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Admin
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-3">
            {isAdmin && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onAbrirAdmin}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-sm hover:from-purple-500 hover:to-pink-400 transition-all"
              >
                <Shield className="w-4 h-4 inline mr-2" />
                Painel Admin
              </motion.button>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { logout(); onSairLogin(); }}
              className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 font-bold text-sm hover:bg-red-500/20 transition-all"
            >
              <LogOut className="w-4 h-4 inline mr-2" />
              Sair
            </motion.button>
          </div>
        </motion.div>

        {/* Conteúdo Principal */}
        <div className="mt-20">
          <LessonSelector onSelect={handleSelectLeson} filtroAulas={podeAcesar} />
        </div>
      </div>
    );
  };

  return presenterMode ? (
    <PresenterView
      currentSlide={currentSlide}
      onSlideChange={setCurrentSlide}
      currentLesson={currentLesson}
      onLessonChange={handleLessonChange}
      slideNotes={activeNotes}
      slideTitles={activeTitles}
      onClose={handleClosePresenter}
    >
      {activeSlides}
    </PresenterView>
  ) : currentLesson === 0 ? (
    <LessonSelectorComAutenticacao />
  ) : (
    <PresentationLayout
      currentSlide={currentSlide}
      onSlideChange={setCurrentSlide}
      currentLesson={currentLesson}
      onLessonChange={handleLessonChange}
      slideNotes={activeNotes}
      slideTitles={activeTitles}
      onPresenterMode={handlePresenterMode}
      isAdmin={isAdmin}
    >
      {activeSlides}
    </PresentationLayout>
  );
};