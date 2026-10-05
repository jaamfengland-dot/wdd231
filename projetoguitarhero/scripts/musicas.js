const url = 'data/musicas.json';
const container = document.getElementById('container-musicas');
const modal = document.getElementById('modal-musica');
const btnFechar = document.getElementById('modal-fechar');
const btnFavorito = document.getElementById('btn-favorito');

let todasAsMusicas = [];
let musicaSelecionada = null;

// 1. Carregar JSON 
async function carregarMusicas() {
    try {
        const resposta = await fetch(url);
        todasAsMusicas = await resposta.json();
        mostrarMusicas(todasAsMusicas);
    } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
        container.innerHTML = '<p>Erro ao carregar as músicas.</p>';
    }
}

// 2. Mostrar músicas (Map + Template Literals + DOM)
function mostrarMusicas(musicas) {
    container.innerHTML = musicas.map(m => `
        <div class="musica" data-nome="${m.nome}" style="cursor: pointer;">
            <h2>${m.nome}</h2>
            <p><strong>Banda:</strong> ${m.banda}</p>
            <p><strong>Dificuldade:</strong> ${m.dificuldade}</p>
        </div>
    `).join('');

    // Abrir modal ao clicar no card
    document.querySelectorAll('.musica').forEach(card => {
        card.addEventListener('click', () => {
            const nome = card.dataset.nome;
            musicaSelecionada = todasAsMusicas.find(m => m.nome === nome);
            
            document.getElementById('modal-titulo').textContent = musicaSelecionada.nome;
            document.getElementById('modal-banda').textContent = musicaSelecionada.banda;
            document.getElementById('modal-dificuldade').textContent = musicaSelecionada.dificuldade;
            document.getElementById('modal-dica').textContent = musicaSelecionada.dica;
            
            atualizarBotaoFavorito(musicaSelecionada.nome);
            modal.showModal();
        });
    });
}

// 3. Filtros usando o método .filter()
document.querySelectorAll('.btn-filtro').forEach(botao => {
    botao.addEventListener('click', (e) => {
        const filtro = e.target.dataset.filtro;
        if (filtro === 'todos') {
            mostrarMusicas(todasAsMusicas);
        } else {
            const filtradas = todasAsMusicas.filter(m => m.dificuldade === filtro);
            mostrarMusicas(filtradas);
        }
    });
});

// Fechar modal
btnFechar.addEventListener('click', () => modal.close());

// 4. Gerenciar Favoritos com LocalStorage requisito 9
function atualizarBotaoFavorito(nome) {
    const favs = JSON.parse(localStorage.getItem('favoritos_gh3')) || [];
    btnFavorito.textContent = favs.includes(nome) ? '⭐ Remover Favorito' : '⭐ Favoritar';
}

btnFavorito.addEventListener('click', () => {
    let favs = JSON.parse(localStorage.getItem('favoritos_gh3')) || [];
    const nome = musicaSelecionada.nome;
    
    if (favs.includes(nome)) {
        favs = favs.filter(n => n !== nome);
    } else {
        favs.push(nome);
    }
    
    localStorage.setItem('favoritos_gh3', JSON.stringify(favs));
    atualizarBotaoFavorito(nome);
});

// Inicializar
carregarMusicas();