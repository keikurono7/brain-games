import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <div className="header">
          <h1>Brain Games</h1>
          <p>Fun games to trick your mind</p>
        </div>
        <div className="game-selection">
          <div className="floating-card">
            <h2>Choose your game</h2>
          </div>
          {/* Game content will go here */}
        </div>
      </div>
    </>
  )
}

export default App
