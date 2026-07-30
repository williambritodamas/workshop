import type { PresenterNote } from '../../../types/presentation';

export const slide01Notes: PresenterNote = {
  explanation: 'Abertura da Aula 10 — Microfonia. Explique que microfonia não é "azar" nem falha do equipamento. É um fenômeno previsível causado pelo ganho excessivo em um sistema de áudio. O operador de som precisa entender a física por trás do feedback para evitá-lo. Reforce que dominar esse tema separa operadores iniciantes de experientes.',
  practicalExamples: ['Pergunte quantos já enfrentaram microfonia em cultos ou eventos.', 'Relate um caso real em que a microfonia atrapalhou um momento importante.'],
  audienceQuestions: ['Quem aqui já passou vergonha com microfonia em um evento ao vivo?', 'O que você fez na hora para resolver?'],
  curiosities: ['O termo "feedback" em áudio vem da engenharia de controle, onde um sistema "realimenta" sua própria saída na entrada.'],
};

export const slide02Notes: PresenterNote = {
  explanation: 'Slide dramático para capturar a atenção. Toque o som de microfonia (PIIII) por alguns segundos. Depois revele o nome do fenômeno. O choque auditivo cria uma memória forte no aluno.',
  practicalExamples: ['Produza o som de microfonia com um microfone real e uma caixa PA.', 'Mostre o rosto das pessoas quando ouvem o som — é instantaneamente reconhecível.'],
  audienceQuestions: ['Qual foi sua reação ao ouvir esse som?', 'O que vem à mente quando você ouve esse barulho?'],
  liveDemos: ['Gere microfonia propositalmente com um microfone dinâmico próximo a uma caixa.'],
};

export const slide03Notes: PresenterNote = {
  explanation: 'Explique o ciclo do feedback. O áudio sai da caixa, entra no microfone, é amplificado novamente e sai mais forte, criando um loop que cresce até a saturação. Use o FeedbackLoopAnimation para mostrar visualmente esse ciclo vicioso.',
  practicalExamples: ['Desenhe o ciclo no quadro: microfone → mixer → amplificador → caixa → microfone.', 'Explique que cada volta do ciclo adiciona ganho.'],
  audienceQuestions: ['Em que ponto do ciclo podemos interromper o feedback?', 'O que acontece se o ganho for menor que 1 (atenuação) no loop?'],
  liveDemos: ['Aponte um microfone para a caixa e aumente o ganho lentamente até ouvir o feedback.'],
  curiosities: ['Esse mesmo princípio de feedback positivo é usado em guitarras elétricas propositalmente (feedback musical).'],
};

export const slide04Notes: PresenterNote = {
  explanation: 'Mostre como a microfonia começa gradualmente. O FeedbackMeter mostra 3 zonas: verde (seguro), amarelo (atenção — microfonia iminente) e vermelho (feedback ativo). Explique que entre o amarelo e o vermelho há o "gain antes do feedback" — o ponto máximo de ganho seguro.',
  practicalExamples: ['Aumente o ganho lentamente e mostre no FeedbackMeter onde o feedback começa.', 'Mostre que cantores experientes sabem ficar no limite entre amarelo e vermelho.'],
  audienceQuestions: ['Você já percebeu um som "cavando" antes da microfonia estourar?', 'Qual a diferença entre pré-feedback e feedback pleno?'],
  liveDemos: ['Use um microfone real, aponte para a caixa e mostre o momento exato em que o feedback começa.', 'O pré-feedback soa como um eco metálico ou uma ressonância que vai crescendo.'],
};

export const slide05Notes: PresenterNote = {
  explanation: 'A posição do microfone em relação à caixa de som é o fator mais crítico. Use o MicrophonePositionDemo para mostrar que um microfone cardioidal tem rejeição máxima a 180 graus (atrás da cápsula). A regra de ouro: nunca aponte a cápsula para uma caixa de som.',
  practicalExamples: ['Mostre em um palco real onde os monitores devem ficar.', 'Demonstre com um microfone em mãos: gire e mostre onde está a zona de rejeição.'],
  audienceQuestions: ['Por que microfones cardioídais são mais usados em palco do que omnidirecionais?', 'Onde fica o "ponto cego" de um cardioidal?'],
  liveDemos: ['Com um microfone cardioidal e um speaker pequeno, gire o microfone e mostre a diferença de feedback.'],
  curiosities: ['Microfones supercardioídais têm maior rejeição lateral mas um lóbulo traseiro — podem captar som atrás em certos ângulos.'],
};

