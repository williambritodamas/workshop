import type { ReactNode } from 'react';
import type { PresenterNote } from '../../../types/presentation';
import { Slide01_Opening } from './Slide01_Opening';
import { Slide02_Challenge } from './Slide02_Challenge';
import { Slide03_Planning } from './Slide03_Planning';
import { Slide04_Equipment } from './Slide04_Equipment';
import { Slide05_Connections } from './Slide05_Connections';
import { Slide06_Cables } from './Slide06_Cables';
import { Slide07_PowerSequence } from './Slide07_PowerSequence';
import { Slide08_FirstChannel } from './Slide08_FirstChannel';
import { Slide09_Checklist } from './Slide09_Checklist';
import { Slide10_CommonProblems } from './Slide10_CommonProblems';
import { Slide11_Flowchart } from './Slide11_Flowchart';
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

export const aula11: {
  id: number;
  slides: ReactNode[];
  notes: PresenterNote[];
  titles: string[];
} = {
  id: 11,
  slides: [
    <Slide01_Opening key="11-1" />,
    <Slide02_Challenge key="11-2" />,
    <Slide03_Planning key="11-3" />,
    <Slide04_Equipment key="11-4" />,
    <Slide05_Connections key="11-5" />,
    <Slide06_Cables key="11-6" />,
    <Slide07_PowerSequence key="11-7" />,
    <Slide08_FirstChannel key="11-8" />,
    <Slide09_Checklist key="11-9" />,
    <Slide10_CommonProblems key="11-10" />,
    <Slide11_Flowchart key="11-11" />,
    <Slide12_Simulator key="11-12" />,
    <Slide13_Challenge key="11-13" />,
    <Slide14_Quiz key="11-14" />,
    <Slide15_Review key="11-15" />,
    <Slide16_Closing key="11-16" />,
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
    'Slide 1 — Abertura (Aula 11)',
    'Slide 2 — Desafio',
    'Slide 3 — Planejamento',
    'Slide 4 — Equipamento',
    'Slide 5 — Conexões',
    'Slide 6 — Cabos',
    'Slide 7 — Sequência de Potência',
    'Slide 8 — Primeiro Canal',
    'Slide 9 — Checklist',
    'Slide 10 — Problemas Comuns',
    'Slide 11 — Fluxograma',
    'Slide 12 — Simulador (Aula 11)',
    'Slide 13 — Desafio (Aula 11)',
    'Slide 14 — Quiz (Aula 11)',
    'Slide 15 — Revisão (Aula 11)',
    'Slide 16 — Encerramento (Aula 11)',
  ],
};