//Função Fábrica(Factory)

function fabrica_curso(n,p){
  const desconto=0.9
  return{
    nome:n,
    preco:(p*desconto).toFixed(2)
  }
}
console.log(fabrica_curso('Programação em JavaScript',27.99))   //{ nome: 'Programação em JavaScript', preco: '25.19' }

const curso1=fabrica_curso('css',23.99)
console.log(curso1)   //{ nome: 'css', preco: '21.59' }
console.table(curso1)

cursos=[]
for(let i=0;i<5;i++){
  cursos.push(fabrica_curso(`curso${i+1}`,` ${19.99+i*3}`))
}
console.log(cursos)
