document.getElementById("btnFactorial").addEventListener("click", function () {
	var number = document.getElementById("numFactorial").value * 1;

	var result = factorial(number);

	document.getElementById("footerResult3").innerHTML = result;
});

function factorial(x) {
	var result = 1;
	for (var i = 1; i <= x; i++) {
		result *= i;
	}
	return result;
}
