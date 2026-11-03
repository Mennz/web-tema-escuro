const botaoTema = document.getElementById("botao-tema");
const html = document.documentElement;

function atualizarTextoBotao() {
  const escuro = html.getAttribute("data-theme") === "dark";
  botaoTema.textContent = escuro ? "Modo claro" : "Modo escuro";
}

botaoTema.addEventListener("click", () => {
  const atual = html.getAttribute("data-theme");
  html.setAttribute("data-theme", atual === "dark" ? "light" : "dark");
  atualizarTextoBotao();
});

atualizarTextoBotao();
