//Funções anônimas (Lambdas)

let numeros=[1,2,3,4,5,6]

function dobrar(valor){
  return valor*2
}
let res1=numeros.map(dobrar)
console.log(numeros)   // [1,2,3,4,5,6]
console.log(res1)      // [2,4,6,8,10,12]

//Funções anônimas
let res2=numeros.map(function(valor){
  return valor*2
})
console.log(res2)      // [2,4,6,8,10,12]

const outra=function(valor){
  return valor*2
}
console.log(outra(9))   //18

function somar(v1,v2){
  return v1+v2
}

let mostrar=function(ni,n2,calculo=somar){        //Se o 3o parametro não for definido, a função soma será chamada
  console.log(calculo(ni,n2))
}
mostrar(2,4)   //6
mostrar(6,9,somar)  //15
mostrar(3,6,function(n1,n2){
  return n1+n2
});

mostrar(3,6,(v1,v2) => v1 * v2)   //18