function mostrarAlerta(){
  alert('O botão foi clicado.')
}

function mudarTexto(elemento){
  elemento.innerHTML='Eu estou avisando.'
}

function mudarCor(){
  let cores=['green','yellow','black','red','blue','purple','orange','magenta']
  const numero= Math.floor((Math.random()*cores.length)+1)
  document.bgColor=cores[numero]
}

function escreverTexto(input){
  span=document.getElementById('Texto')
  span.innerHTML=input.value
}
