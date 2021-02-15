let a=document.querySelector('.link')
a.style.color='green'
console.log(a)  //Imprime <a href="#" class="link" style="color: green;">Link text</a>
console.log(a.innerText)  //Imprime 'Link text'
console.log(a.parentNode) //Imprime o elemento pai(body)
console.log(a.parentNode.parentNode)  //Imprime o pai do body(html)
console.log(a.parentNode.parentNode.parentNode) //Imprime o pai do html(document)
console.log(a.parentNode.parentNode.parentNode.parentNode)  //Imprime null

console.log(a.parentNode.parentNode.childNodes) //0: head 1: text 2: body.corpo
//O comando anterior retorna head, text e body porque há um /n entre o head e o body

console.log(a.parentNode.parentNode.firstChild) //Primeiro filho(head)
console.log(a.parentNode.parentNode.lastChild)  //Ultimo filho(body)

console.log(a.parentNode.parentNode.firstChild.nextSibling) //Proximo irmao(text)-isso acontece porque há um espaço entre o head e o body. Retirando o espaço o resultado seria o body

console.log(a.parentNode.parentNode.firstChild.nextSibling.firstChild.nextSibling) // deveria retornar a tag a, mas não acontece devido aos espaços

console.log(a.parentNode.parentNode.firstChild.nextSibling.previousSibling) //body/html/head/body/head, ou seja, retorna o irmão anterior