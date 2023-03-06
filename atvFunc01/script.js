let seconds = parseInt(prompt("Digite o tempo em segundos: "));

function conversor(segundos) {
  let horas = Math.floor(segundos / 3600);
  let minutos = Math.floor((segundos % 3600) / 60);
  let segundosRestantes = segundos % 60;

  document.getElementById("info01").innerHTML = `Horas: ${horas} : Minutos: ${minutos} : Segundos: ${segundosRestantes}`;
}

conversor(seconds);