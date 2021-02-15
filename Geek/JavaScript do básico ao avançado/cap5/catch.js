var a =-1
var b=0
var c=13
try{
  if(a<0 ||b<0 ||c<0 ){
    throw 'ERRO'
  }else{
    console.log(a+b+c)
  }
}catch(e){
  console.log('Erro!! Todos os números devem ser maiores que zero.')
}finally{
  console.log('Programa finalizado.')
}
