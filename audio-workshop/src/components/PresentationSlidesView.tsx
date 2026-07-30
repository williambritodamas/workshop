import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { listenMessages, sendMessage } from '../utils/presentationChannel';
import type { PresentationMessage } from '../utils/presentationChannel';

import { Slide01_Intro } from './slides/aula1/Slide01_Intro';
import { Slide02_Question } from './slides/aula1/Slide02_Question';
import { Slide03_Everywhere } from './slides/aula1/Slide03_Everywhere';
import { Slide04_Definition } from './slides/aula1/Slide04_Definition';
import { Slide05_Comparison } from './slides/aula1/Slide05_Comparison';
import { Slide06_Speaker } from './slides/aula1/Slide06_Speaker';
import { Slide07_Microphone } from './slides/aula1/Slide07_Microphone';
import { Slide08_Duality } from './slides/aula1/Slide08_Duality';
import { Slide09_AudioFlow } from './slides/aula1/Slide09_AudioFlow';
import { Slide10_Mixer } from './slides/aula1/Slide10_Mixer';
import { Slide11_Curiosities } from './slides/aula1/Slide11_Curiosities';
import { Slide12_Practice } from './slides/aula1/Slide12_Practice';
import { Slide13_Review } from './slides/aula1/Slide13_Review';
import { Slide14_Closing } from './slides/aula1/Slide14_Closing';

import { Slide01_Intro2 } from './slides/aula2/Slide01_Intro2';
import { Slide02_StageOverview } from './slides/aula2/Slide02_StageOverview';
import { Slide03_MicrophoneIntro } from './slides/aula2/Slide03_MicrophoneIntro';
import { Slide04_MicrophoneTypes } from './slides/aula2/Slide04_MicrophoneTypes';
import { Slide05_MixerConsole } from './slides/aula2/Slide05_MixerConsole';
import { Slide06_Speakers } from './slides/aula2/Slide06_Speakers';
import { Slide07_StageMonitors } from './slides/aula2/Slide07_StageMonitors';
import { Slide08_Cables } from './slides/aula2/Slide08_Cables';
import { Slide09_DiBox } from './slides/aula2/Slide09_DiBox';
import { Slide10_Amplifier } from './slides/aula2/Slide10_Amplifier';
import { Slide11_FullAudioPath } from './slides/aula2/Slide11_FullAudioPath';
import { Slide12_MatchingGame } from './slides/aula2/Slide12_MatchingGame';
import { Slide13_Quiz as Aula2_Slide13_Quiz } from './slides/aula2/Slide13_Quiz';
import { Slide14_Review2 } from './slides/aula2/Slide14_Review2';
import { Slide15_Closing2 } from './slides/aula2/Slide15_Closing2';

import { Slide01_Opening } from './slides/aula3/Slide01_Opening';
import { Slide02_Question as Aula3_Slide02_Question } from './slides/aula3/Slide02_Question';
import { Slide03_FullSystem } from './slides/aula3/Slide03_FullSystem';
import { Slide04_Source } from './slides/aula3/Slide04_Source';
import { Slide05_Microphone as Aula3_Slide05_Microphone } from './slides/aula3/Slide05_Microphone';
import { Slide06_Cable } from './slides/aula3/Slide06_Cable';
import { Slide07_Mixer } from './slides/aula3/Slide07_Mixer';
import { Slide08_Processing } from './slides/aula3/Slide08_Processing';
import { Slide09_Amplifier } from './slides/aula3/Slide09_Amplifier';
import { Slide10_Speaker as Aula3_Slide10_Speaker } from './slides/aula3/Slide10_Speaker';
import { Slide11_FullFlow } from './slides/aula3/Slide11_FullFlow';
import { Slide12_Problems } from './slides/aula3/Slide12_Problems';
import { Slide13_Exercise } from './slides/aula3/Slide13_Exercise';
import { Slide14_Practice as Aula3_Slide14_Practice } from './slides/aula3/Slide14_Practice';
import { Slide15_Review as Aula3_Slide15_Review } from './slides/aula3/Slide15_Review';
import { Slide16_Closing as Aula3_Slide16_Closing } from './slides/aula3/Slide16_Closing';

