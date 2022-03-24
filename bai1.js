var total = 0;
var i;

for (i = 0; total < 10000; total += i) {
	i++;
}

var result = "Số nguyên dương nhỏ nhất: " + i;

document.getElementById("footerText1").innerHTML = result;
