function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero= Math.floor(Math.random()*(11-1))+1

	if (numero<4) {
		alert("Vamos, la proxima se puede")
	} else if (numero>=9) 
	alert("Excelente")
	 else {
		alert("Aprobo")
	}
	console.log(numero);
}//FIN DE LA FUNCIÓN





var num1;
var num2;
var num3;

num1=Math.floor(Math.random()*(52-1))+1;
num2=Math.floor(Math.random()*(52-1))+1;
console.log(num1);
console.log(num2);

	if (num1%2==0&&num2%2==0) {
	num3=num1*num2;
	console.log(num3);
} else{
	if (num1%2!=0&&num2%2!=0) {
		num3=num1-num2;
		console.log(num3);
	}
}	if (num1%5==0||num2%5==0) {
	num1=Math.pow(num1,5);
	num2=Math.pow(num2,5);
	console.log(num1);
	console.log(num2);
} else{	
	alert("No paso nada")
}
