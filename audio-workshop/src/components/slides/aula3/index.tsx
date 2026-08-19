import type { ReactNode } from 'react';
import type { PresenterNote } from '../../../types/presentation';
import { Slide01_Opening } from './Slide01_Opening';
import { Slide02_Question } from './Slide02_Question';
import { Slide03_FullSystem } from './Slide03_FullSystem';
import { Slide04_Source } from './Slide04_Source';
import { Slide05_Microphone } from './Slide05_Microphone';
import { Slide06_Cable } from './Slide06_Cable';
import { Slide07_Mixer } from './Slide07_Mixer';
import { Slide08_Processing } from './Slide08_Processing';
import { Slide09_Amplifier } from './Slide09_Amplifier';
import { Slide10_Speaker } from './Slide10_Speaker';
import { Slide11_FullFlow } from './Slide11_FullFlow';
import { Slide12_Problems } from './Slide12_Problems';
import { Slide13_Exercise } from './Slide13_Exercise';
import { Slide14_Practice } from './Slide14_Practice';
import { Slide15_Review } from './Slide15_Review';
import { Slide16_Closing } from './Slide16_Closing';
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
  slide15Notes,
  slide16Notes,
} from './notes';

export const aula3: {
  id: number;
  slides: ReactNode[];
  notes: PresenterNote[];
  titles: string[];
} = {
  id: 3,
  slides: [
    <Slide01_Opening key="3-1" />,
    <Slide02_Question key="3-2" />,
    <Slide03_FullSystem key="3-3" />,
    <Slide04_Source key="3-4" />,
    <Slide05_Microphone key="3-5" />,
    <Slide06_Cable key="3-6" />,
    <Slide07_Mixer key="3-7" />,
    <Slide08_Processing key="3-8" />,
    <Slide09_Amplifier key="3-9" />,
    <Slide10_Speaker key="3-10" />,
    <Slide11_FullFlow key="3-11" />,
    <Slide12_Problems key="3-12" />,
    <Slide13_Exercise key="3-13" />,
    <Slide14_Practice key="3-14" />,
    <Slide15_Review key="3-15" />,
    <Slide16_Closing key="3-16" />,
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
    slide16Notes,
  ],
  titles: [
    'Slide 1 — Abertura (Aula 3)',
    'Slide 2 — A Pergunta',
    'Slide 3 — O Sistema Completo',
    'Slide 4 — Fonte de Som',
    'Slide 5 — Microfone',
    'Slide 6 — Cabo',
    'Slide 7 — Mesa de Som',
    'Slide 8 — Processamento',
    'Slide 9 — Amplificador',
    'Slide 10 — Alto-falante',
    'Slide 11 — Fluxo Completo',
    'Slide 12 — Problemas Comuns',
    'Slide 13 — Exercício',
    'Slide 14 — Prática (Aula 3)',
    'Slide 15 — Revisão (Aula 3)',
    'Slide 16 — Encerramento (Aula 3)',
  ],
};
