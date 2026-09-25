// Criação do objeto com a string de consulta da URL
const params = new URLSearchParams(window.location.search);

// Extração dos parâmetros individualmente
const nome = params.get('nome');
const sobrenome = params.get('sobrenome');
const email = params.get('email');
const celular = params.get('celular');
const empresa = params.get('empresa');
const timestamp = params.get('timestamp');

// Renderização na tela
const containerResumo = document.getElementById('resumo-dados');
containerResumo.innerHTML = `
    <p><strong>Nome Completo:</strong> ${nome} ${sobrenome}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Número de Celular:</strong> ${celular}</p>
    <p><strong>Nome da Empresa/Organização:</strong> ${empresa}</p>
    <p><strong>Enviado em:</strong> ${timestamp}</p>
`;