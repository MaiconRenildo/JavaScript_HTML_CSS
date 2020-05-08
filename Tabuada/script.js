function carregar(){
    let numeroo=document.getElementById('numero')
    let numero=Number(numeroo.value)
    let tabuada=document.getElementById('tabuada')
    if(numeroo.value==''){
        alert('ERRO!! Digite um número!')
        
    }
    var ponto=1
    tabuada.innerHTML=''
    while(ponto<=10){
        tabuada.innerHTML+=`<option>${numero} x ${ponto} = ${numero*ponto}</option>`
        ponto++
    }
}