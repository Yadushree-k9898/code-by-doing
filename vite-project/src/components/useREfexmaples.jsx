import React, { useEffect, useRef, useState } from 'react'

const UseRefexmaples = () => {
    const [count, setCount ] = useState(0)
    const inputRef = useRef();
    const prevCount = useRef();
    const intervalRef = useRef();
    const renderCount = useRef(0);
    const divRef = useRef();

    useEffect(()=>{
        console.log(divRef.current.innerText);
        
    }, [])


    useEffect(()=>{
        renderCount.current += 1
    })

    useEffect(()=>{
        intervalRef.current = setInterval(()=> console.log("Run")
        , 100)

        return () => clearInterval(intervalRef.current)
    }, [])
    useEffect(()=>{
        inputRef.current.focus();
    }, [])

    useEffect(()=>{
        prevCount.current = count
    }, [count])
  return (
    <div>
      <input ref={inputRef}/>
      <div ref={divRef}>Hello Ref</div>
    </div>
  )
}

export default UseRefexmaples
