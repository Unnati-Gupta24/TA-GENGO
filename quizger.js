function checkAnswers() {
    var correctAnswers = {
        q1: 'b',
        q2: 'd',
        q3: 'a',
        q4: 'd',
        q5: 'c',
        q6: 'd',
        q7: 'a',
        q8: 'b',
        q9: 'd',
        q10: 'a'
    };
    var form = document.getElementById('quizform');
    var formData = new FormData(form);
    var score = 0;

    for (var [key, value] of formData.entries()) {
        if (value === correctAnswers[key]) {
            score++;
        }
    }

    var totalQuestions = Object.keys(correctAnswers).length;
    var resultText = 'You got ' + score + ' out of ' + totalQuestions + ' correct.';
    document.getElementById('results').innerText = resultText;
}