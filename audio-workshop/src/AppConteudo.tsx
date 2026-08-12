import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogOut, Shield, User } from 'lucide-react';
import { useAutenticacao } from './contexts/AutenticacaoContext';
import { PresentationLayout } from './components/PresentationLayout';
import LessonSelector from './components/LessonSelector';
import { PresenterView } from './components/PresenterView';
import PresentationSlidesView from './components/PresentationSlidesView';
import { sendMessage } from './utils/presentationChannel';

// Aula 1
import { Slide01_Intro, slide01Notes } from './components/slides/aula1/Slide01_Intro';
import { Slide02_Question, slide02Notes } from './components/slides/aula1/Slide02_Question';
import { Slide03_Everywhere, slide03Notes } from './components/slides/aula1/Slide03_Everywhere';
import { Slide04_Definition, slide04Notes } from './components/slides/aula1/Slide04_Definition';
import { Slide05_Comparison, slide05Notes } from './components/slides/aula1/Slide05_Comparison';
import { Slide06_Speaker, slide06Notes } from './components/slides/aula1/Slide06_Speaker';
import { Slide07_Microphone, slide07Notes } from './components/slides/aula1/Slide07_Microphone';
import { Slide08_Duality, slide08Notes } from './components/slides/aula1/Slide08_Duality';
import { Slide09_AudioFlow, slide09Notes } from './components/slides/aula1/Slide09_AudioFlow';
import { Slide10_Mixer, slide10Notes } from './components/slides/aula1/Slide10_Mixer';
import { Slide11_Curiosities, slide11Notes } from './components/slides/aula1/Slide11_Curiosities';
import { Slide12_Practice, slide12Notes } from './components/slides/aula1/Slide12_Practice';
import { Slide13_Review, slide13Notes } from './components/slides/aula1/Slide13_Review';
import { Slide14_Closing, slide14Notes } from './components/slides/aula1/Slide14_Closing';

// Aula 2
import { Slide01_Intro2, slide01Notes as aula2Slide01Notes } from './components/slides/aula2/Slide01_Intro2';
import { Slide02_StageOverview, slide02Notes as aula2Slide02Notes } from './components/slides/aula2/Slide02_StageOverview';
import { Slide03_MicrophoneIntro, slide03Notes as aula2Slide03Notes } from './components/slides/aula2/Slide03_MicrophoneIntro';
import { Slide04_MicrophoneTypes, slide04Notes as aula2Slide04Notes } from './components/slides/aula2/Slide04_MicrophoneTypes';
import { Slide05_MixerConsole, slide05Notes as aula2Slide05Notes } from './components/slides/aula2/Slide05_MixerConsole';
import { Slide06_Speakers, slide06Notes as aula2Slide06Notes } from './components/slides/aula2/Slide06_Speakers';
import { Slide07_StageMonitors, slide07Notes as aula2Slide07Notes } from './components/slides/aula2/Slide07_StageMonitors';
import { Slide08_Cables, slide08Notes as aula2Slide08Notes } from './components/slides/aula2/Slide08_Cables';
import { Slide09_DiBox, slide09Notes as aula2Slide09Notes } from './components/slides/aula2/Slide09_DiBox';
import { Slide10_Amplifier, slide10Notes as aula2Slide10Notes } from './components/slides/aula2/Slide10_Amplifier';
import { Slide11_FullAudioPath, slide11Notes as aula2Slide11Notes } from './components/slides/aula2/Slide11_FullAudioPath';
import { Slide12_MatchingGame, slide12Notes as aula2Slide12Notes } from './components/slides/aula2/Slide12_MatchingGame';
import { Slide13_Quiz, slide13Notes as aula2Slide13Notes } from './components/slides/aula2/Slide13_Quiz';
import { Slide14_Review2, slide14Notes as aula2Slide14Notes } from './components/slides/aula2/Slide14_Review2';
import { Slide15_Closing2, slide15Notes as aula2Slide15Notes } from './components/slides/aula2/Slide15_Closing2';

// Aula 3
import { Slide01_Opening, slide01Notes as aula3Slide01Notes } from './components/slides/aula3/Slide01_Opening';
import { Slide02_Question as Aula3_Slide02_Question, slide02Notes as aula3Slide02Notes } from './components/slides/aula3/Slide02_Question';
import { Slide03_FullSystem, slide03Notes as aula3Slide03Notes } from './components/slides/aula3/Slide03_FullSystem';
import { Slide04_Source, slide04Notes as aula3Slide04Notes } from './components/slides/aula3/Slide04_Source';
import { Slide05_Microphone, slide05Notes as aula3Slide05Notes } from './components/slides/aula3/Slide05_Microphone';
import { Slide06_Cable, slide06Notes as aula3Slide06Notes } from './components/slides/aula3/Slide06_Cable';
import { Slide07_Mixer, slide07Notes as aula3Slide07Notes } from './components/slides/aula3/Slide07_Mixer';
import { Slide08_Processing, slide08Notes as aula3Slide08Notes } from './components/slides/aula3/Slide08_Processing';
import { Slide09_Amplifier, slide09Notes as aula3Slide09Notes } from './components/slides/aula3/Slide09_Amplifier';
import { Slide10_Speaker, slide10Notes as aula3Slide10Notes } from './components/slides/aula3/Slide10_Speaker';
import { Slide11_FullFlow, slide11Notes as aula3Slide11Notes } from './components/slides/aula3/Slide11_FullFlow';
import { Slide12_Problems, slide12Notes as aula3Slide12Notes } from './components/slides/aula3/Slide12_Problems';
import { Slide13_Exercise, slide13Notes as aula3Slide13Notes } from './components/slides/aula3/Slide13_Exercise';
import { Slide14_Practice, slide14Notes as aula3Slide14Notes } from './components/slides/aula3/Slide14_Practice';
import { Slide15_Review, slide15Notes as aula3Slide15Notes } from './components/slides/aula3/Slide15_Review';
import { Slide16_Closing, slide16Notes as aula3Slide16Notes } from './components/slides/aula3/Slide16_Closing';

