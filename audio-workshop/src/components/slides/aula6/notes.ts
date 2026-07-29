import type { PresenterNote } from '../../../types/presentation';

export const slide01Notes: PresenterNote = {
  explanation: 'Aula 06 — Gain, Volume e Clip. Esta é uma das aulas mais importantes do workshop. O objetivo é fazer qualquer pessoa entender definitivamente a diferença entre Gain, Volume, Fader, Clip e Headroom.',
  practicalExamples: ['Mostre uma mesa de som real e aponte os controles de Gain e Fader.', 'Pergunte quem já teve dúvida sobre a diferença entre Gain e Volume.'],
  audienceQuestions: ['Quantos de vocês já aumentaram o Fader achando que estava resolvendo o problema?', 'Alguém já viu o LED vermelho acender e não soube o que fazer?'],
};

export const slide02Notes: PresenterNote = {
  explanation: 'Crie suspense. Mostre a pergunta e fique em silêncio por alguns segundos. Depois revele a resposta com convicção. Essa pergunta é a dúvida mais comum entre iniciantes.',
  practicalExamples: ['Faça a pergunta e espere as reações.', 'Peça para quem acha que é a mesma coisa levantar a mão.'],
  audienceQuestions: ['Alguém aqui sempre achou que Gain e Volume eram a mesma coisa?', 'O que você aprendeu na prática sobre isso?'],
};

export const slide03Notes: PresenterNote = {
  explanation: 'Use a analogia do celular para mostrar que o problema está na captação, não no volume. A gravação no celular é algo que todos já experimentaram — a analogia é poderosa porque é universal.',
  practicalExamples: ['Simule gravar um áudio com o celular longe da boca e depois aumentar o volume.', 'Mostre como o ruído de fundo também aumenta junto.'],
  audienceQuestions: ['Quantos de vocês já gravaram um áudio no celular e depois tiveram que aumentar o volume?', 'O que aconteceu com o ruído de fundo?'],
  liveDemos: ['Grave um áudio no celular baixo e outro com o microfone próximo. Mostre a diferença.'],
};

export const slide04Notes: PresenterNote = {
  explanation: 'Gain atua na entrada do sinal. É o pré-amplificador que define a sensibilidade do microfone. Um Gain bem ajustado capta o som com qualidade sem distorcer.',
  practicalExamples: ['Aponte o controle de Gain em uma mesa real.', 'Mostre como o som fica fraco com Gain baixo e distorcido com Gain alto.'],
  audienceQuestions: ['O que acontece se o Gain estiver muito baixo?', 'E se estiver muito alto?'],
  liveDemos: ['Ajuste o Gain ao vivo em um microfone real, mostrando os LEDs.'],
  curiosities: ['Pré-amplificadores valiosos podem custar milhares de dólares — um bom Gain faz toda diferença.'],
};

export const slide05Notes: PresenterNote = {
  explanation: 'Fader controla a saída do canal. É o volume final que vai para a mixagem. O Fader não resolve problemas de captação — ele apenas controla o quanto do sinal já processado é enviado.',
  practicalExamples: ['Aponte o Fader em uma mesa real.', 'Mostre a diferença: Gain baixo + Fader alto = ruído; Gain correto + Fader ajustado = som limpo.'],
  audienceQuestions: ['Se o som está baixo, devemos aumentar o Gain ou o Fader?', 'Qual a consequência de aumentar apenas o Fader com Gain baixo?'],
  liveDemos: ['Demonstre a diferença entre aumentar Gain vs Fader em tempo real.'],
};

export const slide06Notes: PresenterNote = {
  explanation: 'A tela dividida reforça visualmente a diferença. Gain = entrada, Fader = saída. Um erro comum é confundir os dois. Mostre como cada um age em pontos diferentes do fluxo.',
  practicalExamples: ['Use a analogia da caixa d\'água: Gain = torneira de entrada, Fader = torneira de saída.', 'Toque um áudio e alterne entre ajustar Gain e Fader.'],
  audienceQuestions: ['Qual controle resolve o problema de um microfone muito baixo?', 'O que acontece se usarmos apenas o Fader para tudo?'],
  liveDemos: ['Mostre um canal com Gain baixo e Fader alto vs Gain correto e Fader médio.'],
};

export const slide07Notes: PresenterNote = {
  explanation: 'Clip é a distorção que ocorre quando o sinal ultrapassa o limite máximo. A forma de onda é "achatada" no topo. Clip não significa som alto — significa sinal saturado.',
  practicalExamples: ['Mostre a forma de onda normal vs clipada.', 'Toque um áudio clipado para que todos ouçam a distorção.'],
  audienceQuestions: ['Alguém já ouviu um som distorcido em um evento?', 'O que vocês acham que causa essa distorção?'],
  liveDemos: ['Force o clip em um canal e mostre o LED vermelho + o som distorcido.'],
  curiosities: ['Em sistemas digitais, o clip soa muito pior que em analógicos. O clip digital é agressivo e instantâneo.'],
};

