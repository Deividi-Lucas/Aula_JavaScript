function verificador() {
    var data = new Date().getFullYear()
    var ano = document.getElementById('ano')
    var msg = document.getElementById('msg')
    var img = document.createElement('img') //criando tag pelo js
    img.setAttribute('id','foto') // colocando propriendade na tag


    var idade = data - Number(ano.value)
    if (ano.value <= 0 || ano > data) {
        window.alert('Verificar a data e tentar novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        if (fsex[0].checked){
            msg.innerHTML = `Detectado que é um Homem de ${idade} anos.`
            if (idade <= 0 || idade < 10){
                //criança
                img.setAttribute('src','img/bebe-m.jpg') 
            }else if(idade >= 11 || idade < 22){
                //adolescente
                img.setAttribute('src','img/adol-m.jpg') 
            }else if(idade <= 22 || idade < 30){
                //jovem
                img.setAttribute('src','img/jovem-m.jpg') 
            }else if(idade >= 30 || idade < 50){
                //adulto
                img.setAttribute('src','img/homem-m.jpg') 
            }else{
                //idoso
                img.setAttribute('src','img/idoso-m.jpg') 
            }


        }else{
            msg.innerHTML = `Detectado que é uma Mulher de ${idade} anos.`
            if (idade <= 0 || idade < 10){
                //criança
                img.setAttribute('src','img/bebe-f.jpg') 
            }else if(idade >= 11 || idade < 22){
                //adolescente
                img.setAttribute('src','img/adol-f.jpg') 
            }else if(idade <= 22 || idade < 30){
                //jovem
                img.setAttribute('src','img/jovem-f.jpg') 
            }else if(idade >= 30 || idade < 50){
                //adulto
                img.setAttribute('src','img/mulher-f.jpg') 
            }else{
                //idoso
                img.setAttribute('src','img/idosa-f.jpg') 
            }
        }
    }
    img.style.width = '200px'
    msg.append(img)
}