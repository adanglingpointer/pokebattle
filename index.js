function myFunction() {
  // var randomNumber = Math.floor(Math.random() * 4) + 1;
  // var randomEnemyCard = "images/0" + randomNumber;
  // var enemyCardImg = randomEnemyCard + ".png";
  // var image1 = document.querySelector(".enemyCardi");
  // image1.setAttribute("src", enemyCardImg);
var randomNumber1 = Math.floor(Math.random() * 4) + 1;
var randomNumber2 = Math.floor(Math.random() * 4) + 1;
var randomEnemyCard = document.querySelector(".enemyCardi").setAttribute("src", ("images/0" + randomNumber1 + ".png" ) );
var randomPlayerCard = document.querySelector(".playerCardi").setAttribute("src", ("images/0" + randomNumber2 + ".png" ) );

if (randomNumber1 > randomNumber2) {
  document.querySelector(".resultsp").innerHTML = "Winner: The Enemy!"
} else if (randomNumber1 < randomNumber2) {
  document.querySelector(".resultsp").innerHTML = "Winner: The Player!"
} else if (randomNumber1 == randomNumber2) {
  document.querySelector(".resultsp").innerHTML = "Winner: A Tie!"
}

  // alert(randomNumber);
}