import { Slide01_Opening as Aula4_Slide01_Opening } from './slides/aula4/Slide01_Opening';
import { Slide02_WhatItDoes } from './slides/aula4/Slide02_WhatItDoes';
import { Slide03_Analogy } from './slides/aula4/Slide03_Analogy';
import { Slide04_Types } from './slides/aula4/Slide04_Types';
import { Slide05_Dynamic } from './slides/aula4/Slide05_Dynamic';
import { Slide06_Condenser } from './slides/aula4/Slide06_Condenser';
import { Slide07_Specialized } from './slides/aula4/Slide07_Specialized';
import { Slide08_PolarPatterns } from './slides/aula4/Slide08_PolarPatterns';
import { Slide09_Positioning } from './slides/aula4/Slide09_Positioning';
import { Slide10_Mistakes } from './slides/aula4/Slide10_Mistakes';
import { Slide11_Demo } from './slides/aula4/Slide11_Demo';
import { Slide12_Selector } from './slides/aula4/Slide12_Selector';
import { Slide13_Quiz as Aula4_Slide13_Quiz } from './slides/aula4/Slide13_Quiz';
import { Slide14_Recap } from './slides/aula4/Slide14_Recap';
import { Slide15_Closing as Aula4_Slide15_Closing } from './slides/aula4/Slide15_Closing';

import { Slide01_Opening as Aula5_Slide01_Opening } from './slides/aula5/Slide01_Opening';
import { Slide02_WhatIsMixer } from './slides/aula5/Slide02_WhatIsMixer';
import { Slide03_Anatomy } from './slides/aula5/Slide03_Anatomy';
import { Slide04_Channel } from './slides/aula5/Slide04_Channel';
import { Slide05_SignalPath } from './slides/aula5/Slide05_SignalPath';
import { Slide06_Controls } from './slides/aula5/Slide06_Controls';
import { Slide07_AnalogVsDigital } from './slides/aula5/Slide07_AnalogVsDigital';
import { Slide08_PracticalDifferences } from './slides/aula5/Slide08_PracticalDifferences';
import { Slide09_Demo as Aula5_Slide09_Demo } from './slides/aula5/Slide09_Demo';
import { Slide10_Recap as Aula5_Slide10_Recap } from './slides/aula5/Slide10_Recap';
import { Slide11_Quiz as Aula5_Slide11_Quiz } from './slides/aula5/Slide11_Quiz';
import { Slide12_Exercises } from './slides/aula5/Slide12_Exercises';
import { Slide13_FinalChallenge } from './slides/aula5/Slide13_FinalChallenge';
import { Slide14_Closing as Aula5_Slide14_Closing } from './slides/aula5/Slide14_Closing';
import { Slide15_References } from './slides/aula5/Slide15_References';

import { Slide01_Opening as Aula6_Slide01_Opening } from './slides/aula6/Slide01_Opening';
import { Slide02_Question as Aula6_Slide02_Question } from './slides/aula6/Slide02_Question';
import { Slide03_CelularAnalogy } from './slides/aula6/Slide03_CelularAnalogy';
import { Slide04_GainDetail } from './slides/aula6/Slide04_GainDetail';
import { Slide05_FaderDetail } from './slides/aula6/Slide05_FaderDetail';
import { Slide06_Comparison as Aula6_Slide06_Comparison } from './slides/aula6/Slide06_Comparison';
import { Slide07_ClipIntro } from './slides/aula6/Slide07_ClipIntro';
import { Slide08_ClipEffects } from './slides/aula6/Slide08_ClipEffects';
import { Slide09_Headroom } from './slides/aula6/Slide09_Headroom';
import { Slide10_StepByStep } from './slides/aula6/Slide10_StepByStep';
import { Slide11_Operador } from './slides/aula6/Slide11_Operador';
import { Slide12_Mistakes as Aula6_Slide12_Mistakes } from './slides/aula6/Slide12_Mistakes';
import { Slide13_Interactive } from './slides/aula6/Slide13_Interactive';
import { Slide14_Quiz as Aula6_Slide14_Quiz } from './slides/aula6/Slide14_Quiz';
import { Slide15_Review as Aula6_Slide15_Review } from './slides/aula6/Slide15_Review';
import { Slide16_Closing as Aula6_Slide16_Closing } from './slides/aula6/Slide16_Closing';

