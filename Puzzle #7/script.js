const questions = [
    { question: "What is the capital of Australia?", answer: "canberra" },
    { question: "What is the atomic number of gold?", answer: "79" },
    { question: "What is the longest river in the world?", answer: ["nile", "amazon"] }, // Accepting both Nile and Amazon as correct
    { question: "What is the square root of 144?", answer: "12" },
    { question: "Who developed the theory of relativity?", answer: "einstein" },
    { question: "What is the capital of Mongolia?", answer: "ulaanbaatar" },
    { question: "What is the only continent without a desert?", answer: "europe" },
    { question: "What is the largest desert in the world?", answer: ["antarctic", "antarctica"] },
    { question: "What is the largest island in the world?", answer: "greenland" },
    { question: "In which year did World War I end?", answer: "1918" }
];


let currentQuestion = 0;
let userAnswers = [];

const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer");
const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result");
const resultText = document.getElementById("result-text");
const retryBtn = document.getElementById("retry-btn");
const finalCodeContainer = document.getElementById("final-code");
const codeText = document.getElementById("code");

submitBtn.addEventListener("click", checkAnswer);
retryBtn.addEventListener("click", resetGame);

function checkAnswer() {
    const userAnswer = answerInput.value.toLowerCase().trim();
    const correctAnswers = questions[currentQuestion].answer;

    // Check if the user's answer matches any of the correct answers
    if (Array.isArray(correctAnswers)) {
        if (correctAnswers.includes(userAnswer)) {
            userAnswers.push(true);
            currentQuestion++;
            answerInput.value = "";

            if (currentQuestion < questions.length) {
                updateQuestion();
            } else {
                showFinalCode();
            }
        } else {
            userAnswers.push(false);
            resultText.textContent = "Incorrect answer! Try again.";
            resultContainer.classList.remove("hidden");
            retryBtn.classList.remove("hidden");
        }
    } else {
        // For regular single correct answers
        if (userAnswer === correctAnswers) {
            userAnswers.push(true);
            currentQuestion++;
            answerInput.value = "";

            if (currentQuestion < questions.length) {
                updateQuestion();
            } else {
                showFinalCode();
            }
        } else {
            userAnswers.push(false);
            resultText.textContent = "Incorrect answer! Try again.";
            resultContainer.classList.remove("hidden");
            retryBtn.classList.remove("hidden");
        }
    }
}


function resetGame() {
    const incorrectQuestionIndex = userAnswers.lastIndexOf(false);
    
    // If there were incorrect answers, restart from the last incorrect question
    if (incorrectQuestionIndex !== -1) {
        currentQuestion = incorrectQuestionIndex;
    } else {
        currentQuestion = 0;
    }

    userAnswers = [];
    updateQuestion();
    resultContainer.classList.add("hidden");
    retryBtn.classList.add("hidden"); // Hide the retry button after it's pressed
    finalCodeContainer.classList.add("hidden");
}
