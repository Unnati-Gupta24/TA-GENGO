function checkAnswers() {
    var correctAnswers = {
        q1: 'd',
        q2: 'c',
        q3: 'c',
        q4: 'a',
        q5: 'b',
        q6: 'a',
        q7: 'a',
        q8: 'd',
        q9: 'b',
        q10: 'b'
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