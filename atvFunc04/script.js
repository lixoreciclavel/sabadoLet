let numero = parseInt(prompt("Digite um número: "));
let info = document.getElementById("info04");

function parOuImpar(number) {
  if (number % 2 == 0) {
    info.innerHTML = `O número ${number} é Par.`;
  } else {
    info.innerHTML = `O número ${number} é Ímpar.`;
  }
}

parOuImpar(numero);