var inicio = document.getElementById('start')
var fim = document.getElementById('end')
var passos = document.getElementById('pass')
var res = document.getElementById('msg')

function contar() {
    var start = Number(inicio.value)
    var end = Number(fim.value)
    var pass = Number(passos.value)
    var cont = start
    res.innerText = 'Contando... '
    if (pass == 0) {
        alert('passos nao respresenta')
    } else if(end == 0){
        alert('Digite um fim valido')
    } else {
   
        for(start; cont <= end ; end){

            res.innerHTML += `${cont}=>`
            cont += pass    
            
        }

    }
    
     
 
}


