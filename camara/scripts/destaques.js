async function carregarDestaques() {
    const containerDestaque = document.getElementById('membros-destaque');
    if (!containerDestaque) return;

    try {
        const resposta = await fetch('dados/membros.json');
        if (!resposta.ok) throw new Error("Erro ao carregar JSON");
        const membros = await resposta.json();

        // Filtra apenas membros com nível 2 (Prata) ou 3 (Ouro)
        const membrosQualificados = membros.filter(m => m.nivel_associacao >= 2);

        // Embaralha a lista aleatoriamente
        membrosQualificados.sort(() => 0.5 - Math.random());

        // Define se vai exibir 2 ou 3 empresas
        const quantidade = Math.floor(Math.random() * 2) + 2; 
        const membrosSelecionados = membrosQualificados.slice(0, quantidade);

        containerDestaque.innerHTML = '';
        membrosSelecionados.forEach(membro => {
            const nivelTexto = membro.nivel_associacao === 3 ? 'Ouro' : 'Prata';
            const card = document.createElement('div');
            card.className = 'cartao-membro';
            
            card.innerHTML = `
                <img src="imagens/${membro.imagem}" alt="Logo de ${membro.nome}" class="foto" loading="lazy">
                <h3>${membro.nome}</h3>
                <p class="slogan"><strong>Membro ${nivelTexto}</strong></p>
                <div class="dados">
                    <p>${membro.telefone}</p>
                    <a href="${membro.url}" target="_blank">Website</a>
                </div>
            `;
            containerDestaque.appendChild(card);
        });
    } catch (erro) {
        console.error("Erro nos destaques:", erro);
    }
}
carregarDestaques();