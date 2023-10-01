const questions=[

    {
        "ques":"Q1) Which of the following is a markup language?",
        "a":"HTML",
        "b":"CSS",
        "c":"JavaScript",
        "d":"XML",
        "correct":"a"
    },
    {
        "ques":"Q2) What year was Javascipt Launched?",
        "a":"1995",
        "b":"1996",
        "c":"1991",
        "d":"1994",
        "correct":"a"
    },
    {
        "ques":"Q3) What does CSS stands for?",
        "a":"HTML",
        "b":"Cascading Style sheet",
        "c":"JavaScript",
        "d":"XML",
        "correct":"b"
    }
];
let index=0;
let right=0;
const total=questions.length;
let wrong=0;
const quesBox=document.querySelector("#qe");
const options1=document.querySelectorAll(".options2");
const options2=document.querySelectorAll(".options");

const loadQuestion=()=>{
    if(index===total){
         return clearQuiz();
    }
    reset();
    const data=questions[index];
    quesBox.innerText=data.ques;
    options1[0].innerText=data.a;
    options1[1].innerText=data.b;
    options1[2].innerText=data.c;
    options1[3].innerText=data.d;
    // console.log(options1);


}

const submitQuiz=()=>{
    const data=questions[index];
   const ans=getAnswer();
   if(ans==data.correct){
    right++;
   }
   else{
    wrong++;
   }
   index++;
   loadQuestion();
   
   
}
const getAnswer=()=>{
    let answer;
    options1.forEach((input)=>{
        if(input.checked){
            // console.log("yes");
            answer= input.value;
        }
        
    })
    return answer;
}
const reset=()=>{
    options2.forEach((input)=>{
        input.checked=false;
    });
}
const clearQuiz=()=>{
    const con=document.querySelector(".container");
    const h1=document.createElement("h1");
    h1.textContent=right;
    con.innerHTML="<h1>Thanks for Playing Quiz</h1>";
    con.appendChild(h1);
}
// submitQuiz();
loadQuestion();