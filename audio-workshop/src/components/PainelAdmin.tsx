import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Trash2,
  ChevronDown,
  ChevronUp,
  Shield,
  Check,
  Plus,
  X,
} from 'lucide-react';
import { useGerenciadorUsuarios } from '../contexts/AutenticacaoContext';
import type { Usuario } from '../types/auth';

interface PainelAdminProps {
  onVoltar: () => void;
}

const AULAS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  titulo: `Aula ${i + 1}`,
}));

export const PainelAdmin: React.FC<PainelAdminProps> = ({ onVoltar }) => {
  const { obterUsuarios, removerUsuario, liberarAula, ocultarAula } =
    useGerenciadorUsuarios();
  const [usuarios, setUsuarios] = useState<Usuario[]>(obterUsuarios());
  const [usuarioExpandido, setUsuarioExpandido] = useState<string | null>(null);
  const [filtro, setFiltro] = useState<'todos' | 'admin' | 'user'>('todos');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [novoUsuario, setNovoUsuario] = useState({
    nome: '',
    email: '',
    role: 'user' as 'admin' | 'user',
  });
  const [erroFormulario, setErroFormulario] = useState<string | null>(null);

  const usuariosFilatrados = usuarios.filter((u) => {
    if (filtro === 'todos') return true;
    return u.role === filtro;
  });

  const handleRemoverUsuario = (usuarioId: string) => {
    if (confirm('Tem certeza que deseja remover este usuário?')) {
      removerUsuario(usuarioId);
      setUsuarios(obterUsuarios());
    }
  };

  const handleToggleAula = (usuarioId: string, aulaId: number, liberada: boolean) => {
    if (liberada) {
      ocultarAula(usuarioId, aulaId);
    } else {
      liberarAula(usuarioId, aulaId);
    }
    setUsuarios(obterUsuarios());
  };

  const handleCriarUsuario = () => {
    setErroFormulario(null);

    if (!novoUsuario.nome || !novoUsuario.email) {
      setErroFormulario('Nome e email são obrigatórios');
      return;
    }

    if (usuarios.some((u) => u.email === novoUsuario.email)) {
      setErroFormulario('Email já cadastrado');
      return;
    }

    const usuarioParaCriar: Usuario = {
      id: `user-${Date.now()}`,
      nome: novoUsuario.nome,
      email: novoUsuario.email,
      role: novoUsuario.role,
      aulasLiberadas: novoUsuario.role === 'admin' ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] : [1],
      dataCriacao: new Date().toISOString(),
    };

    const usuariosAtualizados = [...usuarios, usuarioParaCriar];
    localStorage.setItem('usuarios_audio_workshop', JSON.stringify(usuariosAtualizados));
    setUsuarios(usuariosAtualizados);
    setMostrarFormulario(false);
    setNovoUsuario({ nome: '', email: '', role: 'user' });
  };

  return (
    <div className="min-h-screen w-full p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Cabeçalho */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-white">Painel de Admin</h1>
              <p className="text-slate-400">Gerencie usuários e aulas</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onVoltar}
            className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-bold hover:border-slate-600 transition-all"
          >
            Voltar
          </motion.button>
        </div>

        {/* Filtros */}
        <div className="flex gap-3 flex-wrap items-center">
          {(['todos', 'admin', 'user'] as const).map((f) => (
            <motion.button
              key={f}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFiltro(f)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filtro === f
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {f === 'todos' ? 'Todos' : f === 'admin' ? 'Administradores' : 'Usuários'}
            </motion.button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMostrarFormulario(true)}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold transition-all flex items-center gap-2 ml-auto"
          >
            <Plus className="w-5 h-5" />
            Novo Usuário
          </motion.button>
        </div>
      </motion.div>

      {/* Lista de Usuários */}
      <div className="space-y-3 max-w-6xl">
        <AnimatePresence mode="popLayout">
          {usuariosFilatrados.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12 px-6 rounded-2xl bg-slate-800/50 border border-slate-700"
            >
              <Users className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="text-slate-400">Nenhum usuário encontrado</p>
            </motion.div>
          ) : (
            usuariosFilatrados.map((usuario, idx) => (
              <motion.div
                key={usuario.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-2xl bg-slate-900/50 border border-slate-800 overflow-hidden"
              >
                {/* Header do Usuário */}
                <motion.button
                  onClick={() =>
                    setUsuarioExpandido(
                      usuarioExpandido === usuario.id ? null : usuario.id,
                    )
                  }
                  className="w-full p-4 flex items-center justify-between hover:bg-slate-800/30 transition-colors text-left group"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                        usuario.role === 'admin'
                          ? 'bg-gradient-to-br from-purple-600 to-pink-500'
                          : 'bg-gradient-to-br from-blue-600 to-cyan-500'
                      }`}
                    >
                      {usuario.nome.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white">{usuario.nome}</h3>
                        {usuario.role === 'admin' && (
                          <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                            <span className="text-xs font-bold text-purple-400 flex items-center gap-1">
                              <Shield className="w-3 h-3" />
                              Admin
                            </span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-slate-400">{usuario.email}</p>
                    </div>
                  </div>
                  {usuarioExpandido === usuario.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 group-hover:text-slate-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-slate-300" />
                  )}
                </motion.button>

                {/* Conteúdo Expandido */}
                <AnimatePresence>
                  {usuarioExpandido === usuario.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-slate-800 p-4 bg-slate-800/20"
                    >
                      {/* Aulas */}
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-white mb-3">
                          Controle de Aulas
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                          {AULAS.map((aula) => {
                            const liberada = usuario.aulasLiberadas.includes(aula.id);
                            return (
                              <motion.button
                                key={aula.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() =>
                                  handleToggleAula(usuario.id, aula.id, liberada)
                                }
                                className={`relative p-3 rounded-lg font-bold text-sm transition-all ${
                                  liberada
                                    ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-300'
                                    : 'bg-slate-800/50 border border-slate-700 text-slate-400 hover:border-slate-600'
                                }`}
                              >
                                {aula.id}
                                {liberada && (
                                  <Check className="w-3 h-3 absolute top-1 right-1 text-emerald-400" />
                                )}
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Informações */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                          <p className="text-xs text-slate-500 mb-1">Aulas Liberadas</p>
                          <p className="text-xl font-bold text-white">
                            {usuario.aulasLiberadas.length}
                          </p>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                          <p className="text-xs text-slate-500 mb-1">Membro desde</p>
                          <p className="text-sm text-white font-semibold">
                            {new Date(usuario.dataCriacao).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                      </div>

                      {/* Botão Remover (só se não for admin padrão) */}
                      {usuario.id !== 'admin-default' && (
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleRemoverUsuario(usuario.id)}
                          className="w-full px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 font-bold hover:bg-red-500/20 transition-all flex items-center justify-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remover Usuário
                        </motion.button>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Modal de Criar Novo Usuário */}
      <AnimatePresence>
        {mostrarFormulario && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setMostrarFormulario(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl shadow-black/50 p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Criar Novo Usuário</h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMostrarFormulario(false)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all"
                >
                  <X className="w-5 h-5 text-slate-300" />
                </motion.button>
              </div>

              {erroFormulario && (
                <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                  {erroFormulario}
                </div>
              )}

              <div className="space-y-4">
                {/* Nome */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Nome</label>
                  <input
                    type="text"
                    value={novoUsuario.nome}
                    onChange={(e) => setNovoUsuario({ ...novoUsuario, nome: e.target.value })}
                    placeholder="Nome completo"
                    className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Email</label>
                  <input
                    type="email"
                    value={novoUsuario.email}
                    onChange={(e) => setNovoUsuario({ ...novoUsuario, email: e.target.value })}
                    placeholder="usuario@email.com"
                    className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Tipo de Perfil</label>
                  <div className="grid grid-cols-2 gap-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setNovoUsuario({ ...novoUsuario, role: 'user' })}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        novoUsuario.role === 'user'
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      Aluno
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setNovoUsuario({ ...novoUsuario, role: 'admin' })}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        novoUsuario.role === 'admin'
                          ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      Admin
                    </motion.button>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMostrarFormulario(false)}
                  className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white font-semibold hover:bg-slate-700 transition-all"
                >
                  Cancelar
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCriarUsuario}
                  className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold hover:from-emerald-500 hover:to-teal-400 transition-all"
                >
                  Criar Usuário
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed bottom-6 left-6 right-6 max-w-sm p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 shadow-xl"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-slate-400 mb-1">Total de Usuários</p>
            <p className="text-2xl font-black text-white">{usuarios.length}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Administradores</p>
            <p className="text-2xl font-black text-purple-400">
              {usuarios.filter((u) => u.role === 'admin').length}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