export const slide08Notes: PresenterNote = {
  explanation: 'Mostre os efeitos do clip lado a lado: som limpo vs som clipado. A comparação visual da forma de onda ajuda a entender o que acontece com o sinal. Reforce que clip pode danificar alto-falantes.',
  practicalExamples: ['Toque uma música com e sem clip para comparação.', 'Mostre em um osciloscópio ou software de áudio a forma de onda.'],
  audienceQuestions: ['Vocês conseguem perceber a diferença entre o som limpo e o clipado?', 'Em quais situações o clip é mais prejudicial?'],
  curiosities: ['Em festivais, sistemas de proteção (limiters) são usados para evitar clip e danificar caixas de som.'],
};

export const slide09Notes: PresenterNote = {
  explanation: 'Headroom é a margem de segurança. Sempre deixe espaço antes do limite. A analogia do copo d\'água e da estrada com limite de velocidade ajudam a fixar o conceito.',
  practicalExamples: ['Use um copo real para demonstrar: cheio até a borda vs com espaço.', 'Mostre que headroom permite picos sem clipar.'],
  audienceQuestions: ['Quanto de headroom vocês acham seguro deixar?', 'O que acontece se não deixarmos headroom?'],
  liveDemos: ['Cante ou fale próximo ao microfone variando a intensidade para mostrar a importância do headroom.'],
};

export const slide10Notes: PresenterNote = {
  explanation: 'Demonstração passo a passo do procedimento correto para ajustar um canal. Cada etapa é um passo lógico que prepara a próxima. Siga a ordem rigorosamente.',
  practicalExamples: ['Siga os passos em uma mesa real.', 'Repita o procedimento com diferentes fontes (voz, violão, playback).'],
  audienceQuestions: ['Por que o Fader deve estar abaixado antes de ajustar o Gain?', 'Qual o risco de ajustar o Gain com a pessoa em silêncio?'],
  liveDemos: ['Faça o procedimento completo ao vivo com um microfone real.'],
};

export const slide11Notes: PresenterNote = {
  explanation: 'Demonstração prática interativa. Convide participantes para testar. Cada variação (voz baixa, voz alta, clip, correção) ensina uma lição diferente.',
  practicalExamples: ['Peça para alguém falar baixo e ajuste o Gain.', 'Depois peça para falar alto e mostre como o Gain precisa ser reduzido.', 'Force o clip e depois corrija.'],
  audienceQuestions: ['O que vocês perceberam quando a pessoa falou mais alto?', 'O que mudou no LED?'],
  liveDemos: ['Todas as demonstrações devem ser feitas ao vivo com microfone real.'],
};

export const slide12Notes: PresenterNote = {
  explanation: 'Erros comuns que todo iniciante comete. Cada erro tem uma explicação clara do porquê é prejudicial. Use estes cartões para gerar discussão.',
  practicalExamples: ['Pergunte quem já cometeu cada erro.', 'Mostre a consequência de cada erro na prática.'],
  audienceQuestions: ['Qual desses erros vocês já cometeram?', 'Qual erro vocês acham mais grave?'],
};

export const slide13Notes: PresenterNote = {
  explanation: 'Simulador interativo de Gain. Os participantes podem experimentar livremente sem medo de errar. Explore diferentes combinações de Gain e Fader.',
  practicalExamples: ['Deixe cada participante testar o simulador.', 'Proponha desafios: deixe o sinal ideal, force o clip, etc.'],
  audienceQuestions: ['Conseguiram perceber a diferença entre Gain e Fader?', 'Qual combinação pareceu ideal?'],
};

export const slide14Notes: PresenterNote = {
  explanation: 'Quiz interativo para fixar os conceitos da aula. As perguntas cobrem Gain, Fader, Clip e Headroom. Incentive discussão após cada resposta.',
  practicalExamples: ['Leia cada pergunta em voz alta.', 'Dê tempo para pensar.', 'Explique a resposta com exemplos práticos.'],
  audienceQuestions: ['Qual pergunta foi mais difícil?', 'Tem algum conceito que ainda não ficou claro?'],
};

export const slide15Notes: PresenterNote = {
  explanation: 'Recapitulação dos 6 conceitos principais. Cada cartão é um resumo direto. Use para consolidar o aprendizado antes de encerrar.',
  practicalExamples: ['Peça para os participantes resumirem cada ponto com suas próprias palavras.', 'Faça uma rodada de perguntas rápidas.'],
  audienceQuestions: ['Qual conceito foi mais importante para vocês?', 'O que ainda não ficou claro?'],
};

export const slide16Notes: PresenterNote = {
  explanation: 'Encerramento com gancho para a próxima aula (Equalização). Reforce a frase final: "Quem controla bem o ganho resolve metade dos problemas de um sistema de áudio."',
  practicalExamples: ['Agradeça a participação.', 'Distribua material de apoio.', 'Abra espaço para perguntas finais.'],
  audienceQuestions: ['O que vocês esperam aprender na próxima aula sobre equalização?', 'Alguém vai colocar em prática o que aprendeu hoje?'],
};
