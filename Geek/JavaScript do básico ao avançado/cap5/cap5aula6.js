/*
var valores=[4.66,3.78,9.78,1.34,5.32]

var soma=0;
for(i=0;i<valores.length;i++){
  soma+=valores[i]
}
//console.log(soma)
*/

/*
var precos=[4.66,3.78,9.78,1.34,5.32]
soma=0;
precos.forEach(function(valor){
  soma+=valor
})

console.log(soma)
*/

var precos=[4.66,3.78,9.78,1.34,5.32]

function somar(anterior,atual){
  return anterior+atual
}
var ret=precos.reduce(somar)
console.log(ret)

//Exemplo de MAP/REDUCE

function adicionar_taxa(valor){
  return valor+5
}

var ambos=precos.map(adicionar_taxa).reduce(somar)
console.log(ambos)


//Exemplo de FILTER/MAP/REDUCE
function maior_que_4(valor){
  return valor>4
}

var tres=precos.filter(maior_que_4).map(adicionar_taxa).reduce(somar)
console.log(tres)
