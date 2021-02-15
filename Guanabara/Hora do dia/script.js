function carregar(){
    var dia=new Date()
    var hora=dia.getHours()
    var h3=document.getElementById('horario')
    h3.innerHTML=`Agora são ${hora} horas `
    var img=document.getElementById('imagem')
    
    if(hora>12 && hora<18){
        img.src='tarde.png'
        document.body.style.backgroundColor='#b9846f'

    }else if(hora>=18){
        img.src='noite.png'
        document.body.style.backgroundColor='#515154'
    }else{
        img.src='manha.png'
        document.body.style.backgroundColor='#e2cd9f'
    }
}