export const slide06Notes: PresenterNote = {
  explanation: 'Apresente os 7 fatores de risco que favorecem a microfonia. Cada card pode ser clicado para expandir a explicação. Reforce que a microfonia raramente tem uma única causa — é a combinação de fatores.',
  practicalExamples: ['Igreja com piso de cerâmica, teto alto e paredes de vidro: receita para microfonia.', 'Evento ao ar livre: menos reflexão, mais seguro.'],
  audienceQuestions: ['Qual desses fatores você encontra com mais frequência no seu ambiente?', 'Como um ambiente reverberante agrava a microfonia?'],
  curiosities: ['Salas com muitas superfícies refletivas (vidro, cerâmica) podem ter até 3x mais propensão à microfonia.'],
};

export const slide07Notes: PresenterNote = {
  explanation: 'Sequência de ações para matar a microfonia em segundos. 1: Não entre em pânico (microfonia tem solução). 2: Identifique o microfone problemático. 3: Abaixe o fader. 4: Ajuste o ganho de entrada. 5: Reposicione o microfone. 6: Use EQ para cortar a frequência exata. A ordem importa: primeiro estabilize, depois corrija.',
  practicalExamples: ['Simule uma microfonia e siga os passos em tempo real.', 'Mostre que abaixar o fader resolve na hora, mas reposicionar evita reincidência.'],
  audienceQuestions: ['Por que abaixar o fader é melhor que mutar o canal?', 'Quando usar o EQ como primeira ação vs última ação?'],
  liveDemos: ['Crie microfonia e resolva seguindo cada passo, explicando em voz alta.', 'Memorize a sequência: PARAR → IDENTIFICAR → REDUZIR → CORRIGIR.'],
};

export const slide08Notes: PresenterNote = {
  explanation: 'O equalizador é uma ferramenta cirúrgica contra microfonia. Cada sala e cada microfone têm frequências específicas de ressonância. Use um EQ paramétrico com Q estreito (alta seletividade) para cortar apenas a frequência problemática sem afetar o resto do som.',
  practicalExamples: ['Varra as frequências com EQ paramétrico até encontrar a que realimenta.', 'Mostre que cortes largos (Q baixo) prejudicam a qualidade sonora.'],
  audienceQuestions: ['Por que usar Q estreito em vez de um corte largo?', 'Qual frequência é mais comum em microfonia de microfones vocais?'],
  liveDemos: ['Com um equalizador gráfico, encontre a frequência de feedback e corte-a.'],
  curiosities: ['Equalizadores gráficos com 31 bandas são clássicos para controle de feedback porque cada banda cobre 1/3 de oitava.', 'Frequências comuns de microfonia: 200-400 Hz (grave), 800 Hz-2 kHz (médio), 3-6 kHz (agudo).'],
};

export const slide09Notes: PresenterNote = {
  explanation: 'Monitores de palco (wedges) são a causa mais comum de microfonia porque estão atrás do microfone — exatamente na direção de captação. Use o MonitorPlacementGuide para mostrar a zona nula do cardioidal. O segredo é posicionar o monitor na zona de rejeição (180° atrás da cápsula).',
  practicalExamples: ['Mostre um palco real com monitores mal posicionados.', 'Compare com monitores bem posicionados na zona nula.'],
  audienceQuestions: ['Por que monitores causam mais microfonia que o PA principal?', 'Como o posicionamento do cantor em relação ao monitor afeta o feedback?'],
  liveDemos: ['Posicione um monitor na zona nula e depois fora dela — mostre a diferença.', 'Monitores devem ficar na linha da zona nula do microfone: 180° para cardioidal, 120° para supercardioidal.'],
};

export const slide10Notes: PresenterNote = {
  explanation: 'Checklist prático para os alunos seguirem durante a demonstração ao vivo. Cada passo deve ser executado em ordem. O objetivo é que eles internalizem o procedimento de prevenção de microfonia.',
  practicalExamples: ['Distribua o checklist impresso ou mostre no telão.', 'Siga cada passo com um microfone real.'],
  audienceQuestions: ['Qual passo você acha mais importante?', 'Em qual passo você teria mais dificuldade na prática?'],
  liveDemos: ['Execute todos os passos com um microfone e sistema de som reais.'],
};