import { Slide01_Opening as Aula7_Slide01_Opening } from './slides/aula7/Slide01_Opening';
import { Slide02_WhatIsEQ } from './slides/aula7/Slide02_WhatIsEQ';
import { Slide03_Recipe } from './slides/aula7/Slide03_Recipe';
import { Slide04_Bass } from './slides/aula7/Slide04_Bass';
import { Slide05_Mids } from './slides/aula7/Slide05_Mids';
import { Slide06_Treble } from './slides/aula7/Slide06_Treble';
import { Slide07_EQMixer } from './slides/aula7/Slide07_EQMixer';
import { Slide08_HPF } from './slides/aula7/Slide08_HPF';
import { Slide09_CutOrBoost } from './slides/aula7/Slide09_CutOrBoost';
import { Slide10_AudioDemo } from './slides/aula7/Slide10_AudioDemo';
import { Slide11_Mistakes as Aula7_Slide11_Mistakes } from './slides/aula7/Slide11_Mistakes';
import { Slide12_VoiceEQ } from './slides/aula7/Slide12_VoiceEQ';
import { Slide13_Exercise as Aula7_Slide13_Exercise } from './slides/aula7/Slide13_Exercise';
import { Slide14_Quiz as Aula7_Slide14_Quiz } from './slides/aula7/Slide14_Quiz';
import { Slide15_Review as Aula7_Slide15_Review } from './slides/aula7/Slide15_Review';
import { Slide16_Closing as Aula7_Slide16_Closing } from './slides/aula7/Slide16_Closing';

import { Slide01_Opening as Aula8_Slide01_Opening } from './slides/aula8/Slide01_Opening';
import { Slide02_Problem } from './slides/aula8/Slide02_Problem';
import { Slide03_Dynamics } from './slides/aula8/Slide03_Dynamics';
import { Slide04_WhatItDoes as Aula8_Slide04_WhatItDoes } from './slides/aula8/Slide04_WhatItDoes';
import { Slide05_Threshold } from './slides/aula8/Slide05_Threshold';
import { Slide06_Ratio } from './slides/aula8/Slide06_Ratio';
import { Slide07_AttackRelease } from './slides/aula8/Slide07_AttackRelease';
import { Slide08_MakeupGain } from './slides/aula8/Slide08_MakeupGain';
import { Slide09_Limiter } from './slides/aula8/Slide09_Limiter';
import { Slide10_WhenToUse } from './slides/aula8/Slide10_WhenToUse';
import { Slide11_DontExaggerate } from './slides/aula8/Slide11_DontExaggerate';
import { Slide12_Simulator } from './slides/aula8/Slide12_Simulator';
import { Slide13_Practice } from './slides/aula8/Slide13_Practice';
import { Slide14_Quiz as Aula8_Slide14_Quiz } from './slides/aula8/Slide14_Quiz';
import { Slide15_Review as Aula8_Slide15_Review } from './slides/aula8/Slide15_Review';
import { Slide16_Closing as Aula8_Slide16_Closing } from './slides/aula8/Slide16_Closing';

import { Slide01_Opening as Aula9_Slide01_Opening } from './slides/aula9/Slide01_Opening';
import { Slide02_PushingCar } from './slides/aula9/Slide02_PushingCar';
import { Slide03_SoundWave } from './slides/aula9/Slide03_SoundWave';
import { Slide04_WavesInPhase } from './slides/aula9/Slide04_WavesInPhase';
import { Slide05_WavesOutOfPhase } from './slides/aula9/Slide05_WavesOutOfPhase';
import { Slide06_Polarity } from './slides/aula9/Slide06_Polarity';
import { Slide07_PhaseVsPolarity } from './slides/aula9/Slide07_PhaseVsPolarity';
import { Slide08_TwoMics } from './slides/aula9/Slide08_TwoMics';
import { Slide09_RealProblems } from './slides/aula9/Slide09_RealProblems';
import { Slide10_DemoVisual } from './slides/aula9/Slide10_DemoVisual';
import { Slide11_HowToIdentify } from './slides/aula9/Slide11_HowToIdentify';
import { Slide12_HowToAvoid } from './slides/aula9/Slide12_HowToAvoid';
import { Slide13_Practice as Aula9_Slide13_Practice } from './slides/aula9/Slide13_Practice';
import { Slide14_Quiz as Aula9_Slide14_Quiz } from './slides/aula9/Slide14_Quiz';
import { Slide15_Review as Aula9_Slide15_Review } from './slides/aula9/Slide15_Review';
import { Slide16_Closing as Aula9_Slide16_Closing } from './slides/aula9/Slide16_Closing';

