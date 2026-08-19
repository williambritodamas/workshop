export type UserRole = 'admin' | 'user';

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  role: UserRole;
  aulasLiberadas: number[]; // IDs das aulas liberadas (1-12)
  dataCriacao: string;
  ultimoAcesso?: string;
}

export interface LoginCredenciais {
  email: string;
  senha: string;
}

export interface RegistroCadastro {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
}

export interface RespostaAutenticacao {
  token: string;
  usuario: Usuario;
}

export interface ContextoAutenticacao {
  usuarioAtual: Usuario | null;
  isAutenticado: boolean;
  isAdmin: boolean;
  login: (credenciais: LoginCredenciais) => Promise<void>;
  logout: () => void;
  registrar: (dados: RegistroCadastro) => Promise<void>;
  podeAcesar: (aulaId: number) => boolean;
  recarregarUsuario: () => Promise<void>;
}

export interface DadosCertificado {
  nomeAluno: string;
  dataConlusao: string;
  aulasCompletadas: number;
  totalAulas: number;
  instrutorAssinatura?: string;
}