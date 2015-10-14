console.log(".js properly linked");

var computerChoice = "no chioce"

var computerChoiceGenerator = function() {
	var computerNumber = Math.random();
	console.log(computerNumber);

	if (computerNumber < 0.33) {
		computerChoice = "rock";
		console.log("The computer chose: " + computerChoice);
	}
	else if (computerNumber < 0.66) {
		computerChoice = "paper";
		console.log("The computer chose: " + computerChoice);
	}
	else {
		computerChoice = "scissors";
		console.log("The computer chose: " + computerChoice)
	}
}

var hScore = 0
	console.log(hScore)
var cScore = 0
	console.log(cScore)

document.getElementById("rock").addEventListener("click", rockSelected);

function rockSelected() {
		console.log("You clicked Rock")
	var userChoice = "rock";
		console.log(userChoice);
	computerChoiceGenerator()

	if (computerChoice === userChoice) {
		document.getElementById("status").innerHTML = "Computer chose: " + computerChoice + "<br>" + "IT'S A TIE :/";
	}
	else if (computerChoice === "scissors") {
		document.getElementById("status").innerHTML = "Computer chose: " + computerChoice + "<br>" + "Rock crushes scissors. YOU WIN!";
		hScore = hScore + 1;
		document.getElementById("humanScore").innerHTML = hScore;
	}
	else {
		document.getElementById("status").innerHTML = "Computer chose: " + computerChoice + "<br>" + "Paper covers rock. YOU LOST!";
		cScore = cScore + 1;
		document.getElementById("computerScore").innerHTML = cScore;
	}
	console.log(hScore,cScore)
}

document.getElementById("paper").addEventListener("click", paperSelected);
 
function paperSelected() {
	var userChoice = "paper";
	computerChoiceGenerator();

	if (computerChoice === userChoice) {
		document.getElementById("status").innerHTML = "Computer chose: " + computerChoice + "<br>" + "IT'S A TIE :/" 
	}
	else if (computerChoice === "rock") {
		document.getElementById("status").innerHTML = "Computer chose: " + computerChoice + "<br>" + "Paper covers rock. YOU WIN!";
		hScore = hScore + 1;
		document.getElementById("humanScore").innerHTML = hScore;
	}
	else {
		document.getElementById("status").innerHTML = "Computer chose :" + computerChoice + "<br>" + "Scissors cuts paper. YOU LOST!";
		cScore = cScore + 1 ;
		document.getElementById("computerScore").innerHTML = cScore;
	}
	console.log(hScore,cScore)
}

document.getElementById("scissors").addEventListener("click", scissorsSelected);
 
function scissorsSelected() {
	var userChoice = "scissors";
	computerChoiceGenerator();

	if (computerChoice === userChoice) {
		document.getElementById("status").innerHTML = "Computer chose: " + computerChoice + "<br>" + "IT'S A TIE :/" 
	}
	else if (computerChoice === "rock") {
		document.getElementById("status").innerHTML = "Computer chose: " + computerChoice + "<br>" + "Rock cruches scissors. YOU LOSE!";
		cScore = cScore + 1;
		document.getElementById("computerScore").innerHTML = cScore;
	}
	else {
		document.getElementById("status").innerHTML = "Computer chose :" + computerChoice + "<br>" + "Scissors cuts paper. YOU WIN!";
		hScore = hScore + 1 ;
		document.getElementById("humanScore").innerHTML = hScore;
	}
	console.log(hScore,cScore)
}

if (hScore === 3) {
	console.log("DON'T YOU HAVE ANYTHING BETTER TO DO???")
}
