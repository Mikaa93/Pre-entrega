//llamo a la funcion para dar bienvenida a la pagina

function solicitarNombre(){
    swal("Bienvenido a Perfume Shop ");
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

let pagar = document.getElementById("checkaut")
pagar.addEventListener("click",respuestacliente)
function respuestacliente() {
    swal({
        title: "Está seguro de su compra?",
        icon: "info",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Has realizado la compra correctamente",{
                    icon: "success",
                });
            } else {
                swal("Vuelve pronto!",{
                    icon: "info"
                });
            }
        });

};

//llamo a la funcion para pagar el total

function pagaCliente(){
    console.log(productos,precio)
/*window.alert(productos.join(" ,\n " + " \n Total ") + " "+ total);*/
}
pagaCliente();

//guardo el localstorage y  un envio un spread del array


const producto = [{id: 1, producto: "Carolina Herrera", precio:5000},
                  {id:2, producto:"Armani", precio: 10000},
                  {id:3, producto: "Chanel", precio: 10000},
                  {id:4, producto: "Acqua Di Gio", precio:12000},
                  {id:5, producto:"Versace",precio:8000},
                  {id:6, producto:"Bvlgari",precio:11000},
                  {id:7, producto:"Paco Rabanne",precio:15000},
                  {id:8, producto:"Givenchy",precio:18000}
                
                ];

const guardarLocal = (listadeproductos,perfumes) => {localStorage.setItem(listadeproductos,perfumes)};


guardarLocal("listasproductos",JSON.stringify(producto));

console.log(...producto)



const lista = document.querySelector('#listado')

fetch('/data.json')
.then((res) => res.json())
.then( (data) => {
    data.forEach((producto) => {
        const li = document.createElement('li')
        li.innerHTML = `
        <h4>${producto.nombre}</h4>
        <p>${producto.precio}</p>
        <p>Codigo: ${producto.id} </p>

        `

        lista.append(li)


    })
})
