const questions = [
    {
        question: "Hemoglobin is a heme-containing globular protein present in erythrocytes.Which of the following is the function of hemoglobin?",
        answers: [
            { text: "Storage of oxygen", correct: false },
            { text: "Transport of oxygen", correct: true },
            { text: "Both of the above", correct: false },
            { text: "None of the above", correct: false },
        ]
    },

    {
        question: " Which of the following is the oxygen binding site of the hemoglobin?",
        answers: [
            { text: "N-terminal of the beta subunit ", correct: false },
            { text: "Carboxyterminal of both alpha and beta subunits", correct: false },
            { text: "Ferric ion (Fe+3) of the heme molecule", correct: false },
            { text: "Ferrous ion (Fe+2) of the heme molecule", correct: true },
        ]
    },
    {
        question: "Which of the following allosteric regulators favor the unloading of oxygen in the peripheral tissues?",
        answers: [
            { text: " Low pH", correct: true },
            { text: "Low 2-3 Bisphosphoglycerate", correct: false },
            { text: "Low partial pressure of carbon dioxide", correct: false },
            { text: "All of the above", correct: false },
        ]
    },

    {
        question: "Hemoglobin is a heme-containing globular protein present in erythrocytes.Which of the following is the function of hemoglobin?",
        answers: [
            { text: "Storage of oxygen", correct: false },
            { text: "Transport of oxygen", correct: true },
            { text: "Both of the above", correct: false },
            { text: "None of the above", correct: false },
        ]
    },

    {
        question: " In patients with sickle cell disease, sickling of RBC is favorable when hemoglobin S is.......................................................? ",
        answers: [
            { text: "Oxygenated Form", correct: false },
            { text: "Deoxygenated Form", correct: true },
            { text: "Glycated Form", correct: false },
            { text: " All of the above", correct: false },
        ]
    },
    {
        question: "Hemoglobin is a heme-containing globular protein present in erythrocytes.Which of the following is the function of hemoglobin?",
        answers: [
            { text: "Storage of oxygen", correct: false },
            { text: "Transport of oxygen", correct: true },
            { text: "Both of the above", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "Carbon monoxide poisoning decreases oxygen delivery and causes tissue hypoxia and may lead to death in untreated individuals. The carbon monoxide..................................................................? ",
        answers: [
            { text: "Bind to the N-terminal chain and decreases the affinity of oxygen to a heme ", correct: false },
            { text: "Competitively binds to oxygen binding site of hemoglobin at higher affinity", correct: true },
            { text: "Competitively Interfere with the binding of 2,3 BPG to hemoglobin", correct: false },
            { text: "All of the above", correct: false },
        ]
    },
    {
        question: "Sulphonylureas increase insulin secretion by beta cells. Sulphonylureas acts by binding sulphonylurea receptor and inhibiting......................................",
        answers: [
            { text: "ATP-dependent K+ channel", correct: true },
            { text: "Voltage-gated calcium channel", correct: false },
            { text: "GLUT-2 ", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "Which of the following is not the consequence of insulin deficiency in lipid metabolism?",
        answers: [
            { text: "Increased lipogenesis", correct: true },
            { text: " Increased level of free fatty acids", correct: false },
            { text: "BIncreased ketogenesis", correct: false },
            { text: "Increased triglyceride breakdown", correct: false },
        ]
    },
    {
        question: "Which of the following laboratory measurement best indicate the blood glucose control over a period of weeks to months?",
        answers: [
            { text: "Measurement of blood glucose", correct: false },
            { text: "Measurement of HbA1C", correct: true },
            { text: "Measurement of urinary ketone bodies", correct: false },
            { text: "Measurement of insulin", correct: false },
        ]
    },
    {
        question: "Which of the following enzyme would be more active in diabetic patients?",
        answers: [
            { text: "Hormone-sensitive lipase", correct: true },
            { text: "Fatty acid synthase", correct: false },
            { text: "Lipoprotein lipase", correct: false },
            { text: "Glucokinase", correct: false },
        ]
    },
    {
        question: "Which of the following confirmed values meet the diagnostic threshold for diabetes?",
        answers: [
            { text: "fasting blood glucose ? 140 mg/dl", correct: false },
            { text: "random glucose > 160 mg/dl", correct: false },
            { text: "2 hour post prandial glucose ≥ to 126 mg/dl", correct: false },
            { text: " fasting blood glucose ≥ 126 mg/dl", correct: true },
        ]
    },
    {
        question: "Which of the following statements is correct?",
        answers: [
            { text: " Insulin suppresses the activity of glycogen synthase", correct: false },
            { text: "Insulin mediates glucose uptake in the brain", correct: false },
            { text: "Prediabetes is a condition characterized by an increased risk for the future development of type 2 diabetes", correct: true },
            { text: "The rise in insulin concentration after meal ingestion is reduced in type 1 but not in type 2 diabetes", correct: false },
        ]
    },
    {
        question: "Insulin deficiency is associated with",
        answers: [
            { text: "Reduced lipolysis", correct: false },
            { text: "Increased ketogenesis", correct: true },
            { text: "Reduced gluconeogenesis", correct: false },
            { text: "Reduced proteolysis", correct: false },
        ]
    },
    {
        question: "The risk factors for type 2 diabetes mellitus include:",
        answers: [
            { text: " family history", correct: false },
            { text: "being overweight", correct: false },
            { text: "high intake of dietary fat", correct: false },
            { text: "All of the options listed are correct", correct: true },
        ]
    }

];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });

}
function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;

    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
  
function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();