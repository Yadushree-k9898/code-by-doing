import React, { useState } from 'react'

const CoinFlipping = () => {
    const [result, setResult] = useState("");

    const flipCoin = () =>{
        const outcomes = ["Heads", "Tails"];
        const randomeOutCome = outcomes[Math.floor(Math.random() * outcomes.length)];
        setResult(randomeOutCome)
    }
  return (
    <div>
        <h1>Coin Flipping</h1>
        <button onClick={flipCoin}>flip Coin</button>
        {result && <p>Result: {result}</p>}
    </div>
  )
}

export default CoinFlipping