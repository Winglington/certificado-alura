var tentativas = 3;
var contador = 0;
var	numeroSecreto	=	parseInt(Math.random()	*	10)
alert("você tem 3 tentativas para ganhar o jogo!") 
while (tentativas > 0) {
  contador = contador + 1
  var chute = parseInt(prompt("ESSA É SUA " + contador + "° TENTATIVA. ADVINHE O VALOR X. Está entre 0 a 9"))
  if (chute == numeroSecreto) {
    alert("Acertou")
    break
  } else if (chute > numeroSecreto) {
    alert("O número secreto é menor")
    tentativas = tentativas - 1
  } else if (chute < numeroSecreto) {
    alert("O número secreto é maior")
    tentativas = tentativas - 1
  }
}
if (chute != numeroSecreto) {
  alert("Acabou a quatidade de tentativas! O número é " + numeroSecreto)
}
