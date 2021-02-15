//Funções Callbacks

const cursos=[
  'JavaScript',
  'Css',
  'C',
  'C++',
  'Python',
  'Java',
  'HTML'
]
function apresentar(curso,indice){
  console.log(`${indice+1} - ${curso}`)
}
//cursos.forEach(apresentar)        //Aqui ocorre o callback

//Usando Lambda
cursos.forEach(function(curso,indice){
 // console.log(`${indice+1} - ${curso}`)
})

//Usando Arrow
cursos.forEach((curso,indice)=>console.log(`${indice+1} - ${curso}`))

const precos=[23.55,78.23,899.43,12.89,5.23,67.45]
let menores=[]

for (let i in precos){
  if(precos[i]<50){
    menores.push(precos[i])
  }
}
console.log(menores)      //[ 23.55, 12.89, 5.23 ]


//Forma 1
menores=precos.filter(function(preco){
  return preco<50
})
console.log(menores)

//Forma 2
menores=precos.filter(preco=> preco<10)
console.log(menores)