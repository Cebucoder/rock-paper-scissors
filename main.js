
function Play(humanChoice){


	// computer choices
	const computerChoices = ['rock.png', 'paper.png', 'scissors.png'];

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




	if (humanChoice == 'paper' ) {
		paper.classList.add("paper-show");
		rock.classList.remove("rock-show");
		scissor.classList.remove("scissors-show");

		document.getElementById("rock").disabled = true;
		document.getElementById("scissors").disabled = true;

		input.classList.add("input-hide");


		if (computer == 'paper.png') {

			// show computer choices
			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;

			// adding tie popup
			tie.classList.add("tie-toggle");
		}
		else if(computer == 'rock.png'){
			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;
			 
			//adding win popup 
			win.classList.add("win-toggle");
		}
		else if(computer == 'scissors.png'){
			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;
			
			lose.classList.add("lose-toggle");
		}

		
	}
	else if (humanChoice == 'rock' ) {
		rock.classList.add("rock-show");
		paper.classList.remove("paper-show");
		scissor.classList.remove("scissors-show");

		document.getElementById("paper").disabled = true;
		document.getElementById("scissors").disabled = true;

		input.classList.add("input-hide");


		if (computer == 'paper.png') {
			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;

			
			win.classList.add("lose-toggle");
		}
		else if(computer == 'rock.png'){
			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;
			
			tie.classList.add("tie-toggle");
		}
		else if(computer == 'scissors.png'){
			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;
			
			win.classList.add("win-toggle");
		}



	}
	else if (humanChoice == 'scissors' ) {

		rock.classList.remove("rock-show");
		paper.classList.remove("paper-show");
		scissor.classList.add("scissors-show");

		document.getElementById("rock").disabled = true;
		document.getElementById("paper").disabled = true;

		input.classList.add("input-hide");


		if (computer == 'paper.png') {
			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;
			
			win.classList.add("win-toggle");
		}
		else if(computer == 'rock.png'){
			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;
			
			lose.classList.add("lose-toggle");
		}
		else if(computer == 'scissors.png'){
			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;
			
			tie.classList.add("tie-toggle");
		}



	}

}


