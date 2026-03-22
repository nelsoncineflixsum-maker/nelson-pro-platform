const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Configurações básicas
app.use(cors());
app.use(express.json());

// 📂 AVISA O SERVIDOR ONDE ESTÃO OS ARQUIVOS HTML (Pasta frontend)
app.use(express.static(path.join(__dirname, 'frontend')));

// 🎬 ROTA PRINCIPAL: Abre o index.html direto no link do site
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/index.html'));
});

// 🎬 ROTAS DAS OUTRAS PÁGINAS
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'frontend/login.html')));
app.get('/cadastro', (req, res) => res.sendFile(path.join(__dirname, 'frontend/cadastro.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, 'frontend/dashboard.html')));

// 🚀 PORTA DA RENDER (10000)
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Nelson Pro Online na porta ${PORT}`);
});
