//Esconder el menu al hacer escroll
AOS.init();

let ubicacionPrincipal=window.pageYOffset;
window.addEventListener("scroll", function(){
    let dezplazamientoActual= window.pageYOffset;
    if(ubicacionPrincipal>=dezplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top="0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top="-100px"
    }
    ubicacionPrincipal= dezplazamientoActual;
})

// menu
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo=true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click",function() {
    if (semaforo===true) {
        document.querySelectorAll(".hamburguer")[0].style.color="#fff";
        semaforo=false;
    } else {
        document.querySelectorAll(".hamburguer")[0].style.color="#000";
        semaforo=true;
        
    }
    enlacesHeader.classList.toggle("menudos")
    
})


