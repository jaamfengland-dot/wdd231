// O "./" ou "../" é crucial! Aqui dizemos ao script onde achar o arquivo membros.mjs
// Assumindo que a pasta 'scripts' e 'data' estão no mesmo nível.
import { membrosDeInteresse } from '../data/membros.mjs';

// ==========================================
// 1. CÁLCULO DE VISITAS (LOCALSTORAGE)
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
// 2. CRIAR OS 8 CARTÕES NA TELA
// ==========================================
const galeria = document.getElementById('galeria-descobrir');

// Se a div da galeria existir no HTML e os membros forem carregados
if (galeria && membrosDeInteresse) {
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
} else {
    console.error("Não foi possível encontrar a galeria ou os dados dos membros.");
}