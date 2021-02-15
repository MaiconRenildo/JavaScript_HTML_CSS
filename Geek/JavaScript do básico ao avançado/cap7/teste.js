let usuarios=[
  {nome:'Maria', sobrenome:'Fernanda',cpf:32565478798,email:'mariafernanda123@gmail.com',login:'FernandaMaria',senha:'ola1236478'},
  {nome:'Maria', sobrenome:'Luiza',cpf:45913654879,email:'marialuiza23@gmail.com',login:'MariaLuiza321',senha:'alouQUEMFALA'},
  {nome:'Fernando', sobrenome:'Fernandes',cpf:12336545698,email:'mariafernanda123@gmail.com',login:'FernandoFernandes',senha:'Chama'},
]

console.table(usuarios)

var usuario=usuarios[0].nome==' Moraes'
usuarios.forEach(function(usuario,indice){
  if(usuario.cpf===12336545698){
    console.log(`Usuário encontrado na posição ${indice}:`)
   // console.table(usuarios[indice])
  }
}) 

usuarios.push({nome:'Marlon',sobrenome:'Moreno',cpf:32545478798,email:'marlosm3@gmail.com',login:'MorenoMarlos',senha:'ola17896478'})
console.table(usuarios)