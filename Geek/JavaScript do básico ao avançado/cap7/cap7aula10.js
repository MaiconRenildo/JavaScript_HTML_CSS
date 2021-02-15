//Métodos de instancia e métodos estáticos

class Carro{
  constructor(modelo){
    this._marca=Carro.imprimir_marca()
    this._modelo=modelo
  }
  get modelo(){
    return this._modelo
  }
  set modelo(modelo){
    this._modelo=modelo
  }
  get marca(){
    return this._marca
  }
  static imprimir_marca(){
    return 'Honda'
  }
}

const c1=new Carro('Uno')
console.log(c1)   //Carro { _marca: 'Honda', _modelo: 'Uno' }
console.log(Carro.imprimir_marca()) //Honda