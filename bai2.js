document.getElementById("btnTotal").onclick = function () {
	var numberX = document.getElementById("numberX").value * 1;
	var numberN = document.getElementById("numberN").value * 1;

	var total = 0;
	var result = totalCalc(numberX, numberN, total);

	document.getElementById("footerResult2").innerHTML = result;
};

function totalCalc(x, n, total) {
	for (var i = 1; i <= n; i++) {
		total += Math.pow(x, i);
	}
	return total;
}
