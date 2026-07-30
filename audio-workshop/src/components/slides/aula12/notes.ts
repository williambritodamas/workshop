import type { PresenterNote } from '../../../types/presentation';

export const slide01Notes: PresenterNote = {
  explanation: 'Abertura da Aula 12 — Desafio Final. Esta é a última aula do workshop. O aluno será colocado como operador de áudio em situações reais. Reforce que o objetivo é desenvolver raciocínio lógico, confiança e capacidade de solucionar problemas.',
  practicalExamples: ['Mostre uma imagem impactante de uma equipe técnica durante um grande evento.', 'Pergunte: quem se sente preparado para operar um sistema sozinho?'],
  audienceQuestions: ['Como vocês se sentem após 11 aulas?', 'Qual foi o maior aprendizado até aqui?'],
  curiosities: ['Operadores de áudio são responsáveis por mais de 50% da experiência do público em eventos ao vivo.'],
};

export const slide02Notes: PresenterNote = {
  explanation: 'Linha do tempo mostrando toda a jornada do workshop desde Aula 1 até hoje. Reforce a evolução do conhecimento. Cada aula foi um degrau. Hoje o aluno está pronto para ser o operador.',
  practicalExamples: ['Percorra cada aula destacando o aprendizado principal.', 'Peça para cada aluno lembrar de algo marcante de cada aula.'],
  audienceQuestions: ['Qual aula foi mais desafiadora?', 'Qual aula vocês acham que mais vai usar na prática?'],
  liveDemos: ['Ative a animação da linha do tempo para mostrar a progressão.'],
  curiosities: ['A linha do tempo mostra visualmente a evolução do conhecimento adquirido em cada aula.'],
};

export const slide03Notes: PresenterNote = {
  explanation: 'Cenário Igreja — montagem para culto/reunião. Equipamentos simples: 2 microfones, 2 caixas ativas, 1 mesa, notebook, projetor, monitores de palco. Desafie o aluno a posicionar tudo corretamente.',
  practicalExamples: ['Use o InteractiveStageBuilder para simular a montagem.', 'Discuta onde colocar a mesa (FOH) e onde posicionar monitores.'],
  audienceQuestions: ['Onde vocês colocariam os monitores de palco?', 'Por que o projetor pode causar microfonia indireta?'],
  curiosities: ['Posicionar caixas atrás dos microfones é o erro mais comum em montagens de igrejas.'],
};

export const slide04Notes: PresenterNote = {
  explanation: 'Cenário Podcast — setup para gravação com 2 microfones condensadores, interface/mesa digital, notebook, fones e câmeras. Foco em conexão correta e ganho adequado.',
  practicalExamples: ['Discuta por que microfones condensadores precisam de Phantom Power.', 'Mostre a conexão correta dos fones para monitoramento.'],
  audienceQuestions: ['Onde conectar os microfones condensadores?', 'Por que usar fones em vez de caixas no podcast?'],
  curiosities: ['Esquecer de ligar o Phantom Power é o erro mais comum com microfones condensadores.'],
};

export const slide05Notes: PresenterNote = {
  explanation: 'Cenário Auditório — sistema maior com 4 microfones sem fio, mesa digital, line array, monitores. Planejamento completo da operação.',
  practicalExamples: ['Discuta a diferença entre mixer analógico e digital.', 'Planeje a disposição do line array e subwoofers.'],
  audienceQuestions: ['Quantos canais serão necessários na mesa?', 'Onde posicionar os microfones sem fio para evitar interferência?'],
  liveDemos: ['Mostre o System Planner para o layout de um auditório.'],
};

export const slide06Notes: PresenterNote = {
  explanation: 'Painel de diagnóstico — o sistema não funciona. Não sai som. O aluno deve investigar usando um checklist. Cada item clicável revela se é ou não o problema.',
  practicalExamples: ['Siga cada item do checklist: Energia, Cabos, Gain, Fader, Mute, Master, Caixa, Phantom, Microfone.', 'Mostre como um checklist sistemático resolve problemas mais rápido.'],
  audienceQuestions: ['Qual item vocês verificariam primeiro?', 'Por que seguir uma ordem lógica em vez de sair apertando botões aleatoriamente?'],
  curiosities: ['Sair ajustando tudo ao mesmo tempo sem identificar a causa é o erro mais comum em diagnósticos.'],
};

export const slide07Notes: PresenterNote = {
  explanation: 'Problemas em tempo real. O público chegou e problemas surgem. Microfonia, notebook sem áudio, microfone desligado, canal errado, voz baixa, ruído. O aluno deve priorizar.',
  practicalExamples: ['Apresente um problema de cada vez e peça decisão rápida.', 'Discuta por que microfonia tem prioridade máxima.'],
  audienceQuestions: ['Qual problema resolveriam primeiro?', 'O que fazer se notebook não emite áudio?'],
  liveDemos: ['Simule cada problema e mostre a solução correta em tempo real.'],
};

