//Instanciando objetos

class Pessoa{
  constructor(nome,sobrenome){
    this._nome = nome
    this._sobrenome = sobrenome
  }

  get nome(){
    return this._nome
  }
  set nome(nome){
    this._nome=nome
  }
  get sobrenome(){
    return this._sobrenome
  }
  set sobrenome(sobrenome){
    this._sobrenome=sobrenome
  }
  falar(msg){
    console.log(`${this.nome} está falando ${msg}`)
  }
  comer(){
    console.log(`${this.nome} está comendo`)
  }
  beber(){
    console.log(`${this.nome} ${this.sobrenome} está bebendo`)
  }
}

class Carro{
  constructor(modelo){
    this._marca ='Honda'
    this._modelo = modelo
  }
  imprimir(){
    console.log(`${this.marca}${this.modelo}`)
  }
  get marca(){
    return this._marca
  }
  get modelo(){
    return this._modelo
  }
  set modelo(modelo){
    this._modele=modelo
  }
}

//Instanciação de objetos
///////Forma 1

const curso=new Object() //Instancia um novo objeto chamado curso
curso.nome='Programa em JavaScript'  //Cria um atributo
curso.preco=27.99    //Cria um atributo
console.log(typeof(curso))  //Object
console.log(curso)  //{ nome: 'Programa em JavaScript', preco: 27.99 }

//Outra forma de criar atributos
curso['qtd_alunos']=999
console.log(curso.qtd_alunos) //999
console.log(curso)  //{ nome: 'Programa em JavaScript', preco: 27.99, qtd_alunos: 999 }

//Deletar Atributos
delete curso.qtd_alunos
console.log(curso.qtd_alunos) //undefined
console.log(curso)  //{ nome: 'Programa em JavaScript', preco: 27.99 }




///////Forma 2(Objeto Literal)

const programa={
  nome:'Photoshop',
  preco:899.99,
  fabricante:{
    nome:'Adobe',
    contato:'contact@Adobe.com',
    endereco:{
      rua:'Rainha da Paz, 45',
      bairro:'Nova Lima',
      cidade:'São Paulo'
    },
    filiais:[
      {cidade:'Rio de Janeiro'},
      {cidade:'Recife'}
    ]
  }
}

console.log(programa.nome)  //Photoshop
console.log(programa.fabricante.nome) //Adobe
console.log(programa.fabricante.filiais.length)   //2

console.log(programa['fabricante']['filiais'].length)  //2

programa.nome='PlayStation OS'
console.log(programa.nome)  //PlayStation OS
console.log(programa)

delete programa.fabricante.filiais
//console.log(programa.fabricante.filiais)   //Undefined
//console.log(programa.fabricante.filiais.length)   //ReferenceError



//////Forma 3(Objeto Literal)
const pessoa={}
console.log(typeof(pessoa))  //object
pessoa.nome='Angelina'
console.log(pessoa)   //{ nome: 'Angelina' }



//////Forma 4(Função Construtora)
function Lampada(cor){
  this.cor=cor
}
const li=new Lampada('Branca')  //Instancia um objeto
console.log(li)   //Lampada { cor: 'Branca' }
console.log(typeof(li))   //Object




/////Forma 5(Objeto a partir das nossas classes)
const p1=new Pessoa('Felicity','Sobrenome')
console.log(p1)   //Pessoa { _nome: 'Felicity', _sobrenome: 'Sobrenome' }
console.log(typeof(p1))     //object
console.log(p1.nome)        //Função get     //Felicity
console.log(p1.sobrenome)   //Função get     //Sobrenome

p1.nome='xuxa'
console.log(p1)     //Pessoa { _nome: 'xuxa', _sobrenome: 'Sobrenome' }

p1.falar('vem aqui')    //xuxa está falando vem aqui
p1.comer()            //xuxa está comendo
p1.beber()              //xuxa Sobrenome está bebendo  


const fit=new Carro(' Fit')
console.log(fit)      //Carro { _marca: 'Honda', _modelo: 'Fit' }
fit.imprimir()