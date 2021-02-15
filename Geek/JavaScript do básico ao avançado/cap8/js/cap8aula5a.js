let btn=document.querySelector('button')

btn.onclick=function(){
  //Declara a variável de texto que será adicionado ao parágrafo
  let textElement=''

  //Recupera o valor do input
  let inputValue=document.querySelector('input').value
  
  //Cria um elemento paragrafo <p></p>
  let pElement=document.createElement('p')
  //Adiciona o atributo class ao parágrafo
  pElement.setAttribute('class','classe-p')

  //Verifica se o usuário preencheu o input, caso contrário coloca um texto padrão
  if(inputValue!==''){
    //console.log(typeof inputValue)  //String
    textElement=document.createTextNode(inputValue)  //Cria um objeto(Nó de texto), pois somente a partir dele será possível adicionar o texto a tag p criada
  }else{
    textElement=document.createTextNode('Tem nada') //Cria um objeto(Nó de texto), pois somente a partir dele será possível adicionar o texto a tag p criada
  }
  //Salva o nó de texto como filho do parágrafo criado
  pElement.appendChild(textElement) //Salva o nó de texto na tag p
  console.log(pElement)

  //Recupera a div
  let divElement=document.querySelector('#app')
  //Salva o parágrafo criado como filho da div app
  divElement.appendChild(pElement)

  document.querySelector('input').value=''  //Zera o campo
}