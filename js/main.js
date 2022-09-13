class Producto{
    constructor(id,nombre,precio,categoria){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.categoria=categoria;
    }
}
let productos= [
    new Producto(10,"Naruto",1200,"mangas"),
    new Producto(11,"Sailor Moon",1500,"mangas"),
    new Producto(12,"Comix Zone",2000,"mangas"),
];

let carrito=[];
let seguirComprando =true
let total =0 ;

function sumaCarrito(){
    for(productos of carrito){
        return productos.precio;
    }
}

do{
    let opcion =Number(prompt( "Bienvenidos \n¿Qué mangas quiere comprar? \n 1-Naruto \n 2-Sailor Moon \n 3-Comix Zone"))

switch(opcion){

    case 1:
        alert("Seleccionaste :Naruto ");
        carrito.push(productos[0]);
        
    break;
    case 2:
        alert("Seleccionaste :Sailor Moon");
        carrito.push(productos[1]);
    break;
    case 3:
        alert("Seleccionaste : Comix Zone");
        carrito.push(productos[2])
    
    break;
    default:
        alert("El producto seleccionado no existe. Chequeá nuevamente");
        precio= 0;
        cantidad= 0;
}

total +=sumaCarrito();

seguirComprando = confirm("¿Querés agregar otro producto al carrito?")


}while(seguirComprando);


alert ("El precio final es de : "+total);
