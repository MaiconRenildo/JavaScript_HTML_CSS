//First class citizens

function somar(num1,num2){
  return num1+num2
}
//console.log(somar(2,3))

//Exemplo 1
const executar = somar
console.log(executar(10,10))

//Exemplo 2
function subtrair(n1,n2){
  return n1-n2
}
function faz_algo(n1,n2,funcao){
  return funcao(n1,n2)
}
console.log(faz_algo(3,9,somar))
console.log(faz_algo(12,1,subtrair))

//Exemplo 3
function outra(funcao){
  return funcao
}
const qualquer=outra(somar)
console.log(qualquer(40,60))

//Exemplo 4
//Função mais simples
function mensagem(){
  console.log('oi')
}
mensagem()  //Retorna oi
var ola = mensagem() //Retorna 'oi' e undefined
//console.log(mensagem()) //Retorna 'oi' e undefined, pois a função chamada não retorna nada 

//Exemplo 5
let conjunto=[1,2,true,somar]
for(let i=0;i<conjunto.length;i++){
  console.log(typeof(conjunto[i]))   //Retorna: number,number,boolean e function
}

