// configurando conexão com o banco de dados
const mysql2 = require('mysql2');

const dbConnection = mysql2.createConnection({
    host: 'localhost', // Substitua pelo seu host
    user: 'seu_usuario', // Substitua pelo seu usuário
    password: 'sua_senha', // Substitua pela sua senha
    database: 'login_project' // Nome do banco de dado
});

// Conectando com o banco de dados
dbConnection.connect((err) => {
    if (err){
        console.log('erro ao conectar ao banco de dados');
        process.exit(1);
    }
    console.log('Conexão estabelecida com o banco de dados');
});

module.exports = dbConnection;