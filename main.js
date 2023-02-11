
function Play(humanChoice){


	// computer choices
	const computerChoices = ['rock.png', 'paper.png', 'scissors.png'];
	// const computerChoices = ['rock.png', 'paper.png', 'scissors.png'];



	// genearting random computer choices
	let sampleNum = Math.floor(Math.random() * computerChoices.length);
	let computer = computerChoices[sampleNum];



	let paper = document.querySelector('.paper');
	let rock = document.querySelector('.rock');
	let scissor = document.querySelector('.scissors');
	let user = document.querySelector(".user");
	let input = document.getElementById("input");
	let comp = document.getElementById("computer");
	let win = document.getElementById("win");
	let lose = document.getElementById("lose");
	let tie = document.getElementById("tie");
	const pscore = document.getElementById("playerScore");
	const cscore = document.getElementById("computerScore");

	
	//adding score 
	let playerScore = parseInt(pscore.innerHTML) || 0;
	let computerScore = parseInt(cscore.innerHTML) || 0;



	// Paper =========================
	if (humanChoice == 'paper' ) {
		paper.classList.add("paper-show");
		rock.classList.remove("rock-show");
		scissor.classList.remove("scissors-show");


		// score
		input.classList.add("input-hide");
		pscore.innerHTML = playerScore;
		cscore.innerHTML = computerScore;



		if (computer == 'paper.png') {
			
			// show computer choices
			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;

			// adding tie popup
			tie.classList.add("tie-toggle");


			// ============================================================
			// to show prevoius matched into history 
			// code refference  from todo list
		
			let history  = document.querySelector("#tied-history").innerHTML;
			let prev = document.querySelector("#previous");
			let humanChoice = ['paper.png'];
			
			// let previous = document.getElementById("previous").innerHTML = ;
			let div = document.getElementById('previous').value = `<span>${playerScore}</span><img src = "${humanChoice}"><small>${history}</small><img src = "${computer}"><span>${computerScore}</span>`;
			let taskitem = document.createElement("li");
			taskitem.innerHTML = div;
			prev.appendChild(taskitem);
			console.log(div+"Is Successfully added to History");
			


		// ============================================================
	
			
		}
		else if(computer == 'rock.png'){
			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;
			
	
			//adding win popup 
			win.classList.add("win-toggle");

			// score
			pscore.innerHTML = playerScore + 1;
			playerScore++;


		// ============================================================
			// to show prevoius matched into history 
			// code refference  from todo list
		
			let history  = document.querySelector("#win-history").innerHTML;
			let prev = document.querySelector("#previous");
			let humanChoice = ['paper.png'];

			
			// let previous = document.getElementById("previous").innerHTML = ;
			let div = document.getElementById('previous').value = `<span>${playerScore}</span><img src = "${humanChoice}"><small>${history}</small><img src = "${computer}"><span>${computerScore}</span>`;
			let taskitem = document.createElement("li");
			taskitem.innerHTML = div;
			prev.appendChild(taskitem);
			console.log(div+"Is Successfully added to History");
			


		// ============================================================
			
			
		
		}
		else if(computer == 'scissors.png'){
			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;

			

			//adding lose popup 
		lose.classList.add("lose-toggle");

		// score
			cscore.innerHTML = computerScore + 1;
			computerScore++;


			// ============================================================
			// to show prevoius matched into history 
			// code refference  from todo list
		
			let history  = document.querySelector("#lose-history").innerHTML;
			let prev = document.querySelector("#previous");
			let humanChoice = ['paper.png'];
			
			// let previous = document.getElementById("previous").innerHTML = ;
			let div = document.getElementById('previous').value = `<span>${playerScore}</span><img src = "${humanChoice}"><small>${history}</small><img src = "${computer}"><span>${computerScore}</span>`;
			let taskitem = document.createElement("li");
			taskitem.innerHTML = div;
			prev.appendChild(taskitem);
			console.log(div+"Is Successfully added to History");
			


		// ============================================================


		
		}

		
	}
	// Rock =========================
	else if (humanChoice == 'rock' ) {
		rock.classList.add("rock-show");
		paper.classList.remove("paper-show");
		scissor.classList.remove("scissors-show");

		// document.getElementById("paper").disabled = true;
		// document.getElementById("scissors").disabled = true;

		input.classList.add("input-hide");


		if (computer == 'paper.png') {
			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;
			
			lose.classList.add("lose-toggle");

			cscore.innerHTML = computerScore + 1;
			computerScore++;


			// ============================================================
			// to show prevoius matched into history 
			// code refference  from todo list
		
			let history  = document.querySelector("#lose-history").innerHTML;
			let prev = document.querySelector("#previous");
			let humanChoice = ['rock.png'];
			
			// let previous = document.getElementById("previous").innerHTML = ;
			let div = document.getElementById('previous').value = `<span>${playerScore}</span><img src = "${humanChoice}"><small>${history}</small><img src = "${computer}"><span>${computerScore}</span>`;
			let taskitem = document.createElement("li");
			taskitem.innerHTML = div;
			prev.appendChild(taskitem);
			console.log(div+"Is Successfully added to History");
			


		// ============================================================

			
		}
		else if(computer == 'rock.png'){
			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;
			
			tie.classList.add("tie-toggle");

			// ============================================================
			// to show prevoius matched into history 
			// code refference  from todo list
		
			let history  = document.querySelector("#tied-history").innerHTML;
			let prev = document.querySelector("#previous");
			let humanChoice = ['rock.png'];
			
			// let previous = document.getElementById("previous").innerHTML = ;
			let div = document.getElementById('previous').value = `<span>${playerScore}</span><img src = "${humanChoice}"><small>${history}</small><img src = "${computer}"><span>${computerScore}</span>`;
			let taskitem = document.createElement("li");
			taskitem.innerHTML = div;
			prev.appendChild(taskitem);
			console.log(div+"Is Successfully added to History");
			


		// ============================================================
			
		}
		else if(computer == 'scissors.png'){
			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;
			

			win.classList.add("win-toggle");

			pscore.innerHTML = playerScore + 1;
			playerScore++;


			// ============================================================
			// to show prevoius matched into history 
			// code refference  from todo list
		
			let history  = document.querySelector("#win-history").innerHTML;
			let prev = document.querySelector("#previous");
			let humanChoice = ['rock.png'];
			
			// let previous = document.getElementById("previous").innerHTML = ;
			let div = document.getElementById('previous').value = `<span>${playerScore}</span><img src = "${humanChoice}"><small>${history}</small><img src = "${computer}"><span>${computerScore}</span>`;
			let taskitem = document.createElement("li");
			taskitem.innerHTML = div;
			prev.appendChild(taskitem);
			console.log(div+"Is Successfully added to History");
			


		// ============================================================

			
		}



	}
	// Scissors =========================
	else if (humanChoice == 'scissors' ) {

		rock.classList.remove("rock-show");
		paper.classList.remove("paper-show");
		scissor.classList.add("scissors-show");

		// document.getElementById("rock").disabled = true;
		// document.getElementById("paper").disabled = true;

		input.classList.add("input-hide");


		if (computer == 'paper.png') {
			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;
			

			win.classList.add("win-toggle");

			pscore.innerHTML = playerScore + 1;
			playerScore++;


			// ============================================================
			// to show prevoius matched into history 
			// code refference  from todo list
		
			let history  = document.querySelector("#win-history").innerHTML;
			let prev = document.querySelector("#previous");
			let humanChoice = ['scissors.png'];
			
			// let previous = document.getElementById("previous").innerHTML = ;
			let div = document.getElementById('previous').value = `<span>${playerScore}</span><img src = "${humanChoice}"><small>${history}</small><img src = "${computer}"><span>${computerScore}</span>`;
			let taskitem = document.createElement("li");
			taskitem.innerHTML = div;
			prev.appendChild(taskitem);
			console.log(div+"Is Successfully added to History");
			


		// ============================================================

		}
		else if(computer == 'rock.png'){
			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;
			
	
			lose.classList.add("lose-toggle");

			cscore.innerHTML = computerScore + 1;
			computerScore++;


			// ============================================================
			// to show prevoius matched into history 
			// code refference  from todo list
		
			let history  = document.querySelector("#lose-history").innerHTML;
			let prev = document.querySelector("#previous");
			let humanChoice = ['scissors.png'];

			
			// let previous = document.getElementById("previous").innerHTML = ;
			let div = document.getElementById('previous').value = `<span>${playerScore}</span><img src = "${humanChoice}"><small>${history}</small><img src = "${computer}"><span>${computerScore}</span>`;
			let taskitem = document.createElement("li");
			taskitem.innerHTML = div;
			prev.appendChild(taskitem);
			console.log(div+"Is Successfully added to History");
			


		// ============================================================

		}
		else if(computer == 'scissors.png'){
			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;
			
			tie.classList.add("tie-toggle");

			// ============================================================
			// to show prevoius matched into history 
			// code refference  from todo list
		
			let history  = document.querySelector("#tied-history").innerHTML;
			let prev = document.querySelector("#previous");
			let humanChoice = ['scissors.png'];
			
			// let previous = document.getElementById("previous").innerHTML = ;
			let div = document.getElementById('previous').value = `<span>${playerScore}</span><img src = "${humanChoice}"><small>${history}</small><img src = "${computer}"><span>${computerScore}</span>`;
			let taskitem = document.createElement("li");
			taskitem.innerHTML = div;
			prev.appendChild(taskitem);
			console.log(div+"Is Successfully added to History");
			


		// ============================================================
		}



	}


}




// this section is to remove the prevois player choices

let paper = document.querySelector('.paper');
let rock = document.querySelector('.rock');
let scissor = document.querySelector('.scissors');
let input = document.getElementById("input");


function playAgain1(){
	win.classList.remove("win-toggle");
	paper.classList.remove("paper-show");
	rock.classList.remove("rock-show");
	scissor.classList.remove("scissors-show");
	input.classList.remove("input-hide");

	

}
function playAgain2(){
	lose.classList.remove("lose-toggle");
	paper.classList.remove("paper-show");
	rock.classList.remove("rock-show");
	scissor.classList.remove("scissors-show");
	input.classList.remove("input-hide");



}
function playAgain3(){
	tie.classList.remove("tie-toggle");
	paper.classList.remove("paper-show");
	rock.classList.remove("rock-show");
	scissor.classList.remove("scissors-show");
	input.classList.remove("input-hide");



}


// open history container
let menu = document.querySelector(".history-cont");

function openHistory(){
	menu.classList.toggle("open-History");
}

