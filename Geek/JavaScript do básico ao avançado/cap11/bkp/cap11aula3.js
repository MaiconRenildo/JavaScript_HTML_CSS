/*
    -Conjuntos não aceitam repetições de valores
    --Conjuntos não são indexados
*/

let cursos=new Set()
//Adiciona elementos ao conjunto
cursos.add('Programação para leigos')
cursos.add('Algoritmos e Lógica de Programação')
//console.log(cursos) //Set { 'Programação para leigos', 'Algoritmos e Lógica de Programação' }

cursos.add('Programação em C').add('Programação em Java').add('Programação em Python')
cursos.add('Banco de Dados')
cursos.add('Programação Web com DJango Framework')

//console.log(cursos)   
/*Set {
  'Programação para leigos',
  'Algoritmos e Lógica de Programação',
  'Programação em C',
  'Programação em Java',
  'Programação em Python',
  'Banco de Dados',
  'Programação Web com DJango Framework'
}
*/
//Verifica o tamanho do conjunto
//console.log(cursos.size)  //7

//Procura o Elemento e retorna true ou false
//console.log(cursos.has('Banco de Dados'))

//Não dá para adicionar o mesmo elemento 2x

//Deleta o Elemento do conjunto
cursos.delete('Programação para leigos')

//Se conseguir encontrar e deletar retorna true
let ret=cursos.delete('Banco de Dados')
console.log(ret)  //true

//Salva todo o conjunto na variavel c
let c=cursos.add('Curso de CSS')
//console.log(c)  //Retorna todo o conjunto

let frutas=['Manga','uva','Jaca','uva']
//Salva o conteudo de frutas sem repetição
let frutas_unicas=new Set(frutas)
console.log(frutas_unicas)

//FORMAS DE CONVERTER DE SET PARA ARRAY
let Frutas=Array.from(frutas_unicas)
console.log(Frutas[1])

let array=[]
frutas_unicas.forEach(function(valores){
  array.push(valores)
})
console.log(array)

let array1=[...frutas_unicas]
console.log(array1)
