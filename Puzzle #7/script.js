const questions = [
    { question: "What is the capital of Australia?", answer: ["canberra"] },
    { question: "What is the atomic number of gold?", answer: ["79"] },
    { question: "What is the longest river in the world?", answer: ["nile", "amazon"] },
    { question: "What is the square root of 144?", answer: ["12"] },
    { question: "Who developed the theory of relativity?", answer: ["einstein"] },
    { question: "What is the capital of Mongolia?", answer: ["ulaanbaatar"] },
    { question: "What is the only continent without a desert?", answer: ["europe"] },
    { question: "What is the largest desert in the world?", answer: ["antarctic", "antarctica"] },
    { question: "What is the largest island in the world?", answer: ["greenland"] },
    { question: "In which year did World War I end?", answer: ["1918"] }
];

let currentQuestion = 0;

const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer");
const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result");
const resultText = document.getElementById("result-text");
const retryBtn = document.getElementById("retry-btn");
const finalCodeContainer = document.getElementById("final-code");

submitBtn.addEventListener("click", checkAnswer);
retryBtn.addEventListener("click", retryQuestion);

function updateQuestion() {
    questionText.textContent = questions[currentQuestion].question;
    answerInput.value = "";
    answerInput.focus();
    resultContainer.classList.add("hidden");
    retryBtn.classList.add("hidden");
}

function checkAnswer() {
    const userAnswer = answerInput.value.toLowerCase().trim();
    const correctAnswers = questions[currentQuestion].answer;

    if (correctAnswers.includes(userAnswer)) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            updateQuestion();
        } else {
            showFinalMessage();
        }
    } else {
        resultText.textContent = "❌ Incorrect answer! Try again.";
        resultContainer.classList.remove("hidden");
        retryBtn.classList.remove("hidden");
    }
}

function retryQuestion() {
    resultContainer.classList.add("hidden");
    retryBtn.classList.add("hidden");
    answerInput.value = "";
    answerInput.focus();
}

function showFinalMessage() {
    finalCodeContainer.innerHTML = "<p>🎉 Congratulations! You completed the quiz.</p>";
    finalCodeContainer.classList.remove("hidden");
}

// ✅ Load first question
updateQuestion();
