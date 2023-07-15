var lives = 10;
var random = Math.round(Math.random()*100);
var input = document.getElementById("input");
var display = document.getElementById("display");
var live = document.getElementById("live");

function submit() {
	lives--;
	console.log(random);
	live.innerHTML = "You have "+ lives + "<div class='heart'></div> lives remaining";
	if(lives < 1) {
		location.href = "./lose.html";
	}
	else if(input.value < random) {
		display.innerHTML = "Your guess is less than that number";
	}
	else if(input.value > random) {
		display.innerHTML = "Your guess is greater than that number";
	}
	else if(input.value == random) {
		location.href = "./win.html";
	}
	else {
		console.log("Error");
	}
}