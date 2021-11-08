const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "The 'function' and 'var' are known as?",
        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes",
        correct: "C",
    },
    {
        question: "Which one of the following also known as Conditional Expression?",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        correct: "d",
    },
    {
        question: "Which type of JavaScript language is ?",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        correct: "b",
    },
    {
        question: "  which one of the following is not considered as an error?",
        a: "Syntax error",
        b: " Missing of semicolons",
        c: "Division by zero ",
        d: " Missing of Bracket",
        correct: "c",
    },
    {
        question: " Which of the following number object function returns the value of the number?",
        a: "toString()",
        b: "valueOf() ",
        c: "toLocaleString()",
        d: "toPrecision() ",
        correct: "c",
    },
    {
        question: "Did you Follow my Page ?",
        a: "Yes",
        b: "No ",
        c: "None",
        d: "THANKS",
        correct: "a",
    },
];

const quizBox = document.getElementById("quiz-box")
const question = document.getElementById("question")
const answerInput = document.querySelectorAll(".answer")
const a_text = document.getElementById("a-text")
const b_text = document.getElementById("b-text")
const c_text = document.getElementById("c-text")
const d_text = document.getElementById("d-text")
const submit = document.getElementById("submit")

let currentQuiz = 0
let score = 0

quiz()

function quiz() {

    deSelect()
    let currentQuizData = quizData[currentQuiz]

    question.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deSelect() {
    answerInput.forEach((curr) => curr.checked = false)
}

function selectedAnswer() {

    let answer
    answerInput.forEach((curr) => {
        if (curr.checked) {

            answer = curr.id

        }
    })
    return answer

}

submit.addEventListener("click", () => {

    let answer = selectedAnswer()
    if (answer) {

        if (answer === quizData[currentQuiz].correct) {
            score++

        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            quiz()
        } else {

            quizBox.innerHTML = `
                <h2>Your Scored is ${score}/${quizData.length} </h2>
                <button class = "sub" onclick = "location.reload()">
                Reload </button>
            `
        }


    }



})
