/*
	OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
	- passo 1 - dar um jeito de pegar o elemento HTML dos botões
	- passo 2 - dar um jeito de identificar o clique do usuário no botão
	- passo 3 - desmarcar o botão selecionado anterior
	- passo 4 - marcar o botão clicado como se estivesse selecionado
	- passo 5 - esconder a imagem anteriormente selecionada
	- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
	- passo 7 - esconder a informação do palyer anteriormente selecionado
	- passo 8 - mostrar a informação do player referente ao botão clicado
*/

//- passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesPlayers = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const player = document.querySelectorAll(".player");

// - passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesPlayers.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // - passo 3 - desmarcar o botão selecionado anterior
    desativarBotaoSelecionado();

    // 	- passo 4 - marcar o botão clicado como se estivesse selecionado
    marcarBotaoSelecionado(botao);

    // - passo 5 - esconder a imagem anteriormente selecionada
    esconderImagemAtiva();

    // - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    mostrarImagemDeFundo(indice);

    // - passo 7 - esconder a informação do player anteriormente selecionado
    esconderPlayerAtiva();

    // - passo 8 - mostrar a informação do player referente ao botão clicado
    mostrarPlayer(indice);
  });
});

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarPlayer(indice) {
  player[indice].classList.add("ativa");
}

function esconderPlayerAtiva() {
  const playerAtiva = document.querySelector(".player.ativa");
  playerAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}