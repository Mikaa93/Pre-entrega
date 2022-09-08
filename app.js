//llamo a la funcion para dar bienvenida a la pagina

function solicitarNombre(){
    let nombre = prompt("Ingresar nombre")
    alert("Bienvenido a Perfume shop " + nombre)

}
solicitarNombre();



let productos =[ ];
let total = 0;
let precio= 0;

//esta sirve para agregar los producto al carrito


function agregar(producto,precio){
    console.log(producto,precio)
    productos.push(producto);
    total = total + precio;
    document.getElementById("checkaut").innerHTML =  `Pagar $${total}`
}
agregar(productos,precio);

//se agrega un evento

let pagar=
document.getElementById("checkaut")
pagar.addEventListener("click", respuestacliente)
function respuestacliente(){
    console.log("el cliente hizo el pago")
};
respuestacliente();

//llamo a la funcion para pagar el total

function pagaCliente(){
    console.log(productos,precio)
window.alert(productos.join(" ,\n " + " \n Total ") + " "+ total);
}
pagaCliente();


const producto = [{id: 1, producto: "Carolina Herrera", precio:5000},
                  {id:2, producto:"Armani", precio: 10000},
                  {id:3, producto: "Chanel", precio: 10000},
                  {id:4, producto: "Acqua Di Gio", precio:12000},
                  {id:5, producto:"Versace",precio:8000}];

const guardarLocal = (listadeproductos,perfumes) => {localStorage.setItem(listadeproductos,perfumes)};


guardarLocal("listasproductos",JSON.stringify(producto));




