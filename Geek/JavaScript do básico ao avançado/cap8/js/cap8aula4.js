let iTexto=document.getElementById('produto')

console.log(iTexto)

let spans=document.getElementsByTagName('span')
console.log(spans)

let eles=document.getElementsByClassName('texto')
console.log(eles)

//Ler valores
console.log(spans[0].textContent)
console.log(spans[1].innerHTML)

//Alterar valores
spans[0].textContent='JavaScript'
spans[1].innerHTML=' Geek University'

let span=document.getElementsByTagName('span')[0]
console.log(span.innerHTML)
span.style.textTransform='uppercase'

let inp=document.querySelector('body div.container div.row input')
console.log(inp)

let inpu=document.querySelector('input') //busca pela tag
let input=document.querySelector('.texto')  //busca pela classe e devolve o primeiro encontrado

let todos=document.querySelectorAll('.texto') //busca todos elementos pela classe

let div1=document.querySelector('#div1')    //Pega o id com todo o conteudo
console.log(div1)

let imp=document.querySelector('input[name=produto]') //Pega apenas o input de name produto
console.log(imp)

//Exemplo 1
let btn = document.querySelector('button.btn')
btn.onclick=function(){
  alert('Clicou')
}

//Exemplo 2

let btn1=document.querySelector('button.btn')
let inp1=document.querySelector('input[name=produto]')

btn1.onclick=function(){
  alert(`Temos o texto ${inp1.value}`)
}