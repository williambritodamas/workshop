import type { ReactNode } from 'react';
import type { PresenterNote } from '../../../types/presentation';
import { Slide01_Opening } from './Slide01_Opening';
import { Slide02_WhatIsEQ } from './Slide02_WhatIsEQ';
import { Slide03_Recipe } from './Slide03_Recipe';
import { Slide04_Bass } from './Slide04_Bass';
import { Slide05_Mids } from './Slide05_Mids';
import { Slide06_Treble } from './Slide06_Treble';
import { Slide07_EQMixer } from './Slide07_EQMixer';
import { Slide08_HPF } from './Slide08_HPF';
import { Slide09_CutOrBoost } from './Slide09_CutOrBoost';
import { Slide10_AudioDemo } from './Slide10_AudioDemo';
import { Slide11_Mistakes } from './Slide11_Mistakes';
import { Slide12_VoiceEQ } from './Slide12_VoiceEQ';
import { Slide13_Exercise } from './Slide13_Exercise';
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

export const aula7: {
  id: number;
  slides: ReactNode[];
  notes: PresenterNote[];
  titles: string[];
} = {
  id: 7,
  slides: [
    <Slide01_Opening key="7-1" />,
    <Slide02_WhatIsEQ key="7-2" />,
    <Slide03_Recipe key="7-3" />,
    <Slide04_Bass key="7-4" />,
    <Slide05_Mids key="7-5" />,
    <Slide06_Treble key="7-6" />,
    <Slide07_EQMixer key="7-7" />,
    <Slide08_HPF key="7-8" />,
    <Slide09_CutOrBoost key="7-9" />,
    <Slide10_AudioDemo key="7-10" />,
    <Slide11_Mistakes key="7-11" />,
    <Slide12_VoiceEQ key="7-12" />,
    <Slide13_Exercise key="7-13" />,
    <Slide14_Quiz key="7-14" />,
    <Slide15_Review key="7-15" />,
    <Slide16_Closing key="7-16" />,
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
    'Slide 1 — Abertura (Aula 7)',
    'Slide 2 — O que é EQ?',
    'Slide 3 — Receita',
    'Slide 4 — Graves',
    'Slide 5 — Médios',
    'Slide 6 — Agudos',
    'Slide 7 — EQ na Mesa',
    'Slide 8 — HPF',
    'Slide 9 — Cortar ou Reforçar',
    'Slide 10 — Demonstração de Áudio',
    'Slide 11 — Erros Comuns',
    'Slide 12 — EQ de Voz',
    'Slide 13 — Exercício (Aula 7)',
    'Slide 14 — Quiz (Aula 7)',
    'Slide 15 — Revisão (Aula 7)',
    'Slide 16 — Encerramento (Aula 7)',
  ],
};
