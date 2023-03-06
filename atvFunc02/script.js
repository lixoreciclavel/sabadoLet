let hourFirst = parseInt(prompt("Qual foi a hora do início: "));
let minutesFirst = parseInt(prompt("E os minutos: "));
let hourLast = parseInt(prompt("Digite a hora do término: "));
let minutesLast = parseInt(prompt("E os minutos: "));
let info = document.getElementById("info");

function horasGastas(horaInicial, minutoInicial, horaFinal, minutoFinal) {
  const minutosFinais = horaFinal * 60 + minutoFinal;
  const minutosIniciais = horaInicial * 60 + minutoInicial;

  if (minutosFinais > 1440 || minutosIniciais > 1440) {
    info.innerHTML = `[ERRO]Desculpe mas este horário não existe! Apenas horário até 24 horas.`;
  } else {
    let horasGastas = 0;
    if (minutosFinais > minutosIniciais) {
      let minutosGastos = minutosFinais - minutosIniciais;
      while (minutosGastos >= 60) {
        console.log("entrou");
        horasGastas++;
        minutosGastos = minutosGastos - 60;
      }

      info02.innerHTML = `Você iniciou às ${horaInicial}:${minutoInicial} e terminou às ${horaFinal}:${minutoFinal}. No fim, gastou ${horasGastas} horas e ${minutosGastos} minutos.`;
    } else if (minutosIniciais > minutosFinais) {
      let tempoAteMeiaNoite = 1440 - minutosIniciais;
      let minutosGastos = tempoAteMeiaNoite + minutosFinais;
      while (minutosGastos >= 60) {
        console.log("entrou");
        horasGastas++;
        minutosGastos = minutosGastos - 60;
      }

      info02.innerHTML = `Você iniciou às ${horaInicial}:${minutoInicial} e terminou às ${horaFinal}:${minutoFinal}. No fim, gastou ${horasGastas} horas e ${minutosGastos} minutos.`;
    }
  }
}

horasGastas(hourFirst, minutesFirst, hourLast, minutesLast);