(function(){
  var target = document.getElementById("target");
  var result = document.getElementById("result");
  var start = new Date().getTime();
  var sound = new Audio("../sound/water-drop.wav");
  sound.volume = "0.2";
  var highScore = document.getElementById("high-score");
  var currentHighScore = 99999;

  target.addEventListener("click", targetDisappear);

  function targetAppear(){
    start = new Date().getTime();
    console.log(start);
    var randomDimension = (Math.random() * 200) + 100;

    target.className = "appear";

    if (Math.random() > 0.5) {
      target.style.borderRadius = "50%";
    } else {
      target.style.borderRadius = "0%";
    }
    target.style.width = randomDimension;
    target.style.height = randomDimension;
    target.style.display = "block";
    target.style.backgroundColor = getRandomColor();
    target.style.top = Math.random() * 70 + "vh";
    target.style.left = Math.random() * 80 + "vw";
  }

  function targetDisappear(){
    var end = new Date().getTime();
    var time = (end - start) / 1000;
    sound.play();
    target.className = "disappear";
    setTimeout(targetAppear, Math.random() * 2000);
    result.innerHTML = time + "s";
    checkHighScore(time, currentHighScore);
  }

  function checkHighScore(time, currentScore) {
    if (time < currentScore){
      highScore.innerHTML = time;
      console.log(time, currentScore);
      currentHighScore = time;
    }
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }




})()
