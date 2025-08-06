import React, { useState, useEffect } from 'react'

const UseEffectExamples = () => {
    const [count, setCount] = useState(0)



    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data)
        )
    }, [])
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('Tick');
            
        }, 1000)
        return () => clearInterval(timer)
    }, [])
    useEffect(()=>{
        console.log("Count changed", count);
        
    }, [count])
    useEffect(()=>{
        console.log("Component mounted");
        
    }, [])

     useEffect(()=>{
        console.log("Either name or age changed");
        
     },[] )
  return (
    <div>
      <h1>This is component mounting...</h1>
    </div>
  )
}

export default UseEffectExamples
