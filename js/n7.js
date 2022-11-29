// ---------------------------- NavBar ----------------------------
const menu = document.getElementById("menu");
const itemInicio = document.getElementById("itemInicio");
const itemNosotros= document.getElementById("itemNosotros");
const itemProductos = document.getElementById("itemProductos");
const itemAlcance = document.getElementById("itemAlcance");
const itemContacto = document.getElementById("itemContacto");

// ---------------------------- NavBar Top ----------------------------
const btnsModal = document.querySelectorAll(".modal-btn");
let infoModales = [
    {
        titulo:`Numeros de Telefono`,
        descripcion:`
        <div class="row">
            <div class="col-6">
                <p>WhatsApp:</p>
                <p>Telefono Fijo:</p>
            </div>
            <div class="col-6">
           <p><a class="text-warning" href="https://wa.me/5493704073147" target="_blank">+54 3704 072343</a></p>
            <p><a class="text-warning" href="https://wa.me/3705077825" target="_blank">+54 1102 293812</a></p>
            </div>
        </div>
            `
    },
    {
        titulo:`Correos Electronicos`,
        descripcion:`
        <div class="row">
            <div class="col-4 col-lg-6 col-md-6 col-sm-6">
                <p>Consultas:</p>
                <p>Correo Profesional:</p>
            </div>
            <div class="col-8 col-lg-6 col-md-6 col-sm-6">
                <p>consulta@construcom.com</p>
                <p>oficial@construcom.com</p>
            </div>
        </div>
        `
    },
    {
        titulo:"Horarios",
        descripcion:`<div class="row">
        <div class="col-6">
        <p>Lunes a Viernes:</p>
        <p>Sabados:</p>
        </div>
        <div class="col-6">
           <p>9:00hs a 18:30hs</p>
           <p>9:00hs a 17:00hs</p>
        </div>
     </div>`
    }
    ];


// console.log(btnsModal.attributes[3].value);
btnsModal.forEach(btn=>{
    const modalHeader=document.getElementById("modal-header");
    const modalBody=document.getElementById("modal-body");

    btn.addEventListener("click",()=>{
        // console.log(btn.attributes[3].value);
        // console.log(infoModales[btn.attributes[3].value].titulo);
        // console.log(infoModales[btn.attributes[3].value].descripcion);

        modalHeader.innerHTML = `
        <h3 class="modal-title fs-5 text-light" id="exampleModalLabel">${infoModales[btn.attributes[3].value].titulo}</h3>
        <button type="button" class="bg-light btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        `;
        modalBody.innerHTML = infoModales[btn.attributes[3].value].descripcion;

    });
});

jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 1) {
        jQuery('.dmtop').css({
            bottom: "75px"
        });
    } else {
        jQuery('.dmtop').css({
            bottom: "-100px"
        });
    }
});

//--------- Efectos al hacer scroll ----------
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
                // li.style.padding = ".5rem";
                // console.log(li);
                li.classList.add("ul-li-hrztl");
            }else{
                // console.log("El celular esta en vertical");
                // li.style.padding = "2rem";
                if(li.className="ul-li-hrztl"){
                    li.classList.remove("ul-li-hrztl");
                    // console.log(lis[0]);
                }

            }
        });
    
});