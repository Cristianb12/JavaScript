
//lista inicio
let subitemList = document.getElementById("subitemList");

subitemList.style.backgroundColor  = "white"; // background para la lista

subitemList.addEventListener("mouseover",()=>{ //hover mouse
    subitemList.style.backgroundColor  = "gray"; 
}) ;
subitemList.addEventListener("mouseout",()=>{
    subitemList.style.backgroundColor  = "#ffffff"; 
}) ;

subitemList.addEventListener('click', (event) => {
    //Objeto de evento
    if(event.target.className === 'item2'){
        if(event.target.children[0].style.display === "block"){
            event.target.children[0].style.display = "none";
        } else {
            event.target.children[0].style.display = "block";
        }
    }
}); 

// EMPIEZAN LAS CARDS

class Bebidas {
    constructor(id,name,image){
        this.id = id;
        this.name = name;
        this.image = image;
    }

    //Devuelve el nombre y el id concatenados
    getTitle () {
        return this.name +  " #"+this.id ;
    }
    setName(newName){
        this.name = newName;
    }

}
let contador = 0;

let input_cantidad = document.getElementById("cantidad");
input_cantidad.value = contador;

let bebidas1 = new Bebidas (1,"Ipa Andina","../img/ipa andina.jpg");
let bebidas2 = new Bebidas (2,"Apa","../img/apa.jpg");
let bebidas3 = new Bebidas (3,"Porter","../img/porter.jpg");
let bebidas4 = new Bebidas (4,"Malbec","../img/malbec.webp");
let bebidas5 = new Bebidas (5,"Cavernet Sauvignon","../img/cavernet sauvignon.jpg");
let bebidas6 = new Bebidas (6,"Merlot","../img/merlot.jpg");
let bebidas7 = new Bebidas (7,"Chardonnay","../img/chardonnay.jpg");
let bebidas8 = new Bebidas (8,"Syrah","../img/syrah.jpg");
let bebidas9 = new Bebidas (9,"Cavernet Franc","../img/cavernet franc.jpg");
let bebidas10 = new Bebidas (10,"Whisky","../img/whisky.jpg");
let bebidas11 = new Bebidas (11,"Ron","../img/ron.jpg.crdownload");
let bebidas12 = new Bebidas (12,"Gin","../img/gin.jpg");


let arreglo_bebidas = new Array();
arreglo_bebidas.push(bebidas1);
arreglo_bebidas.push(bebidas2);
arreglo_bebidas.push(bebidas3);
arreglo_bebidas.push(bebidas4);
arreglo_bebidas.push(bebidas5);
arreglo_bebidas.push(bebidas6);
arreglo_bebidas.push(bebidas7);
arreglo_bebidas.push(bebidas8);
arreglo_bebidas.push(bebidas9);
arreglo_bebidas.push(bebidas10);
arreglo_bebidas.push(bebidas11);
arreglo_bebidas.push(bebidas12);

let bebidasDiv = document.getElementById("bebidasDiv");

for (let i = 0; i< arreglo_bebidas.length;i++){

    let objeto_bebidas = arreglo_bebidas[i];
    crear_caja_bebidas(objeto_bebidas);

}

function crear_caja_bebidas(bebidas){

    let ctn = document.createElement("div");

    let name = document.createElement("h2");
    name.textContent = bebidas.getTitle();

    let img = document.createElement("img");
    img.setAttribute("src",bebidas.image);

    ctn.appendChild(name);
    ctn.appendChild(img);

    bebidasDiv.appendChild(ctn);

    
    ctn.addEventListener("mouseover",()=>{     //HOVER
        ctn.style.backgroundColor  = "gray"; 
    }) ;    
    ctn.addEventListener("mouseout",()=>{
        ctn.style.backgroundColor  = "#ffffff"; 
    }) ;


    ctn.addEventListener("click",()=>{

        bebidasDiv.removeChild(ctn);
        alert("El producto se agregó a tu carrito");
        contador++;
        input_cantidad.value = contador;

        if (contador == arreglo_bebidas.length){

            alert("NO NOS QUEDAN MÁS PRODUCTOS, TE LOS TOMASTE TODOS CHINWEWENCHA!!!");

        }


    })







}