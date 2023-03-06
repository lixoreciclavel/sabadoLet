let porcent = parseFloat(prompt("Digite um número: "));
let num = parseFloat(prompt("Digite a porcentagem que você deseja saber: "));
let info = document.getElementById("info03");

const objeto = { numero: num, porcentagem: porcent };

function calculator() {
  let tirado = objeto.numero * (objeto.porcentagem / 100);
  info03.innerHTML = `${objeto.numero}%  de ${objeto.porcentagem} é ${tirado}.`;
}

calculator(num, porcent);