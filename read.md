SO there are two bugs at the moment that I at least noticed

Best case scenario the code runs through no problem bonus 1 and bonus 2 work as well

bugs!
1.
tldr: the getInput() if statement isn't working correctly

parseInt for the prompts turns the prompt which always returns a string into a number
BUT 
when the input is NaN so like a word or w/e I thought it should return NaN which it kind of does but in the logic for the if statements to check if that is the case it ends up allowing the NaN and running through it

especially for function getInput() which is where the user gets asked for biggest and smallest to set the framework for the game.

if you return a string there it turns that into a NaN but for some reason (NaN does not equal NaN) as in apperently NaN is usually different from Nan??????????????? 

so if you input NaN it will still run getInput() and set up a game which will not work even though it is runable



2. tldr: the if else part of getGuesses has an unusual bug, maybe because recursive?
   
in getGuesses() where the user inputs the guess if the user inputs NaN or something beyond the games framework in terms of big and small num it will return invalid input and run the function again.
BUT
if the user than guessess secretNum in the immediate loop it won't accept that as being correct
so if guess fails the if statement it should run again basically but if the else part iteration guesses the correct num it does not accept that saying failure but then proceeds to correctly pass the if statement and runs the rest of the code result in the correct guess being treated as not a correct one
if the user inputs that same correct answer again it then properly runs