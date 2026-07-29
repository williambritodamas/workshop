import { useState } from 'react';
import { PresentationLayout } from './components/PresentationLayout';
import LessonSelector from './components/LessonSelector';

// Aula 1
import { Slide01_Intro, slide01Notes } from './components/slides/aula1/Slide01_Intro';
import { Slide02_Question, slide02Notes } from './components/slides/aula1/Slide02_Question';
import { Slide03_Everywhere, slide03Notes } from './components/slides/aula1/Slide03_Everywhere';
import { Slide04_Definition, slide04Notes } from './components/slides/aula1/Slide04_Definition';
import { Slide05_Comparison, slide05Notes } from './components/slides/aula1/Slide05_Comparison';
import { Slide06_Speaker, slide06Notes } from './components/slides/aula1/Slide06_Speaker';
import { Slide07_Microphone, slide07Notes } from './components/slides/aula1/Slide07_Microphone';
import { Slide08_Duality, slide08Notes } from './components/slides/aula1/Slide08_Duality';
import { Slide09_AudioFlow, slide09Notes } from './components/slides/aula1/Slide09_AudioFlow';
import { Slide10_Mixer, slide10Notes } from './components/slides/aula1/Slide10_Mixer';
import { Slide11_Curiosities, slide11Notes } from './components/slides/aula1/Slide11_Curiosities';
import { Slide12_Practice, slide12Notes } from './components/slides/aula1/Slide12_Practice';
import { Slide13_Review, slide13Notes } from './components/slides/aula1/Slide13_Review';
import { Slide14_Closing, slide14Notes } from './components/slides/aula1/Slide14_Closing';

// Aula 2
import { Slide01_Intro2, slide01Notes as aula2Slide01Notes } from './components/slides/aula2/Slide01_Intro2';
import { Slide02_StageOverview, slide02Notes as aula2Slide02Notes } from './components/slides/aula2/Slide02_StageOverview';
import { Slide03_MicrophoneIntro, slide03Notes as aula2Slide03Notes } from './components/slides/aula2/Slide03_MicrophoneIntro';
import { Slide04_MicrophoneTypes, slide04Notes as aula2Slide04Notes } from './components/slides/aula2/Slide04_MicrophoneTypes';
import { Slide05_MixerConsole, slide05Notes as aula2Slide05Notes } from './components/slides/aula2/Slide05_MixerConsole';
import { Slide06_Speakers, slide06Notes as aula2Slide06Notes } from './components/slides/aula2/Slide06_Speakers';
import { Slide07_StageMonitors, slide07Notes as aula2Slide07Notes } from './components/slides/aula2/Slide07_StageMonitors';
import { Slide08_Cables, slide08Notes as aula2Slide08Notes } from './components/slides/aula2/Slide08_Cables';
import { Slide09_DiBox, slide09Notes as aula2Slide09Notes } from './components/slides/aula2/Slide09_DiBox';
import { Slide10_Amplifier, slide10Notes as aula2Slide10Notes } from './components/slides/aula2/Slide10_Amplifier';
import { Slide11_FullAudioPath, slide11Notes as aula2Slide11Notes } from './components/slides/aula2/Slide11_FullAudioPath';
import { Slide12_MatchingGame, slide12Notes as aula2Slide12Notes } from './components/slides/aula2/Slide12_MatchingGame';
import { Slide13_Quiz, slide13Notes as aula2Slide13Notes } from './components/slides/aula2/Slide13_Quiz';
import { Slide14_Review2, slide14Notes as aula2Slide14Notes } from './components/slides/aula2/Slide14_Review2';
import { Slide15_Closing2, slide15Notes as aula2Slide15Notes } from './components/slides/aula2/Slide15_Closing2';

