function mudarFundo(corOuImagem) {
  const bg = document.querySelector(".page-background");

  if (corOuImagem.includes("url")) {
    bg.style.backgroundImage = corOuImagem;
  } else {
    bg.style.background = corOuImagem;
  }
}

async function carregarComponente(id, arquivo) {// Função assíncrona para carregar um componente HTML externo
  const resposta = await fetch(arquivo);// Faz uma requisição para o arquivo HTML informado
  const html = await resposta.text();// Converte o conteúdo da resposta para texto (HTML)
  document.getElementById(id).innerHTML = html;// Insere o HTML carregado dentro do elemento com o ID informado
}

carregarComponente("footer", "/assets/components/footer.html"); // Carrega o rodape

/*
Exemplos:
mudarFundo("#222");
mudarFundo("linear-gradient(45deg, red, blue)");
mudarFundo("url('fundo.gif')");
*/