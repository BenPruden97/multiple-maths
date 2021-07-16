// Option Section to display until the game has started

const optionSection = document.getElementById("option-section-id");

// Game Section to not display until options sections have been chosen

const gameSection = document.getElementById("game-section-id");
gameSection.style.display = "none";

// Game Questions, Timer, Score and Question Amount Variables

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

document.getElementById("one-minute").addEventListener("click", function(){ 
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
    console.log(questions);

    const gameQuestion = document.getElementById('game-question');
    gameQuestion.innerText = questions[0].question;

    const gameAnswerOne = document.getElementById('game-answer-1');
    gameAnswerOne.innerText = questions[0].AnswerA;

    const gameAnswerTwo = document.getElementById('game-answer-2');
    gameAnswerTwo.innerText = questions[0].AnswerB;

    const gameAnswerThree = document.getElementById('game-answer-3');
    gameAnswerThree.innerText = questions[0].AnswerC;

    const gameAnswerFour = document.getElementById('game-answer-4');
    gameAnswerFour.innerText = questions[0].AnswerD;

    const quizTimerText = document.getElementById('game-timer-text');

    var oneMinute = 60000,
    min = Math.floor((oneMinute/1000/60) << 0),
    sec = Math.floor((oneMinute/1000) % 60);

    quizTimerText.innerText = `Timer: ${min}:${sec +`0`}`;

    const scoreText = document.getElementById('game-score-text');
    scoreText.innerText = `Score: 0`;

    const questionAmountText = document.getElementById('game-question-number-text');
    questionAmountText.innerHTML = `Question: 1/${questionAmount}`;
});

// Get Questions function to get the questions needed for the quiz

function getQuestions(questionType, questionAmount) {

    let questions = {};

    // Addition if statement to say if addition Questions was clicked then additionquestions array will be displayed

    if (questionType === "addition") {
        questions = shuffleQuestions(additionquestions);
    }

    // Subtraction if statement to say if subtraction Questions was clicked then subtractionquestions array will be displayed

    if (questionType === "subtraction") {
        questions = shuffleQuestions(subtractionquestions);
    }

    // multiplication if statement to say if multiplication Questions was clicked then multiplicationquestions array will be displayed

    if (questionType === "multiplication") {
        questions = shuffleQuestions(multiplicationquestions);
    }

    // Division if statement to say if division Questions was clicked then divisionquestions array will be displayed

    if (questionType === "division") {
        questions = shuffleQuestions(divisionquestions);
    }

    // Multi if statement to say if Multi Questions was clicked then multiquestions array will be displayed

    if (questionType === "all") {
        questions = shuffleQuestions(multiquestions);
    }

    // Return the Questions chosen and slice

    return questions.slice(0,questionAmount)

};

// Shuffle Questions function to randomize the questions displayed so they are not always displayed in the same order

function shuffleQuestions(questions) {
    return questions.sort(() => Math.random() - 0.5)
}

let score = 0;
let correctScore = 1;
let questionCounter = 0;
let acceptingAnswers = true;

function checkAnswer() {
    console.log(checkAnswer); 
};

function resetOptions() {
    location.reload();
}

function restartGame() {
    location.reload();
}

