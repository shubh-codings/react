import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  //useRef Hook
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "~!@#$%^&*(){}[]/+-+_=";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)},[password])

  useEffect(() => { passwordGenerator() }, [length, numberAllowed, charAllowed, passwordGenerator])
  


  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className="w-50 vh-50 d-flex flex-column my-5 border border-info m-5 p-5 rounded">
        <div className="input-group mb-3 w-100 px-4">
          <input type="text" className="form-control mx-2" id="password" value={password} placeholder="Password" readOnly ref={passwordRef}/>
          <button className="btn btn-primary" onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="input-group mb-3 w-100 d-flex justify-content-between px-4">
          <div>
            <input className="mx-2 pointer" id='length' type="range" min={8} max={100} value={length} onChange={(e) => { setlength(e.target.value) }} />
            <label htmlFor="length">Length : {length}</label>
          </div>
          <div>
            <input className="mx-2" type="checkbox" id="number" defaultChecked={numberAllowed} onChange={() =>  setNumberAllowed((prev)=>!prev) } />
            <label htmlFor="number">Number</label>
          </div>
          <div>
            <input className="mx-2" type="checkbox" id="char" defaultChecked={charAllowed} onChange={() =>  setCharAllowed((prev)=>!prev) } />
            <label htmlFor="char">Character</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
