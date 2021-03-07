// global constants
const cluePauseTime = 333; // how long to pause in between clues
const nextClueWaitTime = 1000; // how long to wait before playing sequence
const AMOUNT_OF_BUTTONS = 5;
const GAME_LENGTH = 10;

// Global variables
var pattern = [];
var progress = 0;
var tonePlaying = false;
var gamePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000;     // how long to hold each clue's light/sound
var strikes = 0;             // Amount of strikes the player has 
var timeLeft = 180000;        // 3 min for ticking clock
var clockInterval;            




function startGame(){
  
  // Default values for starting a game
  progress = 0;
  strikes = 0;
  timeLeft = 180000;
  gamePlaying = true;
  clueHoldTime = 1000;
  
  // adjusting HTML content
  document.getElementById("strikes").innerHTML = "You have 0 strikes currently. Keep it up.";
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  document.getElementById("strikes").classList.remove("hidden");
  document.getElementById("timeLeft").classList.remove("hidden");
  
  // Make sure that if our pattern array is not empty, we want to empty it
  if(pattern.length !== 0){
    pattern = [];
  }
  
  // Mechanism for inserting random values into our array
  for(var i = 0; i < GAME_LENGTH; i++){
    pattern.push(Math.floor(Math.random() * AMOUNT_OF_BUTTONS) + 1);
  }
  
  // console.log(pattern);
  handleTime();
  playClueSequence();
  
}

function stopGame(){
  clearInterval(clockInterval);
  gamePlaying = false;
  // document.getElementById("strikes").innerHTML = "You have 0 strikes currently. Keep it up.";
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("strikes").classList.add("hidden");
  document.getElementById("timeLeft").classList.add("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function loseGame(){
  stopGame();
  alert("Game over. You lost.");
}

function winGame(){
  stopGame();
  alert("You won!");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 529
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; // set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    
  }
  clueHoldTime -= 15 // Decreases the clue hold time by 15 ms each time
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  console.log(guessCounter);  
  
  if(pattern[guessCounter] == btn){
    // Guess was correct
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }else{
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }  
  }else{
    strikes++;
    document.getElementById("strikes").innerHTML = "You have " +  strikes + " strikes currently. Keep it up.";
  }
  
  // Condition checking for strikes amount
  if(strikes > 2){
    document.getElementById("strikes").innerHTML = "You are out of lives. Try again next game.";
    
    setTimeout(function(){
      loseGame();
    }, 200)
  }
  
}



function handleTime(){
  if(gamePlaying){
    clockInterval = setInterval(function(){
      document.getElementById("timeLeft").innerHTML = "Your time left: " + timeLeft / 1000 + " seconds";
      if (timeLeft < 0){
        // If out of time, trigger clear interval and prompt the message for losing game
        clearInterval(clockInterval);
        loseGame();
      }else{
        // Else, we still have time left and should decrease it
        timeLeft -= 1000;
      }
      // And we want to do this every 1000 ms
    }, 1000);
    // console.log("Test message here");
  }
}
