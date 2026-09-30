// ==========================================
// 1. LÓGICA DE VISITAS
// ==========================================
const divMensagem = document.getElementById('mensagem-visita');

if (divMensagem) {
    const dataUltimoAcesso = localStorage.getItem('ultimoAcesso');
    const dataAtual = Date.now(); 

    if (!dataUltimoAcesso) {
        divMensagem.textContent = "Boas-vindas! Entre em contato conosco caso tenha alguma dúvida.";
    } else {
        const diferenca = dataAtual - parseInt(dataUltimoAcesso);
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

        if (diferenca < (1000 * 60 * 60 * 24)) {
            divMensagem.textContent = "Já voltou? Que legal!";
        } else {
            divMensagem.textContent = `Seu último acesso foi há ${dias} ${dias === 1 ? "dia" : "dias"}.`;
        }
    }
    localStorage.setItem('ultimoAcesso', dataAtual.toString());
}

// ==========================================
// 2. DADOS DOS MEMBROS (COLOCADOS DIRETO AQUI PARA NÃO FALHAR)
// ==========================================
const membrosDeInteresse = [
  {
    "nome": "Tech Pablo",
    "endereco": "Rua São Paulo, 125, Centro, Itapeva - SP",
    "imagem": "tech-pablo.webp",
    "descricao": "Empresa especializada em desenvolvimento de sites e soluções digitais."
  },
  {
    "nome": "Mercado Bom Preço",
    "endereco": "Avenida Carlos Marques, 450, Centro, Itapeva - SP",
    "imagem": "mercado-bom-preco.webp",
    "descricao": "Mercado local com produtos alimentícios, bebidas e itens para o dia a dia."
  },
  {
    "nome": "Construtora Santos",
    "endereco": "Rua Minas Gerais, 780, Jardim Europa, Itapeva - SP",
    "imagem": "construtora-santos.webp",
    "descricao": "Empresa especializada em construção, reformas e projetos residenciais."
  },
  {
    "nome": "Auto Center",
    "endereco": "Rua Paraná, 310, Jardim Maringá, Itapeva - SP",
    "imagem": "auto-center.webp",
    "descricao": "Oficina especializada em manutenção, revisão e serviços automotivos."
  },
  {
    "nome": "Padaria Pão Dourado",
    "endereco": "Rua Bahia, 210, Centro, Itapeva - SP",
    "imagem": "padaria-pao-dourado.webp",
    "descricao": "Padaria artesanal com pães, doces e salgados feitos diariamente."
  },
  {
    "nome": "Clínica Vida Saudável",
    "endereco": "Avenida Brasil, 560, Jardim Primavera, Itapeva - SP",
    "imagem": "clinica-vida-saudavel.webp",
    "descricao": "Clínica médica com atendimento em clínica geral e exames de rotina."
  },
  {
    "nome": "Studio Fit Academia",
    "endereco": "Rua Goiás, 88, Vila Nova, Itapeva - SP",
    "imagem": "studio-fit.webp",
    "descricao": "Academia completa com musculação e acompanhamento profissional."
  },
  {
    "nome": "Praça de Eventos",
    "endereco": "Praça Matriz, S/N, Centro, Itapeva - SP",
    "imagem": "praca-eventos.webp",
    "descricao": "Ponto de encontro da cidade e palco das principais feiras de comércio local."
  }
];

// ==========================================
// 3. GERAR OS CARTÕES NA TELA
// ==========================================
const galeria = document.getElementById('galeria-descobrir');

if (galeria) {
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
}