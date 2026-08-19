import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, AlertCircle, Music, CheckCircle2 } from 'lucide-react';
import { useAutenticacao } from '../contexts/AutenticacaoContext';
import type { RegistroCadastro } from '../types/auth';

interface PaginaRegistroProps {
  onLoginClick: () => void;
}

export const PaginaRegistro: React.FC<PaginaRegistroProps> = ({ onLoginClick }) => {
  const [dados, setDados] = useState<RegistroCadastro>({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });
  const [erro, setErro] = useState<string | null>(null);
  const [sucesso, setSucesso] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const { registrar } = useAutenticacao();

  const handleMudanca = (campo: keyof RegistroCadastro, valor: string) => {
    setDados((prev) => ({ ...prev, [campo]: valor }));
    setErro(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);
    setErro(null);

    try {
      if (!dados.nome || !dados.email || !dados.senha || !dados.confirmarSenha) {
        throw new Error('Todos os campos são obrigatórios');
      }

      if (dados.senha.length < 6) {
        throw new Error('A senha deve ter pelo menos 6 caracteres');
      }

      if (dados.senha !== dados.confirmarSenha) {
        throw new Error('As senhas não correspondem');
      }

      await registrar(dados);
      setSucesso(true);

      // O App.tsx vai redirecionar automaticamente para 'app' quando isAutenticado ficar true
      setTimeout(() => {
        setSucesso(false);
      }, 3000);
    } catch (err) {
      setErro(
        err instanceof Error ? err.message : 'Erro ao registrar. Tente novamente.',
      );
    } finally {
      setCarregando(false);
    }
  };

  if (sucesso) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="flex justify-center mb-4"
          >
            <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-2">Cadastro Realizado!</h2>
          <p className="text-slate-400 mb-6">
            Sua conta foi criada com sucesso. Redirecionando para o workshop...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo e Título */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: 'spring' }}
            className="flex justify-center mb-4"
          >
            <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 shadow-lg shadow-emerald-500/20">
              <Music className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <h1 className="text-3xl font-black text-white mb-2">Cadastre-se</h1>
          <p className="text-slate-400">Crie sua conta e comece a aprender</p>
        </div>

        {/* Cartão de Registro */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm shadow-2xl shadow-black/30"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Erro */}
            {erro && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30"
              >
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span className="text-sm text-red-300">{erro}</span>
              </motion.div>
            )}

            {/* Nome */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Nome Completo</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  value={dados.nome}
                  onChange={(e) => handleMudanca('nome', e.target.value)}
                  placeholder="Seu Nome"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  value={dados.email}
                  onChange={(e) => handleMudanca('email', e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  required
                />
              </div>
            </div>

            {/* Senha */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="password"
                  value={dados.senha}
                  onChange={(e) => handleMudanca('senha', e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  required
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">Mínimo 6 caracteres</p>
            </div>

            {/* Confirmar Senha */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Confirmar Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="password"
                  value={dados.confirmarSenha}
                  onChange={(e) => handleMudanca('confirmarSenha', e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  required
                />
              </div>
            </div>

            {/* Botão Registrar */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={carregando}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold hover:from-emerald-500 hover:to-teal-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20 mt-6"
            >
              {carregando ? 'Criando conta...' : 'Criar Conta'}
            </motion.button>
          </form>

          {/* Divisor */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-slate-900 text-slate-500">ou</span>
            </div>
          </div>

          {/* Botão Voltar Login */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onLoginClick}
            className="w-full py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white font-bold hover:border-slate-600 hover:bg-slate-800 transition-all"
          >
            Já tem conta? Faça login
          </motion.button>
        </motion.div>

        {/* Footer */}
        <p className="text-center text-slate-500 text-xs mt-6">
          Ao se registrar, você concorda com nossos Termos de Serviço
        </p>
      </motion.div>
    </div>
  );
};
