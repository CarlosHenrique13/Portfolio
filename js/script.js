function Visibol(id){
    var div = document.getElementById(id);
    div.style.visibility = "visible";
    div.style.opacity = 1;
}
   
function Invisibol(id){
    setTimeout(Invisibo,2500,id)
   
}
function Invisibo(id){
    var div = document.getElementById(id);
    div.style.visibility = "hidden";
    div.style.opacity = 0;
}

function Email(){
var nome = document.getElementById('nome').value;
var assunto = document.getElementById('assunto').value;
var email = document.getElementById('email').value;
var txt = document.getElementById('txt').value;
var env = "mailto:carloshenrique.trabalho.net@gmail.com?subject="+assunto+"&body="+txt
    window.location.href = env;

        //this.querySelector('input[name=body]').setAttribute('value', texto);
   
}