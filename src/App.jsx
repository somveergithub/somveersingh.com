import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="react" alt="React logo" />
        </a>
        <a href="https://somveersing.com" target="_blank">
          <img src={heartLogo} className="react" alt="Heart logo" />
        </a>
      </div>
      <h1>Somveer Singh</h1>
    </>
  )
}

export default App
