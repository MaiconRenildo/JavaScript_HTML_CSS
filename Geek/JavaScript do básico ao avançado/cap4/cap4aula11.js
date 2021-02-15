//Executar cada comando no terminal

function soma(a,b){
  var res=a+b
  return c
}
var resultado=soma(6,4)
console.log(resultado) //10


function SOMAR(val1,val2){
  console.log(val1+val2)
}
SOMAR(6,4) //10


function mensagem(){
  console.log('Esta é minha mensagem')
}
mensagem()

setTimeout(console.log, 1000, "Esta funcao", "tem", 4, "parametros");//Escreve 1x depois de 1 segundo

setInterval(console.log, 1000, "Esta funcao so tem um parametro"); //Escreve eternamente a cada 1 segundo

setTimeout(alert,300,'ok','vamosss') //Só escreve o ok