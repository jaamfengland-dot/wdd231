console.log("✅ 1. O script descobrir.js iniciou com sucesso!");

// ==========================================
// 1. LÓGICA DE VISITAS (LOCALSTORAGE)
// ==========================================
const divMensagem = document.getElementById('mensagem-visita');
if (divMensagem) {
    const dataUltimoAcesso = localStorage.getItem('ultimoAcesso');
    const dataAtual = Date.now(); 

    if (!dataUltimoAcesso) {
        divMensagem.textContent = "Boas-vindas! Entre em contato conosco caso tenha alguma dúvida.";
    } else {
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
    localStorage.setItem('ultimoAcesso', dataAtual.toString());
}

// ==========================================
// 2. BUSCAR DADOS DO JSON (FETCH) E GERAR CARTÕES
// ==========================================
const url = '../data/membros.json';
const galeria = document.getElementById('galeria-descobrir');
console.log("✅ 2. Div da galeria encontrada no HTML:", galeria);

// Função assíncrona para buscar o arquivo JSON
async function carregarCartoes() {
    if (!galeria) {
        console.error("❌ ERRO: Galeria não encontrada.");
        return;
    }

    try {
        console.log("✅ 3. Buscando dados do arquivo membros.json...");
        
        // Faz a busca do arquivo JSON
        const resposta = await fetch(url);
        const membrosDeInteresse = await resposta.json();
        
        console.log("✅ 4. Dados recebidos do JSON:", membrosDeInteresse);

        // Cria cada cartão baseado no JSON
        membrosDeInteresse.forEach(item => {
            const card = document.createElement('div');
            card.className = 'cartao-item';

            const titulo = document.createElement('h2');
            titulo.textContent = item.nome;

            const figure = document.createElement('figure');
            const img = document.createElement('img');
            img.src = `imagens/${item.imagem}`;
            img.alt = `Foto de ${item.nome}`;
            img.width = 300;
            img.height = 200;
            img.loading = 'lazy';
            figure.appendChild(img);

            const endereco = document.createElement('address');
            endereco.textContent = item.endereco;

            const descricao = document.createElement('p');
            descricao.textContent = item.descricao;

            const botao = document.createElement('button');
            botao.textContent = 'Saiba mais';

            card.appendChild(titulo);
            card.appendChild(figure);
            card.appendChild(endereco);
            card.appendChild(descricao);
            card.appendChild(botao);

            galeria.appendChild(card);
        });
        
        console.log("✅ 5. Cartões criados e inseridos na tela com sucesso!");

    } catch (erro) {
        console.error("❌ ERRO ao carregar o JSON:", erro);
    }
}

// Executa a função
carregarCartoes();