const express = require('express');
const { Pool } = require('pg'); 
const cors = require('cors');
const path = require('path');

const app = express();

// 🛠️ CONEXÃO MESTRE COM O NEON (Banco de Dados Nelson Pro)
const pool = new Pool({ 
    connectionString: "postgresql://neondb_owner:npg_jlPcXqU9F6td@ep-summer-firefly-amnrn3rr-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require", 
    ssl: { rejectUnauthorized: false } 
});

app.use(cors());
app.use(express.json());

// ✅ APONTA PARA A PASTA FRONTEND ONDE ESTÃO OS SEUS HTMLs
app.use(express.static(path.join(__dirname, 'frontend')));

// 🧪 TESTE DE CONEXÃO AO BANCO
const conectarBanco = async () => {
    try {
        await pool.query('SELECT NOW()');
        console.log('✅ NELSON PRO: Banco Neon Conectado com Sucesso!');
    } catch (err) {
        console.error('❌ ERRO AO CONECTAR NO NEON:', err.message);
    }
};
conectarBanco();

// ---------------------------------------------------------
// 🔑 ROTAS DE AUTENTICAÇÃO (Login e Cadastro)
// ---------------------------------------------------------

// LOGIN: Verifica se o aluno existe
app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
        if (result.rows.length > 0) {
            res.json({ success: true, user: result.rows[0] });
        } else {
            res.status(401).json({ success: false, message: 'Dados incorretos.' });
        }
    } catch (err) {
        res.status(500).json({ success: false });
    }
});

// CADASTRO: Salva novo aluno
app.post('/api/auth/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password]);
        res.json({ success: true });
    } catch (err) {
        res.status(400).json({ success: false, message: 'Erro ou email já existe.' });
    }
});

// ---------------------------------------------------------
// 📊 ROTA DO DASHBOARD (Acesso aos dados dos alunos)
// ---------------------------------------------------------

app.get('/api/admin/users', async (req, res) => {
    try {
        // Busca todos os alunos cadastrados
        const result = await pool.query('SELECT id, name, email FROM users ORDER BY id DESC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar alunos" });
    }
});

// ---------------------------------------------------------
// 🎬 ROTAS DE NAVEGAÇÃO (As telas do Nelson Pro)
// ---------------------------------------------------------

// 1. Link Principal: Abre o Login 4K primeiro
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/login.html'));
});

// 2. Rota para o Simulador
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/index.html'));
});

// 3. Rota para o Cadastro
app.get('/cadastro.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/cadastro.html'));
});

// 4. Rota para o Dashboard Secreto
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/dashboard.html'));
});

// 5. Segurança: Se errar o link, volta pro Login
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/login.html'));
});

// 🚀 PORTA DA RENDER (10000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 SERVIDOR NELSON PRO ONLINE NA PORTA ${PORT}`);
});
