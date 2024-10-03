//Lógica de login no client

import { loginUser } from './apiService.js';
import { validateEmail, validatePassword } from './validators.js';

const loginForm = document.querySelector('.login-form');

const login = (e) => {
    e.preventDefault(); 

    const email = document.querySelector('.email-input').value.trim();
    const password = document.querySelector('.password-input').value.trim();

    // Validações
    if (!validateEmail(email)) {
        alert('E-mail inválido');
        return;
    }

    if (!validatePassword(password)) {
        alert('A senha deve conter 6 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número');
        return;
    }

    // Chamada para logar o usuário
    loginUser({ email, password })
        .then(data => {
            console.log('Login bem-sucedido:', data);
            window.location.href = 'home.html';
        })
        .catch(error => {
            console.error('Erro ao logar:', error);
            alert('Erro no login');
        });
};

loginForm.addEventListener('submit',login);
