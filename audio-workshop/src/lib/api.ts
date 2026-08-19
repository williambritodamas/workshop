const API_URL = import.meta.env.VITE_API_URL || '/api';
const TOKEN_KEY = 'token_audio_workshop';

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string | null): void {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    localStorage.removeItem(TOKEN_KEY);
  }
}

interface RequestOptions {
  method?: string;
  body?: unknown;
  token?: boolean;
}

export async function api<T = unknown>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  const { method = 'GET', body, token = true } = options;
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    const jwt = getToken();
    if (jwt) {
      headers.Authorization = `Bearer ${jwt}`;
    }
  }

  const resposta = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!resposta.ok) {
    let mensagem = `Erro ${resposta.status}`;
    try {
      const dados = await resposta.json();
      if (dados?.erro) {
        mensagem = dados.erro;
      }
    } catch {
      // corpo não é JSON
    }
    const erro = new Error(mensagem) as Error & { status?: number };
    erro.status = resposta.status;
    throw erro;
  }

  if (resposta.status === 204) {
    return undefined as T;
  }

  return (await resposta.json()) as T;
}

export const apiGet = <T = unknown>(path: string, token = true) =>
  api<T>(path, { method: 'GET', token });
export const apiPost = <T = unknown>(path: string, body?: unknown, token = true) =>
  api<T>(path, { method: 'POST', body, token });
export const apiPatch = <T = unknown>(path: string, body?: unknown) =>
  api<T>(path, { method: 'PATCH', body });
export const apiDelete = <T = unknown>(path: string) =>
  api<T>(path, { method: 'DELETE' });