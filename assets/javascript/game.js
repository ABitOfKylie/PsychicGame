		function inviteFunction(){
		var yesplay = confirm("Would you like to play\ Mystic Mumbo?");
		var name =prompt("What is your name?");
		if (name!=""){
		document.getElementById("greeting").innerHTML ="Hello " + name + "! " + "Let's play!";
		alert("Ok, Let's get started! Choose a letter by clicking the letter on the keyboard."); 
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
		var compChoice = letters[Math.floor(Math.random()*letters.length)]; 

		document.onkeydown=function(event){
			
			
			
		 	var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
			
		 if(userChoice != compChoice){
		 	
		 
		 	document.getElementById("greeting").innerHTML ="Ahhhh" + name +" ,you lost." + "You need to focus!";
		 	userGuessed.push(userChoice);
		 	userGuessed.sort();
		 	grem--
		 	if (grem===0){
		 		loss++	
		 	}
		 	
		 	gcount++
		 	document.getElementById("loss").innerHTML ="Losses: " +loss;
		 	document.getElementById("greeting").innerHTML ="Ahhhh" + name +" ,you lost." + "You need to focus!";

		 }
		  else{ 
		 	document.getElementById("greeting").innerHTML ="Congratulations" + name +"!" + "You Won!";
		 	wins++
		 	document.getElementById("wins").innerHTML ="Wins: "+ wins;
		 	location.reload(); //hopefully refreshes the page
		 }
		}
/*			keepgoingFunction(){ while (gcount<25) alternatively a For loop{
			for(var i = 0; userGuessed.length < 25 && i < numbers.length; i++

		   CheckingINput
		 	if userChoice != with a letter in the alphabet or in letters[]{
			alert("Please choose a letter from A to Z. I don't do symbols.");
			}
			else{ 

		 	}

		 How I can put this outside the document onkeydown function and then
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
*/


