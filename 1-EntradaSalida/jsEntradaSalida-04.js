/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var Nombre;

	nombre = prompt("Ingrese su nombre");

	txtIdNombre.value = nombre;

	alert(nombre);
}