export const slide08Notes: PresenterNote = {
  explanation: 'Simulador Completo — o maior simulador do workshop. Mesa, microfones, cabos, caixas, monitores, notebook, EQ, compressor, Gain, Mute, Pan, Fader, HPF. O usuário opera livremente.',
  practicalExamples: ['Deixe os alunos explorarem livremente o simulador.', 'Desafie: ajuste um canal do zero com EQ e compressor.'],
  audienceQuestions: ['Qual controle vocês mais usariam?', 'Para que serve cada botão?'],
  liveDemos: ['Mostre como o sistema responde em tempo real aos ajustes.'],
};

export const slide09Notes: PresenterNote = {
  explanation: 'Caça aos Erros — palco cheio de erros propositais. Microfone apontado para caixa, cabos cruzados, monitor mal posicionado, gain clipando, canal mutado, mesa desligada, caixa desligada, notebook desconectado.',
  practicalExamples: ['Peça para clicarem nos problemas que encontrarem.', 'Depois revele todos e discuta cada um.'],
  audienceQuestions: ['Quantos erros vocês encontraram?', 'Qual erro é mais grave?'],
  curiosities: ['Focar apenas nos erros óbvios e ignorar problemas sutis como ganho baixo é um erro comum.'],
};

export const slide10Notes: PresenterNote = {
  explanation: 'Quiz Final com 10 perguntas misturando todas as 11 aulas. Tempo, pontuação e feedback imediato. Medalhas por performance.',
  practicalExamples: ['Cada pergunta tem 15 segundos para resposta.', 'Mostre a resposta correta com explicação após cada pergunta.'],
  audienceQuestions: ['Qual pergunta foi mais difícil?', 'Ainda há dúvidas sobre algum conceito?'],
  liveDemos: ['Demonstre a pontuação e o sistema de medalhas em tempo real.'],
};

export const slide11Notes: PresenterNote = {
  explanation: 'Missão Final — 15 minutos antes do evento. Equipamentos limitados: 1 mesa, 2 caixas, 2 microfones, notebook, cabos, pedestais. Montar tudo e depois resolver problemas.',
  practicalExamples: ['Timer de 15 minutos. Ao final, surgem problemas para resolver.', 'Avalie: organização, sequência correta, qualidade das soluções.'],
  audienceQuestions: ['Qual problema foi mais desafiador na missão?', 'O que fariam diferente?'],
  liveDemos: ['Deixe cada equipe tentar a missão e compare os resultados.'],
};

export const slide12Notes: PresenterNote = {
  explanation: 'Revisão Geral — animação do fluxo completo do áudio. Pessoa → Microfone → Gain → EQ → Compressão → Mesa → Saída → Caixa → Público. Cada etapa aparece conforme as aulas.',
  practicalExamples: ['Siga o fluxo em tempo real, citando qual aula abordou cada etapa.', 'Pergunte o que aconteceria se qualquer etapa fosse removida.'],
  audienceQuestions: ['Qual etapa do fluxo é mais crítica?', 'O que aprendemos em cada etapa?'],
  curiosities: ['O caminho do som de um microfone até a caixa leva apenas milissegundos, mas passa por dezenas de componentes.'],
};

export const slide13Notes: PresenterNote = {
  explanation: 'As 10 Regras de Ouro do Operador de Áudio. Cada regra aparece com animação elegante. São princípios que todo operador deve internalizar.',
  practicalExamples: ['Leia cada regra e discuta com exemplos práticos.', 'Pergunte qual regra cada um considera mais importante.'],
  audienceQuestions: ['Qual regra vocês acham que quebram com mais frequência?', 'Adicionariam alguma regra?'],
  curiosities: ['Ignorar a regra "Escute antes de mexer" é o erro mais comum de iniciantes.'],
};

export const slide14Notes: PresenterNote = {
  explanation: 'Sua jornada continua. Possibilidades de atuação: eventos, igrejas, podcast, YouTube, lives, teatro, casamentos, estúdio, transmissões. O workshop é só o começo.',
  practicalExamples: ['Mostre cada possibilidade e discuta o que cada uma exige.', 'Compartilhe recursos para continuar aprendendo: canais, cursos, comunidades.'],
  audienceQuestions: ['Qual área vocês têm mais interesse?', 'Como pretendem continuar praticando?'],
  curiosities: ['Muitos operadores de áudio de grandes artistas começaram em igrejas e pequenos eventos.'],
};

export const slide15Notes: PresenterNote = {
  explanation: 'Certificado de conclusão. Elegante, com espaço para nome, carga horária, data, assinatura e logo. Botão para gerar versão simulada.',
  practicalExamples: ['Preencha o certificado com o nome de cada aluno.', 'Mostre como imprimir ou salvar.'],
  audienceQuestions: ['Como vocês se sentem ao receber o certificado?', 'O que esse certificado representa para vocês?'],
  liveDemos: ['Demonstre o certificado preenchido com o nome de cada participante.'],
};

export const slide16Notes: PresenterNote = {
  explanation: 'Encerramento emocionante. Imagem de um operador durante um evento. Agradecimento e frase final. Aplausos opcionais.',
  practicalExamples: ['Agradeça pessoalmente a cada aluno pela jornada.', 'Compartilhe seu contato para dúvidas futuras.'],
  audienceQuestions: ['O que este workshop significou para vocês?', 'Qual conselho dariam para quem está começando?'],
  curiosities: ['A frase final encapsula a filosofia do workshop: áudio não é sobre equipamento, é sobre mensagem.'],
};
