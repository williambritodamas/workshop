import type { PresenterNote } from '../../../types/presentation';

export const slide01Notes: PresenterNote = {
  explanation: 'Abertura da Aula 8 — Compressão. Explique que o compressor é uma ferramenta essencial, mas muitas vezes mal compreendida. O foco é controlar a dinâmica, não aumentar o volume.',
  practicalExamples: ['Mostre um compressor em uma mesa digital real.', 'Toque um áudio sem e com compressão.'],
  audienceQuestions: ['Alguém já usou um compressor antes? Sabe o que ele faz?', 'O que vocês acham que significa "comprimir" o som?'],
  curiosities: ['O compressor foi inventado nos anos 1930 para controlar transmissões de rádio.'],
};

export const slide02Notes: PresenterNote = {
  explanation: 'Apresente o problema: sons muito baixos e muito altos. A compressão resolve isso reduzindo os picos.',
  practicalExamples: ['Peça para alguém falar baixo e depois gritar.', 'Mostre como é desconfortável para quem ouve.'],
  audienceQuestions: ['Vocês já passaram por isso como operadores?', 'Como resolveriam esse problema?'],
  liveDemos: ['Use um microfone e alterne entre voz baixa e voz alta.'],
};

export const slide03Notes: PresenterNote = {
  explanation: 'Dinâmica é a diferença entre o som mais fraco e o mais forte. O compressor reduz essa diferença.',
  practicalExamples: ['Desenhe uma linha do tempo com picos e vales.', 'Compare com o trânsito: carros lentos e rápidos.'],
  audienceQuestions: ['O que acontece quando a dinâmica é muito grande?', 'E quando é muito pequena?'],
};

export const slide04Notes: PresenterNote = {
  explanation: 'O compressor reduz automaticamente os picos mais altos, aproximando-os do nível médio.',
  practicalExamples: ['Mostre ondas antes e depois da compressão.', 'Use a analogia do elevador com limite de pessoas.'],
  audienceQuestions: ['O que acontece se não usarmos compressão em uma voz muito dinâmica?', 'Qual a vantagem de um sinal mais equilibrado?'],
};

export const slide05Notes: PresenterNote = {
  explanation: 'Threshold é o ponto de partida. Abaixo dele, o som passa sem alteração. Acima dele, a compressão entra.',
  practicalExamples: ['Mostre uma linha em um gráfico.', 'Use a analogia do limite de velocidade.'],
  audienceQuestions: ['O que acontece com o sinal abaixo do Threshold?', 'E acima?'],
  liveDemos: ['Ajuste o Threshold ao vivo e mostre o momento exato em que a compressão começa.'],
};

export const slide06Notes: PresenterNote = {
  explanation: 'Ratio define o quanto o sinal será comprimido acima do Threshold. Quanto maior, mais forte a compressão.',
  practicalExamples: ['Mostre visualmente cada ratio.', 'Demonstre 2:1 vs 8:1 em uma voz.'],
  audienceQuestions: ['Qual a diferença entre 2:1 e ∞:1?', 'Quando usar cada um?'],
  liveDemos: ['Altere o Ratio ao vivo e mostre a diferença no Gain Reduction.'],
};

export const slide07Notes: PresenterNote = {
  explanation: 'Attack é a velocidade de resposta. Release é o tempo de recuperação. Ajustes errados podem soar não naturais.',
  practicalExamples: ['Use a analogia do freio e acelerador.', 'Demonstre Attack rápido vs lento em uma percussão.'],
  audienceQuestions: ['O que acontece com um som percussivo com Attack lento?', 'E com Release muito curto?'],
  liveDemos: ['Bata palmas e ajuste Attack/Release para mostrar o efeito.'],
};

export const slide08Notes: PresenterNote = {
  explanation: 'Make-up Gain compensa a redução causada pela compressão. Primeiro controlamos, depois compensamos.',
  practicalExamples: ['Mostre antes/depois da compressão e depois do make-up.', 'Compare com a receita: primeiro temperar, depois provar.'],
  audienceQuestions: ['Por que não podemos simplesmente aumentar o volume antes da compressão?'],
};

export const slide09Notes: PresenterNote = {
  explanation: 'Limiter é um compressor extremo. Funciona como uma parede que o sinal não consegue ultrapassar.',
  practicalExamples: ['Mostre a onda sendo cortada pelo limiter.', 'Use a analogia da catraca.'],
  audienceQuestions: ['Quando o Limiter é essencial?', 'Qual a diferença entre comprimir e limitar?'],
  curiosities: ['Limiters são usados em masterização para evitar que a música ultrapasse 0 dB.'],
};

export const slide10Notes: PresenterNote = {
  explanation: 'A compressão é útil em muitas situações. Cada aplicação pede ajustes diferentes.',
  practicalExamples: ['Voz em palestras: compressão suave.', 'Podcast: compressão moderada.', 'Cantores: depende do estilo.'],
  audienceQuestions: ['Em quais situações vocês usariam compressão?', 'E onde evitariam?'],
};

export const slide11Notes: PresenterNote = {
  explanation: 'Compressão excessiva tira a vida do som. O som fica "amassado", sem dinâmica.',
  practicalExamples: ['Toque um áudio com compressão excessiva.', 'Mostre como a música perde emoção.'],
  audienceQuestions: ['Vocês já ouviram uma música "amassada"?', 'Como identificar compressão excessiva?'],
};

export const slide12Notes: PresenterNote = {
  explanation: 'Simulador interativo para experimentar todos os parâmetros. Deixe os participantes testarem livremente.',
  practicalExamples: ['Peça para cada um ajustar e compartilhar o resultado.', 'Desafie: encontre uma compressão equilibrada.'],
  audienceQuestions: ['Qual parâmetro teve mais impacto?', 'Conseguiram evitar a compressão excessiva?'],
};

export const slide13Notes: PresenterNote = {
  explanation: 'Demonstração prática ao vivo com microfone. Siga o checklist e discuta cada etapa.',
  practicalExamples: ['Peça um voluntário.', 'Siga cada passo do checklist.', 'Pergunte o que mudou em cada etapa.'],
  audienceQuestions: ['O que mudou quando aplicamos compressão?', 'E quando desligamos?'],
  liveDemos: ['Todas as etapas devem ser feitas ao vivo.'],
};

export const slide14Notes: PresenterNote = {
  explanation: 'Quiz para fixar os conceitos da aula.',
  practicalExamples: ['Leia cada pergunta e incentive discussão.', 'Explique cada resposta com exemplos.'],
  audienceQuestions: ['Qual pergunta foi mais desafiadora?', 'Ainda tem dúvidas?'],
};

export const slide15Notes: PresenterNote = {
  explanation: 'Recapitulação dos 7 pilares da compressão.',
  practicalExamples: ['Peça para explicarem cada item com as próprias palavras.', 'Faça perguntas rápidas.'],
  audienceQuestions: ['Qual conceito foi mais importante?', 'O que vão aplicar na prática?'],
};

export const slide16Notes: PresenterNote = {
  explanation: 'Encerramento com gancho para a próxima aula: Fase e Polaridade.',
  practicalExamples: ['Agradeça a participação.', 'Abra para perguntas finais.'],
  audienceQuestions: ['O que esperam aprender sobre Fase e Polaridade?'],
};
