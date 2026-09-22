// ==========================================
// 1. RODAPÉ (Ano atual e Última modificação)
// ==========================================
const anoAtual = new Date().getFullYear();
document.getElementById("anoatual").textContent = anoAtual;
document.getElementById("ultimamodificacao").textContent = `última modificação: ${document.lastModified}`;

// Código do menu hambúrguer
const btnHamburguer = document.querySelector('.hamburguer');
const navAbas = document.querySelector('.abas');
btnHamburguer.addEventListener('click', () => {
    const expandido = btnHamburguer.getAttribute('aria-expanded') === 'true' || false;
    btnHamburguer.setAttribute('aria-expanded', !expandido);
    navAbas.style.display = expandido ? 'none' : 'block';
});