import { Slide01_Opening as Aula10_Slide01_Opening } from './slides/aula10/Slide01_Opening';
import { Slide02_Hearing } from './slides/aula10/Slide02_Hearing';
import { Slide03_Loop } from './slides/aula10/Slide03_Loop';
import { Slide04_HowItStarts } from './slides/aula10/Slide04_HowItStarts';
import { Slide05_Positioning as Aula10_Slide05_Positioning } from './slides/aula10/Slide05_Positioning';
import { Slide06_RiskFactors } from './slides/aula10/Slide06_RiskFactors';
import { Slide07_FixFast } from './slides/aula10/Slide07_FixFast';
import { Slide08_EQ as Aula10_Slide08_EQ } from './slides/aula10/Slide08_EQ';
import { Slide09_Monitors } from './slides/aula10/Slide09_Monitors';
import { Slide10_Practice as Aula10_Slide10_Practice } from './slides/aula10/Slide10_Practice';
import { Slide11_Mistakes as Aula10_Slide11_Mistakes } from './slides/aula10/Slide11_Mistakes';
import { Slide12_Simulator as Aula10_Slide12_Simulator } from './slides/aula10/Slide12_Simulator';
import { Slide13_Challenge as Aula10_Slide13_Challenge } from './slides/aula10/Slide13_Challenge';
import { Slide14_Quiz as Aula10_Slide14_Quiz } from './slides/aula10/Slide14_Quiz';
import { Slide15_Review as Aula10_Slide15_Review } from './slides/aula10/Slide15_Review';
import { Slide16_Closing as Aula10_Slide16_Closing } from './slides/aula10/Slide16_Closing';

import { Slide01_Opening as Aula11_Slide01_Opening } from './slides/aula11/Slide01_Opening';
import { Slide02_Challenge as Aula11_Slide02_Challenge } from './slides/aula11/Slide02_Challenge';
import { Slide03_Planning } from './slides/aula11/Slide03_Planning';
import { Slide04_Equipment } from './slides/aula11/Slide04_Equipment';
import { Slide05_Connections } from './slides/aula11/Slide05_Connections';
import { Slide06_Cables as Aula11_Slide06_Cables } from './slides/aula11/Slide06_Cables';
import { Slide07_PowerSequence } from './slides/aula11/Slide07_PowerSequence';
import { Slide08_FirstChannel } from './slides/aula11/Slide08_FirstChannel';
import { Slide09_Checklist } from './slides/aula11/Slide09_Checklist';
import { Slide10_CommonProblems } from './slides/aula11/Slide10_CommonProblems';
import { Slide11_Flowchart } from './slides/aula11/Slide11_Flowchart';
import { Slide12_Simulator as Aula11_Slide12_Simulator } from './slides/aula11/Slide12_Simulator';
import { Slide13_Challenge as Aula11_Slide13_Challenge } from './slides/aula11/Slide13_Challenge';
import { Slide14_Quiz as Aula11_Slide14_Quiz } from './slides/aula11/Slide14_Quiz';
import { Slide15_Review as Aula11_Slide15_Review } from './slides/aula11/Slide15_Review';
import { Slide16_Closing as Aula11_Slide16_Closing } from './slides/aula11/Slide16_Closing';

