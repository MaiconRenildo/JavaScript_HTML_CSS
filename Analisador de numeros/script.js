var valor=[]
var i=0

function adicionar(){

    var valoress=document.getElementById("numero")
    valores=Number(valoress.value)

    var selecao=document.getElementById('quadro')
    var pesquisa=pesquisar()

    if(valoress.value.length==0 || valores>100 || valores<1) {
        alert('Erro!! Valor inválido')
    }else{
        if(pesquisa==-1){
            valor[i]=valores 
            selecao.innerHTML+=`<option>${valor[i]} na posição ${i}</option>`
            i++   
        }else{
        alert('Erro!! Este valor já se encontra na Tabela')
        } 
    } 
    valoress.value=''
    valoress.focus()
}

function finalizar(){
    var res=document.getElementById('res')

    //Número de valores cadastrados
    res.innerHTML=` <p>Ao todo temos ${valor.length} números cadastrados</p>`

    //Números em ordem crescente
    res.innerHTML+=`<p>Todos os números em sequência: ${valor.sort(function(a, b) {return a - b;})}</p>`

    //Soma de todos os valores
    var soma=0
    for(var j=0;j<i; j++){
       soma+=valor[j]
    }
    res.innerHTML+=`<p>A soma de todos os valores é igual a ${soma}</p>`

    //Valor Mínimo
    var min=valor[0]
    for(var a=1; a<i;a++){
        if(min>valor[a]){
            min=valor[a]
        }
    }
    res.innerHTML+=`<p>O valor menor valor é o ${min}</p>`
    
    //Valor Máximo
    var max=valor[0]
    for(var b=1; b<i;b++){
        if(max<valor[b]){
            max=valor[b]
        }
    }
    res.innerHTML+=`<p>O maior valor é o ${max}</p>`

    //Média de todos os números
    res.innerHTML+=`<p>A média de todos os números é ${soma/i}</p>`
}

function pesquisar(){
    return valor.indexOf(valores)
}




    






