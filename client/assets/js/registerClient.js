// Lógica de registro no client

import { registerUser } from './apiService.js';
import { validateName, validateEmail, validatePassword } from './validators.js';

const registerForm = document.querySelector('.registerForm');

const register = (e) => {
    e.preventDefault(); // Evita o envio padrão do formulário
    
    const name = document.querySelector('.name-input').value.trim();
    const email = document.querySelector('.email-input').value.trim();
    const password = document.querySelector('.password-input').value.trim();

    // Validações
    if (!validateName(name)) {
        alert('O nome deve conter apenas letras');
        return;
    }

    if (!validateEmail(email)) {
        alert('E-mail inválido');
        return;
    }

    if (!validatePassword(password)) {
        alert('A senha deve conter 6 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número');
        return;
    }

    // Chamada para registrar o usuário
    registerUser({ name, email, password })
        .then(data => {
            console.log('Cadastro bem-sucedido:', data);
            window.location.href = 'home.html'
        })
        .catch(error => {
            console.error('Erro ao cadastrar:', error);
            alert('Erro no cadastro');
        });
};

registerForm.addEventListener('submit', register);


