var fs = require('fs');
var express=require('express');
var app = express();
var usuarios = new Array;
var portada = fs.readFileSync('consultar_formulario.html','utf8');
var ag=fs.readFileSync('agregar_formulario.html','utf8');

app.get('/', function (req, res) {
res.send(portada);
});

app.get('/agregar', function (req, res) {
res.send(ag);
});


app.get('/js/:page', function (req, res) {
var js = fs.readFileSync(req.params.page);
res.contentType('text/javascript');
res.send(js);
});

app.post('/agrega/:id1/:id2', function( req,res ) {
res.contentType('application/json');
usuarios[req.params.id1] = req.params.id2;
res.send('Creado usuario '+ req.params.id1 +'  telefono: '+req.params.id2);
});

app.post('/consulta/:id', function (req, res) {

res.contentType('application/json');
res.send( { resultado: usuarios[req.params.id] } );
console.log( 'Se busco el usuario '+ req.params.id +" con teléfono "+usuarios[req.params.id] );
});

app.get('/consulta/:id', function (req, res) {
res.contentType('application/json');
res.send( "{ 'Se encontro lo siguiente': " +"Usuario: "+req.params.id + " Telefono: "+usuarios[req.params.id] +"}\n" );
});



app.listen(8080);
console.log('Server running at http://127.0.0.1:8080/');