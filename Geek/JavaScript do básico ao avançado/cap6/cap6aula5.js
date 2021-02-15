//Entendendo e usando Arrow functions

//Forma1
function somar1(num1,num2){
  return num1+num2;
}
console.log(somar1(4,6))

//Forma2
const somar2= function somar2(num1,num2){
  return num1+num2;
}
console.log(somar2(4,6))

//Forma3
let somar3=somar1
console.log(somar3(4,6))

//Arrow Function
let somar4=(num1,num2)=>{
   return num1+num2
}

/*
Atenção:
Caso a função tenha apenas um parâmetro de entrada e execute apenas uma linha, pode-se simplificar ainda mais usando arrow function
*/
let dobrar = num => num*2  //O return fica subtendido
console.log(dobrar(10))

//Exs:
function mensagem(){
  console.log('Olá Mundo')
}
mensagem()

const msg=()=> console.log('Olá Mundo')
msg()