function limparResultado() {
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = "";
  }
  
  document.querySelector(".btn-limpar").addEventListener("click", limparResultado);
  