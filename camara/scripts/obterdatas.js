// ==========================================
// 1. RODAPÉ (Ano atual e Última modificação)
// ==========================================
const anoAtual = new Date().getFullYear();
document.getElementById("anoatual").textContent = anoAtual;
document.getElementById("ultimamodificacao").textContent = `última modificação: ${document.lastModified}`;

// ==========================================
// 2. MENU HAMBÚRGUER (Responsividade)
// ==========================================
const btnHamburguer = document.querySelector('.hamburguer');
const navAbas = document.querySelector('.abas');

btnHamburguer.addEventListener('click', () => {
    navAbas.style.display = navAbas.style.display === 'block' ? 'none' : 'block';
});

// ==========================================
// 3. DIRETÓRIO DE MEMBROS E BOTÕES GRADE/LISTA
// ==========================================
const membrosContainer = document.getElementById('membros');
const btnGrade = document.getElementById('btn-grade');
const btnLista = document.getElementById('btn-lista');

async function getMembros() {
    try {
        const resposta = await fetch('dados/membros.json'); 
        if (!resposta.ok) {
            throw new Error(`Erro de rede: ${resposta.status}`);
        }
        const membros = await resposta.json();
        exibirMembros(membros);
    } catch (erro) {
        console.error("Erro ao buscar dados dos membros:", erro);
    }
}

function exibirMembros(membros) {
    membrosContainer.innerHTML = ''; 

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

btnGrade.addEventListener('click', () => {
    membrosContainer.classList.add('destaques');
    membrosContainer.classList.remove('lista');
});

btnLista.addEventListener('click', () => {
    membrosContainer.classList.add('lista');
    membrosContainer.classList.remove('destaques');
});