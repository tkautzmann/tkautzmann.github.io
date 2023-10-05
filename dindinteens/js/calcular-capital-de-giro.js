function calcularCapitalDeGiro() {
  // Obter os valores do formulário
  const periodo = document.getElementById("periodo").value;
  const gastos = document.querySelectorAll(".gasto");

  // Somar os gastos
  let totalGastos = 0;
  for (const gasto of gastos) {
    totalGastos += parseFloat(gasto.querySelector(".valor").value);
  }

  // Calcular o capital de giro
  let capitalDeGiro = 0;
  switch (periodo) {
    case "Mensal":
      capitalDeGiro = totalGastos * 3;
      break;
    case "Trimestral":
      capitalDeGiro = totalGastos * 9;
      break;
    case "Semestral":
      capitalDeGiro = totalGastos * 18;
      break;
    case "Anual":
      capitalDeGiro = totalGastos * 36;
      break;
  }

  // Exibir o resultado
  document.getElementById("capital-de-giro").textContent = capitalDeGiro.toFixed(2);
}

// Adicionar um evento de submit ao formulário
document.querySelector("form").addEventListener("submit", calcularCapitalDeGiro);
