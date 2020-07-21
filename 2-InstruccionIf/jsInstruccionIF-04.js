function mostrar()
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if (edad<=17&&edad>=13){
		alert("Es adolescente")
	}else{
		alert("No es adolescente")
	}
}	

var Num1=12;
var Num2=2;
var Num3=22;

if (Num1>Num2&&Num1>Num3) {
	alert("El numero mayor es "+Num1)
}else if (Num2>1&&Num2>Num3) {
	alert("El numero mayor es "+Num2)
}else{
	alert("El numero mayor es "+Num3)
}

