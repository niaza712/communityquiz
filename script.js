// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quiz-form');
    const resultMessage = document.getElementById('result-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get user's responses
        const responses = {
            q1: form.elements['q1'].value,
            q2: form.elements['q2'].value,
            // Add more questions here
            q8: form.elements['q8'].value
        };

        // Calculate the result based on user's responses
        const result = calculateResult(responses);

        // Display the result message
        resultMessage.textContent = result;
    });

    function calculateResult(responses) {
        // Example calculation based on user's responses
        let score = 0;

        // Add scoring logic based on responses
        if (responses.q1 === 'often') score++;
        if (responses.q2 === 'poor') score++;
        // Add scoring for more questions

        // Generate result message based on score
        if (score >= 5) {
            return "Your mental well-being may need attention. Consider seeking support from a professional.";
        } else if (score >= 3) {
            return "Your mental well-being is average. Focus on self-care and stress management techniques.";
        } else {
            return "Your mental well-being is strong. Keep up the good work!";
        }
    }
});
