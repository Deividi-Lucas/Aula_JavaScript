let list = [2, 5, 9]

function linha (){
    console.log('---------------------------------------------');
}
// funções para ultilização em array
linha()
console.log('Teste de maior ou menor');
console.log(Math.max(...list))
console.log(Math.min(...list))
linha()

console.log('Tamanho da Array');
console.log(list.length);
linha()