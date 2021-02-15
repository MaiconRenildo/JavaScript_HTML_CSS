let btns=document.getElementsByClassName('btn')

let div=document.querySelector('#app')

for(let i=0;i<btns.length;i++){
  btns[i].onclick=function(){
    div.removeChild(this) //Remove o filho da div
  }
}


