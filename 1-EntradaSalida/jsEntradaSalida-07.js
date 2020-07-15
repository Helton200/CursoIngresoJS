/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var Num1;
	var num2;
	Num1=txtIdNumeroUno.value;
	Num2=txtIdNumeroDos.value;
	Num1=parseInt(Num1);
	Num2=parseInt(Num2);
	var suma;
	suma= Num1+Num2;
	alert(suma);
}

function restar()
{
	var Num1;
	var Num2;
	var resta;
	Num1=txtIdNumeroUno.value;
	Num2=txtIdNumeroDos.value;
	Num1=parseInt(Num1);
	Num2=parseInt(Num2);
	resta=Num1-Num2;
	alert(resta)
}

function multiplicar()
{ 	var Num1;
	var num2;
	var multi;
	Num1=txtIdNumeroUno.value;
	Num2=txtIdNumeroDos.value;
	Num1=parseInt(Num1);
	Num2=parseInt(Num2);
	multi=Num1*Num2;
	alert(multi);
}

function dividir()
{	
	var Num1;
	var num2;
	var divi;
	Num1=txtIdNumeroUno.value;
	Num2=txtIdNumeroDos.value;
	Num1=parseInt(Num1);
	Num2=parseInt(Num2);
	divi=Num1/Num2;
	alert(divi);
	
}

