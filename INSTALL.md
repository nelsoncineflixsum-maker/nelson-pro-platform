# 🚀 GUIA DE INSTALAÇÃO - NELSON PRO PLATFORM

Este guia fornece instruções passo a passo para instalar e executar a **Nelson Pro Platform** em seu ambiente local.

---

## 📋 PRÉ-REQUISITOS

Antes de começar, certifique-se de ter instalado:

### 1. Node.js (v14 ou superior)
```bash
# Verificar versão
node --version

# Se não tiver, baixe em: https://nodejs.org/
```

### 2. MongoDB
Você tem duas opções:

#### Opção A: MongoDB Local
```bash
# Baixe em: https://www.mongodb.com/try/download/community

# Verificar se está rodando
mongod --version
```

#### Opção B: MongoDB Atlas (Cloud - RECOMENDADO)
1. Acesse: https://www.mongodb.com/cloud/atlas
2. Crie uma conta gratuita
3. Crie um cluster
4. Pegue a string de conexão

### 3. Git (opcional, mas recomendado)
```bash
git --version
```

---

## 📦 PASSO 1: BAIXAR O PROJETO

### Opção A: Com Git
```bash
git clone <url-do-repositorio>
cd nelson-pro-platform
```

### Opção B: Download ZIP
1. Baixe o arquivo ZIP
2. Extraia para uma pasta
3. Abra o terminal nessa pasta

---

## ⚙️ PASSO 2: INSTALAR DEPENDÊNCIAS

```bash
# Instalar todas as dependências do projeto
npm install
```

**O que será instalado:**
- express - Framework web
- mongoose - Conexão com MongoDB
- bcryptjs - Criptografia de senhas
- jsonwebtoken - Autenticação JWT
- dotenv - Variáveis de ambiente
- cors - Habilitar CORS
- cookie-parser - Gestão de cookies

---

## 🔐 PASSO 3: CONFIGURAR VARIÁVEIS DE AMBIENTE

### 3.1. Criar arquivo `.env`

O arquivo `.env` já está criado. Edite-o conforme necessário:

```env
# Porta do servidor
PORT=3000

# String de conexão do MongoDB
# LOCAL:
MONGODB_URI=mongodb://localhost:27017/nelson-pro-platform

# OU MONGODB ATLAS (Cloud):
# MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/nelson-pro-platform

# Chave secreta JWT (MUDE ISSO EM PRODUÇÃO!)
JWT_SECRET=nelson_pro_secret_key_2026_cinema_engineering_ultra_secure_token

# Ambiente
NODE_ENV=development
```

### 3.2. Se usar MongoDB Atlas:

1. Acesse seu cluster no MongoDB Atlas
2. Clique em "Connect"
3. Escolha "Connect your application"
4. Copie a string de conexão
5. Substitua `<password>` pela sua senha
6. Cole no `.env` na variável `MONGODB_URI`

Exemplo:
```env
MONGODB_URI=mongodb+srv://admin:minhasenha123@cluster0.xxxxx.mongodb.net/nelson-pro-platform?retryWrites=true&w=majority
```

---

## 💾 PASSO 4: INICIAR MONGODB (SE LOCAL)

Se estiver usando MongoDB local:

### Windows
```bash
# Iniciar como serviço
net start MongoDB

# OU executar manualmente
mongod
```

### Linux/Mac
```bash
# Iniciar serviço
sudo systemctl start mongod

# OU executar manualmente
mongod --dbpath /caminho/para/dados
```

**Verifique se está rodando:**
```bash
# Deve retornar algo como "MongoDB server version: 6.x.x"
mongod --version
```

---

## 🚀 PASSO 5: INICIAR O SERVIDOR

```bash
# Iniciar servidor
npm start

# OU para desenvolvimento (reinicia automaticamente)
npm run dev
```

**Você verá:**
```
🎬 NELSON PRO PLATFORM - Servidor rodando!
📡 URL: http://localhost:3000
🔐 Sistema de autenticação: ATIVO
💾 Banco de dados: MongoDB
```

---

## 🌐 PASSO 6: ACESSAR A PLATAFORMA

Abra seu navegador em:
```
http://localhost:3000
```

Você verá a **tela de login/cadastro**.

---

## 👤 PASSO 7: CRIAR PRIMEIRA CONTA

### 7.1. Criar Conta de Usuário Normal

1. Clique em "Cadastre-se"
2. Preencha:
   - Nome: Seu Nome
   - Email: seu@email.com
   - Senha: minhasenha123
3. Clique em "CADASTRAR"
4. Você será redirecionado para o dashboard!

