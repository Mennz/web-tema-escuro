# Tema claro e escuro

Página de notas de estudo com um botão que troca entre tema claro e escuro.
HTML, CSS e JavaScript puro, sem nenhum framework.

## O que pratiquei

- variáveis CSS (`:root` e `[data-theme="dark"]`) pra não repetir cor espalhada
  pelo arquivo inteiro
- alternar um atributo no `<html>` com JavaScript pra trocar a paleta inteira
- salvar a escolha do usuário no `localStorage` e recuperar na próxima visita
- `window.matchMedia("(prefers-color-scheme: dark)")` pra começar no tema que
  o próprio sistema do usuário já usa, quando ele nunca clicou no botão

## Como rodar

Abrir o `index.html` direto no navegador, não precisa de servidor.

```
start index.html
```
