# 🎬 NELSON PRO PLATFORM - Área de Membros Completa

![Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

> **Plataforma completa de membros** para educação online sobre cinema digital, com autenticação segura, perfil de usuário, dashboard interativo e painel administrativo.

---

## 📋 FUNCIONALIDADES IMPLEMENTADAS

### 🔐 1. SISTEMA DE AUTENTICAÇÃO
✅ **Cadastro de Usuários**
- Validação de email único
- Senha com hash (bcrypt)
- Mínimo 6 caracteres
- Avatar automático gerado

✅ **Login Seguro**
- Autenticação JWT (7 dias de validade)
- Sessão persistente com cookies
- "Lembrar-me" opcional
- Proteção contra força bruta

✅ **Logout**
- Limpeza de cookies
- Limpeza de localStorage
- Redirecionamento automático

---

### 👤 2. PERFIL DO USUÁRIO

✅ **Configurações de Perfil**
- Editar nome
- Alterar email
- Trocar senha (com validação da senha atual)
- Upload de avatar
- Biografia

✅ **Personalização de Tema**
- 5 temas de cores disponíveis:
  - 🟡 Dourado (padrão)
  - 🟢 Verde Neon
  - 🔵 Azul Cinema
  - 🟣 Roxo Profundo
  - 🔴 Vermelho Passion
- Tema salvo automaticamente
- Aplicado em toda a plataforma

---

### 🎓 3. ÁREA DO ALUNO (DASHBOARD)

✅ **Dashboard Completo**
- Mensagem de boas-vindas personalizada: "Bem-vindo, [Nome]"
- Estatísticas do aluno:
  - Cursos matriculados
  - Cursos concluídos
  - Horas assistidas
  - Certificados obtidos
- Grid de cursos com progress bar
- Atividades recentes
- Todo o conteúdo educacional original integrado

✅ **Conteúdo Educacional**
- 9 módulos da Master Class Nelson Pro
- Sistema de navegação lateral
- Chatbot inteligente integrado
- Quiz com certificado
- Simulações interativas

✅ **Proteção de Acesso**
- Apenas usuários logados
- Redirecionamento automático para login
- Validação de token JWT

---

### 📊 4. PAINEL ADMINISTRATIVO

✅ **Dashboard Admin**
- Métricas em tempo real:
  - Total de usuários
  - Cursos ativos
  - Certificados emitidos
  - Receita mensal
- Gráficos e estatísticas

✅ **Gerenciamento de Usuários**
- Lista completa de usuários
- Busca e filtros
- Ações:
  - Editar usuário
  - Deletar usuário
  - Promover a administrador
- Tabela responsiva com paginação

✅ **Proteção Admin**
- Apenas usuários com `isAdmin: true`
- Verificação de role no middleware
- Acesso negado para não-admins

---

### 🆘 5. CENTRAL DE AJUDA

✅ **FAQ Completo**
- 6 categorias de ajuda:
  - Começando
  - Cursos e Aulas
  - Certificados
  - Conta e Perfil
  - Pagamentos
  - Problemas Técnicos
- Accordion expansível
- Busca de artigos
- Seção de contato:
  - Email de suporte
  - Chat ao vivo
  - Sistema de tickets

---

## 🎨 INTERFACE (UI/UX)

✅ **Design Moderno e Profissional**
- Tema escuro/dourado elegante
- Animações suaves (0.3s transitions)
- Glassmorphism effects
- Responsivo (mobile-first)
- Loading states
- Toast notifications

✅ **Componentes**
- Sidebar fixa com navegação
- Top bar com busca e notificações
- Cards com hover effects
- Progress bars animadas
- Badges e status indicators
- Formulários estilizados
- Tabelas responsivas

---

## 🔒 SEGURANÇA

✅ **Implementações de Segurança**
- Senhas com hash bcrypt (10 rounds)
- Tokens JWT (expiração 7 dias)
- Cookies HTTP-only
- Validação server-side e client-side
- Proteção de rotas
- Verificação de email único
- Middleware de autenticação
- Verificação de role (admin)

---

## 💾 ARMAZENAMENTO

✅ **Backend Profissional**
- **Node.js + Express** (servidor)
- **MongoDB** (banco de dados)
- **Mongoose** (ODM)
- **JWT** (autenticação)
- **bcrypt** (hash de senhas)

✅ **Persistência**
- Sessão ativa após reload
- Token em localStorage
- Cookies HTTP-only
- Dados salvos no MongoDB

---

## 📁 ESTRUTURA DO PROJETO

```
nelson-pro-platform/
├── backend/
│   ├── models/
│   │   └── User.js           # Model de usuário (Mongoose)
│   ├── routes/
│   │   ├── auth.js           # Rotas de autenticação
│   │   └── user.js           # Rotas de usuário
│   ├── middleware/
│   │   └── auth.js           # Middleware de proteção
│   └── server.js             # Servidor Express
├── frontend/
│   ├── css/
│   │   ├── auth.css          # Estilos de autenticação
│   │   └── dashboard.css     # Estilos do dashboard
│   ├── js/
│   │   ├── auth.js           # Lógica de login/cadastro
│   │   └── app.js            # Lógica do dashboard
│   ├── pages/
│   │   ├── dashboard.html    # Dashboard principal
│   │   ├── profile.html      # Configurações de perfil
│   │   ├── admin.html        # Painel administrativo
│   │   └── help.html         # Central de ajuda
│   └── index.html            # Página de login
├── .env                      # Variáveis de ambiente
├── package.json              # Dependências
└── README.md                 # Este arquivo
```

---

## 🚀 COMO RODAR O PROJETO

### Pré-requisitos
- Node.js (v14+)
- MongoDB (local ou Atlas)
- npm ou yarn

### Passo 1: Instalar Dependências
```bash
npm install
```

### Passo 2: Configurar Variáveis de Ambiente
Edite o arquivo `.env`:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/nelson-pro-platform
JWT_SECRET=sua_chave_secreta_aqui
NODE_ENV=development
```

### Passo 3: Iniciar MongoDB
```bash
# Se estiver usando MongoDB local
mongod
```

### Passo 4: Iniciar Servidor
```bash
node backend/server.js
```

### Passo 5: Acessar a Plataforma
Abra o navegador em:
```
http://localhost:3000
```

---

## 👨‍💼 CRIAR PRIMEIRO ADMIN

Execute no MongoDB ou usando MongoDB Compass:

```javascript
// Conectar ao banco
use nelson-pro-platform

// Criar primeiro usuário admin
db.users.insertOne({
    name: "Administrador",
    email: "admin@nelsonpro.com",
    password: "$2a$10$...", // Use bcrypt para gerar hash de senha
    isAdmin: true,
    avatar: "https://ui-avatars.com/api/?name=Admin&background=d4af37&color=000&size=200",
    themeColor: "#d4af37",
    createdAt: new Date(),
    lastLogin: new Date()
})
```

Ou use o endpoint de registro e depois atualize manualmente:
```javascript
db.users.updateOne(
    { email: "seu@email.com" },
    { $set: { isAdmin: true } }
)
```

---

## 📡 API ENDPOINTS

### Autenticação
| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| POST | `/api/auth/register` | Cadastrar usuário | ❌ |
| POST | `/api/auth/login` | Fazer login | ❌ |
| POST | `/api/auth/logout` | Fazer logout | ✅ |
| GET | `/api/auth/me` | Dados do usuário logado | ✅ |

### Usuário
| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| PUT | `/api/user/profile` | Atualizar perfil | ✅ |
| PUT | `/api/user/change-password` | Alterar senha | ✅ |
| GET | `/api/user/all` | Listar usuários | ✅ Admin |
| DELETE | `/api/user/:id` | Deletar usuário | ✅ Admin |
| PUT | `/api/user/make-admin/:id` | Promover a admin | ✅ Admin |

---

## 🎯 FEATURES AVANÇADAS

✅ **Implementado:**
- ✅ Autenticação JWT
- ✅ Proteção de rotas
- ✅ Persistência de sessão
- ✅ Sistema de temas
- ✅ Dashboard interativo
- ✅ Painel admin
- ✅ Central de ajuda
- ✅ Validações completas
- ✅ Design responsivo
- ✅ Animações suaves

🔄 **Em Desenvolvimento:**
- Upload de avatar real (S3/Cloudinary)
- Recuperação de senha por email
- Login social (Google/Facebook)
- Sistema de pagamentos
- Certificados PDF
- Progresso de cursos real
- Analytics e relatórios
- Chat de suporte ao vivo

---

## 🎨 TEMAS DISPONÍVEIS

| Tema | Cor Principal | Uso |
|------|---------------|-----|
| Dourado | `#d4af37` | Padrão Nelson Pro |
| Verde Neon | `#00ff88` | Moderno e vibrante |
| Azul Cinema | `#3498db` | Profissional |
| Roxo Profundo | `#9b59b6` | Elegante |
| Vermelho Passion | `#e74c3c` | Energético |

---

## 📱 RESPONSIVIDADE

✅ **Breakpoints:**
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

✅ **Features Mobile:**
- Menu hambúrguer
- Cards empilhados
- Tabelas scrolláveis
- Touch-friendly buttons
- Notificações adaptativas

---

## 🔧 TECNOLOGIAS UTILIZADAS

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **MongoDB** - Banco de dados
- **Mongoose** - ODM
- **bcryptjs** - Hash de senhas
- **jsonwebtoken** - Autenticação JWT
- **dotenv** - Variáveis de ambiente
- **cors** - Cross-origin requests
- **cookie-parser** - Gestão de cookies

### Frontend
- **HTML5** - Estrutura
- **CSS3** - Estilos (com variáveis CSS)
- **JavaScript ES6+** - Lógica
- **Fetch API** - Requisições HTTP
- **LocalStorage** - Persistência client-side

---

## 📝 SCRIPTS NPM

Adicione ao `package.json`:

```json
{
  "scripts": {
    "start": "node backend/server.js",
    "dev": "nodemon backend/server.js",
    "seed": "node backend/seed.js"
  }
}
```

---

## 🤝 CONTRIBUINDO

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## 📄 LICENÇA

Este projeto está sob a licença MIT.

---

## 👤 AUTOR

**Nelson Pro Cinema Engineering**
- Instagram: [@nelson_projetista](https://www.instagram.com/nelson_projetista/)
- Website: Nelson Pro Platform

---

## 🎓 SUPORTE

Se precisar de ajuda:
1. Verifique a [Central de Ajuda](http://localhost:3000/pages/help.html)
2. Entre em contato: suporte@nelsonpro.com
3. Abra uma issue no GitHub

---

## ⭐ AGRADECIMENTOS

Obrigado por usar a **Nelson Pro Platform**! Este sistema foi desenvolvido para revolucionar o ensino de cinema digital.

**🎬 Este sistema faz o cinema rodar!**

---

*Última atualização: Março 2026*
