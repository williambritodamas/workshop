import type { PresenterNote } from '../../../types/presentation';

export const slide01Notes: PresenterNote = {
  explanation: 'Abertura da Aula 11 — Montando um Sistema de Áudio do Zero. Apresente o objetivo: transformar uma pilha de equipamentos em um sistema funcional. Destaque que montar bem é metade do sucesso.',
  practicalExamples: ['Mostre uma foto de um sistema bem montado vs um mal montado.', 'Pergunte quem já enfrentou problemas por má organização.'],
  audienceQuestions: ['Alguém já montou um sistema de som sozinho?', 'Qual foi a maior dificuldade?'],
  curiosities: ['Grandes eventos de som ao vivo levam até 12 horas para montar o sistema completo.'],
};

export const slide02Notes: PresenterNote = {
  explanation: 'Apresente o contraste entre um palco vazio e uma pilha de equipamentos. Explique que o caos inicial é normal e que o processo de montagem organiza esse caos.',
  practicalExamples: ['Mostre os ícones um a um explicando a função de cada equipamento.', 'Desafie: em 10 segundos, quantos equipamentos você identifica?'],
  audienceQuestions: ['Qual desses equipamentos vocês consideram mais importante?', 'Qual costuma ser subestimado?'],
  liveDemos: ['Aponte cada equipamento em uma mesa real e explique brevemente.'],
};

export const slide03Notes: PresenterNote = {
  explanation: 'O planejamento é a etapa mais importante. Explique que a posição de cada equipamento afeta o resultado final. Onde colocar a mesa? Onde posicionar as caixas?',
  practicalExamples: ['Desenhe um retângulo e peça para posicionarem os equipamentos.', 'Mostre erros comuns: caixas atrás do microfone, mesa longe demais.'],
  audienceQuestions: ['Onde vocês colocariam a mesa de som em uma sala retangular?', 'Por que as caixas não podem ficar atrás dos microfones?'],
  curiosities: ['Em teatros, a posição da mesa de som é chamada de "FOH" (Front of House).'],
};

export const slide04Notes: PresenterNote = {
  explanation: 'Cada equipamento tem uma função específica na cadeia de áudio. Apresente cada um individualmente, destacando sua função essencial.',
  practicalExamples: ['Microfone: capta o som. Mixer: gerencia os sinais. Caixa ativa: amplifica e projeta o som.', 'Peça para identificarem qual equipamento faz o quê.'],
  audienceQuestions: ['Qual a diferença entre caixa ativa e passiva?', 'Para que serve um DI box?'],
  curiosities: ['O DI box foi inventado para conectar guitarras elétricas diretamente na mesa de som.'],
};

export const slide05Notes: PresenterNote = {
  explanation: 'A ordem da cadeia de áudio é sagrada. Microfone → Cabo → Mesa → Saída → Caixa. Inverter ou pular etapas causa problemas.',
  practicalExamples: ['Mostre o SystemBuilder e peça para montar a ordem correta.', 'Explique o que acontece se você ligar o microfone direto na caixa.'],
  audienceQuestions: ['O que acontece se o sinal for interrompido em algum ponto?', 'Qual o cabo mais importante da cadeia?'],
  liveDemos: ['Monte a cadeia ao vivo, mostrando cada conexão.'],
};

export const slide06Notes: PresenterNote = {
  explanation: 'Cabos organizados não são só estética: são segurança e funcionalidade. Cabos mal organizados causam tropeços, ruídos e desconexões.',
  practicalExamples: ['Mostre o antes (bagunçado) e depois (organizado) no CableOrganizer.', 'Dica: use braçadeiras e identifique cada cabo com etiquetas.'],
  audienceQuestions: ['Quantos cabos vocês acham que têm em um sistema simples de 2 microfones?', 'Já viram alguém tropeçar em um cabo?'],
  curiosities: ['Em grandes produções, cabos são enrolados com a técnica "over-under" para evitar nós e danos internos.'],
};

export const slide07Notes: PresenterNote = {
  explanation: 'A sequência de ligar e desligar equipamentos protege tanto o sistema quanto a audição. Ligar amplificadores por último evita o "pop" mortal nas caixas.',
  practicalExamples: ['Demonstre o StartupSequence no modo startup.', 'Depois mostre o modo shutdown, explicando por que inverter a ordem.'],
  audienceQuestions: ['O que acontece se você ligar as caixas antes da mesa?', 'Por que desligar as caixas primeiro?'],
  liveDemos: ['Simule o pop de inicialização com o volume alto.'],
  curiosities: ['O "pop" de inicialização já danificou milhares de tweeters (drivers de agudo) em todo o mundo.'],
};

