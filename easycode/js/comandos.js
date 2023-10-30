const inicio = () => {
    alert("Iniciou o programa <br />")
}

const fim = () => {
    alert("Terminou o programa <br />")
}

const ler = () => {
    valor = prompt("Digite um valor")
    if(typeof valor == "number") return parseFloat(valor)
    else return valor
}

const imprimir = (msg) => {
    alert(msg)
}



