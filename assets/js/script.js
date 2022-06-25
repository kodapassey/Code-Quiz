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

let time = 60;

var timeHolder = document.querySelector('#timeHolder')
const timeDisplay = document.createElement('div');
timeDisplay.classList = 'time';
timeHolder.append(timeDisplay);

let questionCount = 0;

function subtractTime() {
    time -= 5;
}

function startQuiz() {
    var startBtn = document.querySelector('.start-btn');
    var mainText = document.querySelector('.mainText');
    var secondaryText = document.querySelector('.secondaryText');
    startBtn.addEventListener('click', function () {
        renderQuestion();

        const timer = setInterval(function () {
            checkTime();
            timeDisplay.textContent = `Time Remaining: ${time}`;
            time--;
        }, 1000);

        startBtn.style.display = 'none';
        mainText.style.display = 'none';
        secondaryText.style.display = 'none';

        function renderQuestion() {

            if (questionCount < questionsArr.length) {
                const textDiv = document.createElement('div');
                const optionDiv = document.createElement('div');
                const text = questionsArr[questionCount].text;
                const a = questionsArr[questionCount].a;
                const b = questionsArr[questionCount].b;
                const c = questionsArr[questionCount].c;

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

                optionDiv.append(aBtn, bBtn, cBtn);
                textDiv.append(textH1);
                document.body.append(textDiv, optionDiv);

                optionDiv.addEventListener('click', function (event) {
                    if (event.target.textContent === questionsArr[questionCount][questionsArr[questionCount].text]) {
                        console.log('hi')
                    }
                    else if (event.target.textContent === questionsArr[questionCount][questionsArr[questionCount].correct]) {
                        alert('correct!');
                        questionCount++;
                        optionDiv.innerHTML = '';
                        textDiv.innerHTML = ''
                        // test to check whether time has ran out
                        if (questionCount < questionsArr.length && time > 0) {
                            renderQuestion();
                        } else {
                            clearInterval(timer);
                            alert(`Game Over! Your score was: ${time}`);
                            questionCount.innerHTML = '';
                            finishQuiz();
                        }
                    } else {
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


// check if local storage has any items under 'highscore' key
// if there are items under highscore, check if new time is greater than stored time
// if new time isn't greater, alert saying 'sorry, you did not beat the highscore, would you like to try again?' (run startQuiz function)
// if new time is greater or if there is no highscores saved, prompt for initials/save input value of initials

function finishQuiz() {
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

function score() {
    if (localStorage.getItem('HighScore') === null) {
        highScoreText.textContent = 'There are no high scores just yet!';
    } else {
        highScoreText.textContent = `${localStorage.getItem('HighScoreName')} - ${JSON.parse(localStorage.getItem('HighScore'))}`
    }
}

score();

console.log(localStorage.getItem('HighScore'));
console.log(`${time}`);
console.log(JSON.parse(localStorage.getItem('HighScore') < `${time}`));
console.log(localStorage.getItem('HighScore') === null);


startQuiz();


