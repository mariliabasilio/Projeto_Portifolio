function mudarFundo(corOuImagem) {
  const bg = document.querySelector(".page-background");

  if (corOuImagem.includes("url")) {
    bg.style.backgroundImage = corOuImagem;
  } else {
    bg.style.background = corOuImagem;
  }
}

/*
Exemplos:
mudarFundo("#222");
mudarFundo("linear-gradient(45deg, red, blue)");
mudarFundo("url('fundo.gif')");
*/