# Guia de Teste - Audio Workshop

## Alterações Realizadas

### 1. ✅ Filtro de Aulas (Aulas Desabilitadas Desaparecem)
**Problema**: Quando o admin desabilita uma aula, ela não desaparecia da tela principal para o usuário
**Solução**: 
- Adicionada sincronização de dados quando o usuário volta do painel admin
- Implementado método `recarregarUsuario()` que sincroniza as mudanças do localStorage
- LessonSelector agora filtra aulas usando a função `podeAcesar`

**Como Testar**:
1. Inicie o dev server: `npm run dev`
2. Faça login como admin (admin@audioworkshop.com, qualquer senha)
3. Vá ao Painel Admin
4. Crie um novo usuário (ou selecione um existente)
5. Desabilite a Aula 2 (clique no quadrado cinza para ficar ainda mais cinza)
6. Volte ao seletor de aulas
7. **✓ A Aula 2 deve desaparecer do grid**
8. Re-habilite a Aula 2 no painel admin
9. Volte ao seletor
10. **✓ A Aula 2 deve reaparecer**

---

### 2. ✅ Criar Novo Usuário no Painel Admin
**Problema**: Não havia interface para criar novos usuários e definir perfil
**Solução**:
- Adicionado botão "Novo Usuário" no painel admin
- Implementado modal com formulário para:
  - Nome completo
  - Email
  - Tipo de perfil (Aluno ou Admin)
- Novos admins recebem acesso a todas as 12 aulas
- Novos alunos começam com acesso apenas à Aula 1

**Como Testar**:
1. Faça login como admin
2. Clique em "Painel Admin"
3. Clique no botão verde "Novo Usuário" (canto superior direito)
4. Preencha os dados:
   - Nome: "João Silva"
   - Email: "joao@example.com"
   - Tipo: Aluno
5. Clique "Criar Usuário"
6. **✓ O novo usuário deve aparecer na lista**
7. Expanda o card do novo usuário
8. **✓ Deve mostrar apenas a Aula 1 liberada (verde)**
9. Clique em "Novo Usuário" novamente
10. Preencha:
    - Nome: "Maria Admin"
    - Email: "maria@example.com"
    - Tipo: Admin
11. Clique "Criar Usuário"
12. **✓ O novo admin deve aparecer com badge "Admin" roxo**
13. Expanda o card do novo admin
14. **✓ Deve mostrar todas as 12 aulas liberadas (verdes)**

---

### 3. ✅ Corrigir Fluxo de Registro
**Problema**: Ao criar uma conta, o usuário era deslogado e a senha ficava inválida
**Solução**:
- Removido timeout que redirectava para login após registro
- Deixado o App.tsx fazer o redirecionamento automático quando `isAutenticado` fica true
- Usuário agora permanece logado após registrar

**Como Testar**:
1. Clique em "Criar Conta" na tela de login
2. Preencha os dados:
   - Nome: "Novo Usuário"
   - Email: "novo@example.com"
   - Senha: "senha123456"
   - Confirmar Senha: "senha123456"
3. Clique "Criar Conta"
4. **✓ Deve mostrar mensagem "Cadastro Realizado!"**
5. **✓ Após 3 segundos, deve ser redirecionado automaticamente para o app**
6. **✓ Deve ver o seletor de aulas com seu nome no topo**
7. **Não deve pedir para fazer login novamente**
8. Clique em "Sair"
9. Tente fazer login com o email novo:
   - Email: novo@example.com
   - Senha: senha123456
10. **✓ Deve fazer login com sucesso**
11. **✓ Deve ter acesso apenas à Aula 1 (padrão para novos usuários)**

---

### 4. ⚠️ Geração de PDF do Certificado
**Status**: Já foi corrigido na sessão anterior (removidas cores oklch, usando inline styles)
**Para Testar**:
1. Faça login como admin
2. Selecione Aula 12
3. Vá até o final (Slide 15 - Certificado)
4. Clique no botão "Baixar Certificado em PDF"
5. **✓ Não deve aparecer erro no console sobre oklch**
6. **✓ PDF deve ser baixado com nome "Certificado_Administrador.pdf"**
7. **✓ PDF deve abrir e exibir o certificado formatado corretamente**

