// Obter o elemento do select do período
const selectPeriodo = document.getElementById("periodo");

// Adicionar uma opção em branco ao select
const opcaoEmBranco = document.createElement("option");
opcaoEmBranco.value = "";
opcaoEmBranco.textContent = "";
selectPeriodo.prepend(opcaoEmBranco);
