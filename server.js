const express = require('express');
const { Pool } = require('pg'); 
const cors = require('cors');
const path = require('path');

const app = express();

// 🛠️ CONEXÃO COM O BANCO NEON (Sua "Central de Dados")
const pool = new Pool({ 
    connectionString: "postgresql://neondb_owner:npg_jlPcXqU9F6td@ep-summer-firefly-amnrn3rr-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require", 
    ssl: { rejectUnauthorized: false } 
});

app.use(cors());
app.use(express.json());

// ✅ CONFIGURAÇÃO DE PASTAS (Onde estão seus arquivos de site)
app.use(express.static(path.join(__dirname, 'frontend')));

// 🧪 TESTE DE CONEXÃO AO BANCO
const conectarBanco = async () => {
    try {
        await pool.query('SELECT NOW()');
        console.log('✅ Banco de dados Neon pronto e conectado!');
    } catch (err) {
        console.error('❌ Erro ao conectar no Neon:', err.message);
    }
};
conectarBanco();

// ---------------------------------------------------------
// 🔑 ROTAS DE AUTENTICAÇÃO (O "Porteiro" do Nelson Pro)
// ---------------------------------------------------------

// ROTA DE LOGIN: Confere se o aluno existe no Neon
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

// ROTA DE CADASTRO: Salva novo aluno no Neon
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
// 🎬 ROTAS DE NAVEGAÇÃO (As telas do sistema)
// ---------------------------------------------------------

// 1. QUEM ENTRAR NO LINK PRINCIPAL CAI NO LOGIN
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/login.html'));
});

// 2. ROTA PARA O SIMULADOR (INDEX)
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/index.html'));
});

// 3. ROTA PARA O CADASTRO
app.get('/cadastro.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/cadastro.html'));
});

// 4. ROTA DE SEGURANÇA (Se o aluno digitar qualquer coisa errada, volta pro Login)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/login.html'));
});

// 🚀 PORTA DA RENDER (10000)
const PORT = process.env.PORT || 3000;
app.get('*', (req, res) => {
    res.status(404).send('<body style="background:#000;color:#e50914;text-align:center;padding:50px;font-family:sans-serif;"><h1>404 - PROJEÇÃO INTERROMPIDA</h1><p>Nelson diz: Este caminho não existe no servidor!</p><a href="/" style="color:#fff;">Voltar ao Início</a></body>');
});
