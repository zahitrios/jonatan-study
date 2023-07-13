//con jquery
$(document).ready(function () {
	// esperar a que la página se cargue
	$("#button1").on("click", lanzarAlertaFunction); // suscribirme al evento click del boton
	$("#button2").on("click", cambiarColor);
	$("#button3").hover(cambiarTexto, regresarTexto);
});

function lanzarAlertaFunction() {
	alert("me dieron click!!"); // disparar la alerta
}

function cambiarColor() {
	$("#yellowSquare").removeClass("bg-yellow-500");
	$("#yellowSquare").addClass("bg-red-500");
}

function cambiarTexto() {
	$(".bg-green-500").html("VERDE!!");
}

function regresarTexto() {
	$(".bg-green-500").html("GREEN");
}

// los selectores de jquery comienzan con $

// selectores, métodos, acciones
