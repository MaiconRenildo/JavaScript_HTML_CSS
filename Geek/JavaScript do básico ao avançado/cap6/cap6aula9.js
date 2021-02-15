//Funções Closures

let xuxa='global'

function imprimir(){
  console.log(xuxa)   //global
}

function outra(){
  let xuxa='local'
  imprimir()        //global
  console.log(xuxa) //local
}

//outra() //global e local respectivamente

//Novo exemplo

let variavel='Global'

function externo(){
  let variavel='Local'
  function interna(){
    return variavel     //Local
  }
  return interna
}
let executa = externo()
console.log(executa())    //local