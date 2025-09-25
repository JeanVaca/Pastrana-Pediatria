var socket = io('http://192.168.43.134:3000') //genera la conexion hacia la funcion de sockets

var txtN1 = document.getElementById("txtN1"); //hace referencia a todo esa parte de la parte de html
var txtN2 = document.getElementById("txtN2");
var lblSuma = document.getElementById("lblSuma");
var lblContar = document.getElementById("lblContar");


var con = function(){
    var con = Number(lblContar.innerHTML);
    con++;
    lblContar.innerHTML = con.toString();
    var objDato = { //variables de tipo objeto
        conteo : con,
        fecha : Date()
    }

    socket.emit("enviarDatosClienteToServer", objDato);
}

socket.on('enviarDatosClienteTServer' , function(dato){
    console.log("El dato recibido es: " + dato.toString());
    lblContar.innerHTML = dato.toString();
})

var suma = function(){
    var N1 = Number(txtN1.value);
    var N2 = Number(txtN2.value);

    var resultado = N1 + N2;

    console.log("El resultado es: " + resultado.toString());

    lblSuma.innerHTML = resultado.toString();
}

