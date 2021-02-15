//Objetos e suas funções

const curso={
  nome:'Programação em JavaScript',
  horas:25,
  preco:27.99
}
console.log(curso)
console.log(typeof(curso))

console.log(Object.keys(curso))      //[ 'nome', 'horas', 'preco' ]
console.log(Object.values(curso))   //[ 'Programação em JavaScript', 25, 27.99 ]
console.log(Object.entries(curso))  
/*[
  [ 'nome', 'Programação em JavaScript' ],
  [ 'horas', 25 ],
  [ 'preco', 27.99 ]
] */

Object.entries(curso).forEach(par=>{
  console.log(`${par[0]}: ${par[1]}`)
});
/*
nome: Programação em JavaScript
horas: 25
preco: 27.99
*/

Object.entries(curso).forEach(([chave,valor])=>{
  console.log(`${chave}: ${valor}`)
})
/*
nome: Programação em JavaScript
horas: 25
preco: 27.99
*/


Object.defineProperty(curso,'publicacao',{
  enumerable:true,    //true mostra e false deixa invisivel
  writable:false,     //permite modificação?
  value:'07/12/2019'  
});
curso.publicacao='01/01/2020'   //Writable é false, ent n muda nd

console.log(curso)
//console.log(curso.publicacao) //07/12/2019  //Mostra sendo o enumerable true ou não

Object.freeze(curso)  //Congela todo o objeto

const usuarios=[
  {nome:'Aline Moraes',empresa:'Geek',cpf:14875455897},
  {nome:'Ricardo Brandão', empresa:'Google',cpf:14875455827},
  {nome:'Felipe Xavier',empresa:'Sony',cpf:14875789642}
]

console.table(usuarios)
console.table(curso)

