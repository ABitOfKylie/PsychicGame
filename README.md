PsychicGame  
Title: Mystic Madness

HTML/CSS/Javascript

Simple Guessing Game. User to guess a randomly generated letter in 24 guesses or less. Player notified if they have already guessed a letter. Guessed letters are updated, sorted and shown on the screen. Upon win/loss, accumulative wins and losses are retained while remaining variables are reset to start a new round.

CSS - gradients, wrap-round, floats,

Javascript  
document.onkeydown=function(event),
.toUpperCase(),  .toLowerCase(),
String.fromCharCode(event.keyCode),
.push(), .sort(), .includes(),
Math.floor(Math.random()),
getDocumentById, .innerHTML
'this'

Note to me: add animation upon win/loss.

CheckingINput
Alert to user if something other than a letter is chosen.
if((event.keyCode) <65 || (event.keyCode) >122){
	alert("Please choose a letter from A to Z.");
} or something like....
if(lettersOnly.test(userChoice)=false){   
	alert("Please choose a letter from A to Z.");
}
	
if(userChoice =(/^[a-zA-Z]+$/)){
	alert("Please choose a letter from A to Z.");
}
or if(userChoice !=([a-zA-Z])){

