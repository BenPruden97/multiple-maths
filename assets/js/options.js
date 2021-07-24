// Option Section to display until the game has started

const optionSection = document.getElementById("option-section-id");

// Game Section to not display until options sections have been chosen

const gameSection = document.getElementById("game-section-id");
gameSection.style.display = "none";

// Game Answers button that have the same class name

const gameAnswers = document.getElementsByClassName("gameAnswerButtons");

const gameAnswerTimer = document.getElementById("game-timer-over-id");
gameAnswerTimer.style.display = "none"

// Game Questions, Timer, Score and Question Amount Variables

let mathQuestions = "addition";
let quizTimer = 60;
let questionAmount = 8;
let score = 0;
let correctScore = 1;
let questionCounter = 1;
let questionNumber = 0;
let questions;
let correctAnswer;

// Maths Questions click functions

// Addition Maths Questions click function

document.getElementById("addition-questions").addEventListener("click", function(){ 
    mathQuestions = "addition";
    console.log("additon");
});

// Subtraction Maths Questions click function

document.getElementById("subtraction-questions").addEventListener("click", function(){ 
    mathQuestions = "subtraction";
    console.log("subtraction");
});

// Multiplcation Maths Questions click function

document.getElementById("multiplication-questions").addEventListener("click", function(){ 
    mathQuestions = "multiplication";
    console.log("multiplication");
});

// Division Maths Questions click function

document.getElementById("division-questions").addEventListener("click", function(){ 
    mathQuestions = "division";
    console.log("division");
});

// Multi Maths Questions click function (to display all types of questions)

document.getElementById("multi-questions").addEventListener("click", function(){ 
    mathQuestions = "all";
    console.log("all");
});

// Quiz Timer

// One Minute Timer click function

document.getElementById("one-minute").addEventListener("click", function(){ 
    quizTimer = 60;
    console.log(60);
});

// Three Minutes Timer click function

document.getElementById("three-minutes").addEventListener("click", function(){ 
    quizTimer = 180;
    console.log(180);
});

// Five Minutes Timer click function

document.getElementById("five-minutes").addEventListener("click", function(){ 
    quizTimer = 300;
    console.log(300);
});

// Question Amount

// Eight Questions Amount click function

document.getElementById("eight-questions").addEventListener("click", function(){ 
    questionAmount = 8;
    console.log(8);
});

// Twelve Questions Amount click function

document.getElementById("twelve-questions").addEventListener("click", function(){ 
    questionAmount = 12;
    console.log(12);
});

// Sixteen Questions Amount click function

document.getElementById("sixteen-questions").addEventListener("click", function(){ 
    questionAmount = 16;
    console.log(16);
});

// Start Button

// Start Button click function to display what is needed

document.getElementById("start-button").addEventListener("click", function(){ 
    gameSection.style.display = "block";
    optionSection.style.display = "none";
    questions = getQuestions(mathQuestions, questionAmount);
    console.log(questions);

    startGame();

    updateScore(score)

    const countdownClock = document.getElementById("game-timer-text");

    let timerId = setInterval(countdownClockUpdate, 1000);

    // Quiz Timer Code for the start of the game

    function countdownClockUpdate() {

        if (quizTimer <= 0) {
            
            clearTimeout(timerId);
            
            gameSection.style.display = "none";
            gameAnswerTimer.style.display = "block";

        } else {
            countdownClock.innerHTML = `Timer: ${`0` + Math.floor(quizTimer / 60)}:${quizTimer % 60}`;
            quizTimer--;
        }
    
    };
    
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

function startGame() {
    updateScore(score);
    getQuestion(questionNumber);
    displayQuestion(questionNumber);
    currentQuestion(questionNumber);
}

function getQuestion(questionNumber) {
    for (let i = 0; i < gameAnswers.length; i++) {
    gameAnswers[i].innerText = questions[questionNumber].answers[i];
    }
    correctAnswer = questions[questionNumber].correctAnswer;
    displayQuestion(questionNumber);
};

function displayQuestion(questionNumber) {
    const gameQuestion = document.getElementById('game-question');
    gameQuestion.innerText = questions[questionNumber].question;
}

function getNewQuestion() {

    if (questions.length === 0 || questionNumber > questionAmount) {
        localStorage.setItem("mostRecentScore", score)

        return window.location.assign("/game-over.html")
    }
        
    getQuestion(questionNumber);
    displayQuestion(questionNumber);
    allGameAnswers;

};

function getSiblings(element){ // Jo changed event to element
    console.log("ELEMENT IN GETSIBLINGS IS ", element)
    console.log("PARENT ELEMENT IS ", element.parentElement)
    siblings = []
    for (let item of element.parentElement.parentElement.children) {
        if (item !== element){
            console.log(item)
            siblings.push(item);
        }
    }
    return siblings
}

var allGameAnswers = document.querySelectorAll(".gameAnswerButtons").forEach(button => {
    button.addEventListener("click", event => {
        var allGameAnswersText = button.innerText;

        // result will store what the checkAnswer function returns
        // it will return either true or false depending on the answer
        let result = checkAnswer(allGameAnswersText);

        if (result == true) {
            button.classList.add("correct-answer");
            speak('Correct!');
            score = score + 1;
            updateScore(score);
            questionNumber = questionNumber + 1;
            currentQuestion(questionNumber)
        } else {

            button.classList.add("incorrect-answer");

            // console.log(event)

            // event => getSiblings(event) 
            console.log(event.target)
            let siblings = getSiblings(event.target)// Edited by Jo
            console.log(siblings) /// returns undefined???
            speak('Incorrect');
        }

        setTimeout(() => {
            button.classList.remove("correct-answer");
            getNewQuestion()
        }, 750);
        
        setTimeout(() => {
            button.classList.remove("incorrect-answer");
            getNewQuestion()
        }, 750);

    });
});


function checkAnswer(theAnswer) {

    let correctAnswer = questions[questionNumber].correctAnswer;

    if (theAnswer == correctAnswer) {
        return true;
    } else {
        return false;
    }

};

function currentQuestion(questionNumber) {
    const questionAmountText = document.getElementById('game-question-number-text');
    questionAmountText.innerHTML = `Question: ${questionNumber}/${questionAmount}`;
}

function updateScore(score) {
    const scoreText = document.getElementById('game-score-text');
    scoreText.innerText = `Score: ${score}`;
}

// Reset Option function to reset the options section if the user chooses the wrong options

function resetOptions() {
    location.reload()
};

// Speech Synthesis function to read the current question and whether the user has clicked on the correct or incorrect answer

function speak (message) {
    var msg = new SpeechSynthesisUtterance(message);
    var voices = window.speechSynthesis.getVoices();
    window.speechSynthesis.speak(msg);
};

// Speech Synthesis eadQuestion() to read out the current question for the quiz

function readQuestion() {
    speak(`${questions[questionNumber].question}`);
};

