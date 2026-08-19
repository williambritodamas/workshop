import type { ReactNode } from 'react';
import type { PresenterNote } from '../../../types/presentation';
import { Slide01_Intro } from './Slide01_Intro';
import { Slide02_Question } from './Slide02_Question';
import { Slide03_Everywhere } from './Slide03_Everywhere';
import { Slide04_Definition } from './Slide04_Definition';
import { Slide05_Comparison } from './Slide05_Comparison';
import { Slide06_Speaker } from './Slide06_Speaker';
import { Slide07_Microphone } from './Slide07_Microphone';
import { Slide08_Duality } from './Slide08_Duality';
import { Slide09_AudioFlow } from './Slide09_AudioFlow';
import { Slide10_Mixer } from './Slide10_Mixer';
import { Slide11_Curiosities } from './Slide11_Curiosities';
import { Slide12_Practice } from './Slide12_Practice';
import { Slide13_Review } from './Slide13_Review';
import { Slide14_Closing } from './Slide14_Closing';
import {
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
} from './notes';

export const aula1: {
  id: number;
  slides: ReactNode[];
  notes: PresenterNote[];
  titles: string[];
} = {
  id: 1,
  slides: [
    <Slide01_Intro key="1-1" />,
    <Slide02_Question key="1-2" />,
    <Slide03_Everywhere key="1-3" />,
    <Slide04_Definition key="1-4" />,
    <Slide05_Comparison key="1-5" />,
    <Slide06_Speaker key="1-6" />,
    <Slide07_Microphone key="1-7" />,
    <Slide08_Duality key="1-8" />,
    <Slide09_AudioFlow key="1-9" />,
    <Slide10_Mixer key="1-10" />,
    <Slide11_Curiosities key="1-11" />,
    <Slide12_Practice key="1-12" />,
    <Slide13_Review key="1-13" />,
    <Slide14_Closing key="1-14" />,
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
  ],
  titles: [
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
  ],
};
