// Variables grabbed from html ids 
var questionScreen = document.getElementById("questionScreen");
var resultBox = document.getElementById("resultBox");
var enterInitials = document.getElementById("enterInitials");
var highScoreScreen = document.getElementById("highScoreScreen");
var startOver = document.getElementById("startOver");
var highScoreHeader = document.getElementById("high-scores");

// Other useful variables
var scoreTime = 75;
var currentQuestion = 0;
var finalScore = 0;
var highScore = 0;

// Array of questions (objects)
var questions = [
  {
    question: "Commonly used data types do NOT include: ", 
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctChoice: "alerts"
  },
  {
    question: "The condition in an if/else statement is enclosed within ________.", 
    choices: ["curly brackets", "parentheses", "quotation marks", "square brackets"],
    correctChoice: "curly brackets"
  },
  {
    question: "Arrays in Javascript can be used to store ________. ", 
    choices: ["numbers and strings", "booleans", "other arrays", "all of the above"],
    correctChoice: "all of the above"
  },
  {
    question: "String values must be enclosed within ________ when being assigned to variables", 
    choices: ["commas", "curly brackets", "quotation marks", "parentheses"],
    correctChoice: "quotation marks"
  },
  {
    question: "A very useful tool during development and debugging for printing content to the debugger is ________.", 
    choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
    correctChoice: "console.log"
  } ];

  // Timer function
  function goGamego() {
    var timerEl = document.getElementById("timer");
    timerEl.textContent = scoreTime;
    var countDownTimer = setInterval(function() {
      scoreTime--;
      timerEl.textContent = scoreTime;
      if (scoreTime === 0 || currentQuestion === questions.length) {
        timerEl.textContent = "";
        clearInterval(countDownTimer);
        }
    }, 1000);
  }
      
  // Presents user with first question
    function displayQuestion(question) {
      
      var questionEl = document.createElement("h5");
      questionEl.textContent = question.question;
      questionScreen.appendChild(questionEl);
      for (var i=0; i < 4; i++) {
        var choiceButtonEl = document.createElement("button"); 
        choiceButtonEl.textContent = question.choices[i];
        choiceButtonEl.classList.add("btn", "btn-primary", "button");
        questionScreen.appendChild(choiceButtonEl);
      }
    }

  // Event listener that handles the "Start Quiz" button click. Makes the start screen disappear and starts the timer.
  document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("startScreen").setAttribute("style", "display: none");
    goGamego();
    displayQuestion(questions[currentQuestion]);
  })

  // Handles user's clicked answer
  document.querySelector("#questionScreen").addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      var selectedAnswer = event.target.textContent;
      var correctChoice = questions[currentQuestion].correctChoice;
        if (selectedAnswer === correctChoice) {
          resultBox = document.createElement("p");
          resultBox.textContent = "Correct";
          resultBox.classList.add("resultStyle");
          questionScreen.appendChild(resultBox);
        }
        else {
          resultBox = document.createElement("p");
          resultBox.textContent = "Incorrect";
          resultBox.classList.add("resultStyle");
          questionScreen.appendChild(resultBox);
          scoreTime = scoreTime -5;
        }
        questionScreen.innerHTML = "";
        currentQuestion++;
         if (currentQuestion === questions.length) {
          endQuiz();
       } else {
          displayQuestion(questions[currentQuestion]);
       }
      }
   })
  
  //Ends the question portion of the quiz and moves on to score screens
   function endQuiz() {
     questionScreen.innerHTML = "";
     enterInitials.setAttribute("style", "display: block");
     finalScore = document.getElementById("finalScore");
     if (scoreTime !== null) {
     finalScore.textContent = scoreTime; 
   }
   
  //When the user clicks "Submit" after adding their initials, the initials and score are stored and the current high score is displayed.
  document.getElementById("initialButton").addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    storeScore();
    enterInitials.innerHTML = "";
    highScoreScreen.setAttribute("style", "display: block");    
    }
  });

  score.textContent = highScore;

  //When user clicks "Start Over", the questions and timer start again.
  document.getElementById("startOverBtn").addEventListener("click", function() {
    goGamego();
    displayQuestion(question);
  });
}
  // Local storage for high scores
  
  function storeScore() {
  if (highScore !== null) {
        localStorage.setItem("highScore", finalScore); 
    }
    else if (finalScore > highScore) {
        localStorage.setItam("highScore", finalScore);
    }
    else{
    localStorage.setItem("highScore", highScore);
    }
  }
  

