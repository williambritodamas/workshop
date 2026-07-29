import type { PresenterNote } from '../../../types/presentation';

export const slide01Notes: PresenterNote = {
  explanation: 'Abertura da Aula 7 — Equalização. Explique que equalizar não é "melhorar" o som, mas sim adaptá-lo ao ambiente, à voz e aos instrumentos. O objetivo é treinar o ouvido, não decorar números.',
  practicalExamples: ['Mostre um equalizador gráfico em uma mesa digital real.', 'Toque uma música com equalização plana e outra equalizada para exemplificar.'],
  audienceQuestions: ['O que vocês entendem por equalização?', 'Alguém já usou um equalizador antes?'],
  curiosities: ['O primeiro equalizador gráfico foi inventado nos anos 1930 para ajustar salas de cinema.'],
};

export const slide02Notes: PresenterNote = {
  explanation: 'Pergunta provocativa para engajar. A resposta é sim — com equalização podemos mudar completamente a percepção do som sem trocar o microfone.',
  practicalExamples: ['Toque uma gravação e vá alterando o EQ em tempo real para mostrar a diferença.', 'Pergunte se alguém já precisou trocar de microfone por insatisfação com o som.'],
  audienceQuestions: ['O que vocês acham que a equalização faz?', 'Já tentaram resolver um problema de som trocando o microfone?'],
  liveDemos: ['Abra o EQ de um canal em uma mesa digital e mostre como ele altera o som ao vivo.'],
};

export const slide03Notes: PresenterNote = {
  explanation: 'Analogia da receita para mostrar que mais nem sempre significa melhor. Assim como sal demais estraga uma comida, graves ou agudos demais estragam o som.',
  practicalExamples: ['Pergunte sobre comida sem sal, salgada demais e no ponto certo.', 'Relacione cada cenário com uma situação de áudio.'],
  audienceQuestions: ['Qual foi a última vez que você exagerou no tempero de uma comida?', 'Como isso se aplica ao áudio?'],
};

export const slide04Notes: PresenterNote = {
  explanation: 'Os graves dão peso e corpo ao som. Sem eles, o som fica fino e sem presença. Use exemplos sonoros para demonstrar.',
  practicalExamples: ['Toque um bumbo com e sem graves.', 'Passe um som de trovão ou baixo elétrico.'],
  audienceQuestions: ['O que acontece quando removemos os graves de uma música?', 'Em que situações os graves atrapalham?'],
  liveDemos: ['Remova os graves de uma música tocando e pergunte o que mudou.'],
  curiosities: ['O órgão de tubos consegue produzir frequências tão graves que vibram o corpo inteiro.'],
};

export const slide05Notes: PresenterNote = {
  explanation: 'Os médios são a faixa mais importante para a fala humana. Uma boa equalização de médios garante clareza e inteligibilidade.',
  practicalExamples: ['Toque uma voz com e sem médios.', 'Mostre como um violão perde presença sem os médios.'],
  audienceQuestions: ['O que acontece com a voz quando tiramos os médios?', 'Em que tipo de conteúdo os médios são mais importantes?'],
  liveDemos: ['Fale ao microfone e vá removendo os médios gradualmente para mostrar a perda de clareza.'],
};

export const slide06Notes: PresenterNote = {
  explanation: 'Os agudos trazem brilho e definição. Mas em excesso, causam cansaço auditivo e assobios (sibilância).',
  practicalExamples: ['Toque pratos de bateria com e sem agudos.', 'Exagere nos agudos e pergunte se o som está confortável.'],
  audienceQuestions: ['O que vocês acham que acontece quando aumentamos demais os agudos?', 'Já sentiram cansaço auditivo após um evento?'],
  liveDemos: ['Aumente os agudos gradualmente até ficar desconfortável. Mostre o limite.'],
  curiosities: ['O ouvido humano é mais sensível a médios (voz) e menos sensível a graves e agudos extremos.'],
};

export const slide07Notes: PresenterNote = {
  explanation: 'Apresente os controles do equalizador da mesa: LOW (graves), MID (médios), HIGH (agudos) e HPF. Cada controle altera a forma de onda.',
  practicalExamples: ['Mostre cada controle em uma mesa real.', 'Toque e altere cada um para demonstrar o efeito.'],
  audienceQuestions: ['Qual controle vocês acham que é mais usado?', 'Para que serve o HPF?'],
  liveDemos: ['Percorra cada controle e mostre o efeito no som e no gráfico.'],
};

