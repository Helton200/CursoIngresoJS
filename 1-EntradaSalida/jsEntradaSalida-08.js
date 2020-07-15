/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var Num1;
	var Num2;
	var resto;

	Num1=txtIdNumeroDividendo.value;
	Num2=txtIdNumeroDivisor.value;

	Num1=parseInt(Num1);
	Num2=parseInt(Num2);

	resto= (Num1 % Num2);
	alert(resto);
}
