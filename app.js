const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  guess: null,
  prevGuesses: [],
  play: function() {
          //👇 bonus part 2
        // game.biggestNum = parseInt(window.prompt(`Set the biggest number possible`))
        // game.smallestNum = parseInt(window.prompt(`Set the smallest number possible`))
        game.getInput()

    // this.secretNum = Math.floor(Math.random() * 
    //   (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    console.log(game.biggestNum, game.smallestNum)
    this.secretNum = Math.floor(Math.random() * 
      (game.biggestNum - game.smallestNum + 1)) + game.smallestNum

      //game.getGuess(game.guess)
      //I don't understand how to get the value of game.getGuess() without invoking it to run again in the while loop
      while(game.getGuess() !== this.secretNum){
        //this.playerGuess = game.getGuess()
        game.prevGuesses.push(game.guess)
        //this.playerGuess = this.getGuess()
        //game.prevGuesses.push(this.playerGuess)
        game.render()
        
        //game.getGuess()
      }
      console.log(game.prevGuesses)
      //console.log(game.getGuess(game.guess))
      return window.alert(`Congrats! You guessed the number in ${this.prevGuesses.length} retries`)
    },
  
    getGuess: function(){
      //let guess

      //weird bug if a user enters a NaN than the right answer it seems like it accepts it but doesn't actually check if it == secrectNum
      game.guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum} answer ${this.secretNum}`))
      console.log(game.guess)
      console.log (typeof game.guess)
      
      if (game.guess !== NaN && game.guess >= this.smallestNum && game.guess <= this.biggestNum){
      //right here insert the push method maybe?
      return game.guess
    } else{
      window.alert(`Not a valid input`)
      this.getGuess()
    }
    },

    getInput: function(){
      game.biggestNum = Number(window.prompt(`Set the biggest number possible`))
      game.smallestNum = Number(window.prompt(`Set the smallest number possible`))
      console.log(typeof game.biggestNum)
      if (typeof game.biggestNum !== Number || typeof game.smallestNum !== Number){
        return console.log(`is a number`)
      }else{
        window.alert(`Not a valid input try again`)
        game.getInput()
      }
      
    },
    //⚠️💡 i think i can add bonus 1 in the render function just inbetween the return and the if part setting it the biggest or smallest based on if it triggers the if statement or not
    render: function(){
      if (game.prevGuesses.slice(-1) > this.secretNum){
        this.biggestNum = game.prevGuesses.slice(-1)
        return window.alert(`Your guess is too high Previous guesses: ${this.prevGuesses.join(',')}`)
      } else {
        this.smallestNum = game.prevGuesses.slice(-1)
        return window.alert(`Your guess is too low Previous guesses: ${this.prevGuesses.join(',')}`)
      }
    }
  }
game.play()