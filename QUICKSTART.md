# ⚡ QUICK START - Nelson Pro Platform

## 🚀 Iniciar em 5 Passos

### 1️⃣ Instalar Dependências
```bash
npm install
```

### 2️⃣ Configurar MongoDB
```bash
# Opção A: MongoDB local
sudo systemctl start mongod

# Opção B: MongoDB Atlas (cloud)
# Edite .env com sua connection string
```

### 3️⃣ Verificar .env
```bash
cat .env
```

Deve conter:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/nelson_pro
JWT_SECRET=nelson_pro_secret_key_2026_super_secure
```

### 4️⃣ Iniciar Servidor
```bash
node backend/server.js
```

Você verá:
```
🚀 Servidor rodando na porta 3000
✅ MongoDB conectado com sucesso!
```

### 5️⃣ Acessar Plataforma
Abra no navegador:
```
http://localhost:3000/frontend/pages/register.html
```

---

## 📝 Primeiro Acesso

### Cadastrar Usuário
1. Acesse: `http://localhost:3000/frontend/pages/register.html`
2. Preencha:
   - Nome: Seu Nome
   - Email: seu@email.com
   - Senha: MinhaSenh@123
3. Clique em **CADASTRAR**
4. Você será redirecionado para o login

### Fazer Login
1. Digite email e senha
2. Clique em **ENTRAR**
3. Você será redirecionado para o Dashboard

---

## 🎯 Páginas Principais

| URL | Descrição | Acesso |
|-----|-----------|--------|
| `/frontend/pages/index.html` | Página inicial | Público |
| `/frontend/pages/register.html` | Cadastro | Público |
| `/frontend/pages/login.html` | Login | Público |
| `/frontend/pages/dashboard.html` | Área do Aluno | Logado |
| `/frontend/pages/profile.html` | Meu Perfil | Logado |
| `/frontend/pages/admin.html` | Painel Admin | Admin |
| `/frontend/pages/help.html` | Central de Ajuda | Público |

---

## 🔧 Comandos Úteis

### Instalar
```bash
npm install
```

### Rodar Desenvolvimento
```bash
npm run dev
# ou
nodemon backend/server.js
```

### Rodar Produção
```bash
npm start
# ou
node backend/server.js
```

### Verificar MongoDB
```bash
mongo
> use nelson_pro
> db.users.find().pretty()
> exit
```

### Criar Admin Manualmente
```bash
mongo
> use nelson_pro
> db.users.updateOne(
    { email: "seu@email.com" },
    { $set: { isAdmin: true } }
  )
> exit
```

---

## 🆘 Problemas Comuns

### Erro: "Cannot find module 'express'"
```bash
npm install
```

### Erro: "MongoDB connection failed"
```bash
# Verificar se MongoDB está rodando
sudo systemctl status mongod

# Iniciar MongoDB
sudo systemctl start mongod
```

### Erro: "Port 3000 already in use"
```bash
# Editar .env
PORT=3001
```

### Página em branco ao acessar
```bash
# Use a URL completa
http://localhost:3000/frontend/pages/dashboard.html
```

---

## 📚 Próximos Passos

1. ✅ Cadastre-se
2. ✅ Faça login
3. ✅ Explore o Dashboard
4. ✅ Edite seu perfil
5. ✅ Escolha uma cor de tema
6. ✅ Acesse a Central de Ajuda

---

## 🎨 Temas Disponíveis

Em **Meu Perfil** → **Personalização**:

- 🟡 Dourado (padrão)
- 🟢 Verde Neon
- 🔵 Azul Cinema
- 🟣 Roxo Profundo
- 🔴 Vermelho Passion

---

## 📞 Suporte

**Documentação Completa:** `README.md`
**Instalação Detalhada:** `INSTALACAO.md`
**Features:** `FEATURES.md`

---

**Desenvolvido por SuperAgent from CREAO**
Versão 1.0.0 - Março 2026
