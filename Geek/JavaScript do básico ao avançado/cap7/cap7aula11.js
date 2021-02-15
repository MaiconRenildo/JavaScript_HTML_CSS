//Objetos VS funções

//Construindo objeto através de uma factory function
const pessoa1=(nome,sobrenome)=>{
  return{
    andar: () => console.log(`${nome} ${sobrenome} está andando`)
    //() é o mesmo que function(){}
  }
}

const p1=pessoa1('maria','marta')
console.log(p1)   //{ andar: [Function: andar] }
console.log(typeof(p1))   //object
p1.andar()    //maria marta está andando

//Construindo objeto através de uma função construtora
function Pessoa2(nome,sobrenome){
  this.nome=nome
  this.sobrenome=sobrenome

  this.andar=()=>console.log(`${nome} ${sobrenome} está andando`)
}

const p2=new Pessoa2('Marcia','Matos')
console.log(p2)     //Pessoa2 { nome: 'Marcia', sobrenome: 'Matos', andar: [Function] }
console.log(typeof(p2))   //object
p2.andar()    //Marcia Matos está andando


//Criando objeto através da classe
class Pessoa3{
  constructor(nome,sobrenome){
    this.nome=nome
    this.sobrenome=sobrenome
  }
  andar(){
    console.log(`${this.nome} ${this.sobrenome} está andando`)
  }
}
const p3=new Pessoa3('Matheus','Ribeiro')
console.log(p3)
console.log(typeof(p3))
p3.andar()