### 7.2. Criar Conta de Administrador

Há duas formas:

#### Forma 1: Via MongoDB Compass (RECOMENDADO)

1. Baixe MongoDB Compass: https://www.mongodb.com/products/compass
2. Conecte ao banco: `mongodb://localhost:27017`
3. Acesse o banco: `nelson-pro-platform`
4. Acesse a collection: `users`
5. Encontre seu usuário
6. Edite o documento
7. Mude `isAdmin: false` para `isAdmin: true`
8. Salve
9. Faça logout e login novamente

#### Forma 2: Via Terminal MongoDB

```bash
# Conectar ao MongoDB
mongosh

# Selecionar banco
use nelson-pro-platform

# Tornar usuário admin
db.users.updateOne(
  { email: "seu@email.com" },
  { $set: { isAdmin: true } }
)

# Verificar
db.users.findOne({ email: "seu@email.com" })
```

---

## ✅ PASSO 8: TESTAR FUNCIONALIDADES

### 8.1. Login
1. Acesse: http://localhost:3000
2. Entre com suas credenciais
3. Deve redirecionar para `/pages/dashboard.html`

### 8.2. Dashboard
1. Veja suas estatísticas
2. Explore os cursos
3. Teste o chatbot

### 8.3. Perfil
1. Clique no avatar (canto superior direito)
2. Vá em "Perfil"
3. Tente alterar:
   - Nome
   - Email
   - Tema (escolha uma cor)
   - Senha

### 8.4. Central de Ajuda
1. Vá em "Ajuda" no menu
2. Explore as categorias
3. Teste o accordion

### 8.5. Painel Admin (se for admin)
1. Vá em "Admin" no menu
2. Veja lista de usuários
3. Teste filtros e busca

---

## 🔧 RESOLUÇÃO DE PROBLEMAS

### Erro: "EADDRINUSE: address already in use"
**Causa:** Porta 3000 já está em uso

**Solução:**
```bash
# Opção 1: Matar processo na porta 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9

# Opção 2: Mudar porta no .env
PORT=8080
```

### Erro: "MongooseServerSelectionError"
**Causa:** Não conseguiu conectar ao MongoDB

**Solução:**
1. Verifique se o MongoDB está rodando:
   ```bash
   # Tentar se conectar
   mongosh
   ```
2. Verifique a string de conexão no `.env`
3. Se usar Atlas, verifique se:
   - Senha está correta
   - IP está na whitelist (ou use `0.0.0.0/0` para todos)

### Erro: "Cannot read property 'name' of null"
**Causa:** Token expirado ou inválido

**Solução:**
1. Faça logout
2. Limpe cookies:
   - Chrome: F12 → Application → Cookies → Deletar todos
3. Limpe localStorage:
   - F12 → Console → `localStorage.clear()`
4. Faça login novamente

### Página em branco após login
**Causa:** Arquivos não estão sendo servidos corretamente

**Solução:**
1. Verifique estrutura de pastas:
   ```
   frontend/
   ├── pages/
   │   └── dashboard.html
   └── index.html
   ```
2. Verifique console do navegador (F12)
3. Reinicie o servidor

---

## 📊 VERIFICAR STATUS DO SISTEMA

### Verificar se servidor está rodando:
```bash
curl http://localhost:3000/api/auth/me
# Deve retornar: {"success":false,"message":"Acesso negado..."}
```

### Verificar MongoDB:
```bash
mongosh
> show dbs
> use nelson-pro-platform
> show collections
> db.users.countDocuments()
```

### Ver logs do servidor:
Os logs aparecem no terminal onde você executou `npm start`

---

## 🎯 PRÓXIMOS PASSOS

Agora que a plataforma está rodando:

1. ✅ Explore todas as funcionalidades
2. ✅ Customize os temas
3. ✅ Adicione mais usuários
4. ✅ Teste o painel admin
5. ✅ Leia a documentação completa no `README.md`

---

## 📚 RECURSOS ADICIONAIS

- **Documentação MongoDB:** https://docs.mongodb.com/
- **Documentação Express:** https://expressjs.com/
- **Documentação JWT:** https://jwt.io/
- **Tutorial Mongoose:** https://mongoosejs.com/docs/guide.html

---

## 💬 SUPORTE

Problemas? Entre em contato:
- Email: suporte@nelsonpro.com
- Instagram: [@nelson_projetista](https://www.instagram.com/nelson_projetista/)

---

## ✨ PRONTO!

Sua **Nelson Pro Platform** está instalada e funcionando! 🎉

**🎬 Este sistema faz o cinema rodar!**
