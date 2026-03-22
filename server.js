const express = require('express');
const path = require('path');
const app = express();

// 📂 Configura a pasta dos arquivos estáticos
app.use(express.static(path.join(__dirname, 'frontend')));

// 🎬 Rota principal (entrega o index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// 🎬 Rota para as outras páginas (caso você as chame pelo link direto)
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'login.html')));
app.get('/cadastro', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'cadastro.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'dashboard.html')));

// 🚀 Porta da Render
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Sistema Nelson Pro rodando na porta ${PORT}`);
});
