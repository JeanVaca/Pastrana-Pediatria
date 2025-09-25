var io = require('socket.io')(); //instalar la libreria 

io.sockets.on('connection', function(socket){ 
    console.log("Nuevo cliente conectado con id: " + socket.id);

    socket.on('enviarDatosClienteToServer' , function(dato){
        console.log(dato);

    
        //io.sockets.emit('enviarDatosClienteToServer' , dato.conteo);
        socket.broadcast.emit('enviarDatosClienteTServer', dato.conteo);
    });
});

module.exports = io; //permiti crear un archivo http 