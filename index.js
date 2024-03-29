const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');

// Define your quiz questions and correct answers
const quizQuestions = [
    {
        question: "What is the capital of Canada?",
        answers: {
            a: "Ottawa",
            b: "London",
            c: "Berlin",
            d: "Rome"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Japan?",
        answers: {
            a: "Tokyo",
            b: "Beijing",
            c: "Seoul",
            d: "Bangkok"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the largest ocean?",
        answers: {
            a: "Atlantic Ocean",
            b: "Indian Ocean",
            c: "Arctic Ocean",
            d: "Pacific Ocean"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the chemical symbol for water?",
        answers: {
            a: "H2O",
            b: "CO2",
            c: "O2",
            d: "CH4"
        },
        correctAnswer: "a"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: {
            a: "William Shakespeare",
            b: "Charles Dickens",
            c: "Jane Austen",
            d: "Mark Twain"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the highest mountain in the world?",
        answers: {
            a: "Mount Kilimanjaro",
            b: "Mount Everest",
            c: "Mount Fuji",
            d: "Mount Rushmore"
        },
        correctAnswer: "b"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: {
            a: "Mars",
            b: "Venus",
            c: "Jupiter",
            d: "Saturn"
        },
        correctAnswer: "a"
    },
    {
        question: "What year did the Titanic sink?",
        answers: {
            a: "1912",
            b: "1920",
            c: "1905",
            d: "1935"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: {
            a: "Au",
            b: "Ag",
            c: "Pt",
            d: "Hg"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the main ingredient in guacamole?",
        answers: {
            a: "Tomato",
            b: "Avocado",
            c: "Onion",
            d: "Pumpkin"
        },
        correctAnswer: "b"
    }
];
// Function to generate quiz HTML
function generateQuiz() {
    const output = [];

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (const option in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${option}">
                    ${option}: ${currentQuestion.answers[option]}
                </label>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

// Function to show results
function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');

    let score = 0;

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
        }
    });

    resultContainer.innerHTML = `You scored ${score} out of ${quizQuestions.length} questions correctly.`;
}

// Generate the quiz when the page loads
generateQuiz();

// Event listener for the submit button
submitButton.addEventListener('click', showResults);
