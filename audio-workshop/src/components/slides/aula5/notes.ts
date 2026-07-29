import type { PresenterNote } from '../../../types/presentation';

export const slide01Notes: PresenterNote = {
  explanation: 'Abertura da Aula 5 sobre mesas de som. Apresente a mesa como o cérebro do sistema de áudio — o equipamento central que coordena tudo. Gere expectativa sobre o que será aprendido.',
  practicalExamples: ['Mostre uma mesa de som real ou foto em alta resolução.', 'Pergunte quem já operou ou teve medo de operar uma mesa.'],
  audienceQuestions: ['Quantos de vocês já viram uma mesa de som ao vivo?', 'Alguém já teve medo de mexer em uma?'],
};

export const slide02Notes: PresenterNote = {
  explanation: 'A mesa de som recebe múltiplas fontes de áudio (microfones, instrumentos, notebooks), organiza e processa cada uma individualmente, e envia o resultado para as caixas de som. É como um maestro que coordena todos os músicos.',
  practicalExamples: ['Desenhe um diagrama no quadro: fontes → mesa → caixas.', 'Mostre o fluxo com uma mesa real ligada.'],
  audienceQuestions: ['Se não existisse mesa de som, como faríamos?', 'Quantos sons diferentes podem entrar em uma mesa ao mesmo tempo?'],
  liveDemos: ['Conecte um microfone direto na caixa (sem mesa) para mostrar a falta de controle, depois passe pela mesa.'],
};

export const slide03Notes: PresenterNote = {
  explanation: 'Apresente a anatomia visual da mesa de som. Mostre que a mesa é dividida em seções: canais de entrada à esquerda, seção master à direita. Cada canal é idêntico — uma vez que entende um, entende todos.',
  practicalExamples: ['Aponte cada seção em uma mesa real.', 'Mostre como todos os canais são iguais entre si.'],
  audienceQuestions: ['Quantos canais vocês acham que uma mesa pequena tem?', 'Qual controle parece mais importante?'],
  curiosities: ['Mesas grandes podem ter 64 ou mais canais. Mesas digitais podem controlar centenas em rede.'],
};

export const slide04Notes: PresenterNote = {
  explanation: 'Cada fonte sonora precisa de seu próprio canal. Isso dá controle independente de volume, equalização e posicionamento para cada microfone ou instrumento. Sem canais separados, não seria possível ajustar cada fonte individualmente.',
  practicalExamples: ['Mostre um canal em uma mesa real.', 'Ligue dois microfones em canais diferentes e mostre o controle independente.'],
  audienceQuestions: ['Se temos 3 cantores e 2 violões, quantos canais precisamos?', 'O que acontece se ligarmos dois microfones no mesmo canal?'],
};

export const slide05Notes: PresenterNote = {
  explanation: 'O sinal percorre uma sequência lógica dentro de cada canal: Gain (sensibilidade) → HPF (corta graves) → EQ (molda timbre) → Aux (envia para monitores/efeitos) → Pan (posiciona no estéreo) → Fader (volume final). A ordem importa porque cada etapa prepara o sinal para a próxima.',
  practicalExamples: ['Percorra o caminho com o dedo em uma mesa real.', 'Mostre como cada etapa afeta o sinal audível.'],
  audienceQuestions: ['Por que o Gain vem antes do EQ?', 'O que aconteceria se o Fader viesse antes do Gain?'],
  liveDemos: ['Toque um áudio e vá ajustando cada etapa para mostrar o efeito em tempo real.'],
  curiosities: ['Em mesas digitais, o roteamento pode ser reconfigurado — a ordem não é fixa.'],
};

export const slide06Notes: PresenterNote = {
  explanation: 'Cada controle do canal tem função específica e deve ser compreendido individualmente. Gain ajusta a entrada (sensibilidade), EQ molda o timbre, Aux envia para destinos externos, Pan posiciona no estéreo, Mute silencia, Solo isola nos fones e Fader controla o volume final.',
  practicalExamples: ['Mostre cada controle em ação em uma mesa real.', 'Toque um áudio e demonstre cada função separadamente.'],
  audienceQuestions: ['Qual a diferença entre Mute e Fader no mínimo?', 'Quando você usaria Solo durante um evento?'],
  curiosities: ['Algumas mesas permitem configurar Solo como PFL (pre-fader) ou Solo in Place (pós-fader, corta outros canais).'],
};

export const slide07Notes: PresenterNote = {
  explanation: 'Mesas analógicas têm um controle físico para cada função — tudo visível ao mesmo tempo. Mesas digitais usam telas e menus, mas oferecem vantagens como salvar cenas, controle remoto e mais processamento. Ambas fazem o mesmo trabalho essencial.',
  practicalExamples: ['Mostre uma mesa analógica e uma digital lado a lado.', 'Demonstre salvar e recuperar uma cena em mesa digital.'],
  audienceQuestions: ['Qual parece mais fácil de operar?', 'Qual oferece mais recursos?'],
  liveDemos: ['Salve uma configuração em mesa digital e recupere após alterar tudo — mostre o poder das cenas.'],
};

