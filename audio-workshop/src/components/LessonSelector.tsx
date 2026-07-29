import { motion } from 'framer-motion';
import { Music, Mic, Sliders, Sparkles, ArrowRight } from 'lucide-react';

interface LessonSelectorProps {
  onSelect: (lesson: 1 | 2) => void;
}

const lessons = [
  {
    id: 1 as const,
    title: 'O que é Som?',
    subtitle: 'Conceitos fundamentais de acústica e eletroacústica',
    description: 'Entenda o que é o som, como ele se propaga, e conheça os princípios básicos de microfones, alto-falantes e o fluxo de sinal.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
    icon: <Music className="w-8 h-8" />,
    color: 'from-blue-600 to-cyan-500',
    badge: '14 slides',
  },
  {
    id: 2 as const,
    title: 'Conhecendo os Equipamentos',
    subtitle: 'Microfones, mesas, cabos e caixas de som',
    description: 'Explore cada equipamento de um sistema de áudio profissional: do microfone à caixa de som, passando por mesas, cabos, DI boxes e amplificadores.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
    icon: <Sliders className="w-8 h-8" />,
    color: 'from-purple-600 to-pink-500',
    badge: '15 slides',
  },
];

export default function LessonSelector({ onSelect }: LessonSelectorProps) {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Background com gradiente e efeito de ondas */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30">
              <Mic className="w-8 h-8 text-blue-400" />
            </div>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-4">
            Áudio sem{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Mistério
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Desmistificando os conceitos fundamentais de áudio para quem está começando do zero.
          </p>
        </motion.div>

        {/* Grid de Cards das Aulas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl">
          {lessons.map((lesson, idx) => (
            <motion.button
              key={lesson.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: 'easeOut' }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(lesson.id)}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl text-left transition-all hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Imagem de fundo com overlay */}
              <div className="relative h-48 md:h-56 w-full overflow-hidden">
                <img
                  src={lesson.image}
                  alt={lesson.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              </div>

              {/* Conteúdo do card */}
              <div className="relative p-6 md:p-7">
                {/* Badge e ícone */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
                    {lesson.badge}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                    {lesson.icon}
                  </div>
                </div>

                {/* Título e descrição */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-1.5 group-hover:text-blue-400 transition-colors">
                  Aula {lesson.id} — {lesson.title}
                </h2>
                <p className="text-sm text-slate-400 font-medium mb-3">
                  {lesson.subtitle}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {lesson.description}
                </p>

                {/* Botão de ação no rodapé do card */}
                <div className="mt-5 flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>Iniciar Aula</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Gradiente decorativo no canto */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${lesson.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />
            </motion.button>
          ))}
        </div>

        {/* Rodapé */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-xs text-slate-600 text-center"
        >
          Workshop de Introdução ao Audiovisual — Pressione N para notas do apresentador durante as aulas
        </motion.p>
      </div>
    </div>
  );
}
