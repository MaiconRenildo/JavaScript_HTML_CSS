//Sobrescrita de método e poliformismo

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
  //Sobrescrição de método
  imprimir_dados(){
    super.imprimir_dados()
    console.log(`Registro: ${this.registro}\nSalário: ${this.funcao.salario}`)
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

const prog=new Funcao('Programador',1295.33)
const f1=new Funcionario('Marcos','Silva','silvamarco@gmail.com','015.896.321.79',prog,'cd789a')
const c1=new Cliente('Mariana','Souza','souzamari@gmail.com','123.321.456.78',1948.42)

f1.imprimir_dados()   //Marcos Silva Registro: cd789a Salário: 1295.33

c1.imprimir_dados()   //Mariana Souza

/*
Sobrescrita de método overwriting

Polimorfismo: dois objetos do mesmo tipo tendo comportamentos diferentes
      Cliente e Funcionario são do tipo Pessoa, mas exercem comportamentos diferentes
*/

