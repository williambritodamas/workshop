import type { ReactNode } from 'react';
import type { PresenterNote } from '../../../types/presentation';
import { Slide01_Opening } from './Slide01_Opening';
import { Slide02_WhatItDoes } from './Slide02_WhatItDoes';
import { Slide03_Analogy } from './Slide03_Analogy';
import { Slide04_Types } from './Slide04_Types';
import { Slide05_Dynamic } from './Slide05_Dynamic';
import { Slide06_Condenser } from './Slide06_Condenser';
import { Slide07_Specialized } from './Slide07_Specialized';
import { Slide08_PolarPatterns } from './Slide08_PolarPatterns';
import { Slide09_Positioning } from './Slide09_Positioning';
import { Slide10_Mistakes } from './Slide10_Mistakes';
import { Slide11_Demo } from './Slide11_Demo';
import { Slide12_Selector } from './Slide12_Selector';
import { Slide13_Quiz } from './Slide13_Quiz';
import { Slide14_Recap } from './Slide14_Recap';
import { Slide15_Closing } from './Slide15_Closing';
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

export const aula4: {
  id: number;
  slides: ReactNode[];
  notes: PresenterNote[];
  titles: string[];
} = {
  id: 4,
  slides: [
    <Slide01_Opening key="4-1" />,
    <Slide02_WhatItDoes key="4-2" />,
    <Slide03_Analogy key="4-3" />,
    <Slide04_Types key="4-4" />,
    <Slide05_Dynamic key="4-5" />,
    <Slide06_Condenser key="4-6" />,
    <Slide07_Specialized key="4-7" />,
    <Slide08_PolarPatterns key="4-8" />,
    <Slide09_Positioning key="4-9" />,
    <Slide10_Mistakes key="4-10" />,
    <Slide11_Demo key="4-11" />,
    <Slide12_Selector key="4-12" />,
    <Slide13_Quiz key="4-13" />,
    <Slide14_Recap key="4-14" />,
    <Slide15_Closing key="4-15" />,
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
    'Slide 1 — Abertura (Aula 4)',
    'Slide 2 — O que é?',
    'Slide 3 — Analogia',
    'Slide 4 — Tipos',
    'Slide 5 — Dinâmico',
    'Slide 6 — Condensador',
    'Slide 7 — Especializados',
    'Slide 8 — Padrões Polares',
    'Slide 9 — Posicionamento',
    'Slide 10 — Erros Comuns',
    'Slide 11 — Demonstração',
    'Slide 12 — Seletor',
    'Slide 13 — Quiz (Aula 4)',
    'Slide 14 — Recapitulação',
    'Slide 15 — Encerramento (Aula 4)',
  ],
};
