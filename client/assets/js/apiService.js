// Definindo as funções que fazem as chamadas para api


export const registerUser = (userData) => {
    return fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro no cadastro');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Erro na requisição:', error); // Captura erros de rede ou requisição
            throw error;
        })
};


export const loginUser = (userData) => {
    return fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro no login');
            }
            return response.json();
        })
        .catch( error => {
            console.error('Erro na requisição ', error);
            throw error;
        })
};