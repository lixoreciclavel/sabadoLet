let number1 = parseInt(prompt("Digite o primeiro número: "));
let number2 = parseInt(prompt("Digite o segundo número: "));

function VerdadeiroOuFalso(num1, num2) {
  if (num1 === num2) {
    document.getElementById("info05").innerHTML = "Verdadeiro";
  } else {
    document.getElementById("info05").innerHTML = "Falso";
  }
}

VerdadeiroOuFalso(number1, number2);