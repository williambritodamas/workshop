import type { PresenterNote } from '../../../types/presentation';

export const slide01Notes: PresenterNote = {
  explanation: 'Abertura da Aula 3. Esta aula amarra tudo que foi visto nas aulas anteriores e mostra o fluxo completo do sinal. Reforce que entender o caminho do som é a chave para resolver qualquer problema em sistemas de áudio.',
  practicalExamples: [
    'Aponte para a caixa de som da sala e pergunte: "O que precisa acontecer para essa caixa tocar?"',
    'Desenhe um fluxo rápido no quadro para mostrar o que será explorado.',
  ],
  audienceQuestions: [
    'Quantos passos vocês acham que o som percorre até chegar na caixa?',
    'Alguém já tentou descobrir por que um microfone não estava funcionando?',
  ],
};

export const slide02Notes: PresenterNote = {
  explanation: 'Slide propositalmente vazio para gerar engajamento. Deixe a plateia pensar. Não responda ainda. Deixe a curiosidade crescer para que os próximos slides tenham mais impacto.',
  practicalExamples: [
    'Aponte para uma caixa da sala e pergunte novamente: "Como minha voz chega lá?"',
    'Faça a plateia levantar hipóteses: "Será que viaja pelo ar direto?"',
  ],
  audienceQuestions: [
    'O que acontece entre a minha boca e aquela caixa?',
    'Quem controla esse caminho?',
    'Se eu falar mais baixo, muda alguma coisa no caminho?',
  ],
};

export const slide03Notes: PresenterNote = {
  explanation: 'Diagrama completo do sistema. Cada etapa aparece sequencialmente para não sobrecarregar. Use os botões para avançar manualmente. Reforce que esse fluxo é universal em qualquer sistema de som.',
  practicalExamples: [
    'Percorra cada etapa com o dedo, como se estivesse traçando um mapa.',
    'Compare com uma linha de produção: cada etapa depende da anterior.',
  ],
  audienceQuestions: [
    'O que acontece se removermos uma dessas etapas?',
    'Qual etapa vocês acham que é a mais importante?',
  ],
};

export const slide04Notes: PresenterNote = {
  explanation: 'Reforce que o som começa antes de qualquer equipamento. A fonte sonora (pessoa, instrumento) é o ponto de partida. Sem vibração inicial, não há o que captar.',
  practicalExamples: [
    'Peça para a plateia colocar a mão na garganta e falar para sentir as pregas vocais vibrando.',
    'Bata palmas e pergunte: "O que gerou esse som?"',
  ],
  audienceQuestions: [
    'O que acontece se não houver fonte sonora?',
    'Alguém consegue imaginar um sistema de som sem microfone funcionando?',
  ],
};

export const slide05Notes: PresenterNote = {
  explanation: 'O microfone como transdutor de entrada. A animação da onda sonora se transformando em pulso elétrico é crucial para entender a mudança de domínio (acústico → elétrico).',
  practicalExamples: [
    'Mostre um microfone e tampe a cápsula para demonstrar a captação.',
    'Sopre no microfone para mostrar que o diafragma responde a pressão do ar.',
  ],
  audienceQuestions: [
    'O microfone aumenta a voz?',
    'O que sai do microfone: som ou eletricidade?',
  ],
};

export const slide06Notes: PresenterNote = {
  explanation: 'Desfaça o mito de que cabos melhoram ou pioram o som. Eles apenas transportam. A analogia do cano de água é muito eficaz.',
  practicalExamples: [
    'Pegue um cabo XLR e mostre os pinos. Explique que ele só passa o sinal.',
    'Ligue e desligue um cabo para mostrar que o som corta quando desconecta.',
  ],
  audienceQuestions: [
    'Se o cabo for muito longo, o som chega mais fraco?',
    'O que acontece se pisarmos no cabo?',
  ],
};

export const slide07Notes: PresenterNote = {
  explanation: 'A mesa de som centraliza todos os sinais. A metáfora do maestro é eficaz. Mostre os canais como "filas" que se encontram na mesa.',
  practicalExamples: [
    'Aponte para uma mesa real (ou foto) e mostre que cada canal tem seu próprio fader.',
    'Simule dois microfones ligados em canais diferentes e como a mesa os organiza.',
  ],
  audienceQuestions: [
    'O que acontece se subirmos o volume de um canal apenas?',
    'Quantos sons diferentes uma mesa pode receber ao mesmo tempo?',
  ],
};

export const slide08Notes: PresenterNote = {
  explanation: 'Visão geral do processamento sem entrar em detalhes técnicos. O objetivo é mostrar que o som pode ser tratado antes de chegar às caixas. Equalizador, compressor e efeitos são como "filtros" que melhoram o som.',
  practicalExamples: [
    'Mostre um equalizador gráfico e mexa em algumas frequências para demonstrar a mudança.',
    'Toque uma música sem e com processamento mínimo para comparar.',
  ],
  audienceQuestions: [
    'Vocês acham que o som que sai de uma caixa é exatamente o mesmo que entrou no microfone?',
    'Para que serve "melhorar" o som antes de tocar?',
  ],
};

