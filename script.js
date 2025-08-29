// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(function(link) {
  link.addEventListener('click', function(event) {
    // If the link has a hash target on the same page, scroll smoothly
    if (this.hash) {
      event.preventDefault();
      const targetId = this.hash.substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Quiz data
const quizQuestions = [
  {
    question: 'What best describes diabetes?',
    options: [
      'A condition where blood glucose is too high because the body does not produce or use insulin properly',
      'An illness caused by bacteria in the blood',
      'A temporary illness cured by drinking water'
    ],
    answer: 0
  },
  {
    question: 'Which of the following is a symptom of low blood sugar?',
    options: [
      'Thirst and frequent urination',
      'Sweating and trembling',
      'Weight gain'
    ],
    answer: 1
  },
  {
    question: 'Where are recommended injection sites for Ryzodeg?',
    options: [
      'Abdomen, upper arms and front of thighs',
      'Wrists and feet',
      'Buttocks only'
    ],
    answer: 0
  },
  {
    question: 'What should you do if you miss a dose of Ryzodeg?',
    options: [
      'Take a double dose next time',
      'Skip insulin entirely until the next day',
      'Inject with your next main meal on the same day and do not double the dose'
    ],
    answer: 2
  },
  {
    question: 'Which of the following is a serious allergic reaction requiring immediate medical help?',
    options: [
      'Mild itching at the injection site',
      'Swelling of the face and tongue causing difficulty breathing',
      'Feeling sleepy after your injection'
    ],
    answer: 1
  }
];

// Render quiz questions
function renderQuiz() {
  const container = document.getElementById('quiz-container');
  quizQuestions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'quiz-question';
    const questionTitle = document.createElement('p');
    questionTitle.textContent = (index + 1) + '. ' + q.question;
    questionDiv.appendChild(questionTitle);
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'quiz-options';
    q.options.forEach((opt, optIndex) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'question' + index;
      input.value = optIndex;
      label.appendChild(input);
      label.appendChild(document.createTextNode(' ' + opt));
      optionsDiv.appendChild(label);
    });
    questionDiv.appendChild(optionsDiv);
    container.appendChild(questionDiv);
  });
}

// Calculate score
function calculateScore() {
  let score = 0;
  quizQuestions.forEach((q, index) => {
    const selected = document.querySelector('input[name="question' + index + '"]:checked');
    if (selected && parseInt(selected.value, 10) === q.answer) {
      score += 1;
    }
  });
  return score;
}

// Event listener for submit button
document.getElementById('submit-quiz').addEventListener('click', function() {
  const total = quizQuestions.length;
  const score = calculateScore();
  const resultDiv = document.getElementById('quiz-result');
  resultDiv.textContent = 'You answered ' + score + ' out of ' + total + ' questions correctly.';
});

// Initialize quiz on page load
renderQuiz();