import React, {useState, useEffect} from 'react'

import "./index.css";
import { data } from "./data";


function App() {
  const [cards, setCards] = useState(data);
  // const [show, setShow] = useState('show');
  const [isLoading, setIsLoading] = useState(true);

  const removeItem = (id) => {
    let newCards = cards.filter((card) => card.id !== id)
    setCards(newCards);
  };

  const loading = function () {
    setIsLoading(false)
  }

  useEffect(() => {
    window.setTimeout(loading, 2000) 
  }, [])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  } 

  return (
    <div className="header">
      <h1>Our Tours</h1>
      {cards.map((card)  => ( 
        <div key={card.id} className="container">
          <section className="card">
            <img src={card.image} alt="" />
            <div className="content">
              <div className="text">
                <h3>{card.title}</h3>
                <h4>$ {card.price}</h4>
              </div>
              <p>{card.description}</p>
              <button className="btn" onClick={() => removeItem(card.id)}>
                Not interested
              </button>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}

export default App
