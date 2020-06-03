console.log("Up and Running");
//create variables (object) to store each card
var cards = [
  {
  card: "queen",
  suit: "Diamonds",
  img:  "images/back.png"
},
{
  card: "queen",
  suit: "Hearts",
  img: "images/back.png"
},
{
  card: "King",
  suit: "Diamonds",
  img: "images/back.png"
},
{
  card: "King",
  suit: "Hearts",
  img:  "images/back.png"
}
];

//create an array to store the cards currently in play
var cardsInPlay = [];

//create a variable to show the first card the user flips
var cardOne = cards[0];

//add card to the array that are in cardsInPlay
cardsInPlay.push(cardOne);

//display what card the user flipped
console.log("User Flipped " + cardOne);

//create a variable to show the second card the user flips
var cardTwo = cards[2];

//add card to the array that are in cardsInPlay
cardsInPlay.push(cardTwo);

//display what the user Flipped
console.log("User Flipped " + cardTwo);

//check to see if two cards have been chosen
if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("It's a match!");
} else {
  alert("Try again");
  }
};

//create a function showing the user flipping a cards
var flipCard = function () {

//get the data of the card that was just flipped
cardID = this.getAttribute("dataId");

//display the card that was Flipped
console.log(cardID);

//add card to array of cards in cardsInPlay
cardsInPlay.push(cards[cardID].card);

//display the cards image
this.setAttrbute('src', cards[cardID].cardimage)

if (cardsInPlay.length === 2) {
  checkForMatch();
//empty the cards in cardsInPlay
  cardsInPlay = [];
}
};

//function to create the BOARD
var createBoard = function () {
  for (var i = 0; i < cards.length; i++); {
  var cardElement = document.createElement("img");
  cardElement.setAttribute("src" , "images/back.png");
  cardElement.setAttribute("dataId", i);
  cardElement.addEventListener("click", flipCard);
  var document.getElementById("game-board").appendChild();
  console.log(flipCard);
}
};

createBoard();
