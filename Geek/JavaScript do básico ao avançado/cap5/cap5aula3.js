var cursos=['html','css','excel','java','javascript','python','c']

function imprimir(curso, indice){
  console.log(`${indice} - ${curso}`)
}

cursos.forEach(imprimir)

//Outra forma através de função anonima(lambda-callback) e template string
cursos.forEach(function(curso, indice){
  console.log(`${indice} - ${curso}`)
})

/*
function imprimir(curso, indice, array){
  console.log(`${indice} - ${curso}`)
  console.log(array) //mostra o array completo
}
cursos.forEach(imprimir)
*/

