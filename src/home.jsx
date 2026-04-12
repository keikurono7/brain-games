import React from 'react'
import gamesList from './games/games'

export default function Home() {
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
          <div className="game-list">
                {gamesList.map((game, index) => (
                    <div key={index} className="game-item">
                        <h3>{game.name}</h3>
                        {game.component ? <game.component /> : null}
                    </div>
                ))}
          </div>
        </div>
      </div>
    </>
  )
}
