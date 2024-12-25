console.log("JavaScript loaded successfully!");

const challenges = [
    { code: "1. U3RhcnQgd2l0aCB0aGUgZmlyc3Q=", answer: "Start with the first" },
    { code: "2. V2VsY29tZSB0byBjaGFsbGVuZ2UgdHdv", answer: "Welcome to challenge two" },
    { code: "3. VGhlIHRocmVlIHBhdGggYmVnaW5z", answer: "The three path begins" },
    { code: "4. Rm91ciBzdGVwcyB0byBnbw==", answer: "Four steps to go" },
    { code: "5. RmlmdGggY2hhbGxlbmdl", answer: "Fifth challenge" },
    { code: "6. U2l4dGggdHJpYWxzIGF3YWl0", answer: "Sixth trials await" },
    { code: "7. U2V2ZW50aCBvZiBxdWVzdGlvbnM=", answer: "Seventh of questions" },
    { code: "8. RWlnaHRoIGlzIHRoZSBtYXN0ZXI=", answer: "Eighth is the master" },
    { code: "9. TmluZXRoIG9mIHRoZSBjbGltYXg=", answer: "Nineth of the climax" },
    { code: "10. VGhlIGZpbmFsIHN0ZXA=", answer: "The final step" }
];

let currentChallenge = 0;

// DOM References
const challengeDisplay = document.querySelector(".challenge-display");
const inputField = document.querySelector(".input-field");
const feedback = document.querySelector(".feedback");
const nextButton = document.querySelector(".next-button");
const finalQuestionSection = document.querySelector(".final-question-section");
const finalInputField = document.querySelector(".final-input-field");
const finalSubmitButton = document.querySelector(".final-submit-button");

// Initialize the first challenge
function loadChallenge() {
    if (!challengeDisplay) {
        console.error("Challenge display element not found in DOM!");
        return;
    }

    if (currentChallenge < challenges.length) {
        const challenge = challenges[currentChallenge];
        console.log(`Loading challenge: ${challenge.code}`); // Debug log
        challengeDisplay.textContent = `Decode this: ${challenge.code}`;
        inputField.value = "";
        feedback.textContent = "";
        nextButton.style.display = "none";
        inputField.style.display = "inline";
        finalQuestionSection.style.display = "none";
    }
}

// Check user's answer
function checkAnswer() {
    const userAnswer = inputField.value.trim();
    const correctAnswer = challenges[currentChallenge].answer;

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Proceed to the next challenge.";
        feedback.classList.add("correct");
        feedback.classList.remove("incorrect");
        nextButton.style.display = "inline";
    } else {
        feedback.textContent = "Incorrect. Try again.";
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
    }
}

// Proceed to the next challenge
function nextChallenge() {
    currentChallenge++;
    if (currentChallenge < challenges.length) {
        loadChallenge();
    } else {
        // Show the final question
        challengeDisplay.textContent = "Final Question: What is the secret password?";
        feedback.textContent = "All the clues lead to the final password!";
        feedback.classList.add("correct");
        inputField.style.display = "none"; // Hide the previous input field
        finalQuestionSection.style.display = "block"; // Show the final question section
        finalInputField.value = ""; // Clear the final input field
    }
}


// Check the final password
function checkFinalPassword() {
    const finalPassword = finalInputField.value.trim();
    if (finalPassword === "TheSecretPassword") {
        feedback.textContent = "Congratulations! You've unlocked the final secret!";
        feedback.classList.add("correct");
        setTimeout(() => {
            window.location.href = "victory.html"; // Redirect to victory page
        }, 3000);
    } else {
        feedback.textContent = "Incorrect password. Try again.";
        feedback.classList.add("incorrect");
    }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded, initializing challenges...");
    loadChallenge();

    document.querySelector(".check-button").addEventListener("click", checkAnswer);
    nextButton.addEventListener("click", nextChallenge);
    finalSubmitButton.addEventListener("click", checkFinalPassword);
});

