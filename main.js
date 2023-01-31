// let num = 3.9;
// alert(Math.round(num));
// Math.round off to the nearest integers


// =============================
// alert(Math.ceil(num));
// Math.ceil rounds off to the highest possible integers/number


// ============================
// alert(Math.floor(num));
// Math.floor rounds of to the lowest possible integers/numbers 


// =============================
// let sampleNum  = Math.pow(2, 3);
// alert(sampleNum);
// Base, Exponent


// ==============================
// let sampleNum = Math.sqrt(25);
// alert(sampleNum);
// Getting the sqaure root of the selected number


// ==============================
// let sampleNum = Math.abs(25);
// alert(sampleNum);
// Geting the absolute(positive) value of the selected number
// Kung minus negative siya kay iya himuon ug positive


// ==============================
// let sampleNum = Math.min(0,1,2,3,4,5);
// let sampleNum = Math.min(-0,-1,-2,-3,-4,-5);
// let sampleNum = Math.min(...array);
// alert(sampleNum);
// Math.min allows us to select the number with the lowest value


// ==============================
// let sampleNum = Math.max(0,1,2,3,4,5);
// let sampleNum = Math.max(...array);
// alert(sampleNum);
// Math.min allows us to select the number with the highest value


// ==============================
// let sampleNum = Math.round(Math.random() * 10);
// alert(sampleNum);
//proccess of getting random whole number Math.random * max number



// ==============================
// let computerChoices = ['Rock','Paper','Scissors'];

// function Play(humanChoice){

// 	let sampleNum = Math.round(Math.random() * 2);
// 	let computer = computerChoices[sampleNum];



// 	if(humanChoice == 'Rock'){
// 		alert("You have choosen rock!");

// 		// alert compuetr choice
// 		alert(`Computer Choose: ${computer}`);


// 		// computer choices posiblities result
// 		if(computer == 'Rock'){
// 			alert("Its a Tie");
// 		}else if (computer == 'Paper'){
// 			alert("You Lose!");
// 		}else if (computer == 'Scissors'){
// 			alert("You Win!");
// 		}

// 	}else if(humanChoice == 'Paper'){
// 		alert("You have choosen paper!");

// 		// alert compuetr choice
// 		alert(`Computer Choose: ${computer}`);


// 		// computer choices posiblities result
// 		if(computer == 'Rock'){
// 			alert("You Win!");
// 		}else if (computer == 'Paper'){
// 			alert("Its a tie!");
// 		}else if (computer == 'Scissors'){
// 			alert("You Lose!");
// 		}

// 	}else if(humanChoice == 'Scissors'){
// 		alert("You have choosen Scissors!");

// 		// alert compuetr choice
// 		alert(`Computer Choose: ${computer}`);


// 		// computer choices posiblities result
// 		if(computer == 'Rock'){
// 			alert("You Lose");
// 		}else if (computer == 'Paper'){
// 			alert("You Win!");
// 		}else if (computer == 'Scissors'){
// 			alert("Its a tie!");
// 		}
// 	}

	
	

// }



// new script


// let = computerChoices = new Array();

// computerChoices[0] = "rock.png";
// computerChoices[1] = "rock.png";
// computerChoices[2] = "rock.png";



function Play(humanChoice){

	const computerChoices = ['rock.png', 'paper.png', 'scissors.png'];

	// let sampleNum = Math.floor(Math.random()* 2);
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
	// let choices = document.getElementById("choices");




	if (humanChoice == 'paper' ) {
		paper.classList.add("paper-show");
		rock.classList.remove("rock-show");
		scissor.classList.remove("scissors-show");

		document.getElementById("rock").disabled = true;
		document.getElementById("scissors").disabled = true;

		input.classList.add("input-hide");


		if (computer == 'paper.png') {

			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;

			// alert(`${computer}`);

			tie.classList.add("tie-toggle");
		}
		else if(computer == 'rock.png'){
			document.getElementById('computer').innerHTML = `<img src = "${computer}">`;
			 
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




// document.querySelector('button').onclick = function() { 
// 	const imageCollection = ['1.jpg', '2.jpg', '3.jpg']; 
// 	const randomIndex = Math.floor(Math.random() * imageCollection.length); 
// 	document.querySelector('img').src = imageCollection[randomIndex]; 
// }



