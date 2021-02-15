import api from './api'

class App{
  constructor(){
    //Lista de repositórios
    this.repositorios=JSON.parse(localStorage.getItem('repositorios'))||[]

    //Form
    this.formulario=document.querySelector('form')

    //Lista
    this.lista=document.querySelector(".list-group")

    //Método para registrar eventos do form
    this.registrarEventos()

    //Renderiza a tela para colocar os repositorios salvos no storage
    this.renderizarTela()

  }
  registrarEventos(){
    this.formulario.onsubmit=evento=>this.adicionarRepositorio(evento)
  }

  verificarItens(){
    //itens da lista
    let a=document.querySelector(".list-group")
    this.itensLista=document.querySelectorAll('.list-group-item')
    let b=this.repositorios
    let tamanho=this.itensLista.length-1
    for(let i=tamanho;i>1;i--){
       // this.itensLista[i].onclick=this.removerElementos(this.itensLista)
       
       this.itensLista[i].onclick=function(){
         
         a.removeChild(this)
        
         b.splice(i,1)
         let item=this.textContent.split('\n')
         console.log(item)
         
         
       }
      }
  }





  async adicionarRepositorio(evento){
    //Evita que o formulário recarregue a página
    evento.preventDefault()

    //Recuperar o valor do input
    let input=document.querySelector('input[id=repositorio]').value
    

    //Se o input vier vazio...sai da aplicação
    if(input.legth===0){
      return; //Return sempre sai da função
    }

    //Ativa o carregamento
    this.apresentarBuscando()

    try{
      let response= await api.get(`/repos/${input}`)

      let {name,description,html_url,owner:{avatar_url}}=response.data
      
      //console.log(response)
      
      this.repositorios.unshift({
        nome:name,
        descricao:description,
        avatar_url:avatar_url,
        link:html_url
        })
        
        //Renderizar a tela
        this.renderizarTela()  


      }catch(erro){
        //Limpa buscando
        this.lista.removeChild(document.querySelector('.list-group-item-warning'))

        //Limpa erro existente
        let er=document.querySelector('.list-group-item-danger')
        if(er!==null){
          this.lista.removeChild(er)
        }

        let li=document.createElement('li')
        li.setAttribute('class','list-group-item list-group-item-danger')
        let txtErro=document.createTextNode(`O repositório não existe.`)
        li.appendChild(txtErro)
        this.lista.appendChild(li)
      }
  }

  apresentarBuscando(){

    //<li>
    let li=document.createElement('li')
    li.setAttribute('class','list-group-item list-group-item-warning')
    let txtBuscando=document.createTextNode(`Aguarde, buscando o repositório...`)
    li.appendChild(txtBuscando)
    this.lista.appendChild(li)
  }

  renderizarTela(){
    //Limpar o conteudo da lista
    this.lista.innerHTML=''

    //Percorrer toda a lista
    this.repositorios.forEach(repositorio=>{
      //<li>
      let li=document.createElement('li')
      li.setAttribute('class','list-group-item list-group-item-action')

      //<img>
      let img=document.createElement('img')
      img.setAttribute('src',repositorio.avatar_url)
      li.appendChild(img)

      //<strong>
      let strong=document.createElement('strong')
      let txtNome=document.createTextNode(repositorio.nome)
      strong.appendChild(txtNome)
      li.appendChild(strong)

      //<p>
      let p=document.createElement("p")
      let txtDescricao=document.createTextNode(repositorio.descricao)
      p.appendChild(txtDescricao)
      li.appendChild(p)

      //<a>
      let a=document.createElement("a")
      a.setAttribute("target",'_blank')
      a.setAttribute('href',repositorio.link)
      let txtA=document.createTextNode('Acessar')
      a.appendChild(txtA)
      li.appendChild(a)

      //Adicionar <li> como filho da <ul>
      this.lista.appendChild(li)

      //Limpar o conteudo do input
      document.querySelector('input[id=repositorio]').value=''

      //Adiciona o foco no input
      document.querySelector('input[id=repositorio]').focus()
    })
    this.verificarItens()
    
    this.salvarDadosNoStorage()
    
    
  }
  salvarDadosNoStorage(){
    localStorage.setItem('repositorios',JSON.stringify(this.repositorios))
  }
  
}

new App()

