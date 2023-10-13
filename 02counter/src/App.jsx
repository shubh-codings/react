import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  function increaseCounter(){
    (counter<20)?setCounter(counter+1):setCounter(counter)
  }
  function decreaseCounter(){
    (counter>0)?setCounter(counter-1):setCounter(0)

  }

  return (
    <>
        <p>counter: {counter}</p>
        <button onClick={increaseCounter}>Increase</button>
        <button onClick={decreaseCounter}>Decrease</button>
    </>
  )
}

export default App
