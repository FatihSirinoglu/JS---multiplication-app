const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const questionEl = document.getElementById("question")

const inputEl = document.getElementById("input")

const formEl = document.getElementById("form")

const scoreEl = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"));

//when there is no score value has given ,to not get error we need to assing a value instead of score
if(!score){
    score=0;
}

scoreEl.innerText = `score: ${score}`

questionEl.innerText = `What is ${num1} multiply by ${num2}?`

const correctAns = num1*num2

inputEl.addEventListener("submit", () =>{
    const userAns = +inputEl.value;
    // inputEl.value will be a string!
    if(userAns === correctAns){
        score++
    }else{
        score--
    }
});

//We need to storage previous actions, browser allows only string values so we need to stringify the JSON file
function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}


