import type { PresenterNote } from '../../../types/presentation';

export const slide01Notes: PresenterNote = {
  explanation: 'Slide de abertura do workshop. Apresente-se, crie uma atmosfera acolhedora. Reforce que o objetivo é desmistificar o áudio para quem nunca teve contato. A frase no final quebra o gelo.',
  practicalExamples: [
    'Pergunte quem já teve medo de ligar um microfone ou mexer em uma mesa de som.',
    'Compartilhe uma história pessoal de quando você começou na área de áudio.',
  ],
  audienceQuestions: [
    'Quantos aqui já operaram algum sistema de som antes?',
    'O que vocês esperam aprender hoje?',
  ],
};

export const slide02Notes: PresenterNote = {
  explanation: 'Slide provocativo para engajar a audiência. Antes de falar de equipamentos caros, precisamos entender o que é o som. Use as ondas pulsantes ao fundo como apoio visual.',
  practicalExamples: [
    'Peça para a plateia fechar os olhos e ouvir os sons ao redor por 10 segundos.',
    'Bata palmas de repente para mostrar que som é uma reação física.',
  ],
  audienceQuestions: [
    'O que é som para vocês? Respondam com uma palavra.',
    'Alguém já parou para pensar como o som viaja de um ponto a outro?',
  ],
};

export const slide03Notes: PresenterNote = {
  explanation: 'Mostre que o som está presente em tudo ao nosso redor. Cada card representa uma fonte sonora diferente. O ponto central é que TODAS produzem vibrações.',
  practicalExamples: [
    'Peça para alguém bater palmas e todos sentirem a vibração no ar.',
    'Toque um trecho de música bem grave para sentir a vibração no peito.',
  ],
  audienceQuestions: [
    'Que outras fontes de som vocês conseguem identificar agora?',
    'O que uma buzina de carro e um violão têm em comum?',
  ],
};

export const slide04Notes: PresenterNote = {
  explanation: 'A definição central de som. Use o diagrama de três etapas para mostrar visualmente o fluxo: fonte → meio → receptor. Enfatize que sem um meio (ar, água, sólido) não há propagação.',
  practicalExamples: [
    'Encha um balão e mostre que o som abafado dentro dele.',
    'Use um diapasão para demonstrar visualmente a vibração.',
  ],
  audienceQuestions: [
    'O que acontece com o som se não houver ar? (vácuo)',
    'Conseguem imaginar como o som viaja na água?',
  ],
  liveDemos: [
    'Coloque a mão na garganta enquanto fala para sentir as pregas vocais vibrando.',
  ],
};

export const slide05Notes: PresenterNote = {
  explanation: 'Analogia visual poderosa. A pedra na água cria marolas (ondas transversais visíveis), o alto-falante vibra e cria ondas de pressão no ar (invisíveis). O princípio é o mesmo: perturbação no meio.',
  practicalExamples: [
    'Jogue um objeto em um copo d\'água e mostre as ondulações.',
    'Coloque a mão na frente de um alto-falante tocando grave para sentir o ar sendo empurrado.',
  ],
  audienceQuestions: [
    'O que acontece com as ondas na água quando jogamos duas pedras ao mesmo tempo?',
    'Alguém consegue explicar por que não vemos as ondas do som?',
  ],
};

export const slide06Notes: PresenterNote = {
  explanation: 'Anatomia do alto-falante. Os hotspots interativos permitem explorar as três partes principais. Explique que o cone empurra o ar, a bobina recebe corrente e o ímã cria o campo magnético.',
  practicalExamples: [
    'Leve um alto-falante velho e aberto para a sala mostrar as peças.',
    'Passe um ímã perto de uma bobina para demonstrar a indução eletromagnética.',
  ],
  audienceQuestions: [
    'Qual parte do alto-falante realmente gera o som que ouvimos?',
    'O que acontece se furarmos o cone do alto-falante?',
  ],
};

export const slide07Notes: PresenterNote = {
  explanation: 'O caminho inverso do alto-falante. Mostre as três etapas: som (pressão acústica) → diafragma vibra → sinal elétrico gerado. Destaque que microfone e alto-falante são parentes próximos.',
  practicalExamples: [
    'Tampe a cápsula do microfone e mostre como o som fica abafado.',
    'Coloque o microfone perto e longe da boca para demonstrar ganho e perda de sinal.',
  ],
  audienceQuestions: [
    'O que acontece se falarmos muito longe do microfone?',
    'Alguém sabe o que é um microfone de cristal ou de fita?',
  ],
};

