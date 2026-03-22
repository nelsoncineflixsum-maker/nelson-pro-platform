const express = require('express');
const { Pool } = require('pg'); 
const cors = require('cors');
const path = require('path');

const app = express();

// 🛠️ CONEXÃO MESTRE COM O NEON
const pool = new Pool({ 
    connectionString: "postgresql://neondb_owner:npg_jlPcXqU9F6td@ep-summer-firefly-amnrn3rr-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require", 
    ssl: { rejectUnauthorized: false } 
});

app.use(cors());
app.use(express.json());

// ✅ CORREÇÃO DE CAMINHO: Agora ele acha a pasta frontend ao lado do server.js
app.use(express.static(path.join(__dirname, 'frontend')));

// 🧪 TESTE DE CONEXÃO
const conectarBanco = async () => {
    try {
        await pool.query('SELECT NOW()');
        console.log('✅ Banco de dados Neon pronto e conectado!');
    } catch (err) {
        console.error('❌ Erro ao conectar no Neon:', err.message);
    }
};
conectarBanco();

// 🔑 ROTA DE LOGIN
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

// 🔑 ROTA DE CADASTRO
app.post('/api/auth/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password]);
        res.json({ success: true });
    } catch (err) {
        res.status(400).json({ success: false, message: 'Erro ou email já existe.' });
    }
});

// ✅ CORREÇÃO DE CAMINHO: Abre o index.html corretamente
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/index.html'));
});

// 🚀 PORTA DA RENDER (10000) OU LOCAL (3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 NELSON PRO EM ORBITA NA PORTA ${PORT}`);
});
