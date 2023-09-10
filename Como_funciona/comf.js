var primeiro = document.getElementById('tudo')
var segundo = document.getElementById('tudoo')
var terceiro = document.getElementById('terceiro')
var quarto = document.getElementById('quarto')
var reset = document.getElementById('reset')

setInterval(() =>{
primeiro.style.visibility ='hidden'
},5000)

setInterval(() =>{
    segundo.style.display ='block'
    },5000)
    
setInterval(() =>{
    segundo.style.visibility ='hidden'
    },15000)

    setInterval(() =>{
        terceiro.style.display ='block'
        },15000)

        setInterval(() =>{
            terceiro.style.visibility ='hidden'
            },20000)
            setInterval(() =>{
                quarto.style.display ='block'
                },20000)

                setInterval(() =>{
                    reset.style.display ='block'
                    },21000)

            function voltar(){
                location='como_funciona.html'
            }