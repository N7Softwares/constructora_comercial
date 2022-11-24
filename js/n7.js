// ---------------------------- NavBar ----------------------------
const menu = document.getElementById("menu");
const itemInicio = document.getElementById("itemInicio");
const itemNosotros= document.getElementById("itemNosotros");
const itemProductos = document.getElementById("itemProductos");
const itemAlcance = document.getElementById("itemAlcance");
const itemContacto = document.getElementById("itemContacto");

addEventListener("scroll",()=>{
    
    //scroll para que el menu se fije en el top de la pantalla
    
    const heightScreen = 550;
    let pixel = window.scrollY;

    if(pixel>heightScreen){
        menu.classList.add("fixed")
    }else{
        menu.classList.remove("fixed");
    }

    // Para activar los items del menu
    let tamanoDePantalla=window.innerHeight;
    activarItemsMenu(tamanoDePantalla);

})

// Funcion para activar los items del menu
const activarItemsMenu = (tamanoDePantalla)=>{
    const inicio = document.getElementById("inicio");
    const acerca = document.getElementById("nosotros");
    const productos = document.getElementById("productos");
    const alcance = document.getElementById("alcance");
    const contacto = document.getElementById("contacto");



    let posicionInicio=inicio.getBoundingClientRect().top;
    let posicionAcerca=acerca.getBoundingClientRect().top;
    let posicionProductos=productos.getBoundingClientRect().top;
    let posicionAlcance=alcance.getBoundingClientRect().top;
    let posicionContacto=contacto.getBoundingClientRect().top;


    if(posicionInicio<(tamanoDePantalla/3) && posicionAcerca>(tamanoDePantalla/3.2)){
        itemInicio.classList.add("active-item");
    }else{
        itemInicio.classList.remove("active-item");

    }
    if(posicionAcerca<(tamanoDePantalla/3.2) && posicionProductos>(tamanoDePantalla/5)){
        itemNosotros.classList.add("active-item");
    }else{
        itemNosotros.classList.remove("active-item");
        
    }
    if(posicionProductos<(tamanoDePantalla/5) && posicionAlcance>(tamanoDePantalla/3.2)){
        itemProductos.classList.add("active-item");
    }else{
        itemProductos.classList.remove("active-item");
    }
    if(posicionAlcance<(tamanoDePantalla/3.2) && posicionContacto>(tamanoDePantalla/5)){
        itemAlcance.classList.add("active-item");
    }else{
        itemAlcance.classList.remove("active-item");
    }
    if(posicionContacto<(tamanoDePantalla/5)){
        itemContacto.classList.add("active-item");
    }else{
        itemContacto.classList.remove("active-item");
    }
}

// ----------------------- Navbar para que cuando el celular este en horizontal ---------------------------

let altura;
let ancho;  
const lis = document.querySelectorAll(".ul-li");

window.addEventListener("orientationchange", ()=> {
    altura = screen.height;
    ancho = screen.width;    
    // console.log(ancho, altura);
        lis.forEach(li=>{
            if(ancho > altura){
            // console.log("El celular esta en horizontal");
                li.style.padding = ".5rem";
            }else{
                // console.log("El celular esta en vertical");
                li.style.padding = "2rem";

            }
        });
    
});