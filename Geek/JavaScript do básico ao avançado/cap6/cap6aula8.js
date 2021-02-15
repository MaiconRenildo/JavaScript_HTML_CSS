//Funções Construtoras

function Pessoa(n,s,raca='Humano'){
  //Atributos privados: só conseguimos fazer uso dentro da função construtora
  let altura=0.3
  let peso=0.5
  let idade=0
  let nome=n
  let sexo=s
  //Atributo publico: pode ser usado fora da função construtora
  this.raca=raca
  //metodo privado(só conseguimos fazer uso dentro da função construtora)
  let imprimir_dados=function(){
    console.log(`Nome: ${nome}, Idade:${idade}, Peso:${peso}, Altura:${altura}, Sexo:${sexo}, Raça:${raca}`)
  }
  //metodo publico(conseguimos acessar fora da função construtora)
  this.fazer_aniversario=function(){
    idade+=1
    imprimir_dados()
  }
  this.getIdade=function(){
    return idade
  }

} 
  //Instanciando um novo objeto
  const maria=new Pessoa('Maria','Feminino')
  console.log(maria)
  console.log(typeof(maria))

  console.log(maria.peso)  //Privado->Retorna undefined
  console.log(maria.raca)  //Publico->Retorna 'humano'

  maria.fazer_aniversario() //Nome: Maria, Idade:1, Peso0.5, Altura:0.3, Sexo:Feminino, Raça:Humano
  maria.fazer_aniversario() //Nome: Maria, Idade:2, Peso0.5, Altura:0.3, Sexo:Feminino, Raça:Humano

  //Instanciando um novo objeto
  const felicity=new Pessoa('Felicity','Feminino')
  felicity.fazer_aniversario() //Nome: Felicity, Idade:1, Peso:0.5, Altura:0.3, Sexo:Feminino, Raça:Humano
  console.log(felicity.getIdade())

  console.log(typeof(Pessoa))   //Função
  console.log(typeof(felicity)) //Objeto