// Aula 4
import { Slide01_Opening as Aula4_Slide01_Opening, slide01Notes as aula4Slide01Notes } from './components/slides/aula4/Slide01_Opening';
import { Slide02_WhatItDoes, slide02Notes as aula4Slide02Notes } from './components/slides/aula4/Slide02_WhatItDoes';
import { Slide03_Analogy, slide03Notes as aula4Slide03Notes } from './components/slides/aula4/Slide03_Analogy';
import { Slide04_Types, slide04Notes as aula4Slide04Notes } from './components/slides/aula4/Slide04_Types';
import { Slide05_Dynamic, slide05Notes as aula4Slide05Notes } from './components/slides/aula4/Slide05_Dynamic';
import { Slide06_Condenser, slide06Notes as aula4Slide06Notes } from './components/slides/aula4/Slide06_Condenser';
import { Slide07_Specialized, slide07Notes as aula4Slide07Notes } from './components/slides/aula4/Slide07_Specialized';
import { Slide08_PolarPatterns, slide08Notes as aula4Slide08Notes } from './components/slides/aula4/Slide08_PolarPatterns';
import { Slide09_Positioning, slide09Notes as aula4Slide09Notes } from './components/slides/aula4/Slide09_Positioning';
import { Slide10_Mistakes, slide10Notes as aula4Slide10Notes } from './components/slides/aula4/Slide10_Mistakes';
import { Slide11_Demo, slide11Notes as aula4Slide11Notes } from './components/slides/aula4/Slide11_Demo';
import { Slide12_Selector, slide12Notes as aula4Slide12Notes } from './components/slides/aula4/Slide12_Selector';
import { Slide13_Quiz as Aula4_Slide13_Quiz, slide13Notes as aula4Slide13Notes } from './components/slides/aula4/Slide13_Quiz';
import { Slide14_Recap, slide14Notes as aula4Slide14Notes } from './components/slides/aula4/Slide14_Recap';
import { Slide15_Closing, slide15Notes as aula4Slide15Notes } from './components/slides/aula4/Slide15_Closing';

// Aula 5
import { Slide01_Opening as Aula5_Slide01_Opening, slide01Notes as aula5Slide01Notes } from './components/slides/aula5/Slide01_Opening';
import { Slide02_WhatIsMixer, slide02Notes as aula5Slide02Notes } from './components/slides/aula5/Slide02_WhatIsMixer';
import { Slide03_Anatomy, slide03Notes as aula5Slide03Notes } from './components/slides/aula5/Slide03_Anatomy';
import { Slide04_Channel, slide04Notes as aula5Slide04Notes } from './components/slides/aula5/Slide04_Channel';
import { Slide05_SignalPath, slide05Notes as aula5Slide05Notes } from './components/slides/aula5/Slide05_SignalPath';
import { Slide06_Controls, slide06Notes as aula5Slide06Notes } from './components/slides/aula5/Slide06_Controls';
import { Slide07_AnalogVsDigital, slide07Notes as aula5Slide07Notes } from './components/slides/aula5/Slide07_AnalogVsDigital';
import { Slide08_PracticalDifferences, slide08Notes as aula5Slide08Notes } from './components/slides/aula5/Slide08_PracticalDifferences';
import { Slide09_Demo as Aula5_Slide09_Demo, slide09Notes as aula5Slide09Notes } from './components/slides/aula5/Slide09_Demo';
import { Slide10_Recap as Aula5_Slide10_Recap, slide10Notes as aula5Slide10Notes } from './components/slides/aula5/Slide10_Recap';
import { Slide11_Quiz, slide11Notes as aula5Slide11Notes } from './components/slides/aula5/Slide11_Quiz';
import { Slide12_Exercises, slide12Notes as aula5Slide12Notes } from './components/slides/aula5/Slide12_Exercises';
import { Slide13_FinalChallenge, slide13Notes as aula5Slide13Notes } from './components/slides/aula5/Slide13_FinalChallenge';
import { Slide14_Closing as Aula5_Slide14_Closing, slide14Notes as aula5Slide14Notes } from './components/slides/aula5/Slide14_Closing';
import { Slide15_References, slide15Notes as aula5Slide15Notes } from './components/slides/aula5/Slide15_References';

// Aula 6
import { Slide01_Opening as Aula6_Slide01_Opening, slide01Notes as aula6Slide01Notes } from './components/slides/aula6/Slide01_Opening';
import { Slide02_Question as Aula6_Slide02_Question, slide02Notes as aula6Slide02Notes } from './components/slides/aula6/Slide02_Question';
import { Slide03_CelularAnalogy, slide03Notes as aula6Slide03Notes } from './components/slides/aula6/Slide03_CelularAnalogy';
import { Slide04_GainDetail, slide04Notes as aula6Slide04Notes } from './components/slides/aula6/Slide04_GainDetail';
import { Slide05_FaderDetail, slide05Notes as aula6Slide05Notes } from './components/slides/aula6/Slide05_FaderDetail';
import { Slide06_Comparison as Aula6_Slide06_Comparison, slide06Notes as aula6Slide06Notes } from './components/slides/aula6/Slide06_Comparison';
import { Slide07_ClipIntro, slide07Notes as aula6Slide07Notes } from './components/slides/aula6/Slide07_ClipIntro';
import { Slide08_ClipEffects, slide08Notes as aula6Slide08Notes } from './components/slides/aula6/Slide08_ClipEffects';
import { Slide09_Headroom, slide09Notes as aula6Slide09Notes } from './components/slides/aula6/Slide09_Headroom';
import { Slide10_StepByStep, slide10Notes as aula6Slide10Notes } from './components/slides/aula6/Slide10_StepByStep';
import { Slide11_Operador, slide11Notes as aula6Slide11Notes } from './components/slides/aula6/Slide11_Operador';
import { Slide12_Mistakes, slide12Notes as aula6Slide12Notes } from './components/slides/aula6/Slide12_Mistakes';
import { Slide13_Interactive, slide13Notes as aula6Slide13Notes } from './components/slides/aula6/Slide13_Interactive';
import { Slide14_Quiz as Aula6_Slide14_Quiz, slide14Notes as aula6Slide14Notes } from './components/slides/aula6/Slide14_Quiz';
import { Slide15_Review as Aula6_Slide15_Review, slide15Notes as aula6Slide15Notes } from './components/slides/aula6/Slide15_Review';
import { Slide16_Closing as Aula6_Slide16_Closing, slide16Notes as aula6Slide16Notes } from './components/slides/aula6/Slide16_Closing';

