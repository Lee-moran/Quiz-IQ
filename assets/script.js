const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionBoxElement = document.getElementById('question-box');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-btns');
const homeButton = document.getElementById('home-btn');

let shuffledQuestions, currentQuestionIndex;


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    console.log('started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionBoxElement.classList.remove('hide');
    setNextQuestion();

}