function mostrar()
{
	var edad;
	var estado;

	edad=txtIdEdad.value;
	estado=estadoCivil.value;
	edad=parseInt(edad);

	if (edad<=17 && estado!="Soltero") {
		alert("Es muy pequeño para NO ser soltero")
	}
	


}//FIN DE LA FUNCIÓN