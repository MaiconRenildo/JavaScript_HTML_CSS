//Primeira forma de criar um array
var a = new Array('Matheus', 'Maria', 'Gerson', 'Rafinha', 'Arão')
console.log(`Array com unico tipo de dado: ${a}`)

console.log(`Não existe: ${a[5]}`)
a[9] = 10
console.log(`Espaço sem nada: ${a}`)

//Segunda forma de criar um array
var b = ['Maria', 'Maicon', true, 1, 5]
console.log(`Array com diferentes tipos de dados: ${b}`)

var verificacao = a[6] == undefined
console.log(verificacao)

//Tamanho do array
var nomes = ['Marta', 'Jonas', 'Adam']
console.log(`Nomes: ${nomes};  Tamanho: ${nomes.length}`)

//Inserindo elementos no final do array
nomes.push('Vanessa')
console.log(`Array com elemento adicionado no final ${nomes}`)

//Ordenando conteudo de Array(string)
var alunos = ['Vera', 'Lucia', 'Pedro', 'Fernanda', 'Mario', 'Ana', 'Carla']
console.log(`Conteudo de alunos: ${alunos}`)
alunos.sort()
console.log(`Conteudo de alunos em ordem: ${alunos}`)

//Ordenando conteudo de Array(numeros)
var precos = [564, 21, 13, 2, 789, 101, 1000]
console.log(`Conteudo de precos: ${precos}`)
precos.sort(function (a, b) { return a - b })
console.log(`Preços em ordem crescente ${precos}`)

//Deletando conteudo de um array(Forma não ideal)
var idades = [20, 32, 1, 98, 10]
console.log(`idades: ${idades}`)
delete idades[3]
console.log(idades)
delete idades //Não exclui a variavel. O delete só exclui propriedades de objetos
console.log(idades)

//Deletando conteudo de um array de forma correta
idades = [20, 32, 1, 98, 10]
idades.splice(3, 1) //A partir do indice 3(12) exclua um elemento
console.log(idades)

//Outras funcionalidades do splice
idades.splice(3, 0, 56, 45) //A partir do indice 3 eu não quero que exclua nada, mas adicione 56(no indice 3) e 45(no 4o)
console.log(idades)

idades.splice(3, 1, 22) //Exclui o indice 3 e adicione o 22 no lugar dele
console.log(idades)

//Deletar ultimo elemento de um array
idades.pop()
console.log(idades)

//Outras funcionalidades do pop
var ret=idades.pop() //Remove o ultimo elemento do array e salva na variavel ret 
console.log(`Retorno do ret: ${ret}`) //Retorna 45

//Remoção do primeiro elemento de um array
idades.shift()
console.log(idades) 

ret=idades.shift() //Exclui o primeiro elemento do array e salva na variavel ret
console.log(`Novo valor do ret: ${ret}`)

//Colocação de elementos no inicio de um array
idades.unshift(90,45,50)
console.log(idades)

//Novo array a partir de um indice informado(Não exclui nenhum elemento do array original)
var novo=idades.slice(3)
console.log(`Novo array: ${novo}`)

//Outras funcionalidades do slice
novo=idades.slice(1,2) //A partir do indice 1, pegue até o 2 sem incluí-lo
console.log(novo)

//Iterar array
for (i = 0; i < idades.length; i++) {
  console.log(idades[i])
}

//Concatenar elementos de diferentes arrays
var par=[2,4,6,8,10]
var impar=[1,3,5,7,9]
var rest=par.concat(impar) 
console.log(`Junção dos dois arrays ${rest}`)
rest.sort(function(a,b){return a-b})
console.log(`Junção ordenada: ${rest}`)

//Matriz
var tabuleiro=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
console.log(tabuleiro)

/*
  [
    [ 1, 2, 3, 4],  //Linha 0
    [ 5, 6, 7, 8],  //Linha 1
    [ 9,10,11,12],  //Linha 2
    [13,14,15,16],  //Linha 3

  ]
*/

console.log(tabuleiro[0][0])
console.log(tabuleiro[0][2])
console.log(tabuleiro[3][3])
console.log(tabuleiro[2][1])

