let parametros = new URLSearchParams(location.search);
var nombre = parametros.get("name");
var email = parametros.get("email");
var telefono = parametros.get("telefono");
var gusto = parametros.get("gusto");
var porcentaje = parametros.get("porcentaje");

document.getElementById("titulo").innerHTML += nombre + '<br>Ficha';
document.getElementById("email").innerHTML = email;
document.getElementById("tel").innerHTML = telefono;
document.getElementById("gusto").innerHTML = gusto;
document.getElementById("porcentaje").innerHTML = porcentaje;