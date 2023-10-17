var game = document.getElementById("game");
var ralph = document.getElementById("ralph");

ralph.style.left = "0px";

setInterval(function() {
  if (parseInt(ralph.style.left) + ralph.width >= game.width) {
    ralph.style.left = "0px";
  } else {
    ralph.style.left = parseInt(ralph.style.left) + 1 + "px";
  }
}, 100);
