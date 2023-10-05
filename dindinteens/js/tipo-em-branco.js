const selectTipo = document.getElementById("tipo");

// Adicionar uma opção em branco ao select
const opcaoEmBranco = document.createElement("option");
opcaoEmBranco.value = "";
opcaoEmBranco.textContent = "";
selectTipo.prepend(opcaoEmBranco);
