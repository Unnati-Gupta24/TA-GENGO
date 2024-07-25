function checkAnswers() {
    var correctAnswers = {
        q1: 'a',
        q2: 'b',
        q3: 'b',
        q4: 'a',
        q5: 'd',
        q6: 'd',
        q7: 'a',
        q8: 'a',
        q9: 'c',
        q10: 'c'
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