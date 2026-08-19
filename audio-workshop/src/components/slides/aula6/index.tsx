import type { ReactNode } from 'react';
import type { PresenterNote } from '../../../types/presentation';
import { Slide01_Opening } from './Slide01_Opening';
import { Slide02_Question } from './Slide02_Question';
import { Slide03_CelularAnalogy } from './Slide03_CelularAnalogy';
import { Slide04_GainDetail } from './Slide04_GainDetail';
import { Slide05_FaderDetail } from './Slide05_FaderDetail';
import { Slide06_Comparison } from './Slide06_Comparison';
import { Slide07_ClipIntro } from './Slide07_ClipIntro';
import { Slide08_ClipEffects } from './Slide08_ClipEffects';
import { Slide09_Headroom } from './Slide09_Headroom';
import { Slide10_StepByStep } from './Slide10_StepByStep';
import { Slide11_Operador } from './Slide11_Operador';
import { Slide12_Mistakes } from './Slide12_Mistakes';
import { Slide13_Interactive } from './Slide13_Interactive';
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

export const aula6: {
  id: number;
  slides: ReactNode[];
  notes: PresenterNote[];
  titles: string[];
} = {
  id: 6,
  slides: [
    <Slide01_Opening key="6-1" />,
    <Slide02_Question key="6-2" />,
    <Slide03_CelularAnalogy key="6-3" />,
    <Slide04_GainDetail key="6-4" />,
    <Slide05_FaderDetail key="6-5" />,
    <Slide06_Comparison key="6-6" />,
    <Slide07_ClipIntro key="6-7" />,
    <Slide08_ClipEffects key="6-8" />,
    <Slide09_Headroom key="6-9" />,
    <Slide10_StepByStep key="6-10" />,
    <Slide11_Operador key="6-11" />,
    <Slide12_Mistakes key="6-12" />,
    <Slide13_Interactive key="6-13" />,
    <Slide14_Quiz key="6-14" />,
    <Slide15_Review key="6-15" />,
    <Slide16_Closing key="6-16" />,
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
    'Slide 1 — Abertura (Aula 6)',
    'Slide 2 — A Pergunta',
    'Slide 3 — Analogia Celular',
    'Slide 4 — Detalhes do Gain',
    'Slide 5 — Detalhes do Fader',
    'Slide 6 — Comparação (Aula 6)',
    'Slide 7 — Introdução ao Clipping',
    'Slide 8 — Efeitos do Clipping',
    'Slide 9 — Headroom',
    'Slide 10 — Passo a Passo',
    'Slide 11 — Operador',
    'Slide 12 — Erros Comuns',
    'Slide 13 — Interativo',
    'Slide 14 — Quiz (Aula 6)',
    'Slide 15 — Revisão (Aula 6)',
    'Slide 16 — Encerramento (Aula 6)',
  ],
};
