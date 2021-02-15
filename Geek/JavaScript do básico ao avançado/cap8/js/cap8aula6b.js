let botao=document.getElementsByClassName('bt')

let cores=['green','yellow','blue','orange']
for(let i=0; i<botao.length;i++){
  botao[i].style.backgroundColor=`${cores[i]}`
}

for(let a=0;a<botao.length;a++){
  botao[a].onclick=function(){
    document.querySelector('body').style.backgroundColor=this.style.backgroundColor
  }
}