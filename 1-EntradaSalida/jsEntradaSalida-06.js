/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var Num1;
	var Num2;
	var Suma;

	Num1= txtIdNumeroUno.value;
	Num2= txtIdNumeroDos.value;

	Num1=parseInt(Num1);
	Num2=parseInt(Num2);
	Suma= Num1 + Num2;

	alert(Suma);
}

