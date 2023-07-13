// sin jquery
window.addEventListener("load", event => {
	//esperé a que la página se cargara
	document
		.getElementById("button1")
		.addEventListener("click", lanzarAlertaFunction);
});

function lanzarAlertaFunction() {
	alert("me dieron click!!"); // disparar la alerta
}

// fin de sin jquery