export const slide08Notes: PresenterNote = {
  explanation: 'HPF é uma ferramenta essencial. Remove ruídos indesejados de baixa frequência sem afetar a qualidade da voz.',
  practicalExamples: ['Ative e desative o HPF para mostrar a diferença.', 'Mostre ruídos de palco que o HPF elimina.'],
  audienceQuestions: ['Que tipos de ruído o HPF pode eliminar?', 'Quando NÃO usar o HPF?'],
  liveDemos: ['Coloque o microfone próximo a uma fonte de grave (bumbo, subwoofer) e mostre o HPF em ação.'],
  curiosities: ['Em alguns modelos de microfone, o HPF é ativado por um botão no próprio corpo do microfone.'],
};

export const slide09Notes: PresenterNote = {
  explanation: 'Conceito fundamental: cortar frequências problemáticas antes de aumentar outras. Operadores experientes cortam mais do que aumentam.',
  practicalExamples: ['Mostre duas configurações: uma com tudo aumentado e outra com cortes cirúrgicos.', 'Compare o resultado sonoro.'],
  audienceQuestions: ['Por que aumentar tudo pode ser pior?', 'Qual a vantagem de cortar frequências?'],
};

export const slide10Notes: PresenterNote = {
  explanation: 'Demonstração auditiva interativa. Os participantes podem ouvir o efeito de remover cada faixa de frequência.',
  practicalExamples: ['Toque cada preset e peça para a turma descrever o que ouviu.', 'Relacione com situações reais.'],
  audienceQuestions: ['Qual diferença foi mais perceptível?', 'Em qual situação remover os médios seria útil?'],
  liveDemos: ['Use uma música conhecida e vá alternando entre os modos.'],
};

export const slide11Notes: PresenterNote = {
  explanation: 'Erros comuns que todo iniciante comete na equalização. Cada erro tem uma explicação prática. Gere discussão.',
  practicalExamples: ['Pergunte quem já cometeu cada erro.', 'Mostre a consequência de cada erro.'],
  audienceQuestions: ['Qual desses erros você já cometeu?', 'Qual erro você acha mais grave?'],
};

export const slide12Notes: PresenterNote = {
  explanation: 'Simulador interativo de equalização de voz. Deixe os participantes experimentarem livremente.',
  practicalExamples: ['Peça para cada participante tentar ajustar a voz.', 'Dê dicas conforme eles ajustam.'],
  audienceQuestions: ['Qual ajuste fez mais diferença na clareza da voz?', 'O HPF ajudou ou atrapalhou?'],
  liveDemos: ['Equalize uma voz ao vivo enquanto explica cada ajuste.'],
};

export const slide13Notes: PresenterNote = {
  explanation: 'Exercício de raciocínio com diferentes fontes sonoras. Não existe resposta única — o objetivo é estimular o pensamento crítico.',
  practicalExamples: ['Leia cada situação e discuta em grupo.', 'Peça para justificarem a escolha.'],
  audienceQuestions: ['Qual ajuste faria mais sentido para a voz?', 'E para a bateria?'],
};

export const slide14Notes: PresenterNote = {
  explanation: 'Quiz interativo para fixar os conceitos. Use as imagens como apoio visual.',
  practicalExamples: ['Mostre cada pergunta e espere respostas.', 'Explique o porquê de cada resposta.'],
  audienceQuestions: ['Qual pergunta foi mais difícil?', 'Ainda tem dúvida sobre algum conceito?'],
};

export const slide15Notes: PresenterNote = {
  explanation: 'Resumo dos 6 pilares da Aula 7. Leia cada item e confirme se entenderam.',
  practicalExamples: ['Peça para os participantes resumirem cada ponto.', 'Faça uma rodada de perguntas rápidas.'],
  audienceQuestions: ['Qual pilar ficou mais claro?', 'O que você vai aplicar na prática?'],
};

export const slide16Notes: PresenterNote = {
  explanation: 'Encerramento com gancho para compressão. Reforce a frase final e agradeça a participação.',
  practicalExamples: ['Agradeça a participação.', 'Distribua material de apoio.', 'Abra para perguntas finais.'],
  audienceQuestions: ['O que vocês esperam aprender sobre compressão?', 'Alguém quer compartilhar o aprendizado mais importante da aula?'],
};
