import { Router } from 'express';
import bcrypt from 'bcryptjs';
import {
  listarUsuarios,
  criarUsuario,
  buscarUsuarioPorEmail,
  buscarUsuarioPorId,
  atualizarUsuario,
  removerUsuario,
  paraPublico,
} from '../db.js';
import { authJWT, exigeAdmin } from '../auth.js';

const router = Router();

router.use(authJWT, exigeAdmin);

const TODAS_AS_AULAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

router.get('/', (req, res) => {
  res.json({ usuarios: listarUsuarios() });
});

router.post('/', async (req, res) => {
  const { nome, email, senha, role } = req.body || {};

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

  const r = role === 'admin' ? 'admin' : 'user';
  const senhaHash = await bcrypt.hash(senha, 10);
  const usuario = criarUsuario({
    nome: nome.trim(),
    email: emailNormalizado,
    senhaHash,
    role: r,
    aulasLiberadas: r === 'admin' ? TODAS_AS_AULAS : [1],
  });

  res.status(201).json({ usuario: paraPublico(usuario) });
});

router.patch('/:id', async (req, res) => {
  const { nome, email, senha, role, aulasLiberadas } = req.body || {};
  const alvo = buscarUsuarioPorId(req.params.id);
  if (!alvo) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }

  const campos = {};

  if (nome !== undefined) {
    const nomeLimpo = String(nome).trim();
    if (!nomeLimpo) {
      return res.status(400).json({ erro: 'Nome não pode ficar vazio' });
    }
    campos.nome = nomeLimpo;
  }

  if (email !== undefined) {
    const emailNormalizado = String(email).trim().toLowerCase();
    if (!emailNormalizado) {
      return res.status(400).json({ erro: 'Email não pode ficar vazio' });
    }
    const existe = buscarUsuarioPorEmail(emailNormalizado);
    if (existe && existe.id !== alvo.id) {
      return res.status(409).json({ erro: 'Email já cadastrado' });
    }
    campos.email = emailNormalizado;
  }

  if (senha !== undefined && senha !== '') {
    if (String(senha).length < 6) {
      return res.status(400).json({ erro: 'A senha deve ter pelo menos 6 caracteres' });
    }
    campos.senha_hash = await bcrypt.hash(senha, 10);
  }

  if (role !== undefined) {
    const novoRole = role === 'admin' ? 'admin' : 'user';
    campos.role = novoRole;
    // Administradores recebem acesso a todas as aulas automaticamente
    if (novoRole === 'admin') {
      campos.aulas_liberadas = JSON.stringify(TODAS_AS_AULAS);
    }
  }

  if (aulasLiberadas !== undefined) {
    if (!Array.isArray(aulasLiberadas)) {
      return res.status(400).json({ erro: 'aulasLiberadas deve ser um array' });
    }
    campos.aulas_liberadas = JSON.stringify(aulasLiberadas);
  }

  atualizarUsuario(req.params.id, campos);
  res.json({ usuario: paraPublico(buscarUsuarioPorId(req.params.id)) });
});

router.delete('/:id', (req, res) => {
  const alvo = buscarUsuarioPorId(req.params.id);
  if (!alvo) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }
  if (alvo.id === 'admin-default' || req.usuario?.id === alvo.id) {
    return res.status(400).json({ erro: 'Não é possível remover o administrador padrão ou a si mesmo' });
  }
  removerUsuario(req.params.id);
  res.status(204).end();
});

export default router;