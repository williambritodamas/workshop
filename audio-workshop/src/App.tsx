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

// Aula 3
import { Slide01_Opening, slide01Notes as aula3Slide01Notes } from './components/slides/aula3/Slide01_Opening';
import { Slide02_Question as Aula3_Slide02_Question, slide02Notes as aula3Slide02Notes } from './components/slides/aula3/Slide02_Question';
import { Slide03_FullSystem, slide03Notes as aula3Slide03Notes } from './components/slides/aula3/Slide03_FullSystem';
import { Slide04_Source, slide04Notes as aula3Slide04Notes } from './components/slides/aula3/Slide04_Source';
import { Slide05_Microphone, slide05Notes as aula3Slide05Notes } from './components/slides/aula3/Slide05_Microphone';
import { Slide06_Cable, slide06Notes as aula3Slide06Notes } from './components/slides/aula3/Slide06_Cable';
import { Slide07_Mixer, slide07Notes as aula3Slide07Notes } from './components/slides/aula3/Slide07_Mixer';
import { Slide08_Processing, slide08Notes as aula3Slide08Notes } from './components/slides/aula3/Slide08_Processing';
import { Slide09_Amplifier, slide09Notes as aula3Slide09Notes } from './components/slides/aula3/Slide09_Amplifier';
import { Slide10_Speaker, slide10Notes as aula3Slide10Notes } from './components/slides/aula3/Slide10_Speaker';
import { Slide11_FullFlow, slide11Notes as aula3Slide11Notes } from './components/slides/aula3/Slide11_FullFlow';
import { Slide12_Problems, slide12Notes as aula3Slide12Notes } from './components/slides/aula3/Slide12_Problems';
import { Slide13_Exercise, slide13Notes as aula3Slide13Notes } from './components/slides/aula3/Slide13_Exercise';
import { Slide14_Practice, slide14Notes as aula3Slide14Notes } from './components/slides/aula3/Slide14_Practice';
import { Slide15_Review, slide15Notes as aula3Slide15Notes } from './components/slides/aula3/Slide15_Review';
import { Slide16_Closing, slide16Notes as aula3Slide16Notes } from './components/slides/aula3/Slide16_Closing';

// Aula 4
import { Slide01_Opening as Aula4_Slide01_Opening, slide01Notes as aula4Slide01Notes } from './components/slides/aula4/Slide01_Opening';
import { Slide02_WhatItDoes, slide02Notes as aula4Slide02Notes } from './components/slides/aula4/Slide02_WhatItDoes';
import { Slide03_Analogy, slide03Notes as aula4Slide03Notes } from './components/slides/aula4/Slide03_Analogy';
import { Slide04_Types, slide04Notes as aula4Slide04Notes } from './components/slides/aula4/Slide04_Types';
import { Slide05_Dynamic, slide05Notes as aula4Slide05Notes } from './components/slides/aula4/Slide05_Dynamic';
import { Slide06_Condenser, slide06Notes as aula4Slide06Notes } from './components/slides/aula4/Slide06_Condenser';
import { Slide07_Specialized, slide07Notes as aula4Slide07Notes } from './components/slides/aula4/Slide07_Specialized';
import { Slide08_PolarPatterns, slide08Notes as aula4Slide08Notes } from './components/slides/aula4/Slide08_PolarPatterns';
import { Slide09_Positioning, slide09Notes as aula4Slide09Notes } from './components/slides/aula4/Slide09_Positioning';
import { Slide10_Mistakes, slide10Notes as aula4Slide10Notes } from './components/slides/aula4/Slide10_Mistakes';
import { Slide11_Demo, slide11Notes as aula4Slide11Notes } from './components/slides/aula4/Slide11_Demo';
import { Slide12_Selector, slide12Notes as aula4Slide12Notes } from './components/slides/aula4/Slide12_Selector';
import { Slide13_Quiz as Aula4_Slide13_Quiz, slide13Notes as aula4Slide13Notes } from './components/slides/aula4/Slide13_Quiz';
import { Slide14_Recap, slide14Notes as aula4Slide14Notes } from './components/slides/aula4/Slide14_Recap';
import { Slide15_Closing, slide15Notes as aula4Slide15Notes } from './components/slides/aula4/Slide15_Closing';

