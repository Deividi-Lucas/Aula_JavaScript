function somar() {
    var tn1 = document.getElementById('number1')
    var tn2 = document.getElementById('number2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`

}