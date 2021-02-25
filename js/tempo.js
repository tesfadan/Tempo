var firstTap = true;
var tempoArray = [];
var tapA;
var tapB;
var timeDiff;
var x = 0;
var count = 0;
var taps;
var bmp;
var kp = 0;
var mute = false;


function findAverage(array) {
  var average = 0;
  var y = 0;
  var length = array.length;
  while (y < length) {
    average += array[y];
    y = y + 1;
  }
  average /= length;
  average = Math.round(average);

  bmp = average;
}
var keyCount = 0;
function keyCounter() {


  var element = keyCount > 0 ? "" : "<h2 class='onBoardingMessage slideup' id='onBoardingKeep'>Keep Going</h2>";

  document.getElementById("onBoarding").innerHTML = element;
  ++keyCount;
}
function tapCall() {
  // This is the main function 
  //Play sound first thing
  var audio = document.getElementById("audio");
  if (!mute) {
    // play audio if not mute 
    audio.play();
  }


  if (x == 0) {
    x = 1;
    tapA = new Date();
  }

  else if (x == 1) {
    x = 0;
    firstTap = false;
    tapB = new Date();
  }

  if (firstTap) {
    // If first tap show second onboarding message 
    document.getElementById("onBoarding").innerHTML = "<h2 class='onBoardingMessage slideup' id='onBoardingKeep'>Keep Going</h2>";
  }

  else {
    if (x == 0) {
      timeDiff = tapB - tapA;
    }
    else {
      timeDiff = tapA - tapB;
    }
    timeDiff = 60 / (timeDiff / 1000);

    if (timeDiff < 500) {
      tempoArray[count] = timeDiff;
    }
    if (count < 2) {
      ++count;
    }
    else {
      count = 0;
    }
    findAverage(tempoArray);
    document.getElementById("count").innerHTML = "<h1 class='count slideupbig' id='tempoCount'>" + bmp + "</h1>"
  }
}
function reset() {
  firstTap = true;
  document.getElementById("onBoarding").innerHTML = "<h2 class='onBoardingMessage slideup' id='onBoardingStart'>Start pressing any key to get beats per minute</h2>";
  document.getElementById("count").innerHTML = "";
  count = 0;
  keyCount = 0;
  x = 0;
}
function tap() {
  tapCall();
  keyCounter();
}
function audioSwitch() {
  document.getElementById("audioIcon").src = !mute ? "icons/mute.svg" : "icons/speaker.svg";
  mute = !mute;
}