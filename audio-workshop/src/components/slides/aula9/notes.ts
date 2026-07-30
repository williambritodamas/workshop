import type { PresenterNote } from '../../../types/presentation';

export const slide01Notes: PresenterNote = {
  explanation: 'Abertura da Aula 9 — Fase e Polaridade. Explique que fase é um conceito contraintuitivo: muitas pessoas usam o botão Ø sem entender o que ele realmente faz. Diferente de volume, EQ ou compressão, fase não é algo que se "ouve" diretamente, mas sente-se o efeito.',
  practicalExamples: ['Toque um áudio com cancelamento de fase sem explicar, depois revele o que aconteceu.', 'Mostre dois alto-falantes um de frente para o outro com o mesmo sinal.'],
  audienceQuestions: ['Alguém já usou o botão Ø e não percebeu diferença?', 'O que vocês acham que significa "fase" no áudio?', 'Já tiveram um som que sumia quando a pessoa virava a cabeça?'],
  liveDemos: ['Ligue dois microfones próximos e mova um deles enquanto alguém fala.'],
};

export const slide02Notes: PresenterNote = {
  explanation: 'Analogia do carro sendo empurrado. Duas pessoas empurrando na mesma direção = carro se move (soma construtiva). Direções opostas = carro quase não se move (cancelamento). Use isso para introduzir o conceito de soma e cancelamento de ondas.',
  practicalExamples: ['Peça dois voluntários para empurrarem algo juntos e depois em direções opostas.', 'Compare com um cabo de guerra.'],
  audienceQuestions: ['O que acontece quando duas forças atuam na mesma direção?', 'E em direções opostas?', 'Como isso se aplica ao som?'],
  liveDemos: ['Dois alunos empurram uma mesa juntos e depois um contra o outro.'],
};

export const slide03Notes: PresenterNote = {
  explanation: 'Explicação visual da onda senoidal. Mostre crista (pico positivo) e vale (pico negativo). A fase é a posição da onda no tempo. Reforce que o som viaja como ondas de compressão e rarefação.',
  practicalExamples: ['Desenhe uma onda no ar com a mão.', 'Mostre a onda se movendo com a WaveAnimation.'],
  audienceQuestions: ['O que é uma crista? E um vale?', 'Como o som se propaga no ar?', 'O que determina a frequência de uma onda?'],
  curiosities: ['O ouvido humano detecta fase? Sim, mas principalmente através da diferença entre os dois ouvidos (localização sonora).'],
};

export const slide04Notes: PresenterNote = {
  explanation: 'Duas ondas alinhadas (em fase) = soma construtiva. A onda resultante tem o dobro da amplitude. Mostre usando o WaveOverlay com phaseOffset=0. Explique que isso é bom e desejável na maioria dos casos.',
  practicalExamples: ['Cantar todos juntos a mesma nota — o som fica mais forte.', 'Mostre dois alto-falantes tocando o mesmo som juntos.'],
  audienceQuestions: ['O que acontece com o volume quando duas ondas se somam?', 'Isso é bom ou ruim?', 'Onde isso pode ser útil?'],
  liveDemos: ['Peça para a turma cantar junto e depois um de cada vez para sentir a diferença.'],
};

export const slide05Notes: PresenterNote = {
  explanation: 'Ondas defasadas = cancelamento. Em 180° (opostas), o cancelamento é total. Mostre a corda como analogia visual. Use o CancellationVisualizer para demonstrar como o desalinhamento progressivo reduz a amplitude.',
  practicalExamples: ['Corda: duas pessoas balançando em sincronia vs opostas.', 'Mostre o cancelamento visual com o componente.'],
  audienceQuestions: ['O que acontece quando duas ondas estão em oposição?', 'Consegue imaginar uma situação onde isso ocorre?', 'Como evitar o cancelamento?'],
  liveDemos: ['Use dois alto-falantes, inverta a polaridade de um e mostre a diferença.'],
};

export const slide06Notes: PresenterNote = {
  explanation: 'Polaridade é a inversão elétrica do sinal (positivo vira negativo). Mostre o botão Ø (Phase Reverse) em uma mesa de som. Diferente de fase, que é atraso temporal, polaridade é uma inversão instantânea.',
  practicalExamples: ['Mostre o botão Ø fisicamente em uma mesa digital.', 'Toque um áudio com polaridade invertida e mostre a diferença.'],
  audienceQuestions: ['O que o botão Ø faz?', 'Quando usar o botão de polaridade?', 'Qual a diferença entre virar o cabo e usar o botão?'],
  liveDemos: ['Aperte o botão Ø ao vivo enquanto alguém fala em dois microfones próximos.'],
  curiosities: ['O símbolo Ø vem do círculo com traço, representando o "ponto morto" ou "zero" — indicando inversão de fase.'],
};

export const slide07Notes: PresenterNote = {
  explanation: 'Diferença crucial: Fase é uma questão de TEMPO (atraso entre ondas), Polaridade é uma questão de SINAL ELÉTRICO (inversão + por -). Essa confusão é uma das mais comuns no áudio profissional.',
  practicalExamples: ['Desenhe uma linha do tempo vs inversão.', 'Mostre na prática: atrase um microfone vs inverta a polaridade.'],
  audienceQuestions: ['Qual a diferença entre um atraso e uma inversão?', 'Os dois produzem cancelamento?', 'Como identificar qual é o problema?'],
  liveDemos: ['Demonstre ambos os casos com microfones ao vivo.'],
};

