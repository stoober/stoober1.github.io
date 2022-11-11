function generateParams() {
	var principal = Math.floor(Math.random() * 1100);
	var rate = Math.floor(Math.random() * 40);
	var years = Math.floor(Math.random() * 50);
	
	var params = [principal, rate, years]
}

function generateResult() {
	var principal = Math.floor(Math.random() * 1100);
	var rate = Math.floor(Math.random() * 40);
	var years = Math.floor(Math.random() * 50);
	
	var result = Math.floor(principal * (1 + (rate/100)) ** years);
	
	return result;
}

function generateOthers(result) {
	var opt1 = Math.floor((Math.random() * 5 + 1) * result);
	var opt2 = Math.floor(result / (Math.random() * 3 + 1));
	var opt3 = Math.floor(result / (Math.random() * 10 + 1));
	var opt4 = Math.floor((Math.random() * 50 + 1) * result);
	
	var options = [opt1, opt2, opt3, opt4];
	
	return options;
}

function displayQ(params) {
	document.getElementById("question").innerHTML = "If you have $" + numberWithCommas(principal) + " and it grows by " + rate + "% every year for " + years + " years, how much money will you have?"
}

function displayButtons(result, options) {
	const positions = ["0", "1", "2"];
	
	var initial = Math.floor(Math.random() * positions.length);
	
	document.getElementById("test").innerHTML = initial;
	
	document.getElementById(initial.toString()).innerHTML = "$" + numberWithCommas(result);
	
	document.getElementById(initial.toString()).onclick = function() {
		document.getElementById("display").innerHTML = "Correct!";
	}
	
	positions.splice(initial, 1);
	
	for (let i = 0; i < positions.length + 1; i++) {
		var indexForPosition = Math.floor(Math.random() * positions.length);
		var pos = positions[indexForPosition];
		
		var indexForOption = Math.floor(Math.random() * options.length);
		var optPos = options[indexForOption];
		
		document.getElementById(pos.toString()).innerHTML = "$" + numberWithCommas(optPos);
		
		document.getElementById(pos.toString()).onclick = function() {
			document.getElementById("display").innerHTML = "Incorrect!";
		}
		
		positions.splice(indexForPosition, 1);
		options.splice(indexForOption, 1);
	};
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

