import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-nao-use-em-producao';

export function gerarToken(usuario) {
  return jwt.sign(
    { sub: usuario.id, role: usuario.role, nome: usuario.nome, email: usuario.email },
    JWT_SECRET,
    { expiresIn: '7d' },
  );
}

export function authJWT(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) {
    return res.status(401).json({ erro: 'Token não fornecido' });
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.usuario = { id: payload.sub, role: payload.role, nome: payload.nome, email: payload.email };
    next();
  } catch {
    return res.status(401).json({ erro: 'Token inválido ou expirado' });
  }
}

export function exigeAdmin(req, res, next) {
  if (req.usuario?.role !== 'admin') {
    return res.status(403).json({ erro: 'Acesso restrito a administradores' });
  }
  next();
}