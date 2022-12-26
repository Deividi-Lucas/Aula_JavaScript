let num = window.document.querySelector('input#numero')
let msg = window.document.querySelector('div#msg')
let list = []
let res = window.document.querySelector('div#res')
var c = 0
let soma = 0
function s() {
    while (c < list.length) {
        soma = soma + Number(list[c])
        c++
    }
}
s()

function adicionar() {
    if (Number(num.value) >= 1 && Number(num.value) <=100){
        if (list.indexOf(num.value) == -1) {
            list.unshift(num.value)
            msg.innerHTML = `o valor ${num.value} foi adicionado`
            list.sort()
        }else{
            alert(`o valor ${num.value} já está na lista!`)
        }
        
      
    }else{
        alert('Tente novamente')
    }


}


function finalizar(){
    if (list.length ==0){
        alert('Favor adicionar valores para que seja finalizado o programa.')
    }else {
        s()
        res.innerHTML = ''
        res.innerHTML += `<br>A lista tem ${list.length} elementos` 
        res.innerHTML += `<br>São eles ${list.sort()}`
        res.innerHTML += `<br>A lista tem o valor ${Math.max(...list)} como o maior `
        res.innerHTML += `<br>A lista tem o valor ${Math.min(...list)} como o menor`
        res.innerHTML += `<br>A lista tem a soma dos valores ${soma} `
        let media = soma / list.length
        res.innerHTML += `<br>A lista tem o valor médio ${media}`

    }
    
}
