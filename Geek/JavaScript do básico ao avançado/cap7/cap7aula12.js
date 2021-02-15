/*
JSON - JavaScript Object Notation
*/

const curso={
  nome: 'Programação em JavaScript',
  horas:27,
  preco(){
    return this.horas*0.67
  }
}
console.log(curso)
console.log(curso.preco())    //18.09
console.log(typeof(curso))    //object

//Convertendo objeto Javascript para JSON
const json=JSON.stringify(curso)
console.log(json)   //{"nome":"Programação em JavaScript","horas":27}
console.log(typeof(json)) //String

//Convertendo de JSON para objeto JavaScript
const obj= JSON.parse(json)
console.log(obj)    //{ nome: 'Programação em JavaScript', horas: 27 }
console.log(typeof(obj))  //object


const json_errado="{'nome': 'Programação em JavaScript','preco':27.99}"
console.log(json_errado)
console.log(typeof(json_errado))

//const novo_obj=JSON.parse(json_errado)    //ERRO!!!!
//console.log(novo_obj)
//console.log(typeof(novo_obj))

const json_correto='{"nome":"Programação em JavaScript","preco":27.99}'

