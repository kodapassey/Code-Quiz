// array of objects, each object is 1 question in the quiz
const questionsArr = [
    {
        text: 'Inside which HTML element do we put the JavaScript?',
        a: '<script>',
        b: '<js>',
        c: '<javascript>',
        correct: 'a',
    },
    {
        text: 'How do you write, "Hello World" in an alert box?',
        a: 'msg("Hello World");',
        b: 'msgBox("Hello World");',
        c: 'alert("Hello World");',
        correct: 'c',
    },
    {
        text: 'How do you create a function named "myFunction" in JavaScript?',
        a: 'function:myFunction()',
        b: 'function myFunction()',
        c: 'function = myFunction()',
        correct: 'b',
    },
    {
        text: 'How do you call a function named "myFunction"?',
        a: 'call function myFunction()',
        b: 'call myFunction()',
        c: 'myFunction()',
        correct: 'c',
    },
    {
        text: 'Which is the correct way to write an IF statement in JavaScript?',
        a: 'if(i == 5)',
        b: 'if i = 5',
        c: 'if i = 5 then',
        correct: 'a',
    },
    {
        text: 'Which is the correct way to start a for loop?',
        a: 'for i = 1 to 5',
        b: 'for(i = 0; i < 5; i ++)',
        c: 'for(i <= 5; i ++)',
        correct: 'b',
    },
    {
        text: 'Which is the correct way to write a JavaScript array?',
        a: 'var colors = "red", "green", "blue"',
        b: 'var colors = (1:"red",2:"green",3:"blue")',
        c: 'var colors = ["red", "green", "blue"]',
        correct: 'c',
    },
    {
        text: 'How do you declare a variable that is UNCHANGING',
        a: 'var name=',
        b: 'let name=',
        c: 'const name=',
        correct: 'c',
    },
    {
        text: 'How would you select an HTML element by its class in JavaScript?',
        a: 'document.getElementById("___")',
        b: 'document.querySelector(".___")',
        c: 'document.select("___")',
        correct: 'b',
    },
    {
        text: 'Where is the correct place to insert a JavaScript file?',
        a: 'The <head> section of the HTML page',
        b: 'The <body> section of the HTML page',
        c: 'Place in both the <head> and <body> sections',
        correct: 'b',
    }
]

// starting time - 60 seconds
let time = 6000;

// creating div to hold my timer
var timeHolder = document.querySelector('#timeHolder')
const timeDisplay = document.createElement('div');
timeDisplay.classList = 'time';
timeHolder.append(timeDisplay);


// question count that increases after every question
let questionCount = 0;


// function that subtracts time after an incorrect question
function subtractTime() {
    time -= 5;
}


