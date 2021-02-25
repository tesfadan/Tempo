function log(x) {
  console.log(x)
}
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

function findAverage(array) {
  var average = 0;
  var y = 0;
  // log(array);
  var length = array.length;
  // log("given array length: " + length);

  while (y < length) {
    average += array[y];
    y = y + 1;
  }
  average /= length;
  average = Math.round(average);
  log("Average is: " + average);

  bmp = average;
}

var mute = false;
function audioControl() {
  if (mute == true) {
    document.getElementById("audioIcon").src = "icons/speaker.svg";
    mute = false;
  }
  else {
    document.getElementById("audioIcon").src = "icons/mute.svg";
    mute = true;
  }
}

var keyCount = 0;
function keyCounter() {
  if (keyCount > 0) {
    document.getElementById("onBoarding").innerHTML = "";
  }
  else {
    document.getElementById("onBoarding").innerHTML = "<h2 class='onBoardingMessage slideup' id='onBoardingKeep'>Keep Going</h2>";
  }
  ++keyCount;
}

function tapped() {
  console.log("TAP MEE")

  ///SOUND COMES FIRTS FOR FASTER UX
  var audio = document.getElementById("audio");

  if (mute == false) {
    audio.play();
  }

  if (firstTap === true) {
    document.getElementById("onBoarding").innerHTML = "<h2 class='onBoardingMessage slideup' id='onBoardingKeep'>Keep Going</h2>";
  }
  if (x == 0) {
    // log("Tap0");
    x = 1;
    tapA = new Date();
  }


  else if (x == 1) {
    // log("Tap1");
    x = 0;
    firstTap = false;

    tapB = new Date();

  }


  if (firstTap == false) {

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
      count += 1;
    }
    else {
      count = 0;
    }

    findAverage(tempoArray);
    // document.getElementById("tempoCount").innerHTML = bmp;
    document.getElementById("main").innerHTML = "<h1 class='count slideupbig' id='tempoCount'>" + bmp + "</h1>"

  }
  else {
    console.log("WHHUT")
  }
}
function resetX() {
  firstTap = true;
  document.getElementById("onBoarding").innerHTML = "<h2 class='onBoardingMessage slideup' id='onBoardingStart'>Start pressing any key to get beats per minute</h2>";
  document.getElementById("main").innerHTML = "";
  console.log("RESET X");
  count = 0;
  keyCount = 0;
  x = 0;
}