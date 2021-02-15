//Operadores Rest e Spread

function total(...precos){
  let total=0
  precos.forEach(p=>total+=p)
  return total
}

console.log(total(10,20,30,40,60))  //160
console.log(total())  //0

/////////////////

let frutas1=['Morango','uva','Melancia']
let frutas2=['Abacate','Morango','Jaca']

let compras=[...frutas1,...frutas2]
console.log(compras)  //[ 'Morango', 'uva', 'Melancia', 'Abacate', 'Morango', 'Jaca' ]

compras=[frutas1,frutas2]
console.log(compras)  //[ [ 'Morango', 'uva', 'Melancia' ], [ 'Abacate', 'Morango', 'Jaca' ] ]

compras=frutas1+frutas2
console.log(compras)  //Morango,uva,MelanciaAbacate,Morango,Jaca

///////////////////

let alunos=['Paula','Felipe','Fernanda']
let novo='Joana'
let todos=[...alunos,novo]
console.log(todos)  //[ 'Paula', 'Felipe', 'Fernanda', 'Joana' ]