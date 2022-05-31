var startBtn = document.querySelector('.start-btn')

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
    });

    // event listener for incorrect answer
    // creates new button to go to next question
    buttonEl1.addEventListener('click', function () {
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
    });

    // event listener for incorrect answer
    // creates new button to go to next question
    buttonEl2.addEventListener('click', function () {
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
    });

    // event listener for incorrect answer
    // creates new button to go to next question
    buttonEl4.addEventListener('click', function () {
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

        // button for new question that calls question 2 when clicked
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
    });

    // event listener for incorrect answer
    // creates new button to go to next question
    buttonEl1.addEventListener('click', function () {
        var incorrectAnswer = document.createElement('h2');

        incorrectAnswer.textContent = 'Incorrect!';
        incorrectAnswer.className = ('incorrect2');

        (buttonHolder).appendChild(incorrectAnswer);

        // button for new question that calls question 2 when clicked
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
    });

    // event listener for correct answer
    // creates new button to go to next question
    buttonEl3.addEventListener('click', function () {
        var incorrectAnswer = document.createElement('h2');

        incorrectAnswer.textContent = 'Incorrect!';
        incorrectAnswer.className = ('incorrect2');

        (buttonHolder).appendChild(incorrectAnswer);

        // button for new question that calls question 2 when clicked
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
    });

    // event listener for incorrect answer
    // creates new button to go to next question
    buttonEl4.addEventListener('click', function () {
        var incorrectAnswer = document.createElement('h2');

        incorrectAnswer.textContent = 'Incorrect!';
        incorrectAnswer.className = ('incorrect2');

        (buttonHolder).appendChild(incorrectAnswer);

        // button for new question that calls question 2 when clicked
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
    });
};

var question3 = function () {

}

// let questions = [question1, question2]

// for (let i = 0; i < questions.length; i++) {
//     questions[i]();

//

var questions = function () {
    startBtn.addEventListener('click', function () {
        question1();

        document.querySelector('.startText').style.display = 'none';

    })
}

questions();