// dia 30 de dez  

let btn = window.document.getElementById("botao")
let color = document.getElementById('cor')

function teste (){
    alert('funcionou')
}

function cor (){
    document.body.style.background = "red"
}

btn.addEventListener("click", teste)    // a chamada vem antes depois vem a função sem conchete
color.addEventListener("click", cor)

//
var a = document.getElementById('area')
        a.addEventListener('click', clicar)
        a.addEventListener('mousedown', clicando)
        a.addEventListener('mouseenter', entrar)
        a.addEventListener('mouseout', sair)

        function sair() {
            a.innerText = 'saiu'
            a.style.background = 'green'
        }


        function entrar (){
            a.innerText = 'entrou'
        }

        function clicando(){
            a.innerText ='clicando'
            a.style.background = 'blue'
        }

        function clicar(){
            a.innerHTML = 'clicou'
            a.style.background = 'red'
        }
