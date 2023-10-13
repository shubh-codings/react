

import { useState } from 'react'
import './App.css'

function App() {
  const[color , setColor]= useState("olive")

  return (
    <>
      <div className=" vw-100 vh-100 d-flex justify-content-center align-items-end pb-5" style={{backgroundColor:color}}>
      <div className="btn-group m-2 border border-info" role="group" aria-label="Basic mixed styles example">
        <button type="button" className="btn "onClick={()=>setColor("red")} id='red'>Red</button>
        <button type="button" className="btn" onClick={()=>setColor("blue")} id='blue'>Blue</button>
        <button type="button" className="btn" onClick={()=>setColor("green")} id='green'>Green</button>
        <button type="button" className="btn" onClick={()=>setColor("yellow")} id='yellow'>Yellow</button>
        <button type="button" className="btn"onClick={()=>setColor("orange")} id='orange'>Orange</button>
        <button type="button" className="btn"onClick={()=>setColor("grey")} id='grey'>Grey</button>
        <button type="button" className="btn " onClick={()=>setColor("white")} id='white'>White</button>
        <button type="button" className="btn"onClick={()=>setColor("black")} id='black'>Black</button>
        <button type="button" className="btn"onClick={()=>setColor("lavender")} id='lavender'>Lavender</button>
        <button type="button" className="btn"onClick={()=>setColor("purple")} id='purple'>purple</button>
      </div>
      </div>

    </>
  )
}

export default App
