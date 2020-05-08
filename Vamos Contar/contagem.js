function contar(){
    //Recepção dos valores de cada input
    let inicioo=document.getElementById('inicio')
    let inicio=Number(inicioo.value)

    let fimm=document.getElementById('fim')
    let fim=Number(fimm.value)

    let passoo=document.getElementById('passo')
    let passo=Number(passoo.value)

    let res=document.getElementById('res')

        if(fimm.value.length==0 || inicioo.value.length==0) {
        res.innerHTML=`<p>Impossível contar!!</p>`
        }
        else{
            if(passoo.value.length==0 || passo<1){
            alert('Atenção!! Preencha todos os campos corretamente!!')
            }else{
                if(inicio<fim){
                    res.innerHTML=`<p></p>`
                    while(inicio<=fim){
                        res.innerHTML+=`${inicio}👉`
                        inicio=inicio+passo
                    }
                res.innerHTML+=`🏁`
                }else{
                    res.innerHTML=``
                    while(inicio>=fim){
                        res.innerHTML+=`${inicio}👉`
                        inicio=inicio-passo
                    }
                    res.innerHTML+=`🏁`    
                }                
            }
        }
}