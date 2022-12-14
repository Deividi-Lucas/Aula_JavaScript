let agora = new Date()
let horas = agora.getHours()
console.log(`São ${horas}h`)

if (horas < 12 && horas >= 5){
    console.log('Bom dia!')
} else if (horas < 18 && horas >13){
    console.log('Boa tarde!')
}else if (horas < 23 && horas >18){
    console.log('Boa noite!')
}else {
    console.log('Vá durmir está muito tarde!')
}