// Aula 7
import { Slide01_Opening as Aula7_Slide01_Opening, slide01Notes as aula7Slide01Notes } from './components/slides/aula7/Slide01_Opening';
import { Slide02_WhatIsEQ, slide02Notes as aula7Slide02Notes } from './components/slides/aula7/Slide02_WhatIsEQ';
import { Slide03_Recipe, slide03Notes as aula7Slide03Notes } from './components/slides/aula7/Slide03_Recipe';
import { Slide04_Bass, slide04Notes as aula7Slide04Notes } from './components/slides/aula7/Slide04_Bass';
import { Slide05_Mids, slide05Notes as aula7Slide05Notes } from './components/slides/aula7/Slide05_Mids';
import { Slide06_Treble, slide06Notes as aula7Slide06Notes } from './components/slides/aula7/Slide06_Treble';
import { Slide07_EQMixer, slide07Notes as aula7Slide07Notes } from './components/slides/aula7/Slide07_EQMixer';
import { Slide08_HPF, slide08Notes as aula7Slide08Notes } from './components/slides/aula7/Slide08_HPF';
import { Slide09_CutOrBoost, slide09Notes as aula7Slide09Notes } from './components/slides/aula7/Slide09_CutOrBoost';
import { Slide10_AudioDemo, slide10Notes as aula7Slide10Notes } from './components/slides/aula7/Slide10_AudioDemo';
import { Slide11_Mistakes as Aula7_Slide11_Mistakes, slide11Notes as aula7Slide11Notes } from './components/slides/aula7/Slide11_Mistakes';
import { Slide12_VoiceEQ, slide12Notes as aula7Slide12Notes } from './components/slides/aula7/Slide12_VoiceEQ';
import { Slide13_Exercise as Aula7_Slide13_Exercise, slide13Notes as aula7Slide13Notes } from './components/slides/aula7/Slide13_Exercise';
import { Slide14_Quiz as Aula7_Slide14_Quiz, slide14Notes as aula7Slide14Notes } from './components/slides/aula7/Slide14_Quiz';
import { Slide15_Review as Aula7_Slide15_Review, slide15Notes as aula7Slide15Notes } from './components/slides/aula7/Slide15_Review';
import { Slide16_Closing as Aula7_Slide16_Closing, slide16Notes as aula7Slide16Notes } from './components/slides/aula7/Slide16_Closing';

// Aula 8
import { Slide01_Opening as Aula8_Slide01_Opening, slide01Notes as aula8Slide01Notes } from './components/slides/aula8/Slide01_Opening';
import { Slide02_Problem, slide02Notes as aula8Slide02Notes } from './components/slides/aula8/Slide02_Problem';
import { Slide03_Dynamics, slide03Notes as aula8Slide03Notes } from './components/slides/aula8/Slide03_Dynamics';
import { Slide04_WhatItDoes as Aula8_Slide04_WhatItDoes, slide04Notes as aula8Slide04Notes } from './components/slides/aula8/Slide04_WhatItDoes';
import { Slide05_Threshold, slide05Notes as aula8Slide05Notes } from './components/slides/aula8/Slide05_Threshold';
import { Slide06_Ratio, slide06Notes as aula8Slide06Notes } from './components/slides/aula8/Slide06_Ratio';
import { Slide07_AttackRelease, slide07Notes as aula8Slide07Notes } from './components/slides/aula8/Slide07_AttackRelease';
import { Slide08_MakeupGain, slide08Notes as aula8Slide08Notes } from './components/slides/aula8/Slide08_MakeupGain';
import { Slide09_Limiter, slide09Notes as aula8Slide09Notes } from './components/slides/aula8/Slide09_Limiter';
import { Slide10_WhenToUse, slide10Notes as aula8Slide10Notes } from './components/slides/aula8/Slide10_WhenToUse';
import { Slide11_DontExaggerate, slide11Notes as aula8Slide11Notes } from './components/slides/aula8/Slide11_DontExaggerate';
import { Slide12_Simulator, slide12Notes as aula8Slide12Notes } from './components/slides/aula8/Slide12_Simulator';
import { Slide13_Practice, slide13Notes as aula8Slide13Notes } from './components/slides/aula8/Slide13_Practice';
import { Slide14_Quiz as Aula8_Slide14_Quiz, slide14Notes as aula8Slide14Notes } from './components/slides/aula8/Slide14_Quiz';
import { Slide15_Review as Aula8_Slide15_Review, slide15Notes as aula8Slide15Notes } from './components/slides/aula8/Slide15_Review';
import { Slide16_Closing as Aula8_Slide16_Closing, slide16Notes as aula8Slide16Notes } from './components/slides/aula8/Slide16_Closing';

// Aula 9
import { Slide01_Opening as Aula9_Slide01_Opening, slide01Notes as aula9Slide01Notes } from './components/slides/aula9/Slide01_Opening';
import { Slide02_PushingCar, slide02Notes as aula9Slide02Notes } from './components/slides/aula9/Slide02_PushingCar';
import { Slide03_SoundWave, slide03Notes as aula9Slide03Notes } from './components/slides/aula9/Slide03_SoundWave';
import { Slide04_WavesInPhase, slide04Notes as aula9Slide04Notes } from './components/slides/aula9/Slide04_WavesInPhase';
import { Slide05_WavesOutOfPhase, slide05Notes as aula9Slide05Notes } from './components/slides/aula9/Slide05_WavesOutOfPhase';
import { Slide06_Polarity, slide06Notes as aula9Slide06Notes } from './components/slides/aula9/Slide06_Polarity';
import { Slide07_PhaseVsPolarity, slide07Notes as aula9Slide07Notes } from './components/slides/aula9/Slide07_PhaseVsPolarity';
import { Slide08_TwoMics, slide08Notes as aula9Slide08Notes } from './components/slides/aula9/Slide08_TwoMics';
import { Slide09_RealProblems, slide09Notes as aula9Slide09Notes } from './components/slides/aula9/Slide09_RealProblems';
import { Slide10_DemoVisual, slide10Notes as aula9Slide10Notes } from './components/slides/aula9/Slide10_DemoVisual';
import { Slide11_HowToIdentify, slide11Notes as aula9Slide11Notes } from './components/slides/aula9/Slide11_HowToIdentify';
import { Slide12_HowToAvoid, slide12Notes as aula9Slide12Notes } from './components/slides/aula9/Slide12_HowToAvoid';
import { Slide13_Practice as Aula9_Slide13_Practice, slide13Notes as aula9Slide13Notes } from './components/slides/aula9/Slide13_Practice';
import { Slide14_Quiz as Aula9_Slide14_Quiz, slide14Notes as aula9Slide14Notes } from './components/slides/aula9/Slide14_Quiz';
import { Slide15_Review as Aula9_Slide15_Review, slide15Notes as aula9Slide15Notes } from './components/slides/aula9/Slide15_Review';
import { Slide16_Closing as Aula9_Slide16_Closing, slide16Notes as aula9Slide16Notes } from './components/slides/aula9/Slide16_Closing';

