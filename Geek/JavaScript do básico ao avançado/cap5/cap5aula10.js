//Aprendendo e usando o destruturing

//Destruturing com array
var conjunto=[1,23,43,'oi',21,44]
const [n1,n2,n3,n4,n5,n6] = conjunto
console.log(n4) //Retorna oi

//Descarte de valores
const [num1, , num3,num4,num5,]=conjunto
console.log(num1)
//console.log(num2) //dá erro, pois não foi definido
console.log(num3)
console.log(num4)
//console.log(num5) //dá erro, pois não foi definido

//Default para caso não haja valor no container
var numeros=[1,36,44,78,94,87, ,10]
const [val1,val2,val3,val4,val5=3,val6=27,val7=99,val8] =numeros
console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)
console.log(val5)
console.log(val6) //É 87. Não recebe 27, pois já há um valor 
console.log(val7) //É 99. Recebe o valor dafault porque não havia nenhum valor informado anteriormente
console.log(val8)

//Destruturing com objeto
var produto={
  nome:'Playstation',
  preco:1687.44
}

const {nome,preco}=produto
console.log(nome)
console.log(preco)
console.log(`O ${nome} custa R$ ${preco} `)
const {n}=produto
console.log(n) //Retorna undefined, pois tem q ter o mesmo nome