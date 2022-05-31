var startBtn = document.querySelector('.start-btn')
var playerScore = 0;

var finishQuizButton = document.createElement('button');
finishQuizButton.textContent = 'Click to end quiz!';
finishQuizButton.className = ('finish');

// function that codes for first question
var question1 = function () {
    // selector linking to empty div in HTML
    var buttonHolder = document.querySelector('.buttons')
    var questionDiv = document.createElement('div');
    questionDiv.className = ('question1');

    // creation of h1/button elements for question
    var questionText = document.createElement('h1')
    var buttonEl1 = document.createElement('button')
    var buttonEl2 = document.createElement('button')
    var buttonEl3 = document.createElement('button')
    var buttonEl4 = document.createElement('button')

    // text content for each dom element within question
    questionText.textContent = 'Inside which HTML element do we put the JavaScript?';
    buttonEl1.textContent = '<js>';
    buttonEl2.textContent = '<javascript>';
    buttonEl3.textContent = '<script>';
    buttonEl4.textContent = '<scripting>';

    // appending buttons/h1 to div
    (questionDiv).appendChild(questionText);
    (questionDiv).appendChild(buttonEl1);
    (questionDiv).appendChild(buttonEl2);
    (questionDiv).appendChild(buttonEl3);
    (questionDiv).appendChild(buttonEl4);

    // appending div containing buttons/h1 to another div (I used a 2nd div so I could set display to none to hide the question once user moves to next question)
    (buttonHolder).appendChild(questionDiv);

    // event listener for correct answer
    // creates new button to go to next question
    buttonEl3.addEventListener('click', function () {
        var correctAnswer = document.createElement('h2');

        correctAnswer.textContent = 'Correct!';
        correctAnswer.className = ('correct');

        (buttonHolder).appendChild(correctAnswer);

        // button for new question that calls question 2 when clicked
        var nextQuestionButton = document.createElement('button');
        nextQuestionButton.textContent = 'Click for Next Question';
        nextQuestionButton.className = ('nextButton');
        (buttonHolder).appendChild(nextQuestionButton);

        nextQuestionButton.addEventListener('click', function () {
            question2();
            document.querySelector('.question1').style.display = 'none';
            document.querySelector('.correct').style.display = 'none';
            document.querySelector('.nextButton').style.display = 'none';
        })
        playerScore++;
        console.log(playerScore);
    });

    // event listener for all incorrect answers that displays incorrect text message
    [buttonEl1, buttonEl2, buttonEl4].forEach(function (element) {
        element.addEventListener('click', function () {
            var incorrectAnswer = document.createElement('h2');

            incorrectAnswer.textContent = 'Incorrect!';
            incorrectAnswer.className = ('incorrect');

            (buttonHolder).appendChild(incorrectAnswer);

            // button for new question that calls question 2 when clicked
            var nextQuestionButton = document.createElement('button');
            nextQuestionButton.textContent = 'Click for Next Question';
            nextQuestionButton.className = ('nextButton');
            (buttonHolder).appendChild(nextQuestionButton);

            nextQuestionButton.addEventListener('click', function () {
                question2();
                document.querySelector('.question1').style.display = 'none';
                document.querySelector('.incorrect').style.display = 'none';
                document.querySelector('.nextButton').style.display = 'none';
            })
            playerScore--;
            console.log(playerScore);
        });
    });
};

var question2 = function () {
    // selector linking to empty div in HTML
    var buttonHolder = document.querySelector('.buttons')
    var questionDiv = document.createElement('div');
    questionDiv.className = ('question2');

    // creation of h1/button elements for question
    var questionText = document.createElement('h1')
    var buttonEl1 = document.createElement('button')
    var buttonEl2 = document.createElement('button')
    var buttonEl3 = document.createElement('button')
    var buttonEl4 = document.createElement('button')

    // text content for each dom element within question
    questionText.textContent = 'Where is the correct place to insert a JavaScript?';
    buttonEl1.textContent = 'The <head> section';
    buttonEl2.textContent = 'The <body> section';
    buttonEl3.textContent = 'Both the <head> and the <body> section';
    buttonEl4.textContent = 'You do not need to link a JavaScript file';

    // appending buttons/h1 to div
    (questionDiv).appendChild(questionText);
    (questionDiv).appendChild(buttonEl1);
    (questionDiv).appendChild(buttonEl2);
    (questionDiv).appendChild(buttonEl3);
    (questionDiv).appendChild(buttonEl4);

    // appending div containing buttons/h1 to another div (I used a 2nd div so I could set display to none to hide the question once user moves to next question)
    (buttonHolder).appendChild(questionDiv);

    // event listener for correct answer
    // creates new button to go to next question
    buttonEl2.addEventListener('click', function () {
        var correctAnswer = document.createElement('h2');

        correctAnswer.textContent = 'Correct!';
        correctAnswer.className = ('correct2');

        (buttonHolder).appendChild(correctAnswer);

        // button for new question that calls question 3 when clicked
        var nextQuestionButton = document.createElement('button');
        nextQuestionButton.textContent = 'Click for Next Question';
        nextQuestionButton.className = ('nextButton2');
        (buttonHolder).appendChild(nextQuestionButton);

        nextQuestionButton.addEventListener('click', function () {
            question3();
            document.querySelector('.question2').style.display = 'none';
            document.querySelector('.correct2').style.display = 'none';
            document.querySelector('.nextButton2').style.display = 'none';
        })
        playerScore++;
        console.log(playerScore);
    });


    // event listener for all incorrect answers that displays incorrect text message
    [buttonEl1, buttonEl3, buttonEl4].forEach(function (element) {
        element.addEventListener('click', function () {
            var incorrectAnswer = document.createElement('h2');

            incorrectAnswer.textContent = 'Incorrect!';
            incorrectAnswer.className = ('incorrect2');

            (buttonHolder).appendChild(incorrectAnswer);

            // button for new question that calls question 3 when clicked
            var nextQuestionButton = document.createElement('button');
            nextQuestionButton.textContent = 'Click for Next Question';
            nextQuestionButton.className = ('nextButton2');
            (buttonHolder).appendChild(nextQuestionButton);

            nextQuestionButton.addEventListener('click', function () {
                question3();
                document.querySelector('.question2').style.display = 'none';
                document.querySelector('.incorrect2').style.display = 'none';
                document.querySelector('.nextButton2').style.display = 'none';
            })
            playerScore--;
            console.log(playerScore);
        });
    });
};

// var question3 = function () {

// };

// this is going to be changed to finishQuiz once all questions are added
var question3 = function () {
    var buttonHolder = document.querySelector('.buttons');

    (buttonHolder).appendChild(finishQuizButton);

    finishQuizButton.addEventListener('click', function () {
        var finishText = document.createElement('h2')
        finishText.textContent = 'Congrats, you finished with a score of ' + playerScore + '/10.';
        (buttonHolder).appendChild(finishText);

        finishQuizButton.style.display = 'none';
    });
}

var startQuiz = function () {
    startBtn.addEventListener('click', function () {
        question1();

        document.querySelector('.startText').style.display = 'none';

        var timeLeft = 5;

        var downloadTimer = setInterval(function function1() {
            document.querySelector(".countdown").innerHTML = timeLeft +
                "&nbsp" + "seconds remaining";

            timeLeft -= 1;
            if (timeLeft <= 0) {
                clearInterval(downloadTimer);
                document.querySelector(".countdown").innerHTML = "Time is up!";
            }

        }, 1000);

    })
}

startQuiz();