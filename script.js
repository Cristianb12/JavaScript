
var cantidad;
var precio;
var descuento;
var compra;
var pagar;
 
precio = parseFloat (prompt ("INGRESAR PRECIO"))
cantidad = parseFloat (prompt ("INGRESAR CANTIDAD"))
alert ("Su resultado se mostrara al final de la pagina")

if (isNaN(precio)) {	
	alert ("No ingresaste un numero en precio");
}
if (isNaN(cantidad)) {	
	alert ("No ingresaste un numero en cantidad");
}

compra = precio*cantidad;
descuento = compra*0.15;
pagar = compra-descuento;

document.write("El descuento es de: $ "+ descuento)

document.write(" " + "El precio final es de: $ "+pagar) 





