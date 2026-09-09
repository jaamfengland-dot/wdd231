// Obtém o ano atual
const anoAtual = new Date().getFullYear();

// Exibe o ano dos direitos autorais
document.getElementById("anoatual").textContent = anoAtual;

// Exibe a data da última modificação do documento
document.getElementById("ultimamodificacao").textContent =
    `ultima modificação: ${document.lastModified}`;

const botãogrid = document.querySelector("#grid");
const botãolista = document.querySelector("#lista");
const exibir = document.querySelector("article");

// O código a seguir poderia ser escrito de forma mais limpa. Como? Talvez tenhamos que simplificar nosso HTML e pensar em uma visualização padrão.

botãogrid.addEventListener("click", () => {
	// exemplo usando função arrow
	exibir.classList.add("grid");
	exibir.classList.remove("lista");
});

botãolista.addEventListener("click", mostrarlist); // exemplo usando função definida

function mostrarlist() {
	exibir.classList.add("lista");
	exibir.classList.remove("grid");
}
