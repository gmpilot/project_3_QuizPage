let questionList = [
    {
        question: "What is the capital city of Canada?",
        answer: [
            { text: "Toronto", correct: false },
            { text: "Ottawa", correct: true },
            { text: "Vancouver", correct: false },
            { text: "Montreal", correct: false },
        ],
    },
    {
        question: "What is the largest country in the world by land area?",
        answer: [
            { text: "Russia", correct: true },
            { text: "Canada", correct: false },
            { text: "China", correct: false },
            { text: "United States", correct: false },
        ],
    },
    {
        question: "What is the smallest country in the world?",
        answer: [
            { text: "Vatican City", correct: true },
            { text: "Monaco", correct: false },
            { text: "Nauru", correct: false },
            { text: "San Marino", correct: false },
        ],
    },
    {
        question: "What is the tallest mountain in the world?",
        answer: [
            { text: "Mount Everest", correct: true },
            { text: "K2", correct: false },
            { text: "Kangchenjunga", correct: false },
            { text: "Makalu", correct: false },
        ],
    },
    {
        question: "What is the largest ocean in the world?",
        answer: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
        ],
    },
    {
        question: "What is the currency of Japan?",
        answer: [
            { text: "Euro", correct: false },
            { text: "Yen", correct: true },
            { text: "Dollar", correct: false },
            { text: "Pound", correct: false },
        ],
    },
    {
        question: "What is the currency of Mexico?",
        answer: [
            { text: "Euro", correct: false },
            { text: "Peso", correct: true },
            { text: "Dollar", correct: false },
            { text: "Pound", correct: false },
        ],
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
        ],
    },
    {
        question: "What is the capital city of Brazil?",
        answer: [
            { text: "Sao Paulo", correct: false },
            { text: "Rio de Janeiro", correct: false },
            { text: "Brasilia", correct: true },
            { text: "Salvador", correct: false },
        ],
    },
    {
        question: "What is the highest waterfall in the world?",
        answer: [
            { text: "Angel Falls", correct: true },
            { text: "Niagara Falls", correct: false },
            { text: "Victoria Falls", correct: false },
            { text: "Iguazu Falls", correct: false },
        ],
    },
    {
        question: "What is the largest desert in the world?",
        answer: [
            { text: "Sahara Desert", correct: true },
            { text: "Arabian Desert", correct: false },
            { text: "Gobi Desert", correct: false },
            { text: "Mojave Desert", correct: false },
        ],
    },
    {
        question: "What is the capital city of China?",
        answer: [
            { text: "Beijing", correct: true },
            { text: "Shanghai", correct: false },
            { text: "Hong Kong", correct: false },
            { text: "Zhengzhou", correct: false },
        ],
    },
];

let questions = document.getElementById('quizQuestion');
let answersBody = document.querySelector(".quizBoxBody");
let nextBtn = document.getElementById('quizNext');
let againBtn = document.getElementById('quizNext2');

let questionIndex = 0;
let userScore = 0;


function startQuiz() {

    let qu = questionList[questionIndex].question;
    let an = questionList[questionIndex].answer;
    questions.innerText="";
    questions.innerText = (questionIndex + 1) + "." + qu;

    an.forEach(element => {
        let myButton = document.createElement('button');
        myButton.classList.add("quizButton", "quizAnswer");

        if (element.correct == true) {
            myButton.dataset.correct = element.correct;
        } else {
            myButton.dataset.correct = element.correct;
        }

        myButton.innerText = element.text;
        answersBody.appendChild(myButton);

        myButton.addEventListener('click', function () {
            nextBtn.style.display = ("inline-block");
            if (myButton.dataset.correct == "true") {
                myButton.classList.add("trueClass");
                userScore++;
            } else {
                myButton.classList.add("falseClass");
            }
            // important
            Array.from(answersBody.children).forEach(button => {
                if (button.dataset.correct == "true") {
                    button.classList.add("trueClass");
                }
                button.disabled = true;
            });
        })
    });

}


startQuiz();
nextBtn.addEventListener('click', function () {
    questionIndex++;
    nextBtn.style.display = "none";
    // important
    while (answersBody.firstChild) {
        answersBody.removeChild(answersBody.firstChild);
    }
    if (questionIndex == questionList.length) {
        questions.innerHTML = `Your Score is : \t ${userScore}\t Out of : \t${questionList.length}`;
        againBtn.style.display = "inline-block";
        startAgin();
    }
    startQuiz();
})

function startAgin() {
    againBtn.addEventListener('click', function () {
        questionIndex = 0;
        userScore=0;
        againBtn.style.display="none";
        startQuiz();
    })
}
