function mostrar()
{
	//tomo la edad  
	var edad;
	var estado;

	edad=txtIdEdad.value;
	estado=estadoCivil.value;
	edad=parseInt(edad);

	if (edad>=18&&estado=="Soltero") {
		alert("Es soltero, y no es menor")
	}
	


}//FIN DE LA FUNCIÓN