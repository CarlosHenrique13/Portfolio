// Funções de Animação das Redes Sociais
function Visibol(id){
    var div = document.getElementById(id);
    div.style.width = "12%"
    div.style.transform = "translateX(0)"
    div.style.opacity = 1;
}
function Invisibol(id){
    setTimeout(Invisibo,2500,id)
   
}
function Invisibo(id){
    var div = document.getElementById(id);
    div.style.transform = "translateX(100%)"
    div.style.opacity = 0;
}


// Envio de Email
function Email(){
var nome = document.getElementById('nome').value;
var assunto = document.getElementById('assunto').value;
var email = document.getElementById('email').value;
var txt = document.getElementById('txt').value;
var env = "mailto:carloshenrique.trabalho.net@gmail.com?subject="+assunto+"&body="+txt
    window.location.href = env;

        //this.querySelector('input[name=body]').setAttribute('value', texto);
}

// Animação do Menu
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
}
  
const mobileNavbar = new MobileNavbar(
".mobile-menu",
".nav-list",
".nav-list li",
);
mobileNavbar.init();



