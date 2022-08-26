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

