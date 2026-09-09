

// Cartões de destaque de membros (nível Prata/Ouro), a partir do JSON
async function carregarDestaques() {
    try {
        const resposta = await fetch("data/membros.json");
        const membros = await resposta.json();

        const elegiveis = membros.filter(m => m.nivel_associacao >= 2);
        const sorteados = elegiveis
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);

        const container = document.getElementById("membros");
        container.innerHTML = "";

        sorteados.forEach(membro => {
            const cartao = document.createElement("section");
            cartao.classList.add("cartao-membro");

            const nome = membro.nome.trim();

            cartao.innerHTML = `
                <h3>${nome}</h3>
                <p class="slogan">${membro.descricao}</p>
                <div class="info">
                    <img class="foto" src="imagens/${membro.imagem}" alt="Logo de ${nome}">
                    <div class="dados">
                        <p><strong>Endereço:</strong> ${membro.endereco}</p>
                        <p><strong>Telefone:</strong> ${membro.telefone}</p>
                        <p><strong>Site:</strong> <a href="${membro.url}">${membro.url}</a></p>
                    </div>
                </div>
            `;

            container.appendChild(cartao);
        });
    } catch (erro) {
        console.error("Não foi possível carregar os destaques de membros:", erro);
    }
}

carregarDestaques();