// Aula 10
import { Slide01_Opening as Aula10_Slide01_Opening, slide01Notes as aula10Slide01Notes } from './components/slides/aula10/Slide01_Opening';
import { Slide02_Hearing, slide02Notes as aula10Slide02Notes } from './components/slides/aula10/Slide02_Hearing';
import { Slide03_Loop, slide03Notes as aula10Slide03Notes } from './components/slides/aula10/Slide03_Loop';
import { Slide04_HowItStarts, slide04Notes as aula10Slide04Notes } from './components/slides/aula10/Slide04_HowItStarts';
import { Slide05_Positioning, slide05Notes as aula10Slide05Notes } from './components/slides/aula10/Slide05_Positioning';
import { Slide06_RiskFactors, slide06Notes as aula10Slide06Notes } from './components/slides/aula10/Slide06_RiskFactors';
import { Slide07_FixFast, slide07Notes as aula10Slide07Notes } from './components/slides/aula10/Slide07_FixFast';
import { Slide08_EQ, slide08Notes as aula10Slide08Notes } from './components/slides/aula10/Slide08_EQ';
import { Slide09_Monitors, slide09Notes as aula10Slide09Notes } from './components/slides/aula10/Slide09_Monitors';
import { Slide10_Practice as Aula10_Slide10_Practice, slide10Notes as aula10Slide10Notes } from './components/slides/aula10/Slide10_Practice';
import { Slide11_Mistakes as Aula10_Slide11_Mistakes, slide11Notes as aula10Slide11Notes } from './components/slides/aula10/Slide11_Mistakes';
import { Slide12_Simulator as Aula10_Slide12_Simulator, slide12Notes as aula10Slide12Notes } from './components/slides/aula10/Slide12_Simulator';
import { Slide13_Challenge, slide13Notes as aula10Slide13Notes } from './components/slides/aula10/Slide13_Challenge';
import { Slide14_Quiz as Aula10_Slide14_Quiz, slide14Notes as aula10Slide14Notes } from './components/slides/aula10/Slide14_Quiz';
import { Slide15_Review as Aula10_Slide15_Review, slide15Notes as aula10Slide15Notes } from './components/slides/aula10/Slide15_Review';
import { Slide16_Closing as Aula10_Slide16_Closing, slide16Notes as aula10Slide16Notes } from './components/slides/aula10/Slide16_Closing';

// Aula 11
import { Slide01_Opening as Aula11_Slide01_Opening, slide01Notes as aula11Slide01Notes } from './components/slides/aula11/Slide01_Opening';
import { Slide02_Challenge, slide02Notes as aula11Slide02Notes } from './components/slides/aula11/Slide02_Challenge';
import { Slide03_Planning, slide03Notes as aula11Slide03Notes } from './components/slides/aula11/Slide03_Planning';
import { Slide04_Equipment, slide04Notes as aula11Slide04Notes } from './components/slides/aula11/Slide04_Equipment';
import { Slide05_Connections, slide05Notes as aula11Slide05Notes } from './components/slides/aula11/Slide05_Connections';
import { Slide06_Cables, slide06Notes as aula11Slide06Notes } from './components/slides/aula11/Slide06_Cables';
import { Slide07_PowerSequence, slide07Notes as aula11Slide07Notes } from './components/slides/aula11/Slide07_PowerSequence';
import { Slide08_FirstChannel, slide08Notes as aula11Slide08Notes } from './components/slides/aula11/Slide08_FirstChannel';
import { Slide09_Checklist, slide09Notes as aula11Slide09Notes } from './components/slides/aula11/Slide09_Checklist';
import { Slide10_CommonProblems, slide10Notes as aula11Slide10Notes } from './components/slides/aula11/Slide10_CommonProblems';
import { Slide11_Flowchart, slide11Notes as aula11Slide11Notes } from './components/slides/aula11/Slide11_Flowchart';
import { Slide12_Simulator as Aula11_Slide12_Simulator, slide12Notes as aula11Slide12Notes } from './components/slides/aula11/Slide12_Simulator';
import { Slide13_Challenge as Aula11_Slide13_Challenge, slide13Notes as aula11Slide13Notes } from './components/slides/aula11/Slide13_Challenge';
import { Slide14_Quiz as Aula11_Slide14_Quiz, slide14Notes as aula11Slide14Notes } from './components/slides/aula11/Slide14_Quiz';
import { Slide15_Review as Aula11_Slide15_Review, slide15Notes as aula11Slide15Notes } from './components/slides/aula11/Slide15_Review';
import { Slide16_Closing as Aula11_Slide16_Closing, slide16Notes as aula11Slide16Notes } from './components/slides/aula11/Slide16_Closing';

// Aula 12
import { Slide01_Opening as Aula12_Slide01_Opening, slide01Notes as aula12Slide01Notes } from './components/slides/aula12/Slide01_Opening';
import { Slide02_Evolution, slide02Notes as aula12Slide02Notes } from './components/slides/aula12/Slide02_Evolution';
import { Slide03_ScenarioChurch, slide03Notes as aula12Slide03Notes } from './components/slides/aula12/Slide03_ScenarioChurch';
import { Slide04_ScenarioPodcast, slide04Notes as aula12Slide04Notes } from './components/slides/aula12/Slide04_ScenarioPodcast';
import { Slide05_ScenarioAuditorium, slide05Notes as aula12Slide05Notes } from './components/slides/aula12/Slide05_ScenarioAuditorium';
import { Slide06_NoSound, slide06Notes as aula12Slide06Notes } from './components/slides/aula12/Slide06_NoSound';
import { Slide07_PublicArrived, slide07Notes as aula12Slide07Notes } from './components/slides/aula12/Slide07_PublicArrived';
import { Slide08_FullSimulator, slide08Notes as aula12Slide08Notes } from './components/slides/aula12/Slide08_FullSimulator';
import { Slide09_ErrorHunt, slide09Notes as aula12Slide09Notes } from './components/slides/aula12/Slide09_ErrorHunt';
import { Slide10_FinalQuiz as Aula12_Slide10_FinalQuiz, slide10Notes as aula12Slide10Notes } from './components/slides/aula12/Slide10_FinalQuiz';
import { Slide11_FinalMission, slide11Notes as aula12Slide11Notes } from './components/slides/aula12/Slide11_FinalMission';
import { Slide12_ReviewFlow, slide12Notes as aula12Slide12Notes } from './components/slides/aula12/Slide12_ReviewFlow';
import { Slide13_GoldenRules, slide13Notes as aula12Slide13Notes } from './components/slides/aula12/Slide13_GoldenRules';
import { Slide14_ContinueJourney, slide14Notes as aula12Slide14Notes } from './components/slides/aula12/Slide14_ContinueJourney';
import { Slide15_Certificate, slide15Notes as aula12Slide15Notes } from './components/slides/aula12/Slide15_Certificate';
import { Slide16_Closing as Aula12_Slide16_Closing, slide16Notes as aula12Slide16Notes } from './components/slides/aula12/Slide16_Closing';

