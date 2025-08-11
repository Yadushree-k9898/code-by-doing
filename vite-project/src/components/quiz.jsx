import React, { useState } from 'react'

const Quiz = () => {
    const questions = [
        {
            question: "What is the capital of India", options: ["New Delhi", "Channai", "Hydrabad", "Agarthala"], answer: "New Delhi"
        },
        {
    "question": "What is the capital of India",
    "options": ["New Delhi", "Channai", "Hydrabad", "Agarthala"],
    "answer": "New Delhi"
  },
  {
    "question": "Which planet is known as the Red Planet",
    "options": ["Earth", "Mars", "Venus", "Jupiter"],
    "answer": "Mars"
  },
  {
    "question": "Who wrote the national anthem of India",
    "options": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahatma Gandhi"],
    "answer": "Rabindranath Tagore"
  },
  {
    "question": "What is the chemical symbol for water",
    "options": ["H2", "H2O", "O2", "HO2"],
    "answer": "H2O"
  },
  {
    "question": "Which gas do humans breathe in to survive",
    "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    "answer": "Oxygen"
  },
  {
    "question": "How many continents are there on Earth",
    "options": ["5", "6", "7", "8"],
    "answer": "7"
  },
  {
    "question": "Which is the largest mammal on Earth",
    "options": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    "answer": "Blue Whale"
  },
  {
    "question": "What is the square root of 64",
    "options": ["6", "7", "8", "9"],
    "answer": "8"
  },
  {
    "question": "In which direction does the sun rise",
    "options": ["North", "East", "West", "South"],
    "answer": "East"
  },
  {
    "question": "Which country is famous for the Eiffel Tower",
    "options": ["Italy", "France", "Germany", "Spain"],
    "answer": "France"
  }
    ]

    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleAnswer = (option) =>{
        if(option === questions[current].answer){
            setScore(score + 1)
        }
        const next = current + 1;
        if(next < questions.length){
            setCurrent(next)
        }else{
            setFinished(true)
        }
    }
  return (
    <div>
        <h2>Quiz App</h2>
        {finished ? (
            <h3>Your Score: {score} / {questions.length} </h3>
        ):(
            <div>
                <h3>{questions[current].question}</h3>
                {questions[current].options.map((opt, i) =>(
                    <button key={i} onClick={()=>handleAnswer(opt)}>{opt}</button>
                ))}
            </div>
        )}
    </div>
  )
}

export default Quiz