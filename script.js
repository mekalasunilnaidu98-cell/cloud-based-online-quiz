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

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

function showQuestion() {
    const current = questions[currentQuestion];

    questionElement.textContent = current.question;

    optionsElement.innerHTML = "";

    current.options.forEach(function(option) {
        const button = document.createElement("button");

        button.textContent = option;

        optionsElement.appendChild(button);
    });
}

showQuestion();