export const slide08Notes: PresenterNote = {
  explanation: 'Ilustração prática: uma pessoa com dois microfones próximos. A diferença de distância cria defasagem temporal. Quanto maior a distância, maior o cancelamento em certas frequências.',
  practicalExamples: ['Mostre um diagrama no quadro.', 'Varie a distância dos microfones e mostre o efeito.'],
  audienceQuestions: ['Por que dois microfones próximos podem causar problema?', 'Qual microfone está "certo"?', 'Isso importa para o som final?'],
  liveDemos: ['Use o MicrophoneDistanceDemo interativo.'],
};

export const slide09Notes: PresenterNote = {
  explanation: 'Problemas reais que acontecem em eventos ao vivo. Esses cenários são muito comuns e é essencial que os participantes saibam reconhecer.',
  practicalExamples: ['Compartilhe histórias de eventos reais.', 'Mostre vídeos ou áudios de exemplos reais.'],
  audienceQuestions: ['Já passaram por alguma dessas situações?', 'Como resolveriam cada caso?', 'Qual desses cenários é mais comum?'],
};

export const slide10Notes: PresenterNote = {
  explanation: 'Demonstração interativa com o PhaseAlignmentSimulator. Deixe os participantes controlarem o desalinhamento e ouvirem/verem o efeito em tempo real.',
  practicalExamples: ['Peça para cada participante ajustar o slider.', 'Mostre os pontos críticos: 0°, 90°, 180°, 270°.'],
  audienceQuestions: ['Em qual ângulo o cancelamento é total?', 'O que acontece em 270°?', 'Consegue ouvir a diferença?'],
  liveDemos: ['Toda a demonstração é interativa.'],
};

export const slide11Notes: PresenterNote = {
  explanation: 'Sintomas de problemas de fase. Esses sinais ajudam a identificar rapidamente quando algo está errado. Reforce que o ouvido é a melhor ferramenta de diagnóstico.',
  practicalExamples: ['Toque um áudio com cada sintoma.', 'Mostre como o som "some" quando a pessoa se move.'],
  audienceQuestions: ['Já ouviram um som "oco"?', 'Como identificar cancelamento de fase sem equipamento?', 'Esses sintomas podem ser confundidos com EQ?'],
};

export const slide12Notes: PresenterNote = {
  explanation: 'Dicas práticas para evitar problemas de fase. Posicionamento correto resolve a maioria dos casos. A regra 3:1 é uma diretriz simples e eficaz.',
  practicalExamples: ['Mostre o posicionamento correto com microfones reais.', 'Meça a distância entre microfones seguindo a regra 3:1.'],
  audienceQuestions: ['Qual a regra para posicionar microfones?', 'Quando usar o botão Ø?', 'O que fazer quando não dá para reposicionar?'],
  liveDemos: ['Posicione dois microfones seguindo a regra 3:1 ao vivo.'],
};

export const slide13Notes: PresenterNote = {
  explanation: 'Prática com dois microfones. Siga o checklist. O objetivo é que os participantes vejam e ouçam o efeito da fase na prática.',
  practicalExamples: ['Siga cada passo do checklist.', 'Compare as diferentes configurações.', 'Pergunte o que mudou em cada etapa.'],
  audienceQuestions: ['O que mudou quando movemos o microfone?', 'O botão Ø ajudou ou piorou?', 'Qual configuração soou melhor?'],
  liveDemos: ['Todas as etapas devem ser feitas ao vivo.'],
};

export const slide14Notes: PresenterNote = {
  explanation: 'Quiz para fixar os conceitos da aula. Reforce que não tem problema errar — o objetivo é aprender discutindo cada resposta.',
  practicalExamples: ['Leia cada pergunta e incentive discussão.', 'Explique cada resposta.'],
  audienceQuestions: ['Qual pergunta foi mais desafiadora?', 'Ainda tem dúvidas sobre fase e polaridade?'],
};

export const slide15Notes: PresenterNote = {
  explanation: 'Recapitulação dos conceitos principais da aula. Use as cartas para revisar rapidamente cada tópico.',
  practicalExamples: ['Peça para explicarem cada conceito com as próprias palavras.', 'Faça perguntas rápidas sobre cada item.'],
  audienceQuestions: ['Qual conceito foi mais importante?', 'O que vão aplicar na prática?', 'O que ainda não está claro?'],
};

export const slide16Notes: PresenterNote = {
  explanation: 'Encerramento com gancho para a próxima aula: Microfonia (feedback). Fase e polaridade estão diretamente relacionados ao feedback em eventos ao vivo.',
  practicalExamples: ['Agradeça a participação.', 'Abra para perguntas finais.', 'Introduza rapidamente o tema da próxima aula.'],
  audienceQuestions: ['O que esperam aprender sobre microfonia?', 'Já tiveram problemas com microfonia em eventos?'],
};
