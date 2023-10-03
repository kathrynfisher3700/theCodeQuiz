// variables
var optButtons = document.getElementsByClassName("choice"); //ARRAY//
console.log(optButtons);//test to see if it logs

var buttonOne = document.getElementById("one");
var buttonTwo = document.getElementById("two");
var buttonThree = document.getElementById("three");
var buttonFour = document.getElementById("four");
console.log(buttonOne); //test to see if it logs the button


let titleQ = document.querySelector("h2"); //place for quiz question
console.log(titleQ);

var timer = 0;
let currentQuestion = 0;
var questions = [
{
    title:"Which method removes the last element from an array?",
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
] //end of array of objects


var one = buttonOne.addEventListener('click', () => {
});
var two = buttonTwo.addEventListener('click', () => {
});
var three = buttonThree.addEventListener('click', () => {
});
var four = buttonFour.addEventListener('click', () => {
});


let playQuiz = function() {
        titleQ.innerHTML = questions[0].title;
        buttonOne.innerHTML = questions[0].options[0];
        buttonTwo.innerHTML = questions[0].options[1];
        buttonThree.innerHTML = questions[0].options[2];
        buttonFour.innerHTML = questions[0].options[3];
    if (three){
        console.log("correct!");
    }
}

playQuiz();

function handleAnswer(selectedButton) {
    const selectedAnswer = selectedButton.innerHTML;
    const currentQuestionObj = questions[currentQuestion];
  
    if (selectedAnswer === currentQuestionObj.answer) {
      console.log("Correct!");
    } else {
      console.log("Incorrect!");
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      // If there are more questions, move to the next question
      playQuiz();
    } else {
      // Quiz has ended, do something (e.g., show results)
      console.log("Quiz ended");
    }
  }