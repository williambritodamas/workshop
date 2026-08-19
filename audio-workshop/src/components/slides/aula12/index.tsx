import type { ReactNode } from 'react';
import type { PresenterNote } from '../../../types/presentation';
import { Slide01_Opening } from './Slide01_Opening';
import { Slide02_Evolution } from './Slide02_Evolution';
import { Slide03_ScenarioChurch } from './Slide03_ScenarioChurch';
import { Slide04_ScenarioPodcast } from './Slide04_ScenarioPodcast';
import { Slide05_ScenarioAuditorium } from './Slide05_ScenarioAuditorium';
import { Slide06_NoSound } from './Slide06_NoSound';
import { Slide07_PublicArrived } from './Slide07_PublicArrived';
import { Slide08_FullSimulator } from './Slide08_FullSimulator';
import { Slide09_ErrorHunt } from './Slide09_ErrorHunt';
import { Slide10_FinalQuiz } from './Slide10_FinalQuiz';
import { Slide11_FinalMission } from './Slide11_FinalMission';
import { Slide12_ReviewFlow } from './Slide12_ReviewFlow';
import { Slide13_GoldenRules } from './Slide13_GoldenRules';
import { Slide14_ContinueJourney } from './Slide14_ContinueJourney';
import { Slide15_Certificate } from './Slide15_Certificate';
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

export const aula12: {
  id: number;
  slides: ReactNode[];
  notes: PresenterNote[];
  titles: string[];
} = {
  id: 12,
  slides: [
    <Slide01_Opening key="12-1" />,
    <Slide02_Evolution key="12-2" />,
    <Slide03_ScenarioChurch key="12-3" />,
    <Slide04_ScenarioPodcast key="12-4" />,
    <Slide05_ScenarioAuditorium key="12-5" />,
    <Slide06_NoSound key="12-6" />,
    <Slide07_PublicArrived key="12-7" />,
    <Slide08_FullSimulator key="12-8" />,
    <Slide09_ErrorHunt key="12-9" />,
    <Slide10_FinalQuiz key="12-10" />,
    <Slide11_FinalMission key="12-11" />,
    <Slide12_ReviewFlow key="12-12" />,
    <Slide13_GoldenRules key="12-13" />,
    <Slide14_ContinueJourney key="12-14" />,
    <Slide15_Certificate key="12-15" />,
    <Slide16_Closing key="12-16" />,
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
    'Slide 1 — Abertura (Aula 12)',
    'Slide 2 — Quanto você evoluiu?',
    'Slide 3 — Cenário: Igreja',
    'Slide 4 — Cenário: Podcast',
    'Slide 5 — Cenário: Auditório',
    'Slide 6 — O sistema não funciona!',
    'Slide 7 — O público chegou...',
    'Slide 8 — Simulador Completo',
    'Slide 9 — Caça aos Erros',
    'Slide 10 — Quiz Final',
    'Slide 11 — Missão Final',
    'Slide 12 — Revisão Geral',
    'Slide 13 — As 10 Regras de Ouro',
    'Slide 14 — Sua jornada continua',
    'Slide 15 — Certificado',
    'Slide 16 — Encerramento',
  ],
};