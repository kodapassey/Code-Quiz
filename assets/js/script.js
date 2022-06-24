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
        text: 'Which is the correct way to write an IF statement in javascript?',
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
        text: 'Which is the correct way to start a for loop?',
        a: 'for i = 1 to 5',
        b: 'for(i = 0; i < 5; i ++)',
        c: 'for(i <= 5; i ++)',
        correct: 'b',
    },
]

let time = 10;

const timeDisplay = document.createElement('div');
document.body.append(timeDisplay);

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
                        if (questionCount < 3 && time > 0) {
                            renderQuestion();
                        } else {
                            clearInterval(timer);
                            alert(`Game Over! Your score was: ${time}`);
                            questionCount.innerHTML = '';
                        }
                    } else {
                        subtractTime();
                        alert('incorrect!');
                        questionCount++;
                        question.innerHTML = '';
                        if (questionCount < 3 && time > 0) {
                            renderQuestion();
                        } else {
                            clearInterval(timer);
                            alert(`Game Over! Your score was: ${time}`);
                            question.innerHTML = '';
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
                questionCount.innerHTML = '';
            } else {
                console.log(time);
            }
        }
    })
};

startQuiz();


