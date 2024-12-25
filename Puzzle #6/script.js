document.getElementById('submit-btn').addEventListener('click', function() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const feedbackElement = document.getElementById('feedback');
    const celebrationElement = document.getElementById('celebration');

    if (userAnswer === 'echo') {
        feedbackElement.textContent = '';
        celebrationElement.style.display = 'block';
    } else {
        feedbackElement.textContent = 'Oops! That’s not the answer. Try again!';
    }
});
