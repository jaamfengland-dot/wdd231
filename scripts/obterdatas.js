// Obtém o ano atual
const anoAtual = new Date().getFullYear();

// Exibe o ano dos direitos autorais
document.getElementById("anoatual").textContent = anoAtual;

// Exibe a data da última modificação do documento
document.getElementById("ultimamodificacao").textContent =
    `ultima modificação: ${document.lastModified}`;

const cursos = [
    {
        assunto: 'CSE',
        numero: 110,
        titulo: 'Introduction to Programming',
        creditos: 2,
        certificado: 'Web and Computer Programming',
        descricao: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        tecnologia: [
            'Python'
        ],
        concluido: true
    },
    {
        assunto: 'WDD',
        numero: 130,
        titulo: 'Web Fundamentals',
        creditos: 2,
        certificado: 'Web and Computer Programming',
        descricao: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        tecnologia: [
            'HTML',
            'CSS'
        ],
        concluido: true
    },
    {
        assunto: 'CSE',
        numero: 111,
        titulo: 'Programming with Functions',
        creditos: 2,
        certificado: 'Web and Computer Programming',
        descricao: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        tecnologia: [
            'Python'
        ],
        concluido: true
    },
    {
        assunto: 'CSE',
        numero: 210,
        titulo: 'Programming with Classes',
        creditos: 2,
        certificado: 'Web and Computer Programming',
        descricao: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        tecnologia: [
            'C#'
        ],
        concluido: false
    },
    {
        assunto: 'WDD',
        numero: 131,
        titulo: 'Dynamic Web Fundamentals',
        creditos: 2,
        certificado: 'Web and Computer Programming',
        descricao: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        tecnologia: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        concluido: true
    },
    {
        assunto: 'WDD',
        numero: 231,
        titulo: 'Frontend Web Development I',
        creditos: 2,
        certificado: 'Web and Computer Programming',
        descricao: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        tecnologia: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        concluido: false
    }
]

// Seleção dos elementos do HTML
const conteinerCursos = document.querySelector('.lista-cursos');
const elTotalCreditos = document.querySelector('.total-creditos');
const botoesFiltro = document.querySelectorAll('.filtro');

// Função para renderizar os cards de cursos e atualizar a frase de créditos
function renderizarCursos(lista) {
    conteinerCursos.innerHTML = '';

    lista.forEach(curso => {
        const item = document.createElement('li');
        item.textContent = `${curso.assunto} ${curso.numero}`;
        
        // Aplica a classe para diferenciar concluídos de não concluídos
        if (curso.concluido) {
            item.classList.add('concluido');
        } else {
            item.classList.add('pendente');
        }

        conteinerCursos.appendChild(item);
    });

    // Soma dos créditos da lista exibida
    const total = lista.reduce((soma, curso) => soma + curso.creditos, 0);
    elTotalCreditos.textContent = `O número total de créditos é: ${total}`;
}

// Evento nos botões de filtro
botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        botoesFiltro.forEach(b => b.classList.remove('ativo'));
        botao.classList.add('ativo');

        const categoria = botao.textContent.trim();

        if (categoria === 'Todos') {
            renderizarCursos(cursos);
        } else {
            const filtrados = cursos.filter(c => c.assunto === categoria);
            renderizarCursos(filtrados);
        }
    });
});