export const slide08Notes: PresenterNote = {
  explanation: 'Conceito de transdutor. Mostre a simetria: alto-falante converte eletricidade em som, microfone converte som em eletricidade. Ambos são TRANSdutores (atravessam + conduzem).',
  practicalExamples: [
    'Desenhe um diagrama no quadro: som → microfone → eletricidade → amplificador → alto-falante → som.',
    'Mostre um fone de ouvido: ele tem um mini alto-falante dentro (funciona ao contrário como microfone).',
  ],
  audienceQuestions: [
    'Se o microfone é o inverso do alto-falante, será que um alto-falante funciona como microfone?',
    'Quantos transdutores diferentes vocês conseguem nomear?',
  ],
  curiosities: [
    'Alguns interfones antigos usavam o mesmo alto-falante como microfone.',
  ],
};

export const slide09Notes: PresenterNote = {
  explanation: 'O fluxo do sinal é o mapa mental mais importante do curso. Mostre cada etapa: Pessoa → Microfone → Mesa → Caixa → Ouvido. Reforce que todo problema de som pode ser rastreado seguindo esse fluxo.',
  practicalExamples: [
    'Simule: "O microfone está ligado mas não sai som na caixa. Por onde começamos?"',
    'Percorra cada etapa do diagrama com o dedo enquanto explica.',
  ],
  audienceQuestions: [
    'Onde começa o fluxo do sinal?',
    'O que acontece se qualquer elo dessa corrente for quebrado?',
  ],
};

export const slide10Notes: PresenterNote = {
  explanation: 'Apresente a mesa de som como o cérebro do sistema. Gere curiosidade e mistério. Não entre em detalhes técnicos - isso fica para a Aula 2. O objetivo é gerar expectativa.',
  practicalExamples: [
    'Mostre uma foto real de uma mesa de som com todos os botões.',
    'Diga que cada canal segue o mesmo fluxo lógico.',
  ],
  audienceQuestions: [
    'O que vocês acham que acontece dentro da mesa de som?',
    'Alguém já viu uma mesa de som ao vivo? O que sentiu?',
  ],
};

export const slide11Notes: PresenterNote = {
  explanation: 'Fatos curiosos para fixar conceitos de forma leve. Cada card aborda um aspecto diferente: a vibração da voz, a vibração do alto-falante, a necessidade de um meio e o vácuo do espaço.',
  practicalExamples: [
    'Mostre o vídeo do famoso experimento da campainha no vácuo (eliminação do som sem ar).',
    'Coloque a mão em um alto-falante para sentir a vibração.',
  ],
  audienceQuestions: [
    'Qual dessas curiosidades vocês acham mais impressionante?',
    'Sabiam que o som viaja 4x mais rápido na água do que no ar?',
  ],
};

export const slide12Notes: PresenterNote = {
  explanation: 'Momento prático da aula. Peça para a plateia fazer os exercícios e observar as diferenças. A reflexão ao lado ("O que mudou?") estimula o pensamento crítico sobre volume, timbre e ambiente.',
  practicalExamples: [
    'Bata palmas em diferentes distâncias e intensidades.',
    'Fale no microfone de diferentes ângulos e distâncias.',
  ],
  audienceQuestions: [
    'O que mudou no som quando você assobiou?',
    'E quando você se afastou do microfone?',
  ],
  liveDemos: [
    'Peça voluntários para fazerem cada uma das 5 tarefas na frente da turma.',
  ],
};

export const slide13Notes: PresenterNote = {
  explanation: 'Resumo dos 5 pilares da Aula 1. Leia cada item e peça para a plateia confirmar se entenderam antes de prosseguir para a Aula 2. Esse é o checkpoint de aprendizado.',
  practicalExamples: [
    'Pergunte se alguém consegue explicar cada pilar com as próprias palavras.',
    'Faça uma mini revisão relâmpago: aponte para um item aleatório e pergunte o que significa.',
  ],
  audienceQuestions: [
    'Qual desses 5 pilares ficou mais claro para vocês?',
    'Alguém quer compartilhar o aprendizado mais importante da aula?',
  ],
};

export const slide14Notes: PresenterNote = {
  explanation: 'Encerramento com celebração. Ative o confetti para marcar a conclusão. Faça a transição para a Aula 2 mostrando os equipamentos que serão explorados. Deixe a plateia animada para o que vem a seguir.',
  practicalExamples: [
    'Acione o confetti para criar um momento celebrativo.',
    'Peça aplausos para a turma pela conclusão da primeira aula.',
  ],
  audienceQuestions: [
    'Qual equipamento da Aula 2 vocês estão mais ansiosos para conhecer?',
    'Alguém quer dar um feedback rápido sobre a aula?',
  ],
};
