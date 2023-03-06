let number = parseFloat(prompt("Digite um número: "));
let info = document.getElementById("info06");

function roundOff(numero) {
info.innerHTML = `O número é ${numero} e arrendonda fica: ${numero.toFixed(2)}`;
}

roundOff(number);