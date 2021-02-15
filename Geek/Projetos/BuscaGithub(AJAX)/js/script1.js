//AJAX (XMLHttpRequest) - Asynchronous JavaScript and XML

let input=document.querySelector('input[name=github_user]')
let btn=document.querySelector('#btn')
let div=document.querySelector('#app')

btn.onclick=function(){
  //Limpa o conteudo da div
  div.innerHTML=''

  //instanciando objeto ajax
  let ajax=new XMLHttpRequest()

  //Abrir uma conexão(GET,POST,PUT,DELETE...)
  ajax.open('GET',`https://api.github.com/users/${input.value}`)

  //Enviar a requisição
  ajax.send(null)//null porque não foi enviado nada para a pagina


  ///////A partir daqui a aplicação já foi desbloqueada/////

  //Verifica mudanças no estado de pronto, então quando chegar no 4 tudo começará
  ajax.onreadystatechange=function(){
    //Criar elemento span
    let spanNome=document.createElement('span')

    //Criar a variavel nome
    let txtNome=''

    /**
     ajax.readyState => 0 => Antes da conexão ser aberta
     ajax.readyState => 1 => Após abrir a conexão
     ajax.readyState => 2 => headers(cabeçalhos) foram recebidos
     ajax.readyState => 3 =>Carregando o corpo da requisição(conteúdo/dados)
     ajax.readyState => 4 => O conteudo(dados) está pronto para uso
     */

    if(ajax.readyState===4){
      if(ajax.status===200){
        //Transformar os dados JSON para array
        usuario=JSON.parse(ajax.responseText)
        //console.log(usuario['name']) //É a mesma coisa que usuario.name
    
        //Se o usuário possui nome
        if(usuario['name']!==null){
          txtNome=document.createTextNode(usuario['name'])  //A variavel txtNome recebe o nome do usuario

          let img=document.createElement('img')
          img.setAttribute('src',usuario['avatar_url'])
          img.setAttribute('alt',usuario['name'])
          img.setAttribute('width','45px')
          img.setAttribute('height','45px')

          
          div.appendChild(img)
        }else{
          txtNome=document.createTextNode(`O usuario ${input.value} não tem nome.`)
        }
        //Adiciona o texto ao span e o span à div
        spanNome.appendChild(txtNome)
        div.appendChild(spanNome)

        //Limpar o input
        input.value=''
      }else{
        txtNome=document.createTextNode(`O usuario ${input.value} não foi encontrado.`)
        spanNome.appendChild(txtNome)
        div.appendChild(spanNome)

        //Limpar o input
        input.value=''
      }
    }
  }
}