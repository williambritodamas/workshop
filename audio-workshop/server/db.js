import Database from 'better-sqlite3';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import bcrypt from 'bcryptjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = process.env.DATA_DIR || path.join(__dirname, 'data');
mkdirSync(dataDir, { recursive: true });

const db = new Database(path.join(dataDir, 'audio-workshop.db'));
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha_hash TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'user',
    aulas_liberadas TEXT NOT NULL DEFAULT '[1]',
    data_criacao TEXT NOT NULL,
    ultimo_acesso TEXT
  );
`);

// Seed do administrador padrão na primeira execução
const adminEmail = (process.env.ADMIN_EMAIL || 'admin@audioworkshop.com').trim().toLowerCase();
const adminSenha = process.env.ADMIN_SENHA || 'admin123';

const adminExiste = db.prepare('SELECT id FROM usuarios WHERE email = ?').get(adminEmail);
if (!adminExiste) {
  const senhaHash = bcrypt.hashSync(adminSenha, 10);
  db.prepare(
    `INSERT INTO usuarios (id, nome, email, senha_hash, role, aulas_liberadas, data_criacao)
     VALUES (?, ?, ?, ?, 'admin', ?, ?)`,
  ).run(
    'admin-default',
    'Administrador',
    adminEmail,
    senhaHash,
    JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    new Date().toISOString(),
  );
  console.log(`[db] Admin padrão criado: ${adminEmail} (senha definida em ADMIN_SENHA ou 'admin123')`);
}

const linhaParaPublica = (linha) => ({
  id: linha.id,
  nome: linha.nome,
  email: linha.email,
  role: linha.role,
  aulasLiberadas: JSON.parse(linha.aulas_liberadas || '[1]'),
  dataCriacao: linha.data_criacao,
  ultimoAcesso: linha.ultimo_acesso ?? undefined,
});

export function listarUsuarios() {
  const linhas = db
    .prepare(
      'SELECT id, nome, email, role, aulas_liberadas, data_criacao, ultimo_acesso FROM usuarios ORDER BY data_criacao ASC',
    )
    .all();
  return linhas.map(linhaParaPublica);
}

export function buscarUsuarioPorEmail(email) {
  return db.prepare('SELECT * FROM usuarios WHERE email = ?').get(email) ?? null;
}

export function buscarUsuarioPorId(id) {
  return db.prepare('SELECT * FROM usuarios WHERE id = ?').get(id) ?? null;
}

export function criarUsuario({ nome, email, senhaHash, role, aulasLiberadas }) {
  const id = `user-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  db.prepare(
    `INSERT INTO usuarios (id, nome, email, senha_hash, role, aulas_liberadas, data_criacao)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
  ).run(id, nome, email, senhaHash, role, JSON.stringify(aulasLiberadas), new Date().toISOString());
  return buscarUsuarioPorId(id);
}

export function atualizarUsuario(id, campos) {
  const chaves = Object.keys(campos);
  if (chaves.length === 0) return;
  const sets = chaves.map((chave) => `${chave} = ?`).join(', ');
  db.prepare(`UPDATE usuarios SET ${sets} WHERE id = ?`).run(...chaves.map((chave) => campos[chave]), id);
}

export function removerUsuario(id) {
  db.prepare('DELETE FROM usuarios WHERE id = ?').run(id);
}

export function atualizarUltimoAcesso(id) {
  db.prepare('UPDATE usuarios SET ultimo_acesso = ? WHERE id = ?').run(new Date().toISOString(), id);
}

export function paraPublico(linha) {
  if (!linha) return null;
  return linhaParaPublica(linha);
}

export default db;