// function to start quiz, function will run on start button click then render the first question
function startQuiz() {

    // selecting start button and the h1/h2 that are visible on page start
    var startBtn = document.querySelector('.start-btn');
    var mainText = document.querySelector('.mainText');
    var secondaryText = document.querySelector('.secondaryText');

    // event listener to start quiz
    startBtn.addEventListener('click', function () {
        renderQuestion();

        // setInterval function that displays time and subtracts 1 second
        const timer = setInterval(function () {
            checkTime();
            timeDisplay.textContent = `Time Remaining: ${time}`;
            time--;
        }, 1000);

        // hides items on main page when quiz begins
        startBtn.style.display = 'none';
        mainText.style.display = 'none';
        secondaryText.style.display = 'none';

        // function to render each question
        function renderQuestion() {

            if (questionCount < questionsArr.length) {

                // creates divs for each question and 3 options
                const textDiv = document.createElement('div');
                const optionDiv = document.createElement('div');

                // setup of variables for text content on each question
                const text = questionsArr[questionCount].text;
                const a = questionsArr[questionCount].a;
                const b = questionsArr[questionCount].b;
                const c = questionsArr[questionCount].c;

                // gives variables text content of text, a, b, or c
                const textH1 = document.createElement('h1');
                textH1.textContent = text;
                textH1.classList = 'mainText'
                const aBtn = document.createElement('button');
                aBtn.textContent = a;
                aBtn.classList = 'options'
                const bBtn = document.createElement('button');
                bBtn.textContent = b;
                bBtn.classList = 'options'
                const cBtn = document.createElement('button');
                cBtn.textContent = c;
                cBtn.classList = 'options'

                // appends each option and question text to body
                optionDiv.append(aBtn, bBtn, cBtn);
                textDiv.append(textH1);
                document.body.append(textDiv, optionDiv);

                // event listener for each button
                optionDiv.addEventListener('click', function (event) {

                    // if statement if user selects correct option
                    if (event.target.textContent === questionsArr[questionCount][questionsArr[questionCount].correct]) {
                        alert('correct!');
                        questionCount++;
                        optionDiv.innerHTML = '';
                        textDiv.innerHTML = ''
                        // test to check whether time has ran out, if there is still time, then render a new question(if there is still more questions), if not, end quiz
                        if (questionCount < questionsArr.length && time > 0) {
                            renderQuestion();
                        }
                        // else statement if time has ran out
                        else {
                            clearInterval(timer);
                            alert(`Game Over! Your score was: ${time}`);
                            questionCount.innerHTML = '';
                            finishQuiz();
                        }
                    }
                    // else statment if user selects wrong answer
                    else {
                        subtractTime();
                        alert('incorrect!');
                        questionCount++;
                        optionDiv.innerHTML = '';
                        textDiv.innerHTML = ''
                        if (questionCount < questionsArr.length && time > 0) {
                            renderQuestion();
                        } else {
                            clearInterval(timer);
                            alert(`Game Over! Your score was: ${time}`);
                            optionDiv.innerHTML = '';
                            textDiv.innerHTML = ''
                            finishQuiz();
                        }
                    }
                });
            }
        };
        // function to check time every second that is called in the setInterval function
        function checkTime() {
            if (time <= 0) {
                alert('time is up');
                clearInterval(timer);
                alert(`Game Over! Your score was: ${time}`);
                document.innerHTML = '';
                finishQuiz();
            } else {
                console.log(time);
            }
        }
    })
};


// function that is ran when user finishes quiz or if time has ran out
function finishQuiz() {
    // if statement checking if there are any highscores saved into local storage, if there is highscores, they are checked against new user time
    // if old highscore is greater than new highscore player is alerted that they did not beat highscore
    // if old highscore is less than new highscore or if there is no highscore saved player can input initials and save them
    if (localStorage.getItem('HighScore') === null || JSON.parse(localStorage.getItem('HighScore') < `${time}`)) {

        var endQuizH1 = document.createElement('h1');
        endQuizH1.textContent = 'You Beat The Current HighScore! Save your new HighScore below!'
        endQuizH1.classList = 'mainText'

        // creates form with input for user to input initials
        var form = document.createElement('form');
        form.innerHTML = '<input type=text id="initials" placeholder="Type Initials Here">'

        // submit button to add initials to localStorage
        var submitBtn = document.createElement('button');
        submitBtn.classList = 'options'
        submitBtn.innerHTML = 'Submit HighScore';

        // clears questions off screen
        document.body.innerHTML = '';

        // appends form and submit button to page
        document.body.append(endQuizH1, form, submitBtn);

        // onClick function when submit button is clicked, initials will be added to localStorage
        submitBtn.addEventListener('click', function () {

            // clears localStorage for new highscore to be added
            localStorage.clear();

            // takes value from input field
            var input = document.querySelector('#initials').value;

            // sets actual score
            localStorage.setItem('HighScore', `${time}`);

            // sets users initials with alert if user doesn't input any value
            if (input == '') {
                alert('Please input your initials');
            } else {
                localStorage.setItem('HighScoreName', `${input}`);
                location.reload();
            }
        })
        // else if for if user did not beat the highscore
    } else if (JSON.parse(localStorage.getItem('HighScore') > `${time}`)) {
        alert('Sorry, you did not beat the current highscore.')
        document.body.innerHTML = '';
        location.reload();
    }
};



var highScoreText = document.querySelector('.highScore');

// function that displays highscore or if there isn't a highscore yet
function score() {
    if (localStorage.getItem('HighScore') === null) {
        highScoreText.textContent = 'There are no high scores just yet!';
    } else {
        highScoreText.textContent = `${localStorage.getItem('HighScoreName')} - ${JSON.parse(localStorage.getItem('HighScore'))}`
    }
}

score();
startQuiz();