---

## 🧪 Cenários de Teste Completos

### Cenário 1: Admin Gerencia Aluno
1. Login como admin
2. Painel Admin → Criar novo aluno "Carlos" (carlos@test.com)
3. Painel Admin → Expandir card de Carlos
4. Toggle Aula 3, 5, 7 para ON (verde)
5. Voltar ao app
6. Verificar que filtro funcionou (sem recarregar página)
7. Logout e login como admin novamente
8. Painel Admin → Desabilitar Aula 3 para Carlos
9. Voltar ao app
10. **✓ Aula 3 deve desaparecer imediatamente do filtro**

### Cenário 2: Novo Aluno Registra
1. Clique "Criar Conta"
2. Registre novo usuário "Ana Silva" (ana@test.com, password123)
3. Verificar que não foi deslogado
4. **✓ Deve estar no app, vendo o seletor de aulas**
5. Logout
6. Login com dados de Ana
7. **✓ Deve ter acesso apenas à Aula 1**
8. Logout e login como admin
9. Painel Admin → Liberar Aulas 2, 4, 6 para Ana
10. Voltar ao app
11. Logout
12. Login como Ana
13. **✓ Deve ver Aulas 1, 2, 4, 6 disponíveis**

### Cenário 3: Admin Cria Admin
1. Login como admin
2. Painel Admin → Novo Usuário
3. Nome: "Super Admin", Email: "superadmin@test.com", Tipo: Admin
4. **✓ Novo admin deve ter todas as 12 aulas liberadas**
5. Logout e login como superadmin
6. **✓ Deve ver todas as 12 aulas**
7. **✓ Deve ter acesso ao Painel Admin**

---

## 📋 Checklist de Verificação

- [ ] Filtro de aulas funciona (desabilitadas desaparecem)
- [ ] Criar novo usuário no painel funciona
- [ ] Novo usuário aparece na lista com perfil correto
- [ ] Tipo de perfil (admin/aluno) é aplicado corretamente
- [ ] Registro não desconecta o usuário
- [ ] Novo usuário registrado aparece no app imediatamente
- [ ] Nova senha funciona no login
- [ ] PDF do certificado é gerado sem erro
- [ ] PDF tem nome dinâmico correto
- [ ] PDF abre e exibe certificado corretamente

---

## 🚀 Próximas Melhorias (Opcional)

1. **Validação de Senha**: Implementar validação mais forte (números, caracteres especiais)
2. **Email de Confirmação**: Enviar email ao criar novo usuário com senha temporária
3. **Histórico de Mudanças**: Admin ver quem modificou o quê e quando
4. **Busca de Usuários**: Campo de busca no painel admin
5. **Exportar Dados**: Exportar lista de usuários em CSV/Excel
6. **Editar Usuário**: Permitir editar nome e email de usuários existentes
7. **Resetar Senha**: Admin poder resetar senha de usuários
8. **Relatórios**: Dashboard com estatísticas de progresso dos alunos

---

## 🛠️ Troubleshooting

### Se o filtro de aulas não aparecer
- [ ] Verificar console do navegador (F12 → Console)
- [ ] Limpar cache (Ctrl+Shift+Delete)
- [ ] Recarregar página (Ctrl+F5)
- [ ] Verificar localStorage: `localStorage.clear()` no console

### Se o PDF não funcionar
- [ ] Verificar se html2canvas e jsPDF foram instalados: `npm ls html2canvas jspdf`
- [ ] Verificar console para erros específicos
- [ ] Tentar em outro navegador
- [ ] Verificar se há block de popup (permitir popups)

### Se o novo usuário não aparecer
- [ ] Verificar localStorage: `JSON.parse(localStorage.getItem('usuarios_audio_workshop'))`
- [ ] Verificar se email é único
- [ ] Tentar recarregar o app
- [ ] Verificar console para erros

---

**Última atualização**: 2024
**Status**: Pronto para Teste

Para dúvidas, consulte [STATUS.md](STATUS.md) e [AUTH_IMPLEMENTATION.md](AUTH_IMPLEMENTATION.md)
