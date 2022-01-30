const game = {
  title: 'Guess the Number!',
  biggestNum: null,
  smallestNum: null,
  secretNum: null,
  guess: null, //had to create guess to store the value of getGuess
  prevGuesses: [],
  play: function() {
          //👇 bonus part 2
        game.getInput()
    this.secretNum = Math.floor(Math.random() * 
      (game.biggestNum - game.smallestNum + 1)) + game.smallestNum

      while(game.getGuess() !== this.secretNum){
        //this.playerGuess = game.getGuess()
        game.prevGuesses.push(game.guess)
        //this.playerGuess = this.getGuess()
        //game.prevGuesses.push(this.playerGuess)
        game.render()
      }
      //console.log(game.getGuess(game.guess))
      return window.alert(`Congrats! You guessed the number in ${this.prevGuesses.length} retries`)
    },
  
    getGuess: function(){
      //weird bug if a user enters a NaN than the right answer it seems like it accepts it but doesn't actually check if it == secrectNum
      //solved the nan issues but thes bug still appears during the second if statement
      game.guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
      console.log(game.guess)
      console.log (typeof game.guess)
      if (isNaN(game.guess)){
        window.alert(`This is not a number`)
        this.getGuess()
      }
      /*
      if (game.guess >= this.smallestNum && game.guess <= this.biggestNum){
      return game.guess
    } else{
      window.alert(`Not a valid input`)
      this.getGuess()
    }*/
      while(game.guess < this.smallestNum || game.guess > this.biggestNum){
        window.alert(`Not a valid input, outside game boundary`)
        this.getGuess()
      }
      return game.guess
    },
//window, prompt is a v8 engine tool so using node trips up like what is this interesting
    getInput: function(){
      game.biggestNum = parseInt(window.prompt(`Set the biggest number possible`))
      game.smallestNum = parseInt(window.prompt(`Set the smallest number possible`))
      while (isNaN(game.biggestNum) || isNaN(game.smallestNum)){
        window.alert(`Input a number for the boundaries`)
        this.getInput()
      }
      while(game.biggestNum < game.smallestNum){
        window.alert(`Game Boundary is out of order, try again`)
        game.getInput()
      }
      return game.biggestNum, game.smallestNum
      /*{
        return console.log(`is a number`)
      }else{
        window.alert(`Not a valid input try again`)
        game.getInput()
      }*/
    },
    
    //saw a wierd bug with render trying to recreate but haven't been able to, where the wrong alart popped up
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