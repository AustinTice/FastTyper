window.addEventListener('load', init);
/*
   TODO:
    - Add a button to begin the game with that fits appropriately with the UI.

*/

// This is our random list of exactly 100 words
let randomWords = ["open", "tempt", "contend", "slim", "trick", "fairies", "treatment", "mist", "ink", "ugliest", "wide-eyed", "expansion", "opt", "smile", "rend", "sleepy", "mind", "transfer", "talented", "note", "rough", "limp", "idolize", "wild", "recognize", "carriage", "cure", "rest", "girl", "believe", "abate", "building", "overtake", "humorous", "outrageous", "optimize", "territory", "declare", "belong", "trashy", "brush", "awesome", "book", "face", "cloth", "heady", "contribute", "lonely", "fascinated", "utter", "plot", "fowl", "confess", "organize", "print", "sweltering", "empty", "rural", "mistake", "smell", "migrate", "ruthless", "offer", "sling", "surmise", "favour", "soup", "mean", "creepy", "build", "story", "dye", "ants", "monkey", "contrast", "salvage", "coal", "dispensable", "flawless", "wary", "jaded", "throne", "endorse", "gainful", "thinkable", "water", "meal", "snotty", "agreeable", "frightened", "hilarious", "aquatic", "uppity", "passenger", "overt", "nosy", "spread", "notebook", "even", "sticks"];

// Declaring global variables here - this will be used to later manipulate the HTML
let randomWord = document.getElementById("randomWord");
let inputTextBox = document.getElementById("textBox");
let gameStatus = document.getElementById("gameStatus");
let timeLeft = document.getElementById("timeLeft");
let scoreHTML = document.getElementById("score");

// Variables applicable to the gameplay.
let time = 5;
let score = 0;
let isPlaying;

// This function will generate a randomWord from our
// randomWords array and display it on the page
function getAWord(words){
  // Generate a random array index
 const randomIndex = Math.floor(Math.random() * words.length);

 //output the random word ot the HTML
 randomWord.innerHTML = words[randomIndex];
}

// Start match
function startMatch(){
  if(matchWords()){
    isPlaying = true;
    timeLeft = 6;
    getAWord(randomWords);
    inputTextBox.value = "";
    score++;
  }
  scoreHTML.innerHTML = score;
}

// Checks to see if the word that is input matches the given word.
function matchWords(){
  if(inputTextBox.value === randomWord.innerHTML){
    gameStatus.innerHTML = "Correct, bitch.";
    return true;
  }
  else{
    gameStatus.innerHTML = "";
    return false;
  }
}

function countdown(){
  // Make sure time has not run output
  if(time > 0){
    time--;
  } else if(time === 0){
    // Game is over
    isPlaying = false;
  }
  timeLeft.innerHTML = time;
}

// Check to see if the word that was input into the box is the correct word
function checkStatus(){
  if(!isPlaying && time === 0){
    gameStatus.innerHTML = "Game over bitch"
    score = 0;
  }
}



// Initialize game
function init(){
  // Display a random word from the array to begin the game.
  getAWord(randomWords);
  // start matching on word input into textbox
  inputTextBox.addEventListener("input", startMatch);
  // Call countdown every seconds
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}
