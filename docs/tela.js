const btn = document.getElementById('btn');
const mnl = document.getElementById('menulateral')

function MostrarMenuLateral(){
    
    mnl.style.visibility = 'visible'
}

function EsconderMenuLateral(){

    mnl.style.visibility = 'hidden'
}


function enviarmenssagem(){

    var menssagem = document.getElementById("menssagem").value;
    var link = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"  + encodeURIComponent(menssagem)

    open(link)

}
/*
var bor = document.getElementById('caixa1')

setInterval(() =>{
 if(bor.style.opacity == 0){
    bor.style.borderColor = "red"
  bor.style.opacity= 1;
}
 else{
    bor.style.opacity = 0
    bor.style.borderColor  = "blue"
 }
},1000)
*/