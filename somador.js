let list = [2, 5, 9]

var c = 0
let soma = 0
function s() {
    while (c < list.length) {
        soma = soma + Number(list[c])
        c++
    }
}
s()
console.log(soma);