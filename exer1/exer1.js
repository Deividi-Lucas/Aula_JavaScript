var horas = document.getElementById('horas')
var agora = new Date()
var rel = agora.getHours()
horas.innerHTML = rel
var seaction = document.getElementsByTagName('section')[0]
var msg = document.getElementsByClassName('msg')[0]
var body = document.getElementsByTagName('body')[0]

if (rel <= 12 && rel >= 5){
    console.log('Bom dia!')
    msg.innerHTML= 'Bom Dia!'
    seaction.style.backgroundColor= 'lightgreen'
    body.style.background = 'green'
} else if (rel < 18 && rel >=13){
    console.log('Boa tarde!')
    msg.innerHTML= 'Boa Tarde!'
    seaction.style.backgroundColor= 'orange'
    body.style.background = 'darkorange'


}else if (rel <= 23 && rel >=18){
    console.log('Boa noite!')
    msg.innerHTML= 'Boa noite!'
    seaction.style.backgroundColor= 'blue'
    body.style.background = 'darkblue'
}else {
    console.log('Vá durmir está muito tarde!')
    msg.innerHTML= 'Vá durmir está muito tarde!'
    seaction.style.backgroundColor= 'gray'
    body.style.background = 'black'
}

