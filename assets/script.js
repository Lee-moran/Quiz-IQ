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

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });

}

function resetState(){
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild);
    }

}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    nextButton.classList.remove('hide');
    
    if (shuffledQuestions.lenght > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
 
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
        incrementScore();
    } else {
        element.classList.add('wrong');
    }
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById('correct').innerText);
    document.getElementById('correct').innerText = ++oldScore;
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');

}

const questions = [
    {
        question: 'When I get multiplied by any number, the sum of the figures in the product is always me. What am I?',
        answers: [
             {text: '4', correct: false},
             {text: '9', correct: true},
             {text: '8', correct: false},
             {text: '2', correct: false} 
        ]
    },
    {
        question: ' A farmer has 86 chickens. All but 6 die. How many are left?',
        answers: [
             {text: '6', correct: true},
             {text: '86', correct: false},
             {text: '85', correct: false},
             {text: '5', correct: false} 
        ]
    },
    {
        question: 'What is the most common connecting word for SHIP and CARDS?',
        answers: [
             {text: 'Sea', correct: false},
             {text: 'Port', correct: false},
             {text: 'Deck', correct: true},
             {text: 'Harbour', correct: false} 
        ]
    },
    {
        question: 'What is three-fifths of 50?',
        answers: [
             {text: '35', correct: false},
             {text: '20', correct: false},
             {text: '25', correct: false},
             {text: '30', correct: true} 
        ]
    },
    {
        question: 'What is the square root of 10,000?',
        answers: [
             {text: '10', correct: false},
             {text: '100', correct: true},
             {text: '110', correct: false},
             {text: '1,000', correct: false} 
        ]
    },
    {
        question: 'Which of the following words is spelt correctly (using US SPELLING)?',
        answers: [
             {text: 'Vacumm', correct: false},
             {text: 'Ocurred', correct: false},
             {text: 'Greatful', correct: false},
             {text: 'Fulfill', correct: true} 
        ]
    },
    {
        question: '1/3 of 1/3 of 450 equals:',
        answers: [
             {text: '55', correct: false},
             {text: '40', correct: false},
             {text: '45', correct: false},
             {text: '50', correct: true} 
        ]
    },
    {
        question: 'Melinda, 12 years old, is three times as old as Liza. How old will she be when shes twice as old as Liza?',
        answers: [
             {text: '18', correct: false},
             {text: '14', correct: false},
             {text: '16', correct: true},
             {text: '24', correct: false} 
        ]
    },
    {
        question: 'Water is to ice as milk is to _____.',
        answers: [
             {text: 'Calf', correct: false},
             {text: 'Coffee', correct: false},
             {text: 'Butter', correct: true},
             {text: 'Cow', correct: false} 
        ]
    },
    {
        question: 'What is the square root of 225?',
        answers: [
             {text: '25', correct: false},
             {text: '15', correct: true},
             {text: '52', correct: false},
             {text: '22', correct: false} 
        ]
    },
    {
        question: 'Where is Liberia?',
        answers: [
             {text: 'Asia', correct: false},
             {text: 'Europe', correct: false},
             {text: 'Africa', correct: true},
             {text: 'America', correct: false} 
        ]
    },
    {
        question: '13. A bakery had 3 pies cut into eighths. Three-quarters of all pieces were sold. How many were not sold?',
        answers: [
             {text: '6', correct: true},
             {text: '8', correct: false},
             {text: '9', correct: false},
             {text: '12', correct: false} 
        ]
    },
    {
        question: 'Tree is to ground as chimney is to:',
        answers: [
             {text: 'Smoke', correct: false},
             {text: 'House', correct: true},
             {text: 'Fire', correct: false},
             {text: 'Brick', correct: false} 
        ]
    },
    {
        question: 'A painting and a sculpture cost $1500 in total. The painting costs $1,000 more than the sculpture. How much does the sculpture cost?',
        answers: [
             {text: '$400', correct: false},
             {text: '$450', correct: false},
             {text: '$250', correct: true},
             {text: '$200', correct: false} 
        ]
    },
    {
        question: 'Book is to Reading as Fork is to:',
        answers: [
             {text: 'Drawing', correct: false},
             {text: 'Writting', correct: false},
             {text: 'Strring', correct: false},
             {text: 'Eatting', correct: true} 
        ]
    }
                            
                         
];