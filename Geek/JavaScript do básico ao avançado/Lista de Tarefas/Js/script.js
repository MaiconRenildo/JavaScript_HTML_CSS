//1-Referenciar o input
let input=document.querySelector('input[name=tarefa]')
//2-Referenciar o button
let btn=document.querySelector('#botao')
//3-Referenciar a lista
let lista=document.querySelector('#lista')

let card=document.querySelector('.card')

let tarefas=JSON.parse(localStorage.getItem('tarefas')) || []
renderizarTarefas()

function renderizarTarefas(){
    //Limpar a listagem de itens antes de renderizar novamente a tela
    lista.innerHTML=''  
  for(tarefa of tarefas){

    //console.log(tarefa)
    //criar o item da lista
    let itemLista=document.createElement('li')
    //Adicionar classaes no item da lista
    itemLista.setAttribute('class','list-group-item list-group-item-action')

    //Adiciona um evento de clique ao item criado
    itemLista.onclick=function(){
      removerTarefa(this)
    }

    //Criar um texto
    let itemTexto=document.createTextNode(tarefa)
    //Adicionar o texto no item da lista
    itemLista.appendChild(itemTexto)
    //Adicionar o item da lista na lista
    lista.appendChild(itemLista)

    input.value=''
    
  }
}


//1- Precisamos escutar o evendo de click do botao
btn.onclick=function(){
  //2- Precisamos capturar o valor digitado pelo usuário no input
  let novaTarefa=input.value
  if(novaTarefa!==''){
    
    //3-Precisamos atualizar a nova tarefa na lista lista(array) de tarefas e renderizar a tela
    tarefas.unshift(novaTarefa)
    
    //Executando a função para renderizar as tarefas
    renderizarTarefas()

    //Limpar mensagens de erro(spans)
    removerSpans()

    salvarDadosNoStorage()

    input.focus()
  }else{
    //Limpar mensagens de erro(spans)
    removerSpans()

    let span=document.createElement('span')
    span.setAttribute('class','alert alert-warning')

    let msg=document.createTextNode('Você precisa informar a tarefa')

    span.appendChild(msg)

    card.appendChild(span)

    input.focus()
  }
}

function removerSpans(){
  let spans=document.querySelectorAll('span')
  console.log(spans)

  for(i=0;i<spans.length;i++){
    card.removeChild(spans[i])
  }
  
}

function removerTarefa(tar){
  //console.log(tar.textContent)//Conteudo(texto) do item
  //console.log(tarefas.indexOf(tar.textContent))//Posição onde o conteudo de tar se encontra no array
  tarefas.splice(tarefas.indexOf(tar.textContent),1)
  renderizarTarefas()
  salvarDadosNoStorage()
  input.focus()
}

function salvarDadosNoStorage(){
                      //Nome do banco //Converte o conteudo para json
  localStorage.setItem('tarefas',JSON.stringify(tarefas))
}