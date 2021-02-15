//Herança

/*
Funcionarios:nome,sobrenome,email,cpf,função,registro
Clientes:nome,sobrenome,email,cpf,renda
Funções:Descrição,Salario
*/

class Funcao{
  constructor(descricao,salario){
    this._descricao=descricao
    this._salario=salario
  }
  get descricao(){
    return this._descricao
  }
  set descricao(descricao){
    this._descricao=descricao
  }

  get salario(){
    return this._salario
  }
  set salario(salario){
    this._salario=salario
  }
}

class Pessoa{
  constructor(nome, sobrenome, email,cpf){
    this._nome=nome
    this._sobrenome=sobrenome
    this._email=email
    this._cpf=cpf
  }
  get nome(){
    return this._nome
  }
  set nome(nome){
    this._nome=nome
  }
  get sobrenome(){
    return this._sobrenome
  }
  set sobrenome(sobreno){
    this._sobrenome=sobreno
  }
  get email(){
    return this._email
  }
  set email(email){
    this._email=email
  }
  get cpf(){
    return this._cpf
  }
  set cpf(cpf){
    this._cpf=cpf
  }
  //Métodos extras
  get nome_completo(){
    return `${this._nome} ${this._sobrenome}`
  }
  set nome_completo(nome_completo){
    nome_completo=nome_completo.split(' ') //Divide o conteudo da string através do espaco formando um array: [nome,sobrenome]
    this._nome=nome_completo.shift()  //Remove o primeiro elemento do array e salva em this._nome
    this._sobrenome=nome_completo.join(' ')   //Junta os demais elementos através do espaço, então se era um array do tipo ['Lucia','Cardoso','da','Silva'], vira uma string Lucia Cardoso da Silva
  }
  imprimir_dados(){
    console.log(`${this.nome} ${this.sobrenome}`)
  }
}

class Funcionario extends Pessoa{
  constructor(nome,sobrenome,email,cpf,funcao,registro){
    super(nome,sobrenome,email,cpf)
    this._funcao=funcao
    this._registro=registro
  }
  get funcao(){
    return this._funcao
  }
  set funcao(funcao){
    this._funcao=funcao
  }
  get registro(){
    return this._registro
  }
  set registro(registro){
    this._registro=registro
  }
}

class Cliente extends Pessoa{
  constructor(nome,sobrenome,email,cpf,renda){
    super(nome,sobrenome,email,cpf)
    this._renda=renda
  }
  get renda(){
    return this._renda
  }
  set renda(renda){
    this._renda=renda
  }
}

const c1=new Cliente('Maria','Joana','maria.joana@gmail.com','184452369-10',1920.30)
console.log(typeof(c1)) //object
console.log(c1) //Retorna o objeto completo
console.log(c1.nome_completo) //Retorna o Método nome_completo: Maria Joana
//OBS: não se usa o (), pois a gente não ta fazendo acesso a um método comum, e sim a um getter
console.log(typeof(c1.nome_completo))   //String

c1.nome_completo='Maria Eduarda'  //Muda nome e sobrenome
console.log(c1)

c1.imprimir_dados()
const programador=new Funcao('Programador',4899.54)
const suporte= new Funcao('Suporte',2799.34)
const f1=new Funcionario('Pedro','Silva','pedr@gmail.com','983.279.235.22',programador,'F90er3')
console.log(f1)
console.log(f1.funcao.salario)
f1.imprimir_dados()