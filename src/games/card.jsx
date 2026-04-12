import React from 'react'
import './games.css'

function Card() {
  const [page, setPage] = React.useState("start");

  const cards = ["JBC","JBS","JRD","JRH","KBC","KBS","KRD","KRH","QBC","QBS","QRD","QRH"];
  const [setA, setSetA] = React.useState([]);
  const [setB, setSetB] = React.useState([]);

  const shuffleCards = () => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }

  const cardCheck = (cardSet) => {
    const count = {J:0, Q:0, K:0};
    const color = {B:0, R:0};
    cardSet.forEach(card => count[card[0]]++);
    cardSet.forEach(card => color[card[1]]++);

    return (
      count.J >=1 && count.Q >=1 && count.K >=1 && color.B >=2 && color.R >=2
    )
  } 

  const start = () => {
    let tempA = [];
    let tempB = [];
    do{
      shuffleCards();
      tempA = cards.slice(0, 6).map(card => card);
      tempB = cards.slice(6, 11).map(card => card);
      console.log(tempA[0]);
    }while(!cardCheck(tempA) || !cardCheck(tempB));
    setSetA(cards.slice(0, 6));
    setSetB(cards.slice(6, 11));
    setPage("game");
    setTimeout(() => {
      setPage("game2");
    }, 2000);
    setTimeout(() => {
      setPage("game3");
    }, 4000);
    setTimeout(() => {
      setPage("end");
    }, 6000);
  }

  return (
    <div className='screen'>
      {page === "start" && (
        <div className='card1'>
          <p>Quickly pick ONE card in your mind… don’t change it.</p>
          <button onClick={start}>Start</button>
        </div>
      )}
      {page === "game" && (
        <div className='card2'>
          {setA.map((card, index) => (
            <img key={index} src={`/assets/${card}.png`} alt={card} />
          ))}
        </div>
      )}
      {page === "game2" && (
        <div><p>Do you remember the card you picked?</p></div>
      )}
      {page === "game3" && (
        <div><p>Let’s see if we can find it...</p></div>
       )}
      {page === "end" && (
        <div className='card3'>
          <div className='result'>
            {setB.map((card, index) => (
              <img key={index} src={`/assets/${card}.png`} alt={card} />
            ))}
          </div>
          <p>Oops! We couldn't find your card.</p>
          <button onClick={() => setPage("start")}>restart</button>
        </div>
      )}
    </div>
    
  )
}

export default Card