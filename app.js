let productos =[ ];
let total = 0;
let precio= 0;


function agregar(producto,precio){
    console.log(producto,precio)
    productos.push(producto);
    total = total + precio;
    document.getElementById("checkaut").innerHTML = "Pagar $${total}"
}
function pagar(){
    console.log(productos,precio)
window.alert(productos.join(" ,\n " + " \n Total ") + " "+ total);
}

