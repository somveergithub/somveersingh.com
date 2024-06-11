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
      </div>
      <h1>Somveer Singh</h1>
      <a href="http://games.somveersingh.com" target="_blank">
        <button>Click to Play Tic-Tac-Toe</button>
      </a>
      <a href="http://chat.somveersingh.com" target="_blank">
        <button>Click to open chat website</button>
      </a>
    </>
  )
}

export default App