// Aula 5
import { Slide01_Opening as Aula5_Slide01_Opening, slide01Notes as aula5Slide01Notes } from './components/slides/aula5/Slide01_Opening';
import { Slide02_WhatIsMixer, slide02Notes as aula5Slide02Notes } from './components/slides/aula5/Slide02_WhatIsMixer';
import { Slide03_Anatomy, slide03Notes as aula5Slide03Notes } from './components/slides/aula5/Slide03_Anatomy';
import { Slide04_Channel, slide04Notes as aula5Slide04Notes } from './components/slides/aula5/Slide04_Channel';
import { Slide05_SignalPath, slide05Notes as aula5Slide05Notes } from './components/slides/aula5/Slide05_SignalPath';
import { Slide06_Controls, slide06Notes as aula5Slide06Notes } from './components/slides/aula5/Slide06_Controls';
import { Slide07_AnalogVsDigital, slide07Notes as aula5Slide07Notes } from './components/slides/aula5/Slide07_AnalogVsDigital';
import { Slide08_PracticalDifferences, slide08Notes as aula5Slide08Notes } from './components/slides/aula5/Slide08_PracticalDifferences';
import { Slide09_Demo as Aula5_Slide09_Demo, slide09Notes as aula5Slide09Notes } from './components/slides/aula5/Slide09_Demo';
import { Slide10_Recap as Aula5_Slide10_Recap, slide10Notes as aula5Slide10Notes } from './components/slides/aula5/Slide10_Recap';
import { Slide11_Quiz, slide11Notes as aula5Slide11Notes } from './components/slides/aula5/Slide11_Quiz';
import { Slide12_Exercises, slide12Notes as aula5Slide12Notes } from './components/slides/aula5/Slide12_Exercises';
import { Slide13_FinalChallenge, slide13Notes as aula5Slide13Notes } from './components/slides/aula5/Slide13_FinalChallenge';
import { Slide14_Closing as Aula5_Slide14_Closing, slide14Notes as aula5Slide14Notes } from './components/slides/aula5/Slide14_Closing';
import { Slide15_References, slide15Notes as aula5Slide15Notes } from './components/slides/aula5/Slide15_References';

