//Funções com parametros variaveis e valor padrão

function somartudo(){
  let soma=0
  for(let a=0;a<arguments.length;a++){
    soma+=arguments[a]
  }
  console.log(soma)
}
somartudo(10,20,99)


function imprimir_valores(num1,num2){
  console.log('Conjunto:')
  for(let a in arguments){
    console.log(arguments[a])
  }
}
imprimir_valores(10,30,55,22,33,44,9998,21)  //Retorna todos os elementos


//Gambiarra1
function soma1(num1,num2){
  num1 = num1 || 1           //Se num1 não foi declarado, ele será igual a 1
  num2 = num2 || 2           //Se num2 não foi declarado, ele será igual a 2
  return num1+num2
}
console.log(soma1(1,3,4,10,11)) //4, pois soma apenas os dois primeiros
console.log(soma1(0,1))         //2, pois ele reconhece o valor zero como falso, de forma q acaba atribuindo o valor 1 a num 1

//Gambiarra 2
function soma(num1,num2){
  num1=isNaN(num1)? 1: num1
  num2=isNaN(num2)? 2: num2
  return num1+num2
}
console.log(soma('a','b'))         // 3
console.log(soma(10,20))           // 30
console.log(soma(0,1))             // 1
console.log(soma(50,20,30,45,55))  // 70, pois soma apenas os dois primeiros


//Forma Recomendada
function soma3(num1=1,num2=2,num3=3){
  return num1+num2+num3
}

console.log(soma3(10,20,30,40))     //60,pois soma somente os três numeros declarados
console.log(soma3(10,'a',30,40))    //10a30
console.log(soma3(false,true,'a'))  //1a
console.log(soma3(true,95,'mar'))   //96mar

//Solução
function somafinal(num1=10,num2=2,num3=14){
  if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
    return num1+num2+num3
  }else{
    return 'Não foi possível somar'
  }
}
console.log(somafinal(22,33,44))      //99
console.log(somafinal('a',10,true))   //Não foi possível somar
console.log(somafinal(2,true,false))  //Não foi possível somar
console.log(somafinal('a','b','c'))


