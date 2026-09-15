// Importações
import cursoBYUI from './curso.mjs';
import { definirSecaoSelecionada } from './secoes.mjs';
import { definirTitulo, renderizarSecoes } from './saida.mjs';

// Receptores de Eventos (Botões)
document.querySelector("#matricularEstudante").addEventListener("click", function () {
  const numeroSecao = Number(document.querySelector("#numeroSecao").value);
  cursoBYUI.mudarMatriculas(numeroSecao);
  renderizarSecoes(cursoBYUI.secoes); // Atualiza a tela após matricular
});

document.querySelector("#removerEstudante").addEventListener("click", function () {
  const numeroSecao = Number(document.querySelector("#numeroSecao").value);
  cursoBYUI.mudarMatriculas(numeroSecao, false);
  renderizarSecoes(cursoBYUI.secoes); // Atualiza a tela após remover
});

// Inicialização da página
definirTitulo(cursoBYUI);
definirSecaoSelecionada(cursoBYUI.secoes);
renderizarSecoes(cursoBYUI.secoes);