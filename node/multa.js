let velocidade = 61 // aqui deve ficar valor pego na pagina


//condição em if 
if (velocidade > 60) {
    console.log('Você está muito rápido');
}else{
    console.log('Continue neste ritmo');
}


//Condição em valores ternários
let multa = velocidade > 60 ? console.log("Você foi multado") : console.log("Continue neste ritmo")