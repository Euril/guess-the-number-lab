const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum 
  },
  getGuess: function(){
    let guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
    while (parseInt(guess) !== NaN && parseInt(guess) >= this.smallestNum && parseInt(guess) <= this.biggestNum)
    return guess
  }
}
console.log(game.getGuess())