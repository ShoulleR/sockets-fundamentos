var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});
//ESTO ES PARA ESCUCHAR SUCESOS.
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//ENVIAR INFORMACION CON .EMIT() PARA QUE EL SERVIDOR LA ESCUCHE
socket.emit('enviarMensaje', {
        usuario: 'Miguel',
        message: 'Hola mundo'
    }),
    function(resp) {

        console.log('Respuesta del Server: ', resp);
    }

//escuchar info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});