export const slide08Notes: PresenterNote = {
  explanation: 'O primeiro canal é o mais importante. Mostre cada passo: conectar o microfone, ajustar o gain, verificar LEDs, abrir o fader, testar o EQ e confirmar o volume.',
  practicalExamples: ['Siga cada etapa em uma mesa real ou no simulador.', 'Mostre como o LED de -20dB, 0dB e PEAK indicam o nível correto.'],
  audienceQuestions: ['Qual o nível ideal no LED da mesa?', 'O que fazer se o PEAK acender?'],
  liveDemos: ['Conecte um microfone e ajuste o canal do zero.'],
};

export const slide09Notes: PresenterNote = {
  explanation: 'O checklist final garante que nada foi esquecido. É a última chance de corrigir problemas antes do início do evento.',
  practicalExamples: ['Imprima o checklist e peça para seguirem item por item.', 'Simule um problema e mostre como o checklist ajuda a identificar.'],
  audienceQuestions: ['Qual item do checklist é mais negligenciado?', 'Já esqueceram de algo importante em um evento?'],
};

export const slide10Notes: PresenterNote = {
  explanation: 'Problemas comuns têm soluções simples se diagnosticados corretamente. Cada cartão representa um problema frequente com causas e soluções.',
  practicalExamples: ['Clique em "Sem som" e mostre as causas: cabo solto, canal mute, ganho baixo.', 'Feedback é o mais temido: explique causas e como resolver.'],
  audienceQuestions: ['Qual problema já aconteceu com vocês?', 'Como resolveram?'],
  liveDemos: ['Simule um canal mutado e peça para diagnosticarem.'],
};

export const slide11Notes: PresenterNote = {
  explanation: 'O fluxograma de troubleshooting guia o operador pelo diagnóstico passo a passo. Ideal para momentos de pressão.',
  practicalExamples: ['Siga o fluxograma com um problema real.', 'Mostre como perguntas binárias (sim/não) levam à solução rapidamente.'],
  audienceQuestions: ['Qual pergunta do fluxograma é mais importante?', 'Já usaram um fluxograma para resolver problemas?'],
  curiosities: ['Fluxogramas de troubleshooting são usados em aviação para emergências em voo.'],
};

export const slide12Notes: PresenterNote = {
  explanation: 'O InteractiveRack simula a montagem de um rack real. Os participantes devem organizar os equipamentos na ordem correta.',
  practicalExamples: ['Desafie: organize o rack no menor tempo possível.', 'Discuta por que o power conditioner vem primeiro.'],
  audienceQuestions: ['Qual a ordem correta dos equipamentos no rack?', 'Por que o amplificador costuma ficar na parte inferior?'],
  liveDemos: ['Deixe cada participante tentar montar o rack.'],
};

export const slide13Notes: PresenterNote = {
  explanation: 'Desafio prático: montar um sistema para uma palestra. Timer de 5 minutos. Objetivo é aplicar tudo o que foi aprendido na aula.',
  practicalExamples: ['2 microfones, 2 caixas, 1 mixer, notebook, cabos e stands.', 'Avalie: conexões corretas, cabos organizados, sequência de energia, som funcionando.'],
  audienceQuestions: ['Qual etapa foi mais desafiadora?', 'O que fariam diferente?'],
};

export const slide14Notes: PresenterNote = {
  explanation: 'Quiz para fixar os conceitos principais da aula. Cada pergunta aborda um tópico essencial da montagem de sistemas.',
  practicalExamples: ['Leia cada pergunta e discuta as alternativas.', 'Explique por que a resposta correta é a melhor prática.'],
  audienceQuestions: ['Qual pergunta foi mais fácil?', 'Ainda há dúvidas sobre algum tópico?'],
};

export const slide15Notes: PresenterNote = {
  explanation: 'Recapitulação dos 7 pilares da montagem de sistemas de áudio. Cada item resume uma etapa essencial do processo.',
  practicalExamples: ['Peça para cada um explicar um item com as próprias palavras.', 'Relacione cada item com um problema que ele evita.'],
  audienceQuestions: ['Qual pilar é mais importante na opinião de vocês?', 'Qual deles costuma ser negligenciado?'],
};

export const slide16Notes: PresenterNote = {
  explanation: 'Encerramento com gancho para o Desafio Final. Reforce a confiança adquirida e o valor de aprender procedimentos corretos.',
  practicalExamples: ['Agradeça a participação.', 'Abra para perguntas finais.', 'Anuncie o Desafio Final da próxima aula.'],
  audienceQuestions: ['O que mais gostaram na aula?', 'O que esperam do Desafio Final?'],
};
