import type { ReactNode } from 'react';
import type { PresenterNote } from '../../../types/presentation';
import { Slide01_Opening } from './Slide01_Opening';
import { Slide02_Hearing } from './Slide02_Hearing';
import { Slide03_Loop } from './Slide03_Loop';
import { Slide04_HowItStarts } from './Slide04_HowItStarts';
import { Slide05_Positioning } from './Slide05_Positioning';
import { Slide06_RiskFactors } from './Slide06_RiskFactors';
import { Slide07_FixFast } from './Slide07_FixFast';
import { Slide08_EQ } from './Slide08_EQ';
import { Slide09_Monitors } from './Slide09_Monitors';
import { Slide10_Practice } from './Slide10_Practice';
import { Slide11_Mistakes } from './Slide11_Mistakes';
import { Slide12_Simulator } from './Slide12_Simulator';
import { Slide13_Challenge } from './Slide13_Challenge';
import { Slide14_Quiz } from './Slide14_Quiz';
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

export const aula10: {
  id: number;
  slides: ReactNode[];
  notes: PresenterNote[];
  titles: string[];
} = {
  id: 10,
  slides: [
    <Slide01_Opening key="10-1" />,
    <Slide02_Hearing key="10-2" />,
    <Slide03_Loop key="10-3" />,
    <Slide04_HowItStarts key="10-4" />,
    <Slide05_Positioning key="10-5" />,
    <Slide06_RiskFactors key="10-6" />,
    <Slide07_FixFast key="10-7" />,
    <Slide08_EQ key="10-8" />,
    <Slide09_Monitors key="10-9" />,
    <Slide10_Practice key="10-10" />,
    <Slide11_Mistakes key="10-11" />,
    <Slide12_Simulator key="10-12" />,
    <Slide13_Challenge key="10-13" />,
    <Slide14_Quiz key="10-14" />,
    <Slide15_Review key="10-15" />,
    <Slide16_Closing key="10-16" />,
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
    'Slide 1 — Abertura (Aula 10)',
    'Slide 2 — Audição',
    'Slide 3 — Loop',
    'Slide 4 — Como Começa',
    'Slide 5 — Posicionamento',
    'Slide 6 — Fatores de Risco',
    'Slide 7 — Corrigir Rápido',
    'Slide 8 — EQ',
    'Slide 9 — Monitores',
    'Slide 10 — Prática (Aula 10)',
    'Slide 11 — Erros Comuns',
    'Slide 12 — Simulador (Aula 10)',
    'Slide 13 — Desafio',
    'Slide 14 — Quiz (Aula 10)',
    'Slide 15 — Revisão (Aula 10)',
    'Slide 16 — Encerramento (Aula 10)',
  ],
};