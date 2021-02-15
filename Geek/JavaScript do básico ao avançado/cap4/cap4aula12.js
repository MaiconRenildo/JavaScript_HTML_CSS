//Executar cada comando no terminal

function somar(num1,num2){
  //variavel local(só é reconhecida dentro do bloco da função)
  var valor=5;
  return valor+num1+num2
}
console.log(valor); //ReferenceError


for(var i=0;i<5;i++){
  var outra=5; //Variavel global
  console.log(i*outra)
}
console.log(outra) //Temos acesso, pois é um var declarada dentro de um bloco for
console.log(i)     //Temos acesso, pois é um var declarada dentro de um bloco for


for(var j=0;j<5;j++){
  let uma=12; //Variavel Local
  console.log(j*uma)
}
console.log(uma) //Não temos acesso(ReferenceError)
console.log(j)   //Temos acesso, pois é um var declarado dentro de um bloco for