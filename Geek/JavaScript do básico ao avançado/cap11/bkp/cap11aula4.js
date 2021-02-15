//Usando for of(elementos) e for in(indices)

let nome='Geek University'
for(let letra of nome){
  //console.log(letra)  //Imprime todos os elementos de nome
}

let numeros=[1,2,3,4,5]
for(let numero of numeros){
  //console.log(numero*2) //Imprime o dobro de todos os números
}

for(let indice in numeros){
  //console.log( `Indice: ${indice}, Valor: ${numeros[indice]}`) //Imprime os indices(posições) e os números
}

let cursos=new Map([
  [1, 'Programação para leigos'],
  [2, 'Programação para leigos'],
  [3, 'Programação para leigos'],
  [4, 'Programação para leigos'],
  [5, 'Programação para leigos'],
  [6, 'Programação para leigos'],
  [7, 'Programação para leigos']
])

//console.log(cursos.keys())  //Imprime as chaves
//console.log(cursos.values())  //Imprime os valores

for(let curso of cursos){
  //console.log(curso)  //Retorna todo o conteudo
}

for(let curso of cursos){
  //console.log(`${curso[0]} - ${curso[1]}`)  //Retorna 1 - Programação para leigos...
}

for(let chave of cursos.keys()){
  //console.log(chave)  //Imprime cada chave
}

for(let valor of cursos.values()){
  //console.log(valor)  //Imprime cada valor
}
for(let[chave,valor] of cursos.entries()){
  //console.log(`${chave} - ${valor}`)  //1 - Programação para leigos...
}

let conjunto=new Set([1,2,3,4,5,5])
for(let numero of conjunto){
  console.log(numero) //Imprime cada número
}


