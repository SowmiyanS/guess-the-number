var toggle_bool = 0;

function toggle() {
	var dd = document.getElementById("dropdown");
	var arrow = document.getElementById("arrow");
	dd.style = "display: none";
	if(toggle_bool == 0) {
		dd.style = "display: block";
		toggle_bool = 1;
		arrow.innerHTML = "&#8679;";
	}
	else {
		dd.style = "display: none";
		toggle_bool = 0;
		arrow.innerHTML = "&#8681;";
	}
}

function start() {
	location.href = "./game.html";
}