export const slide08Notes: PresenterNote = {
  explanation: 'A tabela compara diretamente os dois tipos de mesa. Salvar configurações é o maior diferencial da digital. Analógica ganha em simplicidade visual (tudo à vista). A escolha depende do contexto e da familiaridade do operador.',
  practicalExamples: ['Pergunte qual característica é mais importante para o contexto do aluno.', 'Mostre situações onde cada tipo é mais adequado.'],
  audienceQuestions: ['Para uma igreja pequena, qual é melhor?', 'E para um grande festival?'],
  curiosities: ['Mesas digitais modernas podem ser controladas por Wi-Fi ou tablet de qualquer lugar do recinto.'],
};

export const slide09Notes: PresenterNote = {
  explanation: 'Demonstração prática ao vivo. Convide participantes para interagir com cada controle. O objetivo é criar memória muscular e confiança. Cada ação demonstra um conceito diferente: Gain vs Fader, Mute vs Solo, Pan estéreo, EQ tonal.',
  practicalExamples: ['Peça para alguém aumentar apenas o Gain e descrever o que ouve.', 'Depois baixar o Fader e perceber a diferença.', 'Ativar Mute e Solo em sequência.', 'Mover o Pan e ajustar EQ.'],
  audienceQuestions: ['O que vocês perceberam quando o Gain subiu demais?', 'Qual a diferença prática entre Gain e Fader?'],
  liveDemos: ['Demonstre o clipping com Gain excessivo.', 'Mostre o som abafado com Fader baixo mesmo com Gain alto.'],
};

export const slide10Notes: PresenterNote = {
  explanation: 'Recapitulação dos conceitos principais da aula. Cada cartão resume um aprendizado fundamental. Use este slide para consolidar o conhecimento antes de passar aos exercícios.',
  practicalExamples: ['Peça para os participantes resumirem cada ponto com suas próprias palavras.', 'Faça uma rodada de perguntas rápidas.'],
  audienceQuestions: ['Qual foi o conceito mais importante para vocês?', 'O que ainda não ficou claro?'],
};

export const slide11Notes: PresenterNote = {
  explanation: 'Quiz interativo para fixar os conceitos. Cada pergunta aborda um ponto fundamental da aula. Dê tempo para pensar, discuta as respostas e celebre os acertos.',
  practicalExamples: ['Leia cada pergunta em voz alta.', 'Dê 5 segundos para pensar antes de mostrar as opções.', 'Explique cada resposta.'],
  audienceQuestions: ['Qual pergunta foi mais difícil?', 'Tem algum conceito que ainda gera dúvida?'],
};

export const slide12Notes: PresenterNote = {
  explanation: 'Exercícios práticos para aplicar os conceitos da aula em situações reais. Cada exercício trabalha uma habilidade diferente: identificação visual, raciocínio lógico, discussão em grupo e visão sistêmica.',
  practicalExamples: ['Divida a turma em grupos para discutir os cenários.', 'Circule entre os grupos para tirar dúvidas.'],
  audienceQuestions: ['Qual exercício pareceu mais útil?', 'Conseguem pensar em outros cenários para praticar?'],
  liveDemos: ['Use uma mesa real para o exercício de identificação de controles.'],
};

export const slide13Notes: PresenterNote = {
  explanation: 'Desafio final que integra todos os conceitos da aula em um cenário realista de operação de mesa para um culto. O participante deve pensar como um operador, tomando decisões sobre conexão, ajuste e operação.',
  practicalExamples: ['Percorra cada tarefa do desafio com a turma.', 'Pergunte o que fariam em cada etapa.', 'Discuta o cenário de emergência (microfone distorcendo).'],
  audienceQuestions: ['O que você faria se o microfone do pastor começasse a distorcer durante o culto?', 'Qual tarefa do desafio parece mais desafiadora?'],
  curiosities: ['Em eventos reais, operadores experientes sempre têm um plano B — cabo reserva, canal reserva, etc.'],
};

export const slide14Notes: PresenterNote = {
  explanation: 'Encerramento da aula. Reforce a mensagem principal: qualquer mesa segue a mesma lógica. Incentive a prática e motive os participantes para a próxima aula sobre microfones.',
  practicalExamples: ['Agradeça a participação de todos.', 'Distribua material de apoio.', 'Abra espaço para perguntas finais.'],
  audienceQuestions: ['O que vocês esperam aprender na próxima aula sobre microfones?', 'Alguém vai colocar em prática o que aprendeu hoje?'],
};

export const slide15Notes: PresenterNote = {
  explanation: 'Materiais de referência para aprofundamento. Inclui manuais oficiais, canais no YouTube, livros e PDF resumo. Esses recursos permitem que o aluno continue aprendendo após a aula.',
  practicalExamples: ['Mostre cada link e recomende os melhores para iniciantes.', 'Sugira assistir aos vídeos em ordem de dificuldade.'],
  audienceQuestions: ['Alguém já conhecia algum desses recursos?', 'Recomendariam algum outro material?'],
};
