// variables
var optButtons = document.getElementsByClassName("choice"); //ARRAY//
var oneBtn = document.body.

console.log(oneBtn);

console.log(optButtons);

let titleQ = document.getElementsByClassName("header");
console.log(titleQ);

var timer = 0;
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


let playQuiz = function () {

}



// let playQuiz = function() {
//     for (let Q = 0; Q < questions.length; Q++) {
//         titleQ.innerHTML = + questions[Q].title;
//         optButtons.innerHTML = + questions[].options;

//     }
// };
// playQuiz();