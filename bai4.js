document.getElementById("btnDivCreate").onclick = function () {
	for (var i = 1; i <= 10; i++) {
		if (i % 2 !== 0) {
			// Create div tag
			var divOdd = document.createElement("div");

			// Style div tag
			divOdd.style.background = "blue";
			divOdd.style.color = "white";
			divOdd.style.lineHeight = "36px";
			divOdd.innerHTML = "Div lẻ " + i;

			// Show
			document.getElementById("footerResult4").appendChild(divOdd);
		}
		if (i % 2 === 0) {
			// Create div tag
			var divEven = document.createElement("div");

			// Style div tag
			divEven.style.background = "red";
			divEven.style.color = "white";
			divEven.style.lineHeight = "36px";
			divEven.innerHTML = "Div chẵn " + i;

			// Show
			document.getElementById("footerResult4").appendChild(divEven);
		}
	}
};
