import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Usuario, LoginCredenciais, RegistroCadastro, ContextoAutenticacao } from '../types/auth';

const ContextoAutenticacao = createContext<ContextoAutenticacao | undefined>(undefined);

export const ProvedorAutenticacao: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [usuarioAtual, setUsuarioAtual] = useState<Usuario | null>(null);
  const [usuarios, setUsuarios] = useState<Usuario[]>(() => {
    const dados = localStorage.getItem('usuarios_audio_workshop');
    if (dados) {
      return JSON.parse(dados);
    }
    // Usuário admin padrão
    return [
      {
        id: 'admin-default',
        nome: 'Administrador',
        email: 'admin@audioworkshop.com',
        role: 'admin',
        aulasLiberadas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        dataCriacao: new Date().toISOString(),
      },
    ];
  });

  // Carregar usuário logado do localStorage
  useEffect(() => {
    const usuarioLogado = localStorage.getItem('usuario_logado_audio_workshop');
    if (usuarioLogado) {
      try {
        const dados = JSON.parse(usuarioLogado);
        const usuario = usuarios.find((u) => u.id === dados.id);
        if (usuario) {
          setUsuarioAtual(usuario);
        }
      } catch (e) {
        console.error('Erro ao carregar usuário logado:', e);
      }
    }
  }, [usuarios]);

  const salvarUsuarios = (novosUsuarios: Usuario[]) => {
    setUsuarios(novosUsuarios);
    localStorage.setItem('usuarios_audio_workshop', JSON.stringify(novosUsuarios));
  };

  const login = async (credenciais: LoginCredenciais): Promise<void> => {
    // Buscar usuário por email (em produção, fazer chamada ao backend)
    const usuario = usuarios.find((u) => u.email === credenciais.email);

    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }

    // Verificação simples de senha (em produção, usar hash e backend)
    // Para demo, aceitar qualquer senha para usuário admin
    if (usuario.email === 'admin@audioworkshop.com' || credenciais.senha === 'senha123') {
      // Atualizar último acesso
      const usuarioAtualizado = {
        ...usuario,
        ultimoAcesso: new Date().toISOString(),
      };

      const novosUsuarios = usuarios.map((u) => (u.id === usuario.id ? usuarioAtualizado : u));
      salvarUsuarios(novosUsuarios);
      setUsuarioAtual(usuarioAtualizado);

      // Salvar sessão
      localStorage.setItem(
        'usuario_logado_audio_workshop',
        JSON.stringify({
          id: usuarioAtualizado.id,
          email: usuarioAtualizado.email,
          nome: usuarioAtualizado.nome,
        }),
      );
    } else {
      throw new Error('Email ou senha inválidos');
    }
  };

  const logout = () => {
    setUsuarioAtual(null);
    localStorage.removeItem('usuario_logado_audio_workshop');
  };

  const registrar = async (dados: RegistroCadastro): Promise<void> => {
    if (dados.senha !== dados.confirmarSenha) {
      throw new Error('As senhas não correspondem');
    }

    if (usuarios.some((u) => u.email === dados.email)) {
      throw new Error('Email já cadastrado');
    }

    const novoUsuario: Usuario = {
      id: `user-${Date.now()}`,
      nome: dados.nome,
      email: dados.email,
      role: 'user',
      aulasLiberadas: [1], // Começar com aula 1 liberada
      dataCriacao: new Date().toISOString(),
    };

    const novosUsuarios = [...usuarios, novoUsuario];
    salvarUsuarios(novosUsuarios);
    setUsuarioAtual(novoUsuario);

    // Salvar sessão
    localStorage.setItem(
      'usuario_logado_audio_workshop',
      JSON.stringify({
        id: novoUsuario.id,
        email: novoUsuario.email,
        nome: novoUsuario.nome,
      }),
    );
  };

  const podeAcesar = (aulaId: number): boolean => {
    if (!usuarioAtual) return false;
    if (usuarioAtual.role === 'admin') return true;
    return usuarioAtual.aulasLiberadas.includes(aulaId);
  };

  const valor: ContextoAutenticacao = {
    usuarioAtual,
    isAutenticado: !!usuarioAtual,
    isAdmin: usuarioAtual?.role === 'admin' || false,
    login,
    logout,
    registrar,
    podeAcesar,
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

// Função para atualizar usuários (para admin)
export const useGerenciadorUsuarios = () => {
  const salvarUsuarios = (usuarios: Usuario[]) => {
    localStorage.setItem('usuarios_audio_workshop', JSON.stringify(usuarios));
  };

  const obterUsuarios = (): Usuario[] => {
    const dados = localStorage.getItem('usuarios_audio_workshop');
    return dados ? JSON.parse(dados) : [];
  };

  const atualizarUsuario = (usuarioAtualizado: Usuario) => {
    const usuarios = obterUsuarios();
    const novosUsuarios = usuarios.map((u) =>
      u.id === usuarioAtualizado.id ? usuarioAtualizado : u,
    );
    salvarUsuarios(novosUsuarios);
    return novosUsuarios;
  };

  const removerUsuario = (usuarioId: string) => {
    const usuarios = obterUsuarios();
    const novosUsuarios = usuarios.filter((u) => u.id !== usuarioId);
    salvarUsuarios(novosUsuarios);
    return novosUsuarios;
  };

  const liberarAula = (usuarioId: string, aulaId: number) => {
    const usuarios = obterUsuarios();
    const usuario = usuarios.find((u) => u.id === usuarioId);
    if (usuario && !usuario.aulasLiberadas.includes(aulaId)) {
      usuario.aulasLiberadas.push(aulaId);
      return atualizarUsuario(usuario);
    }
    return usuarios;
  };

  const ocultarAula = (usuarioId: string, aulaId: number) => {
    const usuarios = obterUsuarios();
    const usuario = usuarios.find((u) => u.id === usuarioId);
    if (usuario) {
      usuario.aulasLiberadas = usuario.aulasLiberadas.filter((id) => id !== aulaId);
      return atualizarUsuario(usuario);
    }
    return usuarios;
  };

  return {
    obterUsuarios,
    atualizarUsuario,
    removerUsuario,
    liberarAula,
    ocultarAula,
  };
};