import { Slide01_Opening as Aula12_Slide01_Opening } from './slides/aula12/Slide01_Opening';
import { Slide02_Evolution } from './slides/aula12/Slide02_Evolution';
import { Slide03_ScenarioChurch } from './slides/aula12/Slide03_ScenarioChurch';
import { Slide04_ScenarioPodcast } from './slides/aula12/Slide04_ScenarioPodcast';
import { Slide05_ScenarioAuditorium } from './slides/aula12/Slide05_ScenarioAuditorium';
import { Slide06_NoSound } from './slides/aula12/Slide06_NoSound';
import { Slide07_PublicArrived } from './slides/aula12/Slide07_PublicArrived';
import { Slide08_FullSimulator } from './slides/aula12/Slide08_FullSimulator';
import { Slide09_ErrorHunt } from './slides/aula12/Slide09_ErrorHunt';
import { Slide10_FinalQuiz as Aula12_Slide10_FinalQuiz } from './slides/aula12/Slide10_FinalQuiz';
import { Slide11_FinalMission } from './slides/aula12/Slide11_FinalMission';
import { Slide12_ReviewFlow } from './slides/aula12/Slide12_ReviewFlow';
import { Slide13_GoldenRules } from './slides/aula12/Slide13_GoldenRules';
import { Slide14_ContinueJourney } from './slides/aula12/Slide14_ContinueJourney';
import { Slide15_Certificate } from './slides/aula12/Slide15_Certificate';
import { Slide16_Closing as Aula12_Slide16_Closing } from './slides/aula12/Slide16_Closing';

