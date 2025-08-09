import React, { useState } from 'react'

const Quotes = () => {
    const quotes = [
         "Believe you can and you're halfway there.",
    "Your time is limited, so don’t waste it.",
    "The harder you work, the luckier you get.",
    "Do what you can with what you have.",
    "Stay positive, work hard, make it happen."
    ];
    const[quote, setQuote] = useState(quotes[0]);

    const getRandomQuote = () =>{
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex])
    }
  return (
    <div style={{padding: 20}}>
        <h2>Get Random Quote</h2>
        <p>"{quote}"</p>
        <button onClick={getRandomQuote}>Get Quote</button>
    </div>
  )
}

export default Quotes