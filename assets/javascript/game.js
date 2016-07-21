		function inviteFunction(){
		var yesplay = confirm("Would you like to play\ Mystic Mumbo?");
		var name =prompt("What is your name?");
		if (name!=null){
		document.getElementByID("greeting").innerHTML ="Hello" + name +"!"  "Let's play!";
		}	
		else{
			alert("Sayonara");
		}
		}
		var wins = 0;
		var loss = 0;
		var grem = 24; // alphabet 26 -2 starting point 4 guesses
		var userGuessed=[];
		var gcount=0;


		var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
		
		document onkeydown=function(event){
			alert("Ok, Let's get started! Choose a letter by clicking the letter on the keyboard."); 
		 	var userChoice = String.fromCharCode(event.keycode).toLowerCase();
		 	var compIndex = letters[Math.floor(Math.random()*letters.length)]; 
		 	var compChoice=letters[compIndex]; //*for loop - if (letters[i] = userChoice){}*/
		 	if userChoice = CompChoice(){
		 	document.getElementByID("greeting").innerHTML ="Congratulations" + name +"!"  "You Won!";
		 	wins++
		 	document.getElementByID("wins").innerHTML ="Wins: " wins;
		 	location.reload();
		 }
		 else{
		 	document.getElementByID("greeting").innerHTML ="Ahhhh" + name +" ,you lost."  "You need to focus!";
		 	userGuessed.push(userChoice);
		 	userGuessed.sort();
		 	grem--

		 	document.getElementByID("loss").innerHTML ="Losses: " loss;
		 	loss++
		 	gcount++
		 }


		 /* How I can put this outside the document onkeydown function and then
		 when user loses, would also like to add audio.- 
		 var responses =[
			{response: "Ahhhh -- too bad. Try again!", result:false}
			{response: "You need to meditate.", result:false}
			{response: "Breathe deeply, and focus.", result:false}
			{response: "Channel my thoughts", result:false}
			{response: "Feeling frustrated means you're expandinng your knowledge", result:false}
			{response: "You almost got it right, should've gone with your first choice.", result:false}
			{response: "Believe in yourself.", result:false}

			
		 ]	