export const slide11Notes: PresenterNote = {
  explanation: 'Erros clássicos que operadores iniciantes cometem com microfonia. Cada card é clicável para mostrar soluções. Reforce que o erro mais comum é aumentar o ganho quando o que falta é posicionamento.',
  practicalExamples: ['Técnico que aumenta o ganho do canal com microfonia em vez de reposicionar.', 'Cantor que coloca a mão na cápsula (muda a diretividade).'],
  audienceQuestions: ['Você já cometeu algum desses erros?', 'Qual erro você vê com mais frequência em outros operadores?'],
  liveDemos: ['Demonstre cada erro e mostre a consequência sonora em tempo real.', 'Mão na cápsula não só causa microfonia como também altera a resposta de frequência do microfone.'],
};

export const slide12Notes: PresenterNote = {
  explanation: 'Simulador interativo de microfonia. Deixe os alunos experimentarem livremente: mudar posição do microfone, ajustar ganho, aplicar EQ, reposicionar monitores. Cada ação mostra o nível de risco de feedback. É o momento mais prático da aula.',
  practicalExamples: ['Desafie os alunos a encontrar o maior ganho possível sem causar microfonia.', 'Peça para resolverem um cenário com microfonia usando as ferramentas do simulador.'],
  audienceQuestions: ['Qual cenário foi mais difícil de controlar?', 'O que você aprendeu brincando com o simulador?'],
  liveDemos: ['Use o simulador projetado e peça para alunos voluntários interagirem.'],
};

export const slide13Notes: PresenterNote = {
  explanation: 'Jogo "Encontre os Problemas" usando o InteractiveStage. Mostre um palco com vários erros: microfone apontado para caixa, monitor mal posicionado, ganho excessivo. Os alunos devem clicar nos problemas e sugerir correções.',
  practicalExamples: ['Divida a turma em grupos e veja quem encontra mais problemas.', 'Discuta cada problema encontrado e a melhor solução.'],
  audienceQuestions: ['Quantos problemas você encontrou?', 'Qual problema você não tinha notado inicialmente?'],
  liveDemos: ['Projete o InteractiveStage e resolva junto com a turma.'],
};

export const slide14Notes: PresenterNote = {
  explanation: 'Quiz interativo para testar os conhecimentos. Use o FeedbackQuiz. As perguntas cobrem causas, soluções, posicionamento, EQ e monitoramento.',
  practicalExamples: ['Leia cada pergunta em voz alta e discuta antes de mostrar a resposta.', 'Peça para os alunos justificarem suas respostas.'],
  audienceQuestions: ['Qual pergunta foi mais difícil?', 'Sobre o que você ainda tem dúvidas?'],
};

export const slide15Notes: PresenterNote = {
  explanation: 'Resumo dos conceitos fundamentais da aula. Cada card representa um pilar do controle de microfonia: posicionamento, ganho, EQ, monitores, ambiente, calma na resolução e técnica cirúrgica.',
  practicalExamples: ['Peça para cada aluno explicar um dos pilares com as próprias palavras.', 'Faça perguntas rápidas sobre cada tópico.'],
  audienceQuestions: ['Qual pilar você considera mais importante?', 'O que você vai aplicar primeiro na sua prática?'],
};

export const slide16Notes: PresenterNote = {
  explanation: 'Encerramento da aula com a mensagem principal: microfonia não é inimiga — é um sinal. Quando o sistema apita, ele está dizendo que algo está fora do lugar. A próxima aula será sobre montagem de sistema completo, aplicando todos os conceitos das aulas anteriores.',
  practicalExamples: ['Agradeça a participação de todos.', 'Abra para perguntas e discussão final.', 'Compartilhe seu contato para dúvidas futuras.'],
  audienceQuestions: ['O que foi mais útil para você hoje?', 'Qual tema você quer aprofundar na próxima aula?'],
  curiosities: ['Engenheiros de som experientes dizem que "microfonia é a maneira do sistema falar com você".'],
};
