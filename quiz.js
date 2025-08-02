// Step 1: Define the checkAnswer function
function checkAnswer() {
    // Step 2: Set the correct answer
    const correctAnswer = "4";

    // Step 3: Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if an option is selected to avoid errors
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Step 4: Compare with the correct answer and display feedback
        const feedbackElement = document.getElementById("feedback");

        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        // Optional: handle case when no answer is selected
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
    }
}

// Step 5: Add click event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
