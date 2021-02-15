//Object Short Sintax

const nome='Programação  em JavaScript'
const preco='R$ 27,99'
const curso={
  nome : nome,  //A variavel e o atributo possuem o mesmo nome
  preco: preco, //A variavel e o atributo possuem o mesmo nome
  intrutor:'Geek University'
}
//console.log(curso)  
/*
{
  nome: 'Programação  em JavaScript',
  preco: 'R$ 27,99',
  intrutor: 'Geek University'        
}
*/

const curso1={
  nome, //Não coloquei o '=nome', pois a variavel e o atributo possuem nomes iguais
  preco,//Não coloquei o '=preco', pois a variavel e o atributo possuem nomes iguais
  instrutor:'Geek University'
}
//console.log(curso1)
const hora=25
const curso2={
  nome, //Não coloquei o '=nome', pois a variavel e o atributo possuem nomes iguais
  preco,//Não coloquei o '=preco', pois a variavel e o atributo possuem nomes iguais
  instrutor:'Geek University',
  carga_horaria:hora  //Nome de variavel e de atributo diferentes
}
//console.log(curso2)