interface AppConteudoProps {
  onSairLogin: () => void;
  onAbrirAdmin: () => void;
}

export const AppConteudo: React.FC<AppConteudoProps> = ({ onSairLogin, onAbrirAdmin }) => {
  const { usuarioAtual, podeAcesar, logout, isAdmin } = useAutenticacao();

  if (new URLSearchParams(window.location.search).get('mode') === 'presentation') {
    return <PresentationSlidesView />;
  }

  const [currentLesson, setCurrentLesson] = useState<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [presenterMode, setPresenterMode] = useState(false);

  const handleLessonChange = (lesson: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12) => {
    // Verificar acesso à aula
    if (lesson !== 0 && !podeAcesar(lesson)) {
      alert('Você não tem acesso a esta aula. Entre em contato com o administrador.');
      return;
    }
    setCurrentLesson(lesson);
    setCurrentSlide(0);
  };

  const lesson1Slides = [
    <Slide01_Intro key="l1-1" />,
    <Slide02_Question key="l1-2" />,
    <Slide03_Everywhere key="l1-3" />,
    <Slide04_Definition key="l1-4" />,
    <Slide05_Comparison key="l1-5" />,
    <Slide06_Speaker key="l1-6" />,
    <Slide07_Microphone key="l1-7" />,
    <Slide08_Duality key="l1-8" />,
    <Slide09_AudioFlow key="l1-9" />,
    <Slide10_Mixer key="l1-10" />,
    <Slide11_Curiosities key="l1-11" />,
    <Slide12_Practice key="l1-12" />,
    <Slide13_Review key="l1-13" />,
    <Slide14_Closing key="l1-14" />,
  ];

  const lesson2Slides = [
    <Slide01_Intro2 key="l2-1" />,
    <Slide02_StageOverview key="l2-2" />,
    <Slide03_MicrophoneIntro key="l2-3" />,
    <Slide04_MicrophoneTypes key="l2-4" />,
    <Slide05_MixerConsole key="l2-5" />,
    <Slide06_Speakers key="l2-6" />,
    <Slide07_StageMonitors key="l2-7" />,
    <Slide08_Cables key="l2-8" />,
    <Slide09_DiBox key="l2-9" />,
    <Slide10_Amplifier key="l2-10" />,
    <Slide11_FullAudioPath key="l2-11" />,
    <Slide12_MatchingGame key="l2-12" />,
    <Slide13_Quiz key="l2-13" />,
    <Slide14_Review2 key="l2-14" />,
    <Slide15_Closing2 key="l2-15" />,
  ];

  const lesson1Notes = [
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
  ];

  const lesson1Titles = [
    'Slide 1 — Abertura',
    'Slide 2 — O que é Som?',
    'Slide 3 — O som está em todos os lugares',
    'Slide 4 — O Conceito Fundamental',
    'Slide 5 — Uma comparação intuitiva',
    'Slide 6 — Anatomia do Alto-falante',
    'Slide 7 — Anatomia do Microfone',
    'Slide 8 — Duas faces da mesma moeda',
    'Slide 9 — O Fluxo do Sinal de Áudio',
    'Slide 10 — O Coração do Sistema',
    'Slide 11 — Curiosidades sobre o Som',
    'Slide 12 — Demonstração Prática',
    'Slide 13 — Revisão dos Aprendizados',
    'Slide 14 — Encerramento',
  ];

  const lesson2Notes = [
    aula2Slide01Notes,
    aula2Slide02Notes,
    aula2Slide03Notes,
    aula2Slide04Notes,
    aula2Slide05Notes,
    aula2Slide06Notes,
    aula2Slide07Notes,
    aula2Slide08Notes,
    aula2Slide09Notes,
    aula2Slide10Notes,
    aula2Slide11Notes,
    aula2Slide12Notes,
    aula2Slide13Notes,
    aula2Slide14Notes,
    aula2Slide15Notes,
  ];

  const lesson2Titles = [
    'Slide 1 — Abertura (Aula 2)',
    'Slide 2 — Visão Geral do Palco',
    'Slide 3 — Introdução aos Microfones',
    'Slide 4 — Tipos de Microfones',
    'Slide 5 — Mesa de Som',
    'Slide 6 — Alto-falantes',
    'Slide 7 — Monitores de Palco',
    'Slide 8 — Cabos',
    'Slide 9 — DI Box',
    'Slide 10 — Amplificadores',
    'Slide 11 — O Caminho Completo do Áudio',
    'Slide 12 — Jogo de Pareamento',
    'Slide 13 — Quiz',
    'Slide 14 — Revisão (Aula 2)',
    'Slide 15 — Encerramento (Aula 2)',
  ];

  const lesson3Slides = [
    <Slide01_Opening key="l3-1" />,
    <Aula3_Slide02_Question key="l3-2" />,
    <Slide03_FullSystem key="l3-3" />,
    <Slide04_Source key="l3-4" />,
    <Slide05_Microphone key="l3-5" />,
    <Slide06_Cable key="l3-6" />,
    <Slide07_Mixer key="l3-7" />,
    <Slide08_Processing key="l3-8" />,
    <Slide09_Amplifier key="l3-9" />,
    <Slide10_Speaker key="l3-10" />,
    <Slide11_FullFlow key="l3-11" />,
    <Slide12_Problems key="l3-12" />,
    <Slide13_Exercise key="l3-13" />,
    <Slide14_Practice key="l3-14" />,
    <Slide15_Review key="l3-15" />,
    <Slide16_Closing key="l3-16" />,
  ];

  const lesson3Notes = [
    aula3Slide01Notes,
    aula3Slide02Notes,
    aula3Slide03Notes,
    aula3Slide04Notes,
    aula3Slide05Notes,
    aula3Slide06Notes,
    aula3Slide07Notes,
    aula3Slide08Notes,
    aula3Slide09Notes,
    aula3Slide10Notes,
    aula3Slide11Notes,
    aula3Slide12Notes,
    aula3Slide13Notes,
    aula3Slide14Notes,
    aula3Slide15Notes,
    aula3Slide16Notes,
  ];

  const lesson3Titles = [
    'Slide 1 — Abertura (Aula 3)',
    'Slide 2 — A Pergunta',
    'Slide 3 — O Sistema Completo',
    'Slide 4 — Fonte de Som',
    'Slide 5 — Microfone',
    'Slide 6 — Cabo',
    'Slide 7 — Mesa de Som',
    'Slide 8 — Processamento',
    'Slide 9 — Amplificador',
    'Slide 10 — Alto-falante',
    'Slide 11 — Fluxo Completo',
    'Slide 12 — Problemas Comuns',
    'Slide 13 — Exercício',
    'Slide 14 — Prática (Aula 3)',
    'Slide 15 — Revisão (Aula 3)',
    'Slide 16 — Encerramento (Aula 3)',
  ];

  const lesson4Slides = [
    <Aula4_Slide01_Opening key="l4-1" />,
    <Slide02_WhatItDoes key="l4-2" />,
    <Slide03_Analogy key="l4-3" />,
    <Slide04_Types key="l4-4" />,
    <Slide05_Dynamic key="l4-5" />,
    <Slide06_Condenser key="l4-6" />,
    <Slide07_Specialized key="l4-7" />,
    <Slide08_PolarPatterns key="l4-8" />,
    <Slide09_Positioning key="l4-9" />,
    <Slide10_Mistakes key="l4-10" />,
    <Slide11_Demo key="l4-11" />,
    <Slide12_Selector key="l4-12" />,
    <Aula4_Slide13_Quiz key="l4-13" />,
    <Slide14_Recap key="l4-14" />,
    <Slide15_Closing key="l4-15" />,
  ];

  const lesson4Notes = [
    aula4Slide01Notes,
    aula4Slide02Notes,
    aula4Slide03Notes,
    aula4Slide04Notes,
    aula4Slide05Notes,
    aula4Slide06Notes,
    aula4Slide07Notes,
    aula4Slide08Notes,
    aula4Slide09Notes,
    aula4Slide10Notes,
    aula4Slide11Notes,
    aula4Slide12Notes,
    aula4Slide13Notes,
    aula4Slide14Notes,
    aula4Slide15Notes,
  ];

  const lesson4Titles = [
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
  ];

  const lesson5Slides = [
    <Aula5_Slide01_Opening key="l5-1" />,
    <Slide02_WhatIsMixer key="l5-2" />,
    <Slide03_Anatomy key="l5-3" />,
    <Slide04_Channel key="l5-4" />,
    <Slide05_SignalPath key="l5-5" />,
    <Slide06_Controls key="l5-6" />,
    <Slide07_AnalogVsDigital key="l5-7" />,
    <Slide08_PracticalDifferences key="l5-8" />,
    <Aula5_Slide09_Demo key="l5-9" />,
    <Aula5_Slide10_Recap key="l5-10" />,
    <Slide11_Quiz key="l5-11" />,
    <Slide12_Exercises key="l5-12" />,
    <Slide13_FinalChallenge key="l5-13" />,
    <Aula5_Slide14_Closing key="l5-14" />,
    <Slide15_References key="l5-15" />,
  ];

  const lesson5Notes = [
    aula5Slide01Notes,
    aula5Slide02Notes,
    aula5Slide03Notes,
    aula5Slide04Notes,
    aula5Slide05Notes,
    aula5Slide06Notes,
    aula5Slide07Notes,
    aula5Slide08Notes,
    aula5Slide09Notes,
    aula5Slide10Notes,
    aula5Slide11Notes,
    aula5Slide12Notes,
    aula5Slide13Notes,
    aula5Slide14Notes,
    aula5Slide15Notes,
  ];

  const lesson5Titles = [
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
  ];

  const lesson6Slides = [
    <Aula6_Slide01_Opening key="l6-1" />,
    <Aula6_Slide02_Question key="l6-2" />,
    <Slide03_CelularAnalogy key="l6-3" />,
    <Slide04_GainDetail key="l6-4" />,
    <Slide05_FaderDetail key="l6-5" />,
    <Aula6_Slide06_Comparison key="l6-6" />,
    <Slide07_ClipIntro key="l6-7" />,
    <Slide08_ClipEffects key="l6-8" />,
    <Slide09_Headroom key="l6-9" />,
    <Slide10_StepByStep key="l6-10" />,
    <Slide11_Operador key="l6-11" />,
    <Slide12_Mistakes key="l6-12" />,
    <Slide13_Interactive key="l6-13" />,
    <Aula6_Slide14_Quiz key="l6-14" />,
    <Aula6_Slide15_Review key="l6-15" />,
    <Aula6_Slide16_Closing key="l6-16" />,
  ];

  const lesson6Notes = [
    aula6Slide01Notes,
    aula6Slide02Notes,
    aula6Slide03Notes,
    aula6Slide04Notes,
    aula6Slide05Notes,
    aula6Slide06Notes,
    aula6Slide07Notes,
    aula6Slide08Notes,
    aula6Slide09Notes,
    aula6Slide10Notes,
    aula6Slide11Notes,
    aula6Slide12Notes,
    aula6Slide13Notes,
    aula6Slide14Notes,
    aula6Slide15Notes,
    aula6Slide16Notes,
  ];

  const lesson6Titles = [
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
  ];

  const lesson7Slides = [
    <Aula7_Slide01_Opening key="l7-1" />,
    <Slide02_WhatIsEQ key="l7-2" />,
    <Slide03_Recipe key="l7-3" />,
    <Slide04_Bass key="l7-4" />,
    <Slide05_Mids key="l7-5" />,
    <Slide06_Treble key="l7-6" />,
    <Slide07_EQMixer key="l7-7" />,
    <Slide08_HPF key="l7-8" />,
    <Slide09_CutOrBoost key="l7-9" />,
    <Slide10_AudioDemo key="l7-10" />,
    <Aula7_Slide11_Mistakes key="l7-11" />,
    <Slide12_VoiceEQ key="l7-12" />,
    <Aula7_Slide13_Exercise key="l7-13" />,
    <Aula7_Slide14_Quiz key="l7-14" />,
    <Aula7_Slide15_Review key="l7-15" />,
    <Aula7_Slide16_Closing key="l7-16" />,
  ];

  const lesson7Notes = [
    aula7Slide01Notes,
    aula7Slide02Notes,
    aula7Slide03Notes,
    aula7Slide04Notes,
    aula7Slide05Notes,
    aula7Slide06Notes,
    aula7Slide07Notes,
    aula7Slide08Notes,
    aula7Slide09Notes,
    aula7Slide10Notes,
    aula7Slide11Notes,
    aula7Slide12Notes,
    aula7Slide13Notes,
    aula7Slide14Notes,
    aula7Slide15Notes,
    aula7Slide16Notes,
  ];

  const lesson7Titles = [
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
  ];

  const lesson8Slides = [
    <Aula8_Slide01_Opening key="l8-1" />,
    <Slide02_Problem key="l8-2" />,
    <Slide03_Dynamics key="l8-3" />,
    <Aula8_Slide04_WhatItDoes key="l8-4" />,
    <Slide05_Threshold key="l8-5" />,
    <Slide06_Ratio key="l8-6" />,
    <Slide07_AttackRelease key="l8-7" />,
    <Slide08_MakeupGain key="l8-8" />,
    <Slide09_Limiter key="l8-9" />,
    <Slide10_WhenToUse key="l8-10" />,
    <Slide11_DontExaggerate key="l8-11" />,
    <Slide12_Simulator key="l8-12" />,
    <Slide13_Practice key="l8-13" />,
    <Aula8_Slide14_Quiz key="l8-14" />,
    <Aula8_Slide15_Review key="l8-15" />,
    <Aula8_Slide16_Closing key="l8-16" />,
  ];

  const lesson8Notes = [
    aula8Slide01Notes,
    aula8Slide02Notes,
    aula8Slide03Notes,
    aula8Slide04Notes,
    aula8Slide05Notes,
    aula8Slide06Notes,
    aula8Slide07Notes,
    aula8Slide08Notes,
    aula8Slide09Notes,
    aula8Slide10Notes,
    aula8Slide11Notes,
    aula8Slide12Notes,
    aula8Slide13Notes,
    aula8Slide14Notes,
    aula8Slide15Notes,
    aula8Slide16Notes,
  ];

  const lesson8Titles = [
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
  ];

  const lesson9Slides = [
    <Aula9_Slide01_Opening key="l9-1" />,
    <Slide02_PushingCar key="l9-2" />,
    <Slide03_SoundWave key="l9-3" />,
    <Slide04_WavesInPhase key="l9-4" />,
    <Slide05_WavesOutOfPhase key="l9-5" />,
    <Slide06_Polarity key="l9-6" />,
    <Slide07_PhaseVsPolarity key="l9-7" />,
    <Slide08_TwoMics key="l9-8" />,
    <Slide09_RealProblems key="l9-9" />,
    <Slide10_DemoVisual key="l9-10" />,
    <Slide11_HowToIdentify key="l9-11" />,
    <Slide12_HowToAvoid key="l9-12" />,
    <Aula9_Slide13_Practice key="l9-13" />,
    <Aula9_Slide14_Quiz key="l9-14" />,
    <Aula9_Slide15_Review key="l9-15" />,
    <Aula9_Slide16_Closing key="l9-16" />,
  ];

  const lesson9Notes = [
    aula9Slide01Notes,
    aula9Slide02Notes,
    aula9Slide03Notes,
    aula9Slide04Notes,
    aula9Slide05Notes,
    aula9Slide06Notes,
    aula9Slide07Notes,
    aula9Slide08Notes,
    aula9Slide09Notes,
    aula9Slide10Notes,
    aula9Slide11Notes,
    aula9Slide12Notes,
    aula9Slide13Notes,
    aula9Slide14Notes,
    aula9Slide15Notes,
    aula9Slide16Notes,
  ];

  const lesson9Titles = [
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
  ];

  const lesson10Slides = [
    <Aula10_Slide01_Opening key="l10-1" />,
    <Slide02_Hearing key="l10-2" />,
    <Slide03_Loop key="l10-3" />,
    <Slide04_HowItStarts key="l10-4" />,
    <Slide05_Positioning key="l10-5" />,
    <Slide06_RiskFactors key="l10-6" />,
    <Slide07_FixFast key="l10-7" />,
    <Slide08_EQ key="l10-8" />,
    <Slide09_Monitors key="l10-9" />,
    <Aula10_Slide10_Practice key="l10-10" />,
    <Aula10_Slide11_Mistakes key="l10-11" />,
    <Aula10_Slide12_Simulator key="l10-12" />,
    <Slide13_Challenge key="l10-13" />,
    <Aula10_Slide14_Quiz key="l10-14" />,
    <Aula10_Slide15_Review key="l10-15" />,
    <Aula10_Slide16_Closing key="l10-16" />,
  ];

  const lesson10Notes = [
    aula10Slide01Notes,
    aula10Slide02Notes,
    aula10Slide03Notes,
    aula10Slide04Notes,
    aula10Slide05Notes,
    aula10Slide06Notes,
    aula10Slide07Notes,
    aula10Slide08Notes,
    aula10Slide09Notes,
    aula10Slide10Notes,
    aula10Slide11Notes,
    aula10Slide12Notes,
    aula10Slide13Notes,
    aula10Slide14Notes,
    aula10Slide15Notes,
    aula10Slide16Notes,
  ];

  const lesson10Titles = [
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
  ];

  const lesson11Slides = [
    <Aula11_Slide01_Opening key="l11-1" />,
    <Slide02_Challenge key="l11-2" />,
    <Slide03_Planning key="l11-3" />,
    <Slide04_Equipment key="l11-4" />,
    <Slide05_Connections key="l11-5" />,
    <Slide06_Cables key="l11-6" />,
    <Slide07_PowerSequence key="l11-7" />,
    <Slide08_FirstChannel key="l11-8" />,
    <Slide09_Checklist key="l11-9" />,
    <Slide10_CommonProblems key="l11-10" />,
    <Slide11_Flowchart key="l11-11" />,
    <Aula11_Slide12_Simulator key="l11-12" />,
    <Aula11_Slide13_Challenge key="l11-13" />,
    <Aula11_Slide14_Quiz key="l11-14" />,
    <Aula11_Slide15_Review key="l11-15" />,
    <Aula11_Slide16_Closing key="l11-16" />,
  ];

  const lesson11Notes = [
    aula11Slide01Notes,
    aula11Slide02Notes,
    aula11Slide03Notes,
    aula11Slide04Notes,
    aula11Slide05Notes,
    aula11Slide06Notes,
    aula11Slide07Notes,
    aula11Slide08Notes,
    aula11Slide09Notes,
    aula11Slide10Notes,
    aula11Slide11Notes,
    aula11Slide12Notes,
    aula11Slide13Notes,
    aula11Slide14Notes,
    aula11Slide15Notes,
    aula11Slide16Notes,
  ];

  const lesson11Titles = [
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
  ];

  const lesson12Slides = [
    <Aula12_Slide01_Opening key="l12-1" />,
    <Slide02_Evolution key="l12-2" />,
    <Slide03_ScenarioChurch key="l12-3" />,
    <Slide04_ScenarioPodcast key="l12-4" />,
    <Slide05_ScenarioAuditorium key="l12-5" />,
    <Slide06_NoSound key="l12-6" />,
    <Slide07_PublicArrived key="l12-7" />,
    <Slide08_FullSimulator key="l12-8" />,
    <Slide09_ErrorHunt key="l12-9" />,
    <Aula12_Slide10_FinalQuiz key="l12-10" />,
    <Slide11_FinalMission key="l12-11" />,
    <Slide12_ReviewFlow key="l12-12" />,
    <Slide13_GoldenRules key="l12-13" />,
    <Slide14_ContinueJourney key="l12-14" />,
    <Slide15_Certificate key="l12-15" />,
    <Aula12_Slide16_Closing key="l12-16" />,
  ];

  const lesson12Notes = [
    aula12Slide01Notes,
    aula12Slide02Notes,
    aula12Slide03Notes,
    aula12Slide04Notes,
    aula12Slide05Notes,
    aula12Slide06Notes,
    aula12Slide07Notes,
    aula12Slide08Notes,
    aula12Slide09Notes,
    aula12Slide10Notes,
    aula12Slide11Notes,
    aula12Slide12Notes,
    aula12Slide13Notes,
    aula12Slide14Notes,
    aula12Slide15Notes,
    aula12Slide16Notes,
  ];

  const lesson12Titles = [
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
  ];

  const handlePresenterMode = () => {
    const url = window.location.origin + window.location.pathname + `?mode=presentation&lesson=${currentLesson}&slide=${currentSlide}`;
    window.open(url, 'presentation-window', 'width=1280,height=720');
    setPresenterMode(true);
  };

  const handleClosePresenter = () => {
    sendMessage({ type: 'CLOSE', lesson: currentLesson, slide: currentSlide });
    setPresenterMode(false);
  };

  const slidesMap: Record<number, React.ReactNode[]> = {
    1: lesson1Slides,
    2: lesson2Slides,
    3: lesson3Slides,
    4: lesson4Slides,
    5: lesson5Slides,
    6: lesson6Slides,
    7: lesson7Slides,
    8: lesson8Slides,
    9: lesson9Slides,
    10: lesson10Slides,
    11: lesson11Slides,
    12: lesson12Slides,
  };
  const notesMap: Record<number, typeof lesson1Notes> = {
    1: lesson1Notes,
    2: lesson2Notes,
    3: lesson3Notes,
    4: lesson4Notes,
    5: lesson5Notes,
    6: lesson6Notes,
    7: lesson7Notes,
    8: lesson8Notes,
    9: lesson9Notes,
    10: lesson10Notes,
    11: lesson11Notes,
    12: lesson12Notes,
  };
  const titlesMap: Record<number, string[]> = {
    1: lesson1Titles,
    2: lesson2Titles,
    3: lesson3Titles,
    4: lesson4Titles,
    5: lesson5Titles,
    6: lesson6Titles,
    7: lesson7Titles,
    8: lesson8Titles,
    9: lesson9Titles,
    10: lesson10Titles,
    11: lesson11Titles,
    12: lesson12Titles,
  };

  const activeSlides = slidesMap[currentLesson];
  const activeNotes = notesMap[currentLesson];
  const activeTitles = titlesMap[currentLesson];

  // LessonSelector customizado que só mostra aulas liberadas
  const handleSelectLeson = (lesson: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12) => {
    handleLessonChange(lesson as any);
  };

  const LessonSelectorComAutenticacao = () => {
    return (
      <div className="min-h-screen w-full p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Header com usuário e logout */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-6 left-6 right-6 max-w-7xl mx-auto z-50 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-blue-400" />
            <span className="text-white font-semibold text-sm md:text-base">{usuarioAtual?.nome}</span>
            {isAdmin && (
              <div className="px-2 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                <span className="text-xs font-bold text-purple-400 flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Admin
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-3">
            {isAdmin && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onAbrirAdmin}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-sm hover:from-purple-500 hover:to-pink-400 transition-all"
              >
                <Shield className="w-4 h-4 inline mr-2" />
                Painel Admin
              </motion.button>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { logout(); onSairLogin(); }}
              className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 font-bold text-sm hover:bg-red-500/20 transition-all"
            >
              <LogOut className="w-4 h-4 inline mr-2" />
              Sair
            </motion.button>
          </div>
        </motion.div>

        {/* Conteúdo Principal */}
        <div className="mt-20">
          <LessonSelector onSelect={handleSelectLeson} filtroAulas={podeAcesar} />
        </div>
      </div>
    );
  };

  return presenterMode ? (
    <PresenterView
      currentSlide={currentSlide}
      onSlideChange={setCurrentSlide}
      currentLesson={currentLesson}
      onLessonChange={handleLessonChange}
      slideNotes={activeNotes}
      slideTitles={activeTitles}
      onClose={handleClosePresenter}
    >
      {activeSlides}
    </PresenterView>
  ) : currentLesson === 0 ? (
    <LessonSelectorComAutenticacao />
  ) : (
    <PresentationLayout
      currentSlide={currentSlide}
      onSlideChange={setCurrentSlide}
      currentLesson={currentLesson}
      onLessonChange={handleLessonChange}
      slideNotes={activeNotes}
      slideTitles={activeTitles}
      onPresenterMode={handlePresenterMode}
    >
      {activeSlides}
    </PresentationLayout>
  );
};
