// variables
var optButtons = document.getElementsByClassName("choice"); //ARRAY//
console.log(optButtons); //<%%%%|==========>test to see if it logs

var buttonOne = document.getElementById("one");
var buttonTwo = document.getElementById("two");
var buttonThree = document.getElementById("three");
var buttonFour = document.getElementById("four");
console.log(buttonOne); //<%%%%|==========> test to see if it logs the button


var startButton = document.getElementById("start");
startButton.addEventListener("click", () => {
  intervalId = setInterval(function () {
    timerShown.innerHTML = timer;
    timer--;
    if (timer <= 0){
      clearInterval(intervalId);
      displayTime();
      titleQ.textContent = "Congrats";
    }
    console.log(timer);
  }, 1000);
  showQuestion();
});


var timerShown = document.getElementsByClassName("timer")[0];
console.log(timerShown);

// <%%%%|==========> place for quiz title (questions)
let titleQ = document.querySelector("h2");

var timer = 75;
let currentQuestion = 0;
var questions = [
  {
    title: "Which method removes the last element from an array?",
    options: ["push()", "indexOf()", "pop()", "splice()"],
    answer: "pop()",
  },
  {
    title: "In a for loop, what does the 'i' stand for?",
    options: ["initialization", "indecency", "index", "item"],
    answer: "initialization",
  },
  {
    title: "Which of the following is an inline-element?",
    options: ["<header>", "<il", "<blockquote>", "<img>"],
    answer: "<img>",
  },
  {
    title: "Which of the following is a font-style value?",
    options: ["normal", "italic", "oblique", "all of the above"],
    answer: "all of the above",
  },
  {
    title: "The first item in an array has an index of ___",
    options: ["0", "1", "2", "3"],
    answer: "0",
  },
]; //<%%%%|==========>end of array of objects


// <%%%%|==========> Displays a question and its answer options
function showQuestion() {
  var quiz = questions[currentQuestion];

  titleQ.textContent = quiz.title;

  buttonOne.textContent = quiz.options[0];
  buttonTwo.textContent = quiz.options[1];
  buttonThree.textContent = quiz.options[2];
  buttonFour.textContent = quiz.options[3];

  // <%%%%|==========> Adds event listeners to the answer options buttons
  buttonOne.addEventListener("click", checkAnswer);
  buttonTwo.addEventListener("click", checkAnswer);
  buttonThree.addEventListener("click", checkAnswer);
  buttonFour.addEventListener("click", checkAnswer);
}

// <%%%%|==========> Checks if the selected answer is correct
function checkAnswer(event) {
  var selectedOption = event.target;
  var selectedAnswer = selectedOption.textContent;

  if (selectedAnswer === questions[currentQuestion].answer) {
    selectedOption.style.backgroundColor = "green"; //<%%%%|==========>CORRECT
    setTimeout(nextQuestion, 500); // <%%%%|==========> Moves to next question after 1sec
    timer -= 10;
  } else {
    selectedOption.style.backgroundColor = "red"; //<%%%%|==========>WRONG
    setTimeout(function () {
      selectedOption.style.backgroundColor = "";
      nextQuestion();
    }, 500); // <%%%%|==========> Move to next question after 1sec
    timer += 10;
  }
}

// <%%%%|==========> Loads the next question
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    // Reset button colors
    buttonOne.style.backgroundColor = "";
    buttonTwo.style.backgroundColor = "";
    buttonThree.style.backgroundColor = "";
    buttonFour.style.backgroundColor = "";

    // <%%%%|==========> Remove event listeners from answer options buttons
    buttonOne.removeEventListener("click", checkAnswer);
    buttonTwo.removeEventListener("click", checkAnswer);
    buttonThree.removeEventListener("click", checkAnswer);
    buttonFour.removeEventListener("click", checkAnswer);

    showQuestion();
  } else {
    titleQ.textContent = "Quiz Completed!";
    clearInterval(intervalId);
    displayTime(); //<%%%%|==========> Displays final score
    timerShown.textContent = '';
  }
}

// <%%%%|==========> Function to display final score
function displayTime() {
  titleQ.textContent += " Time: " + timer + "s";
  buttonOne.innerHTML = "";
  buttonTwo.innerHTML = "";
  buttonThree.innerHTML = "";
  buttonFour.innerHTML = "";
}


