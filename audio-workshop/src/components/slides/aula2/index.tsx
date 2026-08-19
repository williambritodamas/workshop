import type { ReactNode } from 'react';
import type { PresenterNote } from '../../../types/presentation';
import { Slide01_Intro2, slide01Notes } from './Slide01_Intro2';
import { Slide02_StageOverview, slide02Notes } from './Slide02_StageOverview';
import { Slide03_MicrophoneIntro, slide03Notes } from './Slide03_MicrophoneIntro';
import { Slide04_MicrophoneTypes, slide04Notes } from './Slide04_MicrophoneTypes';
import { Slide05_MixerConsole, slide05Notes } from './Slide05_MixerConsole';
import { Slide06_Speakers, slide06Notes } from './Slide06_Speakers';
import { Slide07_StageMonitors, slide07Notes } from './Slide07_StageMonitors';
import { Slide08_Cables, slide08Notes } from './Slide08_Cables';
import { Slide09_DiBox, slide09Notes } from './Slide09_DiBox';
import { Slide10_Amplifier, slide10Notes } from './Slide10_Amplifier';
import { Slide11_FullAudioPath, slide11Notes } from './Slide11_FullAudioPath';
import { Slide12_MatchingGame, slide12Notes } from './Slide12_MatchingGame';
import { Slide13_Quiz, slide13Notes } from './Slide13_Quiz';
import { Slide14_Review2, slide14Notes } from './Slide14_Review2';
import { Slide15_Closing2, slide15Notes } from './Slide15_Closing2';

export const aula2: {
  id: number;
  slides: ReactNode[];
  notes: PresenterNote[];
  titles: string[];
} = {
  id: 2,
  slides: [
    <Slide01_Intro2 key="2-1" />,
    <Slide02_StageOverview key="2-2" />,
    <Slide03_MicrophoneIntro key="2-3" />,
    <Slide04_MicrophoneTypes key="2-4" />,
    <Slide05_MixerConsole key="2-5" />,
    <Slide06_Speakers key="2-6" />,
    <Slide07_StageMonitors key="2-7" />,
    <Slide08_Cables key="2-8" />,
    <Slide09_DiBox key="2-9" />,
    <Slide10_Amplifier key="2-10" />,
    <Slide11_FullAudioPath key="2-11" />,
    <Slide12_MatchingGame key="2-12" />,
    <Slide13_Quiz key="2-13" />,
    <Slide14_Review2 key="2-14" />,
    <Slide15_Closing2 key="2-15" />,
  ],
  notes: [
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
    slide15Notes,
  ],
  titles: [
    'Slide 1 — Abertura (Aula 2)',
    'Slide 2 — Visão Geral do Palco',
    'Slide 3 — Introdução aos Microfones',
    'Slide 4 — Tipos de Microfones',
    'Slide 5 — Mesa de Som',
    'Slide 6 — Alto-falantes',
    'Slide 7 — Monitores de Palco',
    'Slide 8 — Cabos',
    'Slide 9 — DI Box',
    'Slide 10 — Amplificadores',
    'Slide 11 — O Caminho Completo do Áudio',
    'Slide 12 — Jogo de Pareamento',
    'Slide 13 — Quiz',
    'Slide 14 — Revisão (Aula 2)',
    'Slide 15 — Encerramento (Aula 2)',
  ],
};