export const slide09Notes: PresenterNote = {
  explanation: 'Amplificação: o que dá "força" ao sinal. A diferença entre caixa ativa (amplificador interno) e passiva (amplificador externo) é essencial. Use a analogia do motor do carro.',
  practicalExamples: [
    'Mostre uma caixa ativa e identifique onde fica o amplificador embutido.',
    'Explique que sem amplificação, o sinal do microfone é fraco demais para mover o cone da caixa.',
  ],
  audienceQuestions: [
    'O amplificador aumenta o quê? O volume ou a qualidade?',
    'Qual a diferença entre uma caixa que "toca sozinha" e uma que precisa de outro equipamento?',
  ],
};

export const slide10Notes: PresenterNote = {
  explanation: 'A caixa de som como transdutor de saída. Mostre a simetria com o microfone: um transforma som em eletricidade, o outro faz o inverso. A demonstração do cone vibrando é marcante.',
  practicalExamples: [
    'Coloque a mão no cone de uma caixa (com volume baixo) para sentir a vibração.',
    'Mostre um alto-falante aberto para que vejam o cone, a bobina e o ímã.',
  ],
  audienceQuestions: [
    'O que faz o cone da caixa se mover?',
    'Se o microfone transforma som em eletricidade, o que a caixa faz?',
  ],
};

export const slide11Notes: PresenterNote = {
  explanation: 'A animação completa do fluxo é o clímax da aula. Cada equipamento acende quando o sinal passa. É a consolidação visual de tudo que foi ensinado.',
  practicalExamples: [
    'Passe o dedo acompanhando o fluxo enquanto explica cada etapa.',
    'Toque uma música e aponte para cada equipamento conforme o sinal "passa" por ele.',
  ],
  audienceQuestions: [
    'Qual equipamento transforma o som em eletricidade?',
    'Qual transforma a eletricidade de volta em som?',
    'O que transporta o sinal entre os equipamentos?',
  ],
};

export const slide12Notes: PresenterNote = {
  explanation: 'Momento de raciocínio lógico. Mostre que cada ponto do fluxo pode falhar. Ensine a estratégia de dividir o sistema em partes para encontrar problemas. Reforce: sempre siga o fluxo do começo ao fim.',
  practicalExamples: [
    'Simule: "O microfone está ligado, o cabo está conectado, mas não sai som. O que fazer?"',
    'Percorra cada etapa: microfone → cabo → canal → volume → caixa.',
  ],
  audienceQuestions: [
    'Se não sai som, por onde você começa a procurar?',
    'O que é mais rápido: chutar ou seguir o fluxo lógico?',
  ],
};

export const slide13Notes: PresenterNote = {
  explanation: 'Exercício de fixação. A plateia deve organizar os equipamentos na ordem correta do fluxo. Isso testa a compreensão de forma lúdica. Deixe que tentem antes de mostrar a resposta.',
  practicalExamples: [
    'Distribua cartões físicos ou peça para a plateia falar a ordem em voz alta.',
    'Corrija com carinho e explique por que a ordem importa.',
  ],
  audienceQuestions: [
    'Quem vem primeiro: a mesa ou o microfone?',
    'O notebook entra em qual parte do fluxo?',
  ],
};

export const slide14Notes: PresenterNote = {
  explanation: 'Demonstração prática ao vivo. Siga o checklist e pare em cada etapa para perguntar à plateia onde o som "parou". Isso desenvolve o raciocínio de troubleshooting.',
  practicalExamples: [
    'Fale no microfone e desligue o cabo: "Onde o som parou?"',
    'Tire o volume do canal na mesa: "E agora?"',
    'Desligue a caixa: "E agora?"',
  ],
  audienceQuestions: [
    'Por que o som parou quando desliguei o cabo?',
    'Qual etapa do fluxo eu interrompi?',
  ],
};

export const slide15Notes: PresenterNote = {
  explanation: 'Revisão final em formato de cards. Cada card representa um pilar do fluxo. Leia um por um e peça confirmação. Finalize mostrando o fluxograma completo novamente para consolidar.',
  practicalExamples: [
    'Aponte para o fluxograma e pergunte: "Qual equipamento é responsável por isso?"',
    'Faça uma pergunta relâmpago sobre cada card.',
  ],
  audienceQuestions: [
    'Qual a função principal do cabo?',
    'Qual a diferença entre a função da mesa e a função do amplificador?',
  ],
};

export const slide16Notes: PresenterNote = {
  explanation: 'Encerramento com teaser da próxima aula. Celebre a conclusão. Deixe claro que agora eles têm uma base sólida para entender microfones, que é o tema da Aula 4.',
  practicalExamples: [
    'Peça aplausos para a turma pela conclusão.',
    'Faça um resumo rápido: "Hoje aprendemos o MAPA do som. Na próxima aula, vamos explorar o primeiro equipamento desse mapa: os microfones."',
  ],
  audienceQuestions: [
    'Qual tipo de microfone vocês têm mais curiosidade de conhecer?',
    'Depois de entender o fluxo, qual equipamento parece mais interessante?',
  ],
};
