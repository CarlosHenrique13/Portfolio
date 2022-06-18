function Visibol(id){
    clearTimeout()
    var div = document.getElementById(id);
    div.style.visibility = "visible";
    div.style.opacity = 1;
}
function Invisibol(id){
    setTimeout(Invisibo,2000,id)
   
}
function Invisibo(id){
    var div = document.getElementById(id);
    div.style.visibility = "hidden";
    div.style.opacity = 0;
}
