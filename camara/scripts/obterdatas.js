// Obtém o ano atual
const anoAtual = new Date().getFullYear();

// Exibe o ano dos direitos autorais
document.getElementById("anoatual").textContent = anoAtual;

// Exibe a data da última modificação do documento
document.getElementById("ultimamodificacao").textContent =
    `última modificação: ${document.lastModified}`;

    const membrosContainer = document.getElementById('membros');

async function getMembros() {
    try {
        const resposta = await fetch('membros.json');
        const membros = await resposta.json();
        exibirMembros(membros);
    } catch (erro) {
        console.error("Erro ao buscar dados dos membros:", erro);
    }
}
function exibirMembros(membros) {
    membros.forEach(membro => {
        let card = document.createElement('div');
        card.className = 'cartao-membro';
        
        card.innerHTML = `
            <img src="imagens/${membro.imagem}" alt="Logo da empresa ${membro.nome}" class="foto" loading="lazy">
            <h3>${membro.nome}</h3>
            <p>${membro.endereco}</p>
            <p>${membro.telefone}</p>
            <a href="${membro.url}" target="_blank">Visitar Site</a>
        `;
        membrosContainer.appendChild(card);
    });
}

getMembros();

const btnGrade = document.getElementById('btn-grade');
const btnLista = document.getElementById('btn-lista');

btnGrade.addEventListener('click', () => {
    membrosContainer.classList.add('destaques');
    membrosContainer.classList.remove('lista');
});

btnLista.addEventListener('click', () => {
    membrosContainer.classList.add('lista');
    membrosContainer.classList.remove('destaques');
});
const btnHamburguer = document.querySelector('.hamburguer');
const navAbas = document.querySelector('.abas');

btnHamburguer.addEventListener('click', () => {
    navAbas.style.display = navAbas.style.display === 'block' ? 'none' : 'block';
});