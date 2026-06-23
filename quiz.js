//Program Name: Japanese Quiz
//Author: Lachlan
//Date: 24/06/2026
//Version: 1
//This quiz is about the japapnese language.

//sets the score and number of the question to 0 and the max can be changed if more questions are added.
let score = 0;
let questionNumber = 0;
let questionMax = 5;

//arrary, object question answer >:3
//Making questions and answers into an object array so I can easily add or 
//remove questions and answers and loop the questions
let quizArray = [
    {
        question: "How many writing systems is in the japanese language?",
        answer: "Three"
    },
    {
        question: "True or false, the japanese vowels are similar to the maori vowels?",
        answer: "True"
    },
    {
        question: "What does kowai mean?",
        answer: "Scary"
    },
    {
        question: "True or false, 'ka' makes a statement a question.",
        answer: "True"
    },
    {
        question: "How do you say one in japanese?",
        answer: "Ichi"
    },]

// Welcomes user
let name = prompt("Hello! What is you're name?");
alert("Welcome to the Japanese quiz " + name + "!");

//The fuction for the question, this is the whole question that will loop.
function question(result){
    var userAnswer = prompt(quizArray[questionNumber].question);
    if(userAnswer == quizArray[questionNumber].answer){
        alert("Congrats.");
        score++
        questionNumber++
    }else{
        alert("Wrong, the answer was " + quizArray[questionNumber].answer);
        questionNumber++
    }
}
//For loop ask user questions
//Gives the user the question and loops it till question number is the same as question max
//uses the above mentioned function as the only thing inside
for(let questionNumber = 0; questionNumber < questionMax; questionNumber++){
var result = question(result);
}
//rating the quiz & giving score results, either as a % or a _/_
var rating = prompt("What was this quiz like on a scale of 1 to 10?");
//giving results
//sets the scoring to be a percentage
    var scorePercentage = score/questionMax * 100
alert(name + " rated this quiz " + rating + " and got a score of " + scorePercentage + "%");
println(name + " rated this quiz " + rating + " and got a score of " + scorePercentage + "%");