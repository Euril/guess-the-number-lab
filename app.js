const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: 5,
  prevGuesses: [],
  play: function() {
    //this.secretNum = Math.floor(Math.random() * 
      //(this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      
      while(game.getGuess(game.guess) !== this.secretNum){
        //game.prevGuesses.push(game.getGuess(game.guess))
        game.prevGuesses.push(game.getGuess(game.guess))
        game.render()
        //game.getGuess()
      }
      console.log(game.prevGuesses)
      //console.log(game.getGuess(game.guess))
      return window.alert(`Congrats! You guessed the number in ${this.prevGuesses.length} retries`)
    },
  
    getGuess: function(){
    
      let guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
      
      if (guess !== NaN && guess >= this.smallestNum && guess <= this.biggestNum){
      return guess
    }
    },
    render: function(){
      if (game.prevGuesses.slice(-1) > this.secretNum){
        return window.alert(`Your guess is too high Previous guesses: ${this.prevGuesses.join(',')}`)
      } else {
        return window.alert(`Your guess is too low Previous guesses: ${this.prevGuesses.join(',')}`)
      }
    }
  }
game.play()