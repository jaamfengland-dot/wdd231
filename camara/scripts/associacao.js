// Lógica de Visitas (LocalStorage)
const divMensagem = document.getElementById('mensagem-visita');
const dataUltimoAcesso = localStorage.getItem('ultimoAcesso');
const dataAtual = Date.now(); // Retorna em milissegundos

if (!dataUltimoAcesso) {
    // Primeira visita
    divMensagem.textContent = "Boas-vindas! Entre em contato conosco caso tenha alguma dúvida.";
} else {
    // Calcular a diferença
    const diferencaMilissegundos = dataAtual - parseInt(dataUltimoAcesso);
    const milissegundosEmUmDia = 1000 * 60 * 60 * 24;
    const diasPassados = Math.floor(diferencaMilissegundos / milissegundosEmUmDia);

    if (diferencaMilissegundos < milissegundosEmUmDia) {
        divMensagem.textContent = "Já voltou? Que legal!";
    } else {
        const palavraDia = diasPassados === 1 ? "dia" : "dias";
        divMensagem.textContent = `Seu último acesso foi há ${diasPassados} ${palavraDia}.`;
    }
}

// Atualiza o local storage com a visita atual
localStorage.setItem('ultimoAcesso', dataAtual);