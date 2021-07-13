// Option Section to display until the game has started

const optionSection = document.getElementById("option-section-id");

// Game Section to not display until options sections have been chosen

const gameSection = document.getElementById("game-section-id");
gameSection.style.display = "none";

// Game Questions, Timer and Question Amount Variables

let mathQuestions = "addition";
let quizTimer = 300000;
let questionAmount = 8;

// Maths Questions click functions

// Addition Maths Questions click function

document.getElementById("addition-questions").addEventListener("click", function(){ 
    mathQuestions = "addition";
    console.log(mathQuestions);
});

// Subtraction Maths Questions click function

document.getElementById("subtraction-questions").addEventListener("click", function(){ 
    mathQuestions = "subtraction";
    console.log(mathQuestions);
});

// Multiplcation Maths Questions click function

document.getElementById("multiplication-questions").addEventListener("click", function(){ 
    mathQuestions = "multiplication";
    console.log(mathQuestions);
});

// Division Maths Questions click function

document.getElementById("division-questions").addEventListener("click", function(){ 
    mathQuestions = "division";
    console.log(mathQuestions);
});

// Multi Maths Questions click function (to display all types of questions)

document.getElementById("multi-questions").addEventListener("click", function(){ 
    mathQuestions = "all";
    console.log(mathQuestions);
});

// Quiz Timer

// One Minute Timer click function

document.getElementById("one-minue").addEventListener("click", function(){ 
    quizTimer = 60000;
    console.log(quizTimer);
});

// Three Minutes Timer click function

document.getElementById("three-minutes").addEventListener("click", function(){ 
    quizTimer = 180000;
    console.log(quizTimer);
});

// Five Minutes Timer click function

document.getElementById("five-minutes").addEventListener("click", function(){ 
    quizTimer = 300000;
    console.log(quizTimer);
});

// Question Amount

// Eight Questions Amount click function

document.getElementById("eight-questions").addEventListener("click", function(){ 
    questionAmount = 8;
    console.log(questionAmount);
});

// Twelve Questions Amount click function

document.getElementById("twelve-questions").addEventListener("click", function(){ 
    questionAmount = 12;
    console.log(questionAmount);
});

// Sixteen Questions Amount click function

document.getElementById("sixteen-questions").addEventListener("click", function(){ 
    questionAmount = 16;
    console.log(questionAmount);
});

// Start Button

// Start Button click function to display what is needed

document.getElementById("start-button").addEventListener("click", function(){ 
    gameSection.style.display = "block";
    optionSection.style.display = "none";
    const questions = getQuestions(mathQuestions, questionAmount);
    console.log(questions)
});



