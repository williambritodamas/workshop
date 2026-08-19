import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type {
  Usuario,
  LoginCredenciais,
  RegistroCadastro,
  ContextoAutenticacao,
  RespostaAutenticacao,
} from '../types/auth';
import { apiGet, apiPost, apiPatch, apiDelete, getToken, setToken } from '../lib/api';

const ContextoAutenticacao = createContext<ContextoAutenticacao | undefined>(undefined);

export const ProvedorAutenticacao: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [usuarioAtual, setUsuarioAtual] = useState<Usuario | null>(null);

  // Restaurar sessão ao montar (se houver token válido)
  useEffect(() => {
    const restaurarSessao = async () => {
      if (!getToken()) return;
      try {
        const { usuario } = await apiGet<{ usuario: Usuario }>('/auth/me');
        setUsuarioAtual(usuario);
      } catch {
        setToken(null);
        setUsuarioAtual(null);
      }
    };
    restaurarSessao();
  }, []);

  const login = async (credenciais: LoginCredenciais): Promise<void> => {
    const { token, usuario } = await apiPost<RespostaAutenticacao>(
      '/auth/login',
      credenciais,
      false,
    );
    setToken(token);
    setUsuarioAtual(usuario);
  };

  const logout = () => {
    setToken(null);
    setUsuarioAtual(null);
  };

  const registrar = async (dados: RegistroCadastro): Promise<void> => {
    const { token, usuario } = await apiPost<RespostaAutenticacao>(
      '/auth/registro',
      { nome: dados.nome, email: dados.email, senha: dados.senha },
      false,
    );
    setToken(token);
    setUsuarioAtual(usuario);
  };

  const podeAcesar = (aulaId: number): boolean => {
    if (!usuarioAtual) return false;
    if (usuarioAtual.role === 'admin') return true;
    return usuarioAtual.aulasLiberadas.includes(aulaId);
  };

  const recarregarUsuario = useCallback(async (): Promise<void> => {
    if (!getToken()) return;
    try {
      const { usuario } = await apiGet<{ usuario: Usuario }>('/auth/me');
      setUsuarioAtual(usuario);
    } catch {
      setToken(null);
      setUsuarioAtual(null);
    }
  }, []);

  const valor: ContextoAutenticacao = {
    usuarioAtual,
    isAutenticado: !!usuarioAtual,
    isAdmin: usuarioAtual?.role === 'admin' || false,
    login,
    logout,
    registrar,
    podeAcesar,
    recarregarUsuario,
  };

  return (
    <ContextoAutenticacao.Provider value={valor}>{children}</ContextoAutenticacao.Provider>
  );
};

export const useAutenticacao = () => {
  const contexto = useContext(ContextoAutenticacao);
  if (!contexto) {
    throw new Error(
      'useAutenticacao deve ser usado dentro de ProvedorAutenticacao',
    );
  }
  return contexto;
};

// Função para atualizar usuários (para admin) via API
export const useGerenciadorUsuarios = () => {
  const obterUsuarios = async (): Promise<Usuario[]> => {
    const { usuarios } = await apiGet<{ usuarios: Usuario[] }>('/usuarios');
    return usuarios;
  };

  const criarUsuario = async (dados: {
    nome: string;
    email: string;
    senha: string;
    role: 'admin' | 'user';
  }): Promise<Usuario> => {
    const { usuario } = await apiPost<{ usuario: Usuario }>('/usuarios', dados);
    return usuario;
  };

  const atualizarUsuario = async (
    usuarioId: string,
    mudancas: {
      nome?: string;
      email?: string;
      senha?: string;
      role?: 'admin' | 'user';
      aulasLiberadas?: number[];
    },
  ): Promise<Usuario[]> => {
    await apiPatch(`/usuarios/${usuarioId}`, mudancas);
    return obterUsuarios();
  };

  const removerUsuario = async (usuarioId: string): Promise<Usuario[]> => {
    await apiDelete(`/usuarios/${usuarioId}`);
    return obterUsuarios();
  };

  const liberarAula = async (usuarioId: string, aulaId: number): Promise<Usuario[]> => {
    const usuarios = await obterUsuarios();
    const alvo = usuarios.find((u) => u.id === usuarioId);
    if (alvo && !alvo.aulasLiberadas.includes(aulaId)) {
      await apiPatch(`/usuarios/${usuarioId}`, {
        aulasLiberadas: [...alvo.aulasLiberadas, aulaId],
      });
    }
    return obterUsuarios();
  };

  const ocultarAula = async (usuarioId: string, aulaId: number): Promise<Usuario[]> => {
    const usuarios = await obterUsuarios();
    const alvo = usuarios.find((u) => u.id === usuarioId);
    if (alvo) {
      await apiPatch(`/usuarios/${usuarioId}`, {
        aulasLiberadas: alvo.aulasLiberadas.filter((id) => id !== aulaId),
      });
    }
    return obterUsuarios();
  };

  return {
    obterUsuarios,
    criarUsuario,
    atualizarUsuario,
    removerUsuario,
    liberarAula,
    ocultarAula,
  };
};