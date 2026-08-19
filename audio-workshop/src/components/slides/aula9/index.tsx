import type { ReactNode } from 'react';
import type { PresenterNote } from '../../../types/presentation';
import { Slide01_Opening } from './Slide01_Opening';
import { Slide02_PushingCar } from './Slide02_PushingCar';
import { Slide03_SoundWave } from './Slide03_SoundWave';
import { Slide04_WavesInPhase } from './Slide04_WavesInPhase';
import { Slide05_WavesOutOfPhase } from './Slide05_WavesOutOfPhase';
import { Slide06_Polarity } from './Slide06_Polarity';
import { Slide07_PhaseVsPolarity } from './Slide07_PhaseVsPolarity';
import { Slide08_TwoMics } from './Slide08_TwoMics';
import { Slide09_RealProblems } from './Slide09_RealProblems';
import { Slide10_DemoVisual } from './Slide10_DemoVisual';
import { Slide11_HowToIdentify } from './Slide11_HowToIdentify';
import { Slide12_HowToAvoid } from './Slide12_HowToAvoid';
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

export const aula9: {
  id: number;
  slides: ReactNode[];
  notes: PresenterNote[];
  titles: string[];
} = {
  id: 9,
  slides: [
    <Slide01_Opening key="9-1" />,
    <Slide02_PushingCar key="9-2" />,
    <Slide03_SoundWave key="9-3" />,
    <Slide04_WavesInPhase key="9-4" />,
    <Slide05_WavesOutOfPhase key="9-5" />,
    <Slide06_Polarity key="9-6" />,
    <Slide07_PhaseVsPolarity key="9-7" />,
    <Slide08_TwoMics key="9-8" />,
    <Slide09_RealProblems key="9-9" />,
    <Slide10_DemoVisual key="9-10" />,
    <Slide11_HowToIdentify key="9-11" />,
    <Slide12_HowToAvoid key="9-12" />,
    <Slide13_Practice key="9-13" />,
    <Slide14_Quiz key="9-14" />,
    <Slide15_Review key="9-15" />,
    <Slide16_Closing key="9-16" />,
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
    'Slide 1 — Abertura (Aula 9)',
    'Slide 2 — Empurrando um Carro',
    'Slide 3 — Onda Sonora',
    'Slide 4 — Ondas em Fase',
    'Slide 5 — Ondas Fora de Fase',
    'Slide 6 — Polaridade',
    'Slide 7 — Fase vs Polaridade',
    'Slide 8 — Dois Microfones',
    'Slide 9 — Problemas Reais',
    'Slide 10 — Demonstração Visual',
    'Slide 11 — Como Identificar',
    'Slide 12 — Como Evitar',
    'Slide 13 — Prática (Aula 9)',
    'Slide 14 — Quiz (Aula 9)',
    'Slide 15 — Revisão (Aula 9)',
    'Slide 16 — Encerramento (Aula 9)',
  ],
};