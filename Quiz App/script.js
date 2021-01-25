const quizData = [
    {
        question:'1 + 1 = ?',
        a:0,
        b:1,
        c:2,
        d:3,
        correct:'c'
    },
    {
        question:'3 + 5 = ?',
        a:7,
        b:8,
        c:9,
        d:10,
        correct:'b'
    },
    
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text =document.getElementById('a_text')
const b_text =document.getElementById('b_text')
const c_text =document.getElementById('c_text')
const d_text =document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}


function deselectAnswer(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
}
function getSelected(){
    let answer
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click',()=>{
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score ++
        }
        currentQuiz ++
        if(currentQuiz<quizData.length){
            loadQuiz()
            deselectAnswer()
        }else{
            quiz.innerHTML = `
            <h2>You answer correctly at ${score} / ${quizData.length} questions</h2>  
            <button onclick="location.reload()"> Reload</button>
            `
        }
    }
})