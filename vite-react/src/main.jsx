import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// function MyApp(){
//   return (
//     <h1>custom through function</h1>
//   )
// }

const reactElm = React.createElement("h1",{},"Hello World")

ReactDOM.createRoot(document.getElementById('root')).render(
  // reactElm
  <App/>
)
