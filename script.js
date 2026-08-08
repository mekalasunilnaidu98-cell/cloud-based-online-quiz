const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const progressElement = document.getElementById("progress");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreElement = document.getElementById("score");

function showQuestion() {

    const current = questions[currentQuestion];

    questionElement.textContent = current.question;

    optionsElement.innerHTML = "";

    progressElement.textContent =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    current.options.forEach(function(option) {

        const button = document.createElement("button");

        button.textContent = option;

        button.onclick = function() {

            if (option === current.answer) {
                score++;
                alert("Correct!");
            } else {
                alert("Wrong! Correct answer: " + current.answer);
            }

            button.disabled = true;
        };

        optionsElement.appendChild(button);
    });
}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        quizBox.style.display = "none";
        resultBox.classList.remove("hidden");

        scoreElement.textContent =
            "Your Score: " + score + " / " + questions.length;
    }
}

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    quizBox.style.display = "block";
    resultBox.classList.add("hidden");

    showQuestion();
}

showQuestion();
