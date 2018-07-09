module.exports = function Route(app, server){
    var io = require('socket.io').listen(server);
    app.get('/', function(req, res){
        res.render('index');
    });
    io.sockets.on('connection', socket => {
            socket.on('posting_form', data => {
                    socket.emit('updated_message', { response : data });
                    socket.emit('random_number', { response : Math.floor(Math.random() * 1001)});
                })
        });
}