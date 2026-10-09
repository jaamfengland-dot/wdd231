// Obtém o ano atual
const ano = document.getElementById("ano");
const ultimaModificacao = document.getElementById("ultima-modificacao");
 
ano.textContent = new Date().getFullYear();
ultimaModificacao.textContent = document.lastModified;
 
const btnMenu = document.getElementById('menu-toggle');
const navMenu = document.getElementById('menu-principal');

btnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('ativo');
});