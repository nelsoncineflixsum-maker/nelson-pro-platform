# 📥 Guia de Instalação - Nelson Pro Platform

## Passo a Passo Completo

### 1️⃣ Instalar Node.js

**Windows:**
1. Baixe em: https://nodejs.org/
2. Execute o instalador
3. Siga as instruções
4. Verifique: `node --version`

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version
npm --version
```

**Mac:**
```bash
brew install node
node --version
```

---

### 2️⃣ Instalar MongoDB

**Windows:**
1. Baixe em: https://www.mongodb.com/try/download/community
2. Execute o instalador
3. Escolha "Complete"
4. Instale como serviço
5. Inicie: `net start MongoDB`

**Linux (Ubuntu):**
```bash
# Importar chave pública
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

# Adicionar repositório
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Instalar
sudo apt-get update
sudo apt-get install -y mongodb-org

# Iniciar
sudo systemctl start mongod
sudo systemctl enable mongod

# Verificar
sudo systemctl status mongod
```

**Mac:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

---

### 3️⃣ Baixar o Projeto

**Opção 1: Você já tem os arquivos**
```bash
cd /home/user/workspaces/699bc51000dcdb29dda26819/89c4d858-0b63-44cc-9e12-95b5ca08ab7d
```

**Opção 2: Clone do Git (se disponível)**
```bash
git clone https://github.com/seu-usuario/nelson-pro-platform.git
cd nelson-pro-platform
```

---

### 4️⃣ Instalar Dependências

```bash
# Dentro da pasta do projeto
npm install
```

Isso instalará:
- express
- mongoose
- bcryptjs
- jsonwebtoken
- cors
- dotenv

---

### 5️⃣ Configurar Variáveis de Ambiente

Edite o arquivo `.env`:

```bash
nano backend/.env
# ou
code backend/.env
```

Conteúdo:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/nelson_pro
JWT_SECRET=nelson_pro_secret_key_2026_super_secure
```

**⚠️ IMPORTANTE:** Em produção, mude o `JWT_SECRET` para algo mais seguro!

---

### 6️⃣ Iniciar o Servidor

```bash
node backend/server.js
```

Você verá:
```
🚀 Servidor rodando na porta 3000
✅ MongoDB conectado com sucesso!
```

---

### 7️⃣ Acessar a Plataforma

Abra no navegador:

**Página Inicial:**
```
http://localhost:3000
```

**Cadastro:**
```
http://localhost:3000/frontend/pages/register.html
```

**Login:**
```
http://localhost:3000/frontend/pages/login.html
```

---

## 🔧 Resolução de Problemas

### Problema: "Cannot find module 'express'"
**Solução:**
```bash
npm install express mongoose bcryptjs jsonwebtoken cors dotenv
```

### Problema: "MongoDB connection failed"
**Solução:**
```bash
# Verificar se MongoDB está rodando
sudo systemctl status mongod

# Se não estiver, iniciar
sudo systemctl start mongod
```

### Problema: "Port 3000 already in use"
**Solução:**
```bash
# Edite .env e mude para outra porta
PORT=3001
```

### Problema: "Cannot GET /"
**Solução:**
- Acesse `http://localhost:3000/frontend/pages/index.html`
- Ou mova `index.html` para raiz

---

## 🌐 Alternativa: MongoDB Atlas (Cloud)

Se não quiser instalar MongoDB localmente:

1. Crie conta em: https://www.mongodb.com/cloud/atlas
2. Crie um cluster gratuito
3. Obtenha a connection string
4. Atualize `.env`:
```env
MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/nelson_pro
```

---

## 🚀 Rodar em Produção

### Opção 1: PM2 (Recomendado)
```bash
# Instalar PM2
npm install -g pm2

# Rodar aplicação
pm2 start backend/server.js --name nelson-pro

# Salvar configuração
pm2 save

# Auto-iniciar no boot
pm2 startup
```

### Opção 2: Forever
```bash
npm install -g forever
forever start backend/server.js
```

### Opção 3: Systemd (Linux)
Crie `/etc/systemd/system/nelson-pro.service`:
```ini
[Unit]
Description=Nelson Pro Platform
After=network.target

[Service]
Type=simple
User=seu-usuario
WorkingDirectory=/caminho/para/projeto
ExecStart=/usr/bin/node backend/server.js
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable nelson-pro
sudo systemctl start nelson-pro
```

---

## 📦 Criar Primeiro Usuário

```bash
# Acesse no navegador
http://localhost:3000/frontend/pages/register.html

# Preencha:
Nome: Admin Nelson
Email: admin@nelsonpro.com
Senha: Admin@123

# Clique em CADASTRAR
```

---

## ✅ Checklist de Instalação

- [ ] Node.js instalado (`node --version`)
- [ ] MongoDB instalado e rodando
- [ ] Dependências instaladas (`npm install`)
- [ ] Arquivo `.env` configurado
- [ ] Servidor iniciado sem erros
- [ ] Acesso ao `http://localhost:3000` funcionando
- [ ] Primeiro usuário criado
- [ ] Login funcionando
- [ ] Dashboard acessível

---

## 🎉 Pronto!

Sua plataforma Nelson Pro está rodando!

**Próximos passos:**
1. Cadastre-se
2. Faça login
3. Explore a área do aluno
4. Personalize seu perfil
5. Altere a cor do tema

**Precisa de ajuda?**
- Acesse `/frontend/pages/help.html`
- Veja o `README.md`
- Entre em contato com suporte

---

**Desenvolvido por SuperAgent from CREAO**
Versão 1.0.0 - 2026