export function App() {
  const [currentLesson, setCurrentLesson] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);
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

  const lesson3Slides = [
    <Slide01_Opening key="l3-1" />,
    <Aula3_Slide02_Question key="l3-2" />,
    <Slide03_FullSystem key="l3-3" />,
    <Slide04_Source key="l3-4" />,
    <Slide05_Microphone key="l3-5" />,
    <Slide06_Cable key="l3-6" />,
    <Slide07_Mixer key="l3-7" />,
    <Slide08_Processing key="l3-8" />,
    <Slide09_Amplifier key="l3-9" />,
    <Slide10_Speaker key="l3-10" />,
    <Slide11_FullFlow key="l3-11" />,
    <Slide12_Problems key="l3-12" />,
    <Slide13_Exercise key="l3-13" />,
    <Slide14_Practice key="l3-14" />,
    <Slide15_Review key="l3-15" />,
    <Slide16_Closing key="l3-16" />,
  ];

  const lesson4Slides = [
    <Aula4_Slide01_Opening key="l4-1" />,
    <Slide02_WhatItDoes key="l4-2" />,
    <Slide03_Analogy key="l4-3" />,
    <Slide04_Types key="l4-4" />,
    <Slide05_Dynamic key="l4-5" />,
    <Slide06_Condenser key="l4-6" />,
    <Slide07_Specialized key="l4-7" />,
    <Slide08_PolarPatterns key="l4-8" />,
    <Slide09_Positioning key="l4-9" />,
    <Slide10_Mistakes key="l4-10" />,
    <Slide11_Demo key="l4-11" />,
    <Slide12_Selector key="l4-12" />,
    <Aula4_Slide13_Quiz key="l4-13" />,
    <Slide14_Recap key="l4-14" />,
    <Slide15_Closing key="l4-15" />,
  ];

  const lesson5Slides = [
    <Aula5_Slide01_Opening key="l5-1" />,
    <Slide02_WhatIsMixer key="l5-2" />,
    <Slide03_Anatomy key="l5-3" />,
    <Slide04_Channel key="l5-4" />,
    <Slide05_SignalPath key="l5-5" />,
    <Slide06_Controls key="l5-6" />,
    <Slide07_AnalogVsDigital key="l5-7" />,
    <Slide08_PracticalDifferences key="l5-8" />,
    <Aula5_Slide09_Demo key="l5-9" />,
    <Aula5_Slide10_Recap key="l5-10" />,
    <Slide11_Quiz key="l5-11" />,
    <Slide12_Exercises key="l5-12" />,
    <Slide13_FinalChallenge key="l5-13" />,
    <Aula5_Slide14_Closing key="l5-14" />,
    <Slide15_References key="l5-15" />,
  ];

  const lesson3Notes = [
    aula3Slide01Notes,
    aula3Slide02Notes,
    aula3Slide03Notes,
    aula3Slide04Notes,
    aula3Slide05Notes,
    aula3Slide06Notes,
    aula3Slide07Notes,
    aula3Slide08Notes,
    aula3Slide09Notes,
    aula3Slide10Notes,
    aula3Slide11Notes,
    aula3Slide12Notes,
    aula3Slide13Notes,
    aula3Slide14Notes,
    aula3Slide15Notes,
    aula3Slide16Notes,
  ];

  const lesson4Notes = [
    aula4Slide01Notes,
    aula4Slide02Notes,
    aula4Slide03Notes,
    aula4Slide04Notes,
    aula4Slide05Notes,
    aula4Slide06Notes,
    aula4Slide07Notes,
    aula4Slide08Notes,
    aula4Slide09Notes,
    aula4Slide10Notes,
    aula4Slide11Notes,
    aula4Slide12Notes,
    aula4Slide13Notes,
    aula4Slide14Notes,
    aula4Slide15Notes,
  ];

  const lesson5Notes = [
    aula5Slide01Notes,
    aula5Slide02Notes,
    aula5Slide03Notes,
    aula5Slide04Notes,
    aula5Slide05Notes,
    aula5Slide06Notes,
    aula5Slide07Notes,
    aula5Slide08Notes,
    aula5Slide09Notes,
    aula5Slide10Notes,
    aula5Slide11Notes,
    aula5Slide12Notes,
    aula5Slide13Notes,
    aula5Slide14Notes,
    aula5Slide15Notes,
  ];

  const lesson4Titles = [
    'Slide 1 — Abertura (Aula 4)',
    'Slide 2 — O que faz um microfone?',
    'Slide 3 — O microfone é como...',
    'Slide 4 — Principais tipos de microfone',
    'Slide 5 — Microfone Dinâmico',
    'Slide 6 — Microfone Condensador',
    'Slide 7 — Microfones especializados',
    'Slide 8 — Padrões Polares',
    'Slide 9 — Posicionamento',
    'Slide 10 — Erros comuns',
    'Slide 11 — Demonstração prática',
    'Slide 12 — Qual microfone escolher?',
    'Slide 13 — Quiz',
    'Slide 14 — Resumo da Aula 4',
    'Slide 15 — Encerramento',
  ];

  const lesson5Titles = [
    'Slide 1 — Abertura (Aula 5)',
    'Slide 2 — O que faz uma mesa de som?',
    'Slide 3 — Conhecendo uma mesa',
    'Slide 4 — O que é um canal?',
    'Slide 5 — O caminho dentro da mesa',
    'Slide 6 — Conhecendo cada controle',
    'Slide 7 — Analógica × Digital',
    'Slide 8 — O que muda na prática?',
    'Slide 9 — Demonstração prática',
    'Slide 10 — Recapitulação',
    'Slide 11 — Quiz',
    'Slide 12 — Exercícios',
    'Slide 13 — Desafio Final',
    'Slide 14 — Encerramento',
    'Slide 15 — Referências',
  ];

  const lesson3Titles = [
    'Slide 1 — Abertura (Aula 3)',
    'Slide 2 — Como minha voz chega até a caixa?',
    'Slide 3 — O Sistema Completo',
    'Slide 4 — Tudo começa aqui',
    'Slide 5 — O Microfone',
    'Slide 6 — O Cabo',
    'Slide 7 — A Mesa de Som',
    'Slide 8 — Processamento',
    'Slide 9 — Amplificador',
    'Slide 10 — Caixa de Som',
    'Slide 11 — O Caminho Completo',
    'Slide 12 — Onde podem acontecer problemas?',
    'Slide 13 — Exercício',
    'Slide 14 — Demonstração Prática',
    'Slide 15 — Revisão',
    'Slide 16 — Encerramento',
  ];

  const handleLessonChange = (lesson: 0 | 1 | 2 | 3 | 4 | 5) => {
    setCurrentLesson(lesson);
    setCurrentSlide(0);
  };

  const slidesMap: Record<number, React.ReactNode[]> = { 1: lesson1Slides, 2: lesson2Slides, 3: lesson3Slides, 4: lesson4Slides, 5: lesson5Slides };
  const notesMap: Record<number, typeof lesson1Notes> = { 1: lesson1Notes, 2: lesson2Notes, 3: lesson3Notes, 4: lesson4Notes, 5: lesson5Notes };
  const titlesMap: Record<number, string[]> = { 1: lesson1Titles, 2: lesson2Titles, 3: lesson3Titles, 4: lesson4Titles, 5: lesson5Titles };
  const activeSlides = slidesMap[currentLesson];
  const activeNotes = notesMap[currentLesson];
  const activeTitles = titlesMap[currentLesson];

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
