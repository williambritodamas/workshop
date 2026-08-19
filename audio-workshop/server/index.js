import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import rotasAuth from './rotas/auth.js';
import rotasUsuarios from './rotas/usuarios.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(cors());
app.use(express.json());

app.use('/api/auth', rotasAuth);
app.use('/api/usuarios', rotasUsuarios);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Em produção, servir o build do frontend na mesma origem
if (NODE_ENV === 'production') {
  const distDir = path.resolve(__dirname, '../dist');
  app.use(express.static(distDir));

  // Fallback SPA (qualquer GET que não seja /api entrega o index.html)
  app.use((req, res, next) => {
    if (req.method !== 'GET' || req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`[server] API rodando em http://localhost:${PORT} (${NODE_ENV})`);
});