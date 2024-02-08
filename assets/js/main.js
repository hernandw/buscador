/* let inputValor = document.querySelector("#texto");
let boton = document.querySelector("#buscar");
let msg = document.querySelector("#mensaje"); */

/* boton.addEventListener('click', function () {
    
}) */

/* boton.addEventListener("click", () => {
    let valor = inputValor.value */
    

    //validacion

/*     if (valor.trim() != "") {
       msg.innerHTML = `buscando... ${valor}`
    } else {
         msg.innerHTML = 'Deebes escribir una palabra a buscar'
    }
}); */


// Como traer las variable
let mensaje = document.querySelector('#mensaje')
let inputV = document.querySelector('#input')
let boton = document.querySelector('.btn')


// como agregarle el evento al boton

/* boton.addEventListener('click', () => {
    let valor = inputV.value

    if (valor.trim() == '') {
        mensaje.innerHTML = 'Debes agregar un usuario'
    } else {
        alert(`Tu nombres es: ${valor}`)
    }
}) */

//Como mostrar el error en el parrafo

function validar(){
    let valor = inputV.value
  let patron = /[a-zA-Z]/gim;

    if (valor.match(patron)) {
        alert('Palabra permitida')
    } else {
        alert('La palabra no esta permitida')
    }


}

boton.addEventListener('click', validar)