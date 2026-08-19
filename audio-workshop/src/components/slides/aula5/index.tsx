import type { ReactNode } from 'react';
import type { PresenterNote } from '../../../types/presentation';
import { Slide01_Opening } from './Slide01_Opening';
import { Slide02_WhatIsMixer } from './Slide02_WhatIsMixer';
import { Slide03_Anatomy } from './Slide03_Anatomy';
import { Slide04_Channel } from './Slide04_Channel';
import { Slide05_SignalPath } from './Slide05_SignalPath';
import { Slide06_Controls } from './Slide06_Controls';
import { Slide07_AnalogVsDigital } from './Slide07_AnalogVsDigital';
import { Slide08_PracticalDifferences } from './Slide08_PracticalDifferences';
import { Slide09_Demo } from './Slide09_Demo';
import { Slide10_Recap } from './Slide10_Recap';
import { Slide11_Quiz } from './Slide11_Quiz';
import { Slide12_Exercises } from './Slide12_Exercises';
import { Slide13_FinalChallenge } from './Slide13_FinalChallenge';
import { Slide14_Closing } from './Slide14_Closing';
import { Slide15_References } from './Slide15_References';
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
} from './notes';

export const aula5: {
  id: number;
  slides: ReactNode[];
  notes: PresenterNote[];
  titles: string[];
} = {
  id: 5,
  slides: [
    <Slide01_Opening key="5-1" />,
    <Slide02_WhatIsMixer key="5-2" />,
    <Slide03_Anatomy key="5-3" />,
    <Slide04_Channel key="5-4" />,
    <Slide05_SignalPath key="5-5" />,
    <Slide06_Controls key="5-6" />,
    <Slide07_AnalogVsDigital key="5-7" />,
    <Slide08_PracticalDifferences key="5-8" />,
    <Slide09_Demo key="5-9" />,
    <Slide10_Recap key="5-10" />,
    <Slide11_Quiz key="5-11" />,
    <Slide12_Exercises key="5-12" />,
    <Slide13_FinalChallenge key="5-13" />,
    <Slide14_Closing key="5-14" />,
    <Slide15_References key="5-15" />,
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
    'Slide 1 — Abertura (Aula 5)',
    'Slide 2 — O que é Mesa de Som?',
    'Slide 3 — Anatomia',
    'Slide 4 — Canal',
    'Slide 5 — Caminho do Sinal',
    'Slide 6 — Controles',
    'Slide 7 — Analógico vs Digital',
    'Slide 8 — Diferenças Práticas',
    'Slide 9 — Demonstração (Aula 5)',
    'Slide 10 — Recapitulação (Aula 5)',
    'Slide 11 — Quiz (Aula 5)',
    'Slide 12 — Exercícios',
    'Slide 13 — Desafio Final',
    'Slide 14 — Encerramento (Aula 5)',
    'Slide 15 — Referências',
  ],
};
