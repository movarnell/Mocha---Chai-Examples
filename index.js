let array1 = [57, 45, 33, 23, 46];

let arrayTest = [1, 2, 3, 4, 5];

function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

class CreateDeck {
  constructor() {
    let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
    let ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];
    let deck = [];

    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < ranks.length; x++) {
        let card = {
          suit: suits[i],
          rank: ranks[x],
          value: x,
        };
        deck.push(card);
      }
    }
    deck.sort(() => Math.random() - 0.5);
    //console.log(deck);
    return deck;
  }
}

let deck = new CreateDeck();
console.log(deck);

function stringLength(string) {
  return string.length;
}
