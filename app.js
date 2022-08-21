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
    document.getElementById("checkaut").innerHTML = "Pagar $${total}"
}
agregar(productos,precio);

//llamo a esta funcion para pagar el total


function pagar(){
    console.log(productos,precio)
window.alert(productos.join(" ,\n " + " \n Total ") + " "+ total);
}
pagar();

