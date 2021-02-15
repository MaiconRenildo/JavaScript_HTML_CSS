//Async Await

//Declaração da Promise de forma completa
/*
const promise=function(){
  return new Promise(function(resolve,reject){

  })
}
*/

//Declaração da Promise através de Arrow functions
const novaPromise=()=> new Promise((resolve,reject)=>{
  let valor=Math.floor(Math.random()*10)
  setTimeout(()=>{
    if(valor %2==0){
      resolve(` O ${valor} é par`)
    }else{
      reject(` O ${valor} é ímpar`)
    }
  },4000)

})

async function executarPromise(){
  try{
    let response=  await novaPromise()
    console.log(response)
  }catch(err){
    console.log(err)
  }
  console.log('Esperei o Await')
}
executarPromise()
console.log('Não esperei o await')  //Aparece primeiro independentemente do SetTimeOut()

//Sequencia de execução: Não esperei o await -> numero é par ou impar -> esperei o await





