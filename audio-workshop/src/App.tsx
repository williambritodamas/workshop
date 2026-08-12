import React, { useState } from 'react';
import { ProvedorAutenticacao, useAutenticacao } from './contexts/AutenticacaoContext';
import { PaginaLogin } from './components/PaginaLogin';
import { PaginaRegistro } from './components/PaginaRegistro';
import { PainelAdmin } from './components/PainelAdmin';
import { AppConteudo } from './AppConteudo';

type TelaPrincipal = 'login' | 'registro' | 'app' | 'admin';

const AppInterno: React.FC = () => {
  const [telaPrincipal, setTelaPrincipal] = useState<TelaPrincipal>('login');
  const { isAutenticado, isAdmin } = useAutenticacao();

  // Redirecionar automaticamente baseado no estado de autenticação
  React.useEffect(() => {
    if (isAutenticado) {
      setTelaPrincipal('app');
    } else {
      setTelaPrincipal('login');
    }
  }, [isAutenticado]);

  if (telaPrincipal === 'login') {
    return (
      <PaginaLogin onRegistroClick={() => setTelaPrincipal('registro')} />
    );
  }

  if (telaPrincipal === 'registro') {
    return (
      <PaginaRegistro onLoginClick={() => setTelaPrincipal('login')} />
    );
  }

  if (telaPrincipal === 'admin' && isAdmin) {
    return (
      <PainelAdmin onVoltar={() => setTelaPrincipal('app')} />
    );
  }

  return (
    <AppConteudo
      onSairLogin={() => setTelaPrincipal('login')}
      onAbrirAdmin={() => setTelaPrincipal('admin')}
    />
  );
};

function App() {
  return (
    <ProvedorAutenticacao>
      <AppInterno />
    </ProvedorAutenticacao>
  );
}

export default App;
