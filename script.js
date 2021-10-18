var numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
    console.log("acertou");
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Apenas números de 0 a 10";
    console.log("apenas números de 0 a 10");
  } else {
    elementoResultado.innerHTML =
      "Errou. O número secreto era: " + numeroSecreto;
    console.log("errou");
  }
}
