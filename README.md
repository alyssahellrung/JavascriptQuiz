Homework 04: Javascript Quiz

I developed the html using Bootstrap. The html is made up of cards, mainly, and is responsive.

The html starts with a row at the top containing a high score link and a timer as well as a start screen, some empty divs, and an "enter initials" card as well as a high score display card. The latter two cards are hidden at first.

I added some styling for things like button color, etc., in style.css.

When the user opens the page, they are presented with some instructions and a "Start Quiz" button. 

When the user clicks the "Start Quiz" button, the start screen disappears and the first question is displayed with options for the answers. 

When the user clicks on an answer button, they are given a message below the answers that tells them if they were correct or incorrect. 

If they were incorrect, the timer loses 5 seconds.

Whether the user was correct or incorrect, the question they just answered clears and they are presented with a new question. 

When the user has answered five questions OR if the time runs out, the game is over. The user is presented with a card where they can their score (which is simply the amount of seconds that were left on the clock when they finished the questions OR a zero if the clock ran out). The user is also asked to enter their initials. They can then click "Submit".

Once the user submits their initials, they see an end screen that displays the high score on the game thus far, along with the initials of the user who achieved that high score. There are two buttons here: "Start Over" starts the game over from the first question. "Clear high scores" clears the high scores.

The user can also access the high score by clicking on "High Score" on the start screen.

All of this was done using vanilla Javascript. I assigned variables, created an array of question/choices/answer objects, created a timer function and a function that displayed the questions, used event listeners to handle the various click events, and handled local storage for the high scores.