import { Router } from 'express';
import bcrypt from 'bcryptjs';
import {
  criarUsuario,
  buscarUsuarioPorEmail,
  buscarUsuarioPorId,
  atualizarUltimoAcesso,
  paraPublico,
} from '../db.js';
import { gerarToken, authJWT } from '../auth.js';

const router = Router();

router.post('/registro', async (req, res) => {
  const { nome, email, senha } = req.body || {};

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: 'Nome, email e senha são obrigatórios' });
  }
  if (String(senha).length < 6) {
    return res.status(400).json({ erro: 'A senha deve ter pelo menos 6 caracteres' });
  }

  const emailNormalizado = String(email).trim().toLowerCase();
  if (buscarUsuarioPorEmail(emailNormalizado)) {
    return res.status(409).json({ erro: 'Email já cadastrado' });
  }

  const senhaHash = await bcrypt.hash(senha, 10);
  const usuario = criarUsuario({
    nome: nome.trim(),
    email: emailNormalizado,
    senhaHash,
    role: 'user',
    aulasLiberadas: [1],
  });

  res.status(201).json({ token: gerarToken(usuario), usuario: paraPublico(usuario) });
});

router.post('/login', async (req, res) => {
  const { email, senha } = req.body || {};

  if (!email || !senha) {
    return res.status(400).json({ erro: 'Email e senha são obrigatórios' });
  }

  const usuario = buscarUsuarioPorEmail(String(email).trim().toLowerCase());
  if (!usuario) {
    return res.status(401).json({ erro: 'Email ou senha inválidos' });
  }

  const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash);
  if (!senhaCorreta) {
    return res.status(401).json({ erro: 'Email ou senha inválidos' });
  }

  atualizarUltimoAcesso(usuario.id);
  const atualizado = buscarUsuarioPorId(usuario.id);

  res.json({ token: gerarToken(atualizado), usuario: paraPublico(atualizado) });
});

router.get('/me', authJWT, (req, res) => {
  const usuario = buscarUsuarioPorId(req.usuario.id);
  if (!usuario) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }
  res.json({ usuario: paraPublico(usuario) });
});

export default router;