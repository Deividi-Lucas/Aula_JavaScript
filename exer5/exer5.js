let num = window.document.querySelector('input#numero')
let msg = window.document.querySelector('div#msg')
let list = []
let res = window.document.querySelector('div#res')

function adicionar() {
    if (Number(num.value) >= 1 && Number(num.value) <=100){
        if (list.indexOf(num.value) == -1) {
            list.unshift(num.value)
            msg.innerHTML = `o valor ${num.value} foi adicionado`
        }else{
            alert(`o valor ${num.value} já está na lista!`)
        }
        
      
    }else{
        alert('Tente novamente')
    }


}


function finalizar(){
    if (list.length ==0){
        console.log(list.length);
    }else {
        res.innerHTML += `<br>A lista tem ${list.length} elementos` 
        res.innerHTML += `<br>São eles ${list}`
        res.innerHTML += `<br>A lista tem o valor {} como o maior `
        res.innerHTML += `<br>A lista tem o valor {} como o menor`
        res.innerHTML += `<br>A lista tem a soma dos valores {} `
        res.innerHTML += `<br>A lista tem o valor médio {}`

    }
    
}
