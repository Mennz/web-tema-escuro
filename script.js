const botaoTema = document.getElementById("botao-tema");
const html = document.documentElement;

function atualizarTextoBotao() {
  const escuro = html.getAttribute("data-theme") === "dark";
  botaoTema.textContent = escuro ? "Modo claro" : "Modo escuro";
}

botaoTema.addEventListener("click", () => {
  const atual = html.getAttribute("data-theme");
  const novoTema = atual === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", novoTema);
  localStorage.setItem("tema", novoTema);
  atualizarTextoBotao();
});

const temaSalvo = localStorage.getItem("tema");
if (temaSalvo) {
  html.setAttribute("data-theme", temaSalvo);
} else {
  // sem preferencia salva, usa o que o sistema do usuario ja configurou
  const prefereEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
  html.setAttribute("data-theme", prefereEscuro ? "dark" : "light");
}

atualizarTextoBotao();
