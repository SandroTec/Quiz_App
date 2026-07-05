const playerName = document.getElementById("playerName");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

const questionContainer = document.getElementById("questionField");


let questions: {
    question: string;
    optionalAnswers: string[];
    correctAnswer: string;
} [] = [
        {
            question: "What is the capital of Italy?",
            optionalAnswers: ["Rome", "Paris", "Berlin", "Madrid"],
            correctAnswer: "Rome"
        }, 
        {
            question: "what´is the by-name for Alexander",
            optionalAnswers: ["the great", "the big one", "the tall", "the small"],
            correctAnswer: "the great"
        },
]

