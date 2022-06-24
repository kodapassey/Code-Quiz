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
timeHolder.append(timeDisplay);

let questionCount = 0;

function subtractTime() {
    time -= 5;
}

function startQuiz() {
    var startBtn = document.querySelector('.start-btn');
    startBtn.addEventListener('click', function () {
        renderQuestion();

        const timer = setInterval(function () {
            checkTime();
            timeDisplay.textContent = time;
            time--;
        }, 1000);

        startBtn.style.display = 'none';

        function renderQuestion() {

            if (questionCount < questionsArr.length) {
                const question = document.createElement('div');
                const text = questionsArr[questionCount].text;
                const a = questionsArr[questionCount].a;
                const b = questionsArr[questionCount].b;
                const c = questionsArr[questionCount].c;

                const textDiv = document.createElement('div');
                textDiv.textContent = text;
                const aDiv = document.createElement('div');
                aDiv.textContent = a;
                const bDiv = document.createElement('div');
                bDiv.textContent = b;
                const cDiv = document.createElement('div');
                cDiv.textContent = c;

                question.append(textDiv, aDiv, bDiv, cDiv);
                document.body.append(question);

                question.addEventListener('click', function (event) {
                    if (event.target.textContent === questionsArr[questionCount][questionsArr[questionCount].correct]) {
                        alert('correct!');
                        questionCount++;
                        question.innerHTML = '';
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
                        question.innerHTML = '';
                        if (questionCount < questionsArr.length && time > 0) {
                            renderQuestion();
                        } else {
                            clearInterval(timer);
                            alert(`Game Over! Your score was: ${time}`);
                            question.innerHTML = '';
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
    if (localStorage.getItem('HighScore') === null || JSON.parse(localStorage.getItem('HighScore')) < `${time}`) {
        var form = document.createElement('form');
        form.innerHTML = '<input type=text id="initials" placeholder="Type Initials Here">'
        var submitBtn = document.createElement('button');
        submitBtn.innerHTML = 'Submit HighScore'
        document.body.innerHTML = '';
        document.body.append(form, submitBtn);
        submitBtn.addEventListener('click', function () {
            localStorage.clear();
            // var input = document.querySelector('#initials').value;
            localStorage.setItem('HighScore', `${time}`);
        })
    } else if (JSON.parse(localStorage.getItem('HighScore')) >= `${time}`) {
        alert('Sorry, you did not beat the current highscore.')
        document.body.innerHTML = '';
    }
};

console.log(localStorage.getItem('HighScore'))
console.log(`${time}`);
console.log(JSON.parse(localStorage.getItem('HighScore')) > `${time}`);
console.log(localStorage.getItem('HighScore') === null)


startQuiz();


