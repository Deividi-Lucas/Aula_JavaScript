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