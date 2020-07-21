function mostrar()
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if (edad>=18) {
		alert("Es mayor")
	}else if (edad>=13&&edad<=17) {
		alert("Es adolescente")
	}else{
		alert("Es menor")
	}


}//FIN DE LA FUNCIÓN