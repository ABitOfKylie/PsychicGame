		var wins = 0; //accumlative wins
		var loss = 0; //accumlative losses
		var grem = 24; // guesses remaining - total guesses = 24
		var userGuessed = [];
		var guessList = 0;
		var response = ["Ahhhh -- too bad. Try again!", "You need to meditate.", "Breathe deeply, and focus.", "Channel the letter gods.", "Feeling frustrated means you're expanding your knowledge", "You almost got it right, should've gone with your first choice.", "Believe in yourself."];
		var lettersOnly = /[a-zA-Z]/;
		var name = "";
		var compChoice = null;


		var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

		// Get a random CompChoice letter and assign it based on a random generator
		var updateCompChoice = function() {
		    this.compChoice = this.letters[Math.floor(Math.random() * this.letters.length)];
		    console.log("Computer's Choice has been updated." + compChoice);

		};

		function inviteFunction() {
		    var yesplay = confirm("Would you like to play\ Mystic Madness?");
		    name = prompt("What is your name?");

		    if (name != "") {
		        document.getElementById("greeting").innerHTML = "<br />" + "Hello " + name.toUpperCase() + "! " + "<br />" + "Let's play!";
		        alert("Ok, Let's get started! Choose a letter by clicking the letter on the keyboard.");
		        updateCompChoice();
		        console.log("Computer has chosen:" + compChoice);
		        document.getElementById("grem").innerHTML = "Guesses left= " + (grem);

		        document.getElementById("test").innerHTML = "Hello " + name.toUpperCase() + "! " + "<br />" + "Please choose a letter.";


		    } else {
		        alert("No name -Sayonara");
		    }
		};

		function randomResp() {
		    return response[Math.floor(Math.random() * response.length)];

		};

		var reset = function() {
		    userGuessed = [];
		    grem = 24;
		    guessList = 0;
		    updateCompChoice();
		    console.log("The game has been reset. New CompChoice is:" + compChoice);
		    document.getElementById("test").innerHTML = "Now, I'm thinking of a new letter. Press any key to start a new game";


		};

		document.onkeydown = function(event) {
		    //convert keystroke to lowercase letter, check if already guessed, then push to userGuessed array
		    var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
		    console.log("The user chose:" + userChoice)
		    if (userGuessed.includes(userChoice)) {
		        alert("You already guessed that letter");
		    } else if (userChoice != compChoice && grem > 1) {

		        userGuessed.push(userChoice);
		        userGuessed.sort();
		        grem--
		        //random response chosen from response array
		        document.getElementById("greeting").innerHTML = randomResp();
		        document.getElementById("grem").innerHTML = "Guesses left= " + grem;
		        document.getElementById("guessList").innerHTML = "You guessed: " + "<br />" + [userGuessed];
		        document.getElementById("loss").innerHTML = "Losses: " + loss;
		        document.getElementById("test").innerHTML = randomResp();


		        // if player loses
		    } else if (userChoice != compChoice && grem <= 1) {
		        loss++
		        alert("Dagnammit! You lost!");
		        console.log("The player just lost" + "Number of losses" + loss);

		        document.getElementById("greeting").innerHTML = "Oh no! " + "<br />" + name + "<br />" + "You lost" + "<br />" + "Try Again!";
		        document.getElementById("guessList").innerHTML = "You blew it!";
		        document.getElementById("loss").innerHTML = "Losses: " + loss;
		        document.getElementById("grem").innerHTML = "Guesses left= 0";


		        reset();
		        console.log("The game has been reset");
		    }

		    // if player wins
		    else {
		        document.getElementById("greeting").innerHTML = "Congratulations" + "<br />" + name.toUpperCase() + "!" + "<br />" + "You must be psychic!";
		        wins++
		        alert("Wowza! You won!");

		        document.getElementById("wins").innerHTML = "Wins: " + wins;
		        document.getElementById("guessList").innerHTML = "Way to go!" + "<br />" + "You aced it!";
		        document.getElementById("test").innerHTML = "Wowza! You won!";

		        console.log("The player just won");
		        reset();
		    }
		};
