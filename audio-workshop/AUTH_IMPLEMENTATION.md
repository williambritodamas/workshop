# Sistema de Autenticação - Audio Workshop

## 📋 Resumo da Implementação

Este documento descreve o sistema completo de autenticação do Audio Workshop: backend Node/Express com SQLite + JWT + bcrypt, login, registro, painel admin e controle de acesso a aulas.

## ✅ Funcionalidades Implementadas

### 1. **Backend** (`server/`)
- ✅ API REST com Express (`server/index.js`, porta `PORT || 3007`)
- ✅ Banco SQLite via `better-sqlite3` (`server/db.js`, arquivo em `server/data/audio-workshop.db`)
- ✅ Senhas com hash bcrypt (`bcryptjs`) — `senha_hash` nunca retorna nas respostas
- ✅ JWT com expiração de 7 dias (`server/auth.js`, secret via env `JWT_SECRET`)
- ✅ Rotas de auth (`server/rotas/auth.js`): `POST /api/registro`, `POST /api/login`, `GET /api/me`
- ✅ CRUD de usuários admin-only (`server/rotas/usuarios.js`): `GET/POST/PATCH/DELETE /api/usuarios`
- ✅ Seed do admin no primeiro boot: `admin@audioworkshop.com` / `admin123` (env `ADMIN_SENHA`)
- ✅ Em produção, o Express serve a build (`dist/`) com fallback SPA

**Credenciais de Demonstração (admin):**
- Email: `admin@audioworkshop.com`
- Senha: `admin123`

### 2. **Cliente HTTP** (`src/lib/api.ts`)
- ✅ Base URL de `VITE_API_URL || '/api'` (proxy do Vite para `http://localhost:3007` em dev)
- ✅ Token JWT armazenado em `localStorage` (key `token_audio_workshop`)
- ✅ Helpers `apiGet`, `apiPost`, `apiPatch`, `apiDelete` com `Authorization: Bearer`

### 3. **Contexto de Autenticação** (`src/contexts/AutenticacaoContext.tsx`)
- ✅ Login/registro via API real (senha errada → erro retornado pela API)
- ✅ Sessão restaurada no mount via `GET /api/me`
- ✅ `recarregarUsuario()` sincroniza permissões após mudanças no admin
- ✅ `useGerenciadorUsuarios` com `obterUsuarios`, `criarUsuario`, `atualizarUsuario`, `removerUsuario`, `liberarAula`, `ocultarAula`
- ✅ Controle de acesso por roles (admin/user) e `aulas_liberadas`

### 4. **Página de Login** (`src/components/PaginaLogin.tsx`)
- ✅ Interface limpa e responsiva
- ✅ Validação de email e senha
- ✅ Mensagens de erro com feedback visual
- ✅ Link para criação de conta
- ✅ Dica de credenciais de demo

### 5. **Página de Registro** (`src/components/PaginaRegistro.tsx`)
- ✅ Formulário com validação
- ✅ Confirmação de senha
- ✅ Verificação de força de senha (mínimo 6 caracteres)
- ✅ Tela de sucesso com redirecionamento automático

### 6. **Painel Admin** (`src/components/PainelAdmin.tsx`)
- ✅ Filtro de usuários (Todos / Admins / Usuários)
- ✅ Cartões expansíveis com informações de usuário
- ✅ Criação de usuário **com senha definida pelo admin**
- ✅ Toggle de 12 aulas (liberar/ocultar)
- ✅ Exclusão de usuários
- ✅ Estados de carregamento/erro

### 7. **Controle de Acesso às Aulas** (`src/AppConteudo.tsx`)
- ✅ Verificação de permissão antes de acessar aula
- ✅ Filtro de aulas baseado em permissões
- ✅ Botão de admin apenas para administradores
- ✅ **Modo apresentador (`?mode=presentation`) e notas apenas para admin**
- ✅ Botão de logout

### 8. **Certificado Interativo** (`src/components/ui/CertificadoComplete.tsx`)
- ✅ Certificado com dados do usuário (nome do cadastro)
- ✅ Geração de PDF com html2canvas + jsPDF
- ✅ Tratamento de erros

### 9. **Tipos TypeScript** (`src/types/auth.ts`)
- ✅ `Usuario` (sem senha), `RespostaAutenticacao { token, usuario }`, `ContextoAutenticacao`
- ✅ Credenciais de Login e Registro

## 🏗️ Arquitetura

