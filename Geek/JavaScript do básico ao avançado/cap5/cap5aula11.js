//Tratamento de erros com try catch

/*
try{
  console.log(nome)
}catch(e){
  console.log('ERRO')  
  console.log(e.name)     //Retorna ReferenceError
  console.log(e.message)  //Retorna nome is not defined
}
*/

/*

function dividir(num1,num2){
  if(num1===0 || num2===0){
    throw(`Não foi possível dividir`) //Lançando uma exceção
  }else{
   return num1/num2
  }
}
var a=dividir(0,2) //Chama a função. Se der erro, vai parar no throw
console.log(a)     //Se não der erro mostra o valor de a

*/

function dividir(num1,num2){
  if(num1===0 || num2===0){
   throw(`Os valores devem ser positivos`)
  }else{
    return num1/num2;
  }
}
try{
  let a=dividir(1,1)   //Tenta realizar a divisão. Se não for possível, passa pelo throw(não imprime nada) e vai para o catch e finally
  console.log(a)
}catch(e){
  console.log('Não foi possivel dividir')
}finally{
  console.log('É executado havendo erro ou não')
}



