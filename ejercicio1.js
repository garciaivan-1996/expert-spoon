let cadena = String(prompt("Introduce tu nombre"));

function comprobar(cadena){
	cadena2 = cadena.slice(0,1)


	if(cadena2.match(/[ABCDEFGHYJKLMNOPQRSTUVWXYZ]/)){
	return bool = "si"}else{
		return bool = "no"
	}

}
comprobar(cadena);
console.log("La primera letra es mayuscula? " + bool);
