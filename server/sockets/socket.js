const { io } = require('../server');


io.on('connection', (client) => {

    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la App'
    });


    client.on('disconect', () => {
        console.log('Usuario desconectado');
    });


    client.on('enviarMensaje', (data, callback) => {

        client.broadcast.emit('enviarMensaje', data); //ENTIENDE POR BROADCAST QUE EMITE A TODOS LOS USUARIOS QUE ESTEN CONECTADOS EN LA APLICACION

        /*if (mensaje.usuario) {
            callback({
                mensaje: ' Todo salio bien!'
            });
        } else {
            callback({
                mensaje: 'Todo salio MAL!!!!'
            });
        }*/


    });

});