// Obtém o ano atual
const ano = document.getElementById("ano");
const ultimaModificacao = document.getElementById("ultima-modificacao");
 
ano.textContent = new Date().getFullYear();
ultimaModificacao.textContent = document.lastModified;
 