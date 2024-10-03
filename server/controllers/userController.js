const bcrypt = require('bcrypt');
const dbConnection = require('../services/dbConnection');

// Função para registrar um usuário
const registerUser = async (req, res) => {
    const { email, password } = req.body; 

    // Verificando se o usuário já existe
    dbConnection.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) {
            console.error('Erro ao verificar usuário', err);
            return res.status(500).json({ error: 'Erro ao verificar usuário' });
        }
        if (results.length > 0) {
            return res.status(400).json({ error: 'Usuário já cadastrado' });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Hasheando a senha

        // Inserindo o novo usuário no banco de dados
        dbConnection.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err, results) => {
            if (err) {
                console.error('Erro ao cadastrar usuário', err);
                return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
            }
            return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
        });
    });
};

// Função para fazer login
const loginUser = async (req, res) => {
    const { email, password } = req.body; // Extraindo os dados email e password do body enviado pelo client

    // Verificando se o usuário existe
    dbConnection.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) {
            console.error('Erro ao verificar usuário', err);
            return res.status(500).json({ error: 'Erro ao verificar usuário' });
        }

        // Se não encontrar usuário
        if (results.length === 0) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        const user = results[0]; 

        // Verificando se a senha está correta
        const match = await bcrypt.compare(password, user.password); // Compara a senha fornecida com a hasheada

        if (!match) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        // Se a autenticação for bem-sucedida, você pode retornar uma mensagem de sucesso ou um token JWT
        return res.status(200).json({ message: 'Login realizado com sucesso!' });
    });
};


module.exports = {
    registerUser,
    loginUser,
};
