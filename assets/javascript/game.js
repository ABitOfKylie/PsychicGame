		
		var wins = 0;
		var loss = 0;
		var grem = 24; // alphabet 26 -2 starting point 4 guesses
		var userGuessed=[];
		var gcount=0;
		var response =["Ahhhh -- too bad. Try again!","You need to meditate.", "Breathe deeply, and focus.", "Channel the letter gods.", "Feeling frustrated means you're expanding your knowledge","You almost got it right, should've gone with your first choice.", "Believe in yourself."];
		var lettersOnly = /[a-zA-Z]/; 


		var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		var compChoice = letters[Math.floor(Math.random()*letters.length)]; 
		console.log(compChoice);
		

		function inviteFunction(){
			var yesplay = confirm("Would you like to play\ Mystic Mumbo?");
			var name = prompt("What is your name?");

			if (name != "") {
				document.getElementById("greeting").innerHTML = "Hello " + name + "! " + "Let's play!";
				alert("Ok, Let's get started! Choose a letter by clicking the letter on the keyboard."); 
			} else{
				alert("No name -Sayonara");
			}
		};

		// function newCompChoice(){
		// 	var compChoice = letters[Math.floor(Math.random()*letters.length)]; 
		// 	console.log(compChoice);
		// 	return compChoice;

		// }

		function randomResp(){
			return response[Math.floor(Math.random() * response.length)];

		};


		function reset(){
				userGuessed =[];
				grem = 24;
				gcount=0;
				// newCompChoice();
				
			};


	

		document.onkeydown=function(event){
			if((event.keyCode) <65 || (event.keyCode) >122){
			alert("Please choose a letter from A to Z.");
		}

			
		 	var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
			
 	// 		if(lettersOnly.test(userChoice)=false){   
		// 	alert("Please choose a letter from A to Z.");
		// }

			
			if (userGuessed.includes(userChoice)){
			 alert("You already guessed that letter");
			}
			

		 else if(userChoice != compChoice && grem>2) {
		 	
		 	userGuessed.push(userChoice);
		 	userGuessed.sort();
		 	grem--
		 		//random messages
		 		document.getElementById("greeting").innerHTML =randomResp();
		 		document.getElementById("grem").innerHTML =grem;
		 		document.getElementById("gcount").innerHTML ="You guessed: " +[userGuessed];
		 		document.getElementById("loss").innerHTML ="Losses: " +loss;
		 		document.getElementById("test").innerHTML =randomResp();

		 	}
		 	// player loses
		 	else if (userChoice != compChoice && grem<3){
		 		loss++	
		 		document.getElementById("greeting").innerHTML = "Oh no! "+ name + "You lost  Try Again";
		 		document.getElementById("gcount").innerHTML ="You blew it!";
				console.log("The player just lost");
		 		// reset();
		 	}
	
		 // player wins
		  else{ 
		 	document.getElementById("greeting").innerHTML ="Congratulations" + name +"!" + "You must be psychic!";
		 	wins++
		 	document.getElementById("wins").innerHTML ="Wins: "+ wins;
		 	document.getElementById("gcount").innerHTML ="Way to go! You aced it!";
		 	document.getElementById("test").innerHTML ="";

			console.log("The player just won");
		 	// reset();
			}
		};

			//location.reload(); //lose accum losses/wins

/*			

		reset function 4 new random compChoice but made available globally
		   
		CheckingINput
		line 55:
			// if(userChoice =(/^[a-zA-Z]+$/)){
			// alert("Please choose a letter from A to Z.");

			// }
			or if(userChoice !=([a-zA-Z])){


*/


