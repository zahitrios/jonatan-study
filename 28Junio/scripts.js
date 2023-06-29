window.onload = event => {
	console.log("the page is loaded");
	let buttonObject = document.getElementById("buttonContainer"); //solo hacemos una asignación, del elmento con el ID buttonContainer en html a una variable de javascript llamada buttonObject
	buttonObject.addEventListener("click", changeThemeFunction); //agregamos un "observador" para el botón, y en cada click llamaremos a la función changeThemeFunction

	function changeThemeFunction() {
		console.log("clicked");
		let themeObject = document.getElementById("themeContainer");
		let currentTheme = themeObject.innerHTML;
		console.log(currentTheme);

		if (currentTheme == "Dark") {
			//dentro de los paréntises, necesita haber una condición a evaluar
			//cambiar el theme a ligth
			themeObject.setHTML("Light");

			let containerObject = document.getElementById("container");
			containerObject.style.backgroundColor = "#CCCCCC";

			let headerObject = document.getElementById("header");
			headerObject.style.color = "#000000";

			let contentObject = document.getElementById("content");
			contentObject.style.color = "#000000";
		} else {
			// de lo contrario
			// cambiar el them a dark
			console.log("Voy a cambiar a dark");
			themeObject.setHTML("Dark");

			let containerObject = document.getElementById("container");
			containerObject.style.backgroundColor = "#666666";

			let headerObject = document.getElementById("header");
			headerObject.style.color = "#FFFFFF";

			let contentObject = document.getElementById("content");
			contentObject.style.color = "#cccccc";
		}
	}
};
