//Funções com parametros e retorno

function idade(ano_nascimento){
  const data=new Date().getFullYear()
  console.log(data-ano_nascimento)
}
let valor=idade(2001) //valor sera undefined, pois a função idade não retorna nada
console.log(valor)   

function calcular_idade(ano_nascimento){
  const data=new Date() //Gera a data atual
  const idade= data.getFullYear() - ano_nascimento
  return idade   //Possibilita o salvamento em uma variavel
}
let retorno=calcular_idade(1998)  
console.log(retorno)

const data=new Date()
console.log(`Data completa: ${data}`)
console.log(`Ano: ${data.getFullYear()}`)
console.log(`Mês: ${data.getMonth()}`) //0-janeiro,1-fevereiro...

//Fique esperto!

function somar(a,b){
  return a+b
}
console.log(somar(1,2))          // 3
console.log(somar(1))            //NAN
console.log(somar(1,2,7))        //3
console.log(somar(1,2,7,18,22))  //3
