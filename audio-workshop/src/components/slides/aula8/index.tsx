import type { ReactNode } from 'react';
import type { PresenterNote } from '../../../types/presentation';
import { Slide01_Opening } from './Slide01_Opening';
import { Slide02_Problem } from './Slide02_Problem';
import { Slide03_Dynamics } from './Slide03_Dynamics';
import { Slide04_WhatItDoes } from './Slide04_WhatItDoes';
import { Slide05_Threshold } from './Slide05_Threshold';
import { Slide06_Ratio } from './Slide06_Ratio';
import { Slide07_AttackRelease } from './Slide07_AttackRelease';
import { Slide08_MakeupGain } from './Slide08_MakeupGain';
import { Slide09_Limiter } from './Slide09_Limiter';
import { Slide10_WhenToUse } from './Slide10_WhenToUse';
import { Slide11_DontExaggerate } from './Slide11_DontExaggerate';
import { Slide12_Simulator } from './Slide12_Simulator';
import { Slide13_Practice } from './Slide13_Practice';
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

export const aula8: {
  id: number;
  slides: ReactNode[];
  notes: PresenterNote[];
  titles: string[];
} = {
  id: 8,
  slides: [
    <Slide01_Opening key="8-1" />,
    <Slide02_Problem key="8-2" />,
    <Slide03_Dynamics key="8-3" />,
    <Slide04_WhatItDoes key="8-4" />,
    <Slide05_Threshold key="8-5" />,
    <Slide06_Ratio key="8-6" />,
    <Slide07_AttackRelease key="8-7" />,
    <Slide08_MakeupGain key="8-8" />,
    <Slide09_Limiter key="8-9" />,
    <Slide10_WhenToUse key="8-10" />,
    <Slide11_DontExaggerate key="8-11" />,
    <Slide12_Simulator key="8-12" />,
    <Slide13_Practice key="8-13" />,
    <Slide14_Quiz key="8-14" />,
    <Slide15_Review key="8-15" />,
    <Slide16_Closing key="8-16" />,
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
    'Slide 1 — Abertura (Aula 8)',
    'Slide 2 — Problema',
    'Slide 3 — Dinâmica',
    'Slide 4 — O que faz?',
    'Slide 5 — Threshold',
    'Slide 6 — Razão',
    'Slide 7 — Attack/Release',
    'Slide 8 — Makeup Gain',
    'Slide 9 — Limiter',
    'Slide 10 — Quando Usar',
    'Slide 11 — Não Exagere',
    'Slide 12 — Simulador',
    'Slide 13 — Prática (Aula 8)',
    'Slide 14 — Quiz (Aula 8)',
    'Slide 15 — Revisão (Aula 8)',
    'Slide 16 — Encerramento (Aula 8)',
  ],
};
