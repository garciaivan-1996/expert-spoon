let cadena = String(prompt("Introduce una cadena"));

function comprobar(cadena) {
  if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(cadena)){
   alert("La direccion de email " + cadena + " es correcta.");
  } else {
   alert("La direccion de email es incorrecta.");
  }
}
comprobar(cadena);
