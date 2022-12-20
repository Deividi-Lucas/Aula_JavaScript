function mostrar() {
    var n1 = document.getElementById('tabuada')
    var msg = window.document.getElementById('msg')

    var numero = Number(n1.value)
    var cont = 0
    var inicio = 0
    for (inicio; cont <= 10; 10){
        msg.innerHTML += `<br>${numero}X${cont}=${numero*cont}`
        cont++
        console.log(cont)
    }
}