const lessonSlides: Record<number, React.ReactNode[]> = {
  1: [
    <Slide01_Intro key="1-1" />, <Slide02_Question key="1-2" />,
    <Slide03_Everywhere key="1-3" />, <Slide04_Definition key="1-4" />,
    <Slide05_Comparison key="1-5" />, <Slide06_Speaker key="1-6" />,
    <Slide07_Microphone key="1-7" />, <Slide08_Duality key="1-8" />,
    <Slide09_AudioFlow key="1-9" />, <Slide10_Mixer key="1-10" />,
    <Slide11_Curiosities key="1-11" />, <Slide12_Practice key="1-12" />,
    <Slide13_Review key="1-13" />, <Slide14_Closing key="1-14" />,
  ],
  2: [
    <Slide01_Intro2 key="2-1" />, <Slide02_StageOverview key="2-2" />,
    <Slide03_MicrophoneIntro key="2-3" />, <Slide04_MicrophoneTypes key="2-4" />,
    <Slide05_MixerConsole key="2-5" />, <Slide06_Speakers key="2-6" />,
    <Slide07_StageMonitors key="2-7" />, <Slide08_Cables key="2-8" />,
    <Slide09_DiBox key="2-9" />, <Slide10_Amplifier key="2-10" />,
    <Slide11_FullAudioPath key="2-11" />, <Slide12_MatchingGame key="2-12" />,
    <Aula2_Slide13_Quiz key="2-13" />, <Slide14_Review2 key="2-14" />,
    <Slide15_Closing2 key="2-15" />,
  ],
  3: [
    <Slide01_Opening key="3-1" />, <Aula3_Slide02_Question key="3-2" />,
    <Slide03_FullSystem key="3-3" />, <Slide04_Source key="3-4" />,
    <Aula3_Slide05_Microphone key="3-5" />, <Slide06_Cable key="3-6" />,
    <Slide07_Mixer key="3-7" />, <Slide08_Processing key="3-8" />,
    <Slide09_Amplifier key="3-9" />, <Aula3_Slide10_Speaker key="3-10" />,
    <Slide11_FullFlow key="3-11" />, <Slide12_Problems key="3-12" />,
    <Slide13_Exercise key="3-13" />, <Aula3_Slide14_Practice key="3-14" />,
    <Aula3_Slide15_Review key="3-15" />, <Aula3_Slide16_Closing key="3-16" />,
  ],
  4: [
    <Aula4_Slide01_Opening key="4-1" />, <Slide02_WhatItDoes key="4-2" />,
    <Slide03_Analogy key="4-3" />, <Slide04_Types key="4-4" />,
    <Slide05_Dynamic key="4-5" />, <Slide06_Condenser key="4-6" />,
    <Slide07_Specialized key="4-7" />, <Slide08_PolarPatterns key="4-8" />,
    <Slide09_Positioning key="4-9" />, <Slide10_Mistakes key="4-10" />,
    <Slide11_Demo key="4-11" />, <Slide12_Selector key="4-12" />,
    <Aula4_Slide13_Quiz key="4-13" />, <Slide14_Recap key="4-14" />,
    <Aula4_Slide15_Closing key="4-15" />,
  ],
  5: [
    <Aula5_Slide01_Opening key="5-1" />, <Slide02_WhatIsMixer key="5-2" />,
    <Slide03_Anatomy key="5-3" />, <Slide04_Channel key="5-4" />,
    <Slide05_SignalPath key="5-5" />, <Slide06_Controls key="5-6" />,
    <Slide07_AnalogVsDigital key="5-7" />, <Slide08_PracticalDifferences key="5-8" />,
    <Aula5_Slide09_Demo key="5-9" />, <Aula5_Slide10_Recap key="5-10" />,
    <Aula5_Slide11_Quiz key="5-11" />, <Slide12_Exercises key="5-12" />,
    <Slide13_FinalChallenge key="5-13" />, <Aula5_Slide14_Closing key="5-14" />,
    <Slide15_References key="5-15" />,
  ],
  6: [
    <Aula6_Slide01_Opening key="6-1" />, <Aula6_Slide02_Question key="6-2" />,
    <Slide03_CelularAnalogy key="6-3" />, <Slide04_GainDetail key="6-4" />,
    <Slide05_FaderDetail key="6-5" />, <Aula6_Slide06_Comparison key="6-6" />,
    <Slide07_ClipIntro key="6-7" />, <Slide08_ClipEffects key="6-8" />,
    <Slide09_Headroom key="6-9" />, <Slide10_StepByStep key="6-10" />,
    <Slide11_Operador key="6-11" />, <Aula6_Slide12_Mistakes key="6-12" />,
    <Slide13_Interactive key="6-13" />, <Aula6_Slide14_Quiz key="6-14" />,
    <Aula6_Slide15_Review key="6-15" />, <Aula6_Slide16_Closing key="6-16" />,
  ],
  7: [
    <Aula7_Slide01_Opening key="7-1" />, <Slide02_WhatIsEQ key="7-2" />,
    <Slide03_Recipe key="7-3" />, <Slide04_Bass key="7-4" />,
    <Slide05_Mids key="7-5" />, <Slide06_Treble key="7-6" />,
    <Slide07_EQMixer key="7-7" />, <Slide08_HPF key="7-8" />,
    <Slide09_CutOrBoost key="7-9" />, <Slide10_AudioDemo key="7-10" />,
    <Aula7_Slide11_Mistakes key="7-11" />, <Slide12_VoiceEQ key="7-12" />,
    <Aula7_Slide13_Exercise key="7-13" />, <Aula7_Slide14_Quiz key="7-14" />,
    <Aula7_Slide15_Review key="7-15" />, <Aula7_Slide16_Closing key="7-16" />,
  ],
  8: [
    <Aula8_Slide01_Opening key="8-1" />, <Slide02_Problem key="8-2" />,
    <Slide03_Dynamics key="8-3" />, <Aula8_Slide04_WhatItDoes key="8-4" />,
    <Slide05_Threshold key="8-5" />, <Slide06_Ratio key="8-6" />,
    <Slide07_AttackRelease key="8-7" />, <Slide08_MakeupGain key="8-8" />,
    <Slide09_Limiter key="8-9" />, <Slide10_WhenToUse key="8-10" />,
    <Slide11_DontExaggerate key="8-11" />, <Slide12_Simulator key="8-12" />,
    <Slide13_Practice key="8-13" />, <Aula8_Slide14_Quiz key="8-14" />,
    <Aula8_Slide15_Review key="8-15" />, <Aula8_Slide16_Closing key="8-16" />,
  ],
  9: [
    <Aula9_Slide01_Opening key="9-1" />, <Slide02_PushingCar key="9-2" />,
    <Slide03_SoundWave key="9-3" />, <Slide04_WavesInPhase key="9-4" />,
    <Slide05_WavesOutOfPhase key="9-5" />, <Slide06_Polarity key="9-6" />,
    <Slide07_PhaseVsPolarity key="9-7" />, <Slide08_TwoMics key="9-8" />,
    <Slide09_RealProblems key="9-9" />, <Slide10_DemoVisual key="9-10" />,
    <Slide11_HowToIdentify key="9-11" />, <Slide12_HowToAvoid key="9-12" />,
    <Aula9_Slide13_Practice key="9-13" />, <Aula9_Slide14_Quiz key="9-14" />,
    <Aula9_Slide15_Review key="9-15" />, <Aula9_Slide16_Closing key="9-16" />,
  ],
  10: [
    <Aula10_Slide01_Opening key="10-1" />, <Slide02_Hearing key="10-2" />,
    <Slide03_Loop key="10-3" />, <Slide04_HowItStarts key="10-4" />,
    <Aula10_Slide05_Positioning key="10-5" />, <Slide06_RiskFactors key="10-6" />,
    <Slide07_FixFast key="10-7" />, <Aula10_Slide08_EQ key="10-8" />,
    <Slide09_Monitors key="10-9" />, <Aula10_Slide10_Practice key="10-10" />,
    <Aula10_Slide11_Mistakes key="10-11" />, <Aula10_Slide12_Simulator key="10-12" />,
    <Aula10_Slide13_Challenge key="10-13" />, <Aula10_Slide14_Quiz key="10-14" />,
    <Aula10_Slide15_Review key="10-15" />, <Aula10_Slide16_Closing key="10-16" />,
  ],
  11: [
    <Aula11_Slide01_Opening key="11-1" />, <Aula11_Slide02_Challenge key="11-2" />,
    <Slide03_Planning key="11-3" />, <Slide04_Equipment key="11-4" />,
    <Slide05_Connections key="11-5" />, <Aula11_Slide06_Cables key="11-6" />,
    <Slide07_PowerSequence key="11-7" />, <Slide08_FirstChannel key="11-8" />,
    <Slide09_Checklist key="11-9" />, <Slide10_CommonProblems key="11-10" />,
    <Slide11_Flowchart key="11-11" />, <Aula11_Slide12_Simulator key="11-12" />,
    <Aula11_Slide13_Challenge key="11-13" />, <Aula11_Slide14_Quiz key="11-14" />,
    <Aula11_Slide15_Review key="11-15" />, <Aula11_Slide16_Closing key="11-16" />,
  ],
  12: [
    <Aula12_Slide01_Opening key="12-1" />, <Slide02_Evolution key="12-2" />,
    <Slide03_ScenarioChurch key="12-3" />, <Slide04_ScenarioPodcast key="12-4" />,
    <Slide05_ScenarioAuditorium key="12-5" />, <Slide06_NoSound key="12-6" />,
    <Slide07_PublicArrived key="12-7" />, <Slide08_FullSimulator key="12-8" />,
    <Slide09_ErrorHunt key="12-9" />, <Aula12_Slide10_FinalQuiz key="12-10" />,
    <Slide11_FinalMission key="12-11" />, <Slide12_ReviewFlow key="12-12" />,
    <Slide13_GoldenRules key="12-13" />, <Slide14_ContinueJourney key="12-14" />,
    <Slide15_Certificate key="12-15" />, <Aula12_Slide16_Closing key="12-16" />,
  ],
};

export default function PresentationSlidesView() {
  const params = new URLSearchParams(window.location.search);
  const [lesson, setLesson] = useState(Number(params.get('lesson')) || 1);
  const [slide, setSlide] = useState(Number(params.get('slide')) || 0);

  useEffect(() => {
    return listenMessages((msg: PresentationMessage) => {
      if (msg.type === 'SLIDE_CHANGE' || msg.type === 'LESSON_CHANGE') {
        setLesson(msg.lesson);
        setSlide(msg.slide);
      }
      if (msg.type === 'CLOSE') {
        window.close();
      }
    });
  }, []);

  useEffect(() => {
    sendMessage({ type: 'SLIDE_CHANGE', lesson, slide });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') window.close();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.documentElement.requestFullscreen().catch(() => {});
  }, []);

  const slides = lessonSlides[lesson] || [];
  const slideEl = slides[slide] || null;

  return (
    <div className="w-screen h-screen bg-slate-950 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${lesson}-${slide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          {slideEl}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
