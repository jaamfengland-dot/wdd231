// Obtém o ano atual
const anoAtual = new Date().getFullYear();

// Exibe o ano dos direitos autorais
document.getElementById("anoatual").textContent = anoAtual;

// Exibe a data da última modificação do documento
document.getElementById("ultimamodificacao").textContent =
    `ultima modificação: ${document.lastModified}`;