```
audio-workshop/
├── server/                        # Backend
│   ├── index.js                   # Express + serve dist/ em produção
│   ├── db.js                      # SQLite (tabela usuarios) + seed admin
│   ├── auth.js                    # JWT + middlewares (authJWT, exigeAdmin)
│   ├── rotas/
│   │   ├── auth.js                # registro / login / me
│   │   └── usuarios.js            # CRUD admin
│   └── data/                      # audio-workshop.db (gitignored)
├── src/
│   ├── lib/
│   │   └── api.ts                 # Cliente HTTP + token
│   ├── contexts/
│   │   └── AutenticacaoContext.tsx # Context + Hooks
│   ├── components/
│   │   ├── PaginaLogin.tsx        # Login UI
│   │   ├── PaginaRegistro.tsx     # Registro UI
│   │   ├── PainelAdmin.tsx        # Admin Dashboard
│   │   └── slides/                # Registro central de slides (12 aulas)
│   ├── types/
│   │   └── auth.ts                # Tipos
│   ├── AppConteudo.tsx            # App principal com auth
│   ├── App.tsx                    # Orquestrador de auth
│   └── main.tsx                   # Entry point
```

## 🔄 Fluxo de Autenticação

1. **Usuário entra na app** → Vê tela de Login
2. **Login/Registro** → API valida e retorna `{ token, usuario }`; token no localStorage
3. **Após autenticação** → Vê seletor de aulas
4. **Acesso a aula** → Verificação de `aulas_liberadas`
5. **Admin** → Acesso a painel de gerenciamento (via API)
6. **Conclusão** → Certificado com dados personalizados

## 💾 Armazenamento de Dados

### Backend (SQLite — `server/data/audio-workshop.db`)

Tabela `usuarios`:
| coluna | descrição |
| --- | --- |
| `id` | INTEGER auto-increment |
| `nome` | Nome completo |
| `email` | Email único |
| `senha_hash` | Hash bcrypt (nunca exposto) |
| `role` | `'admin'` ou `'user'` |
| `aulas_liberadas` | JSON array de IDs (1-12) |
| `data_criacao` | ISO string |
| `ultimo_acesso` | ISO string |

### Frontend (localStorage)
- `token_audio_workshop` — token JWT de sessão

## 🎓 Aulas e Acesso

Total de 12 aulas (registro central em `src/components/slides/registroAulas.tsx`):
1. O que é Som?
2. Conhecendo os Equipamentos
3. O Caminho do Som
4. Microfones
5. Mesas de Som
6. Ganho
7. Equalização
8. Compressão
9. Fase
10. Feedback
11. Montagem de Sistemas
12. Prática Completa

**Política de Acesso:**
- Novos usuários: Aula 1 liberada automaticamente
- Admins: Todas as aulas liberadas
- Usuários: Apenas aulas liberadas pelo admin
- Modo apresentador e notas do apresentador: somente admin

## 🔐 Segurança

- ✅ Senhas com hash bcrypt (nunca em texto puro)
- ✅ `senha_hash` nunca retorna nas respostas da API
- ✅ JWT com expiração (7 dias) e secret via env `JWT_SECRET`
- ✅ Rotas de usuários protegidas por `exigeAdmin`
- ✅ Email único validado (duplicado → 409)
- ✅ Em produção: `NODE_ENV=production` e variáveis via env (porta, secret, senha admin)
- ⚠️ Melhoria futura: cookie httpOnly em vez de localStorage para o token

## 🚀 Como Usar

### Iniciar desenvolvimento (API + frontend):
```bash
cd audio-workshop
npm install
npm run install:server   # instala deps do server/
npm run dev:all          # roda API (3007) + Vite (3006) juntos
```
Acesse `http://localhost:3006/`

Ou em dois terminais:
```bash
npm run server   # API em http://localhost:3007
npm run dev      # Vite em http://localhost:3006
```

### Testar como Admin:
1. Email: `admin@audioworkshop.com`, Senha: `admin123`
2. Clique em "Painel Admin"
3. Crie usuários definindo nome, email, senha e perfil

### Testar como Usuário:
1. Clique em "Criar Conta"
2. Preencha formulário (senha mínima 6 caracteres)
3. Faça login
4. Admin deve liberar aulas adicionais

### Docker:
```bash
npm run build
docker build -t audio-workshop .
docker run -p 3007:3007 -v audio-workshop-data:/app/server/data audio-workshop
```
Acesse `http://localhost:3007/`

### Variáveis de Ambiente:
| variável | default | uso |
| --- | --- | --- |
| `PORT` | `3007` | Porta da API |
| `FRONTEND_PORT` | `3006` | Porta do Vite (dev) |
| `BACKEND_URL` | `http://localhost:3007` | Alvo do proxy do Vite |
| `JWT_SECRET` | valor de dev | Secret do JWT |
| `ADMIN_SENHA` | `admin123` | Senha inicial do admin (1º boot) |
| `VITE_API_URL` | `/api` | Base URL da API no frontend |

## 📝 Melhorias Futuras

- [x] Backend com autenticação real
- [x] Banco de dados para persistência
- [ ] Cookie httpOnly para o token
- [ ] Recuperação de senha / email de confirmação
- [ ] Dashboard de progresso
- [ ] Busca/edição de usuários no painel

---

**Versão:** 2.0.0
**Status:** Backend real implementado