export function App() {
  const [currentLesson, setCurrentLesson] = useState<0 | 1 | 2>(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const lesson1Slides = [
    <Slide01_Intro key="l1-1" />,
    <Slide02_Question key="l1-2" />,
    <Slide03_Everywhere key="l1-3" />,
    <Slide04_Definition key="l1-4" />,
    <Slide05_Comparison key="l1-5" />,
    <Slide06_Speaker key="l1-6" />,
    <Slide07_Microphone key="l1-7" />,
    <Slide08_Duality key="l1-8" />,
    <Slide09_AudioFlow key="l1-9" />,
    <Slide10_Mixer key="l1-10" />,
    <Slide11_Curiosities key="l1-11" />,
    <Slide12_Practice key="l1-12" />,
    <Slide13_Review key="l1-13" />,
    <Slide14_Closing key="l1-14" />,
  ];

  const lesson2Slides = [
    <Slide01_Intro2 key="l2-1" />,
    <Slide02_StageOverview key="l2-2" />,
    <Slide03_MicrophoneIntro key="l2-3" />,
    <Slide04_MicrophoneTypes key="l2-4" />,
    <Slide05_MixerConsole key="l2-5" />,
    <Slide06_Speakers key="l2-6" />,
    <Slide07_StageMonitors key="l2-7" />,
    <Slide08_Cables key="l2-8" />,
    <Slide09_DiBox key="l2-9" />,
    <Slide10_Amplifier key="l2-10" />,
    <Slide11_FullAudioPath key="l2-11" />,
    <Slide12_MatchingGame key="l2-12" />,
    <Slide13_Quiz key="l2-13" />,
    <Slide14_Review2 key="l2-14" />,
    <Slide15_Closing2 key="l2-15" />,
  ];

  const lesson1Notes = [
    slide01Notes,
    slide02Notes,
    slide03Notes,
    slide04Notes,
    slide05Notes,
    slide06Notes,
    slide07Notes,
    slide08Notes,
    slide09Notes,
    slide10Notes,
    slide11Notes,
    slide12Notes,
    slide13Notes,
    slide14Notes,
  ];

  const lesson1Titles = [
    'Slide 1 — Abertura',
    'Slide 2 — O que é Som?',
    'Slide 3 — O som está em todos os lugares',
    'Slide 4 — O Conceito Fundamental',
    'Slide 5 — Uma comparação intuitiva',
    'Slide 6 — Anatomia do Alto-falante',
    'Slide 7 — Anatomia do Microfone',
    'Slide 8 — Duas faces da mesma moeda',
    'Slide 9 — O Fluxo do Sinal de Áudio',
    'Slide 10 — O Coração do Sistema',
    'Slide 11 — Curiosidades sobre o Som',
    'Slide 12 — Demonstração Prática',
    'Slide 13 — Revisão dos Aprendizados',
    'Slide 14 — Encerramento',
  ];

  const lesson2Notes = [
    aula2Slide01Notes,
    aula2Slide02Notes,
    aula2Slide03Notes,
    aula2Slide04Notes,
    aula2Slide05Notes,
    aula2Slide06Notes,
    aula2Slide07Notes,
    aula2Slide08Notes,
    aula2Slide09Notes,
    aula2Slide10Notes,
    aula2Slide11Notes,
    aula2Slide12Notes,
    aula2Slide13Notes,
    aula2Slide14Notes,
    aula2Slide15Notes,
  ];

  const lesson2Titles = [
    'Slide 1 — Abertura (Aula 2)',
    'Slide 2 — O que existe em um sistema de áudio?',
    'Slide 3 — O Microfone',
    'Slide 4 — Tipos de Microfone',
    'Slide 5 — A Mesa de Som',
    'Slide 6 — Caixas de Som',
    'Slide 7 — Monitores de Palco',
    'Slide 8 — Cabos & Conectores',
    'Slide 9 — DI Box',
    'Slide 10 — Amplificador',
    'Slide 11 — O Caminho do Som (Fluxo de Sinal)',
    'Slide 12 — Jogo de Correspondência',
    'Slide 13 — Quiz dos Equipamentos',
    'Slide 14 — Revisão da Aula 2',
    'Slide 15 — Encerramento',
  ];

  const handleLessonChange = (lesson: 0 | 1 | 2) => {
    setCurrentLesson(lesson);
    setCurrentSlide(0);
  };

  const activeSlides = currentLesson === 1 ? lesson1Slides : lesson2Slides;
  const activeNotes = currentLesson === 1 ? lesson1Notes : lesson2Notes;
  const activeTitles = currentLesson === 1 ? lesson1Titles : lesson2Titles;

  return (
    currentLesson === 0 ? (
      <LessonSelector onSelect={handleLessonChange} />
    ) : (
      <PresentationLayout
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
        currentLesson={currentLesson}
        onLessonChange={handleLessonChange}
        slideNotes={activeNotes}
        slideTitles={activeTitles}
      >
        {activeSlides}
      </PresentationLayout>
    )
  );
}

export default App;
