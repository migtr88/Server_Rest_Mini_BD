var request;
function consulta() {
request = new XMLHttpRequest();
var usuario=document.getElementById('usuario').value;
var peticion_str = '/consulta/'+usuario;
request.open('POST', peticion_str , true);
request.onreadystatechange= muestra_resultado ;
request.send(null);
}
function agrega() {
request = new XMLHttpRequest();
var usuario=document.getElementById('usuario').value;
var tel=document.getElementById('telefono').value;
var peticion_str = '/agrega/'+usuario+"/"+tel;
request.open('POST', peticion_str , true);
request.onreadystatechange= muestra_resultado ;
request.send("Creado usuario");
}

function muestra_resultado(){
if ( request.readyState == 4 ) {
if ( request.status == 200 ) {
var json;
eval ( 'json = '+ request.responseText );
console.log(json);
document.getElementById('Resultado').innerHTML= 'El número de telefono del usuario buscado es '+
json.resultado
}
}
}