function adicionarFilme() {
  var campoFilme = document.querySelector('#filme')
//o comando dicument.querySelector pega o codigo HTML
  var filmeImagem = campoFilme.value
//O COMANDO .value com a variavel que recebeu o codigo HTML, RETIRA O VALOR COLOCADO 
  if (filmeImagem.endsWith('.jpg')) {
      listarFilmesNaTela(filmeImagem)
  } else {
      alert("LINK INVÁLIDO")
  }
  campoFilme.value = "" 
}
//função responsavel por receber o valor colocado na caixa de texto

function listarFilmesNaTela(filme)	{
	var	listaFilmes	=	document.querySelector('#listaFilmes')
	var	elementoFilme	=	"<img	src="	+	filme	+	">"
	listaFilmes.innerHTML	=	listaFilmes.innerHTML	+	elementoFilme
}
//função responsavel por adicionar mais codigo no HTML, para que possa listar na tela
