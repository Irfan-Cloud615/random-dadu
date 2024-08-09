document.getElementById("rollButton").addEventListener("click", function () {
  var diceValue = Math.floor(Math.random() * 6) + 1;
  var diceValue2 = Math.floor(Math.random() * 6) + 1;
  var diceImage = document.getElementById("diceImage");
  var diceImage2 = document.getElementById("diceImage2");
  diceImage.src = "./asset/dadu" + diceValue + ".png";
  diceImage2.src = "./asset/dadu" + diceValue2 + ".png";
});
