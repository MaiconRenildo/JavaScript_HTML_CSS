var valores=[2,4,6,8,10]

var dobro=valores.map(function(valor){
  return valor*2;
})

//console.log(dobro)

//Outra forma
/*
function dobra(valor){
  return valor*2;
}

var dobro=valores.map(dobra)
console.log(dobro)
*/


//Encadeando maps para realizar multiplas transformações
function dobrar(valor){
  return valor*2;
}

function soma_4(valor){
  return valor+4;
}

function dividir_por_5(valor){
  return valor/5;
}

var resultado=valores.map(dobrar).map(soma_4).map(dividir_por_5)
console.log(valores)
console.log(resultado)


