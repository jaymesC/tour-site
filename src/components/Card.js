import React from "react";
import "../index.css";
import { data } from "../data";


const Card = ({ title, description, price, image }) => {
  const [card, setCard] = React.useState(data);


  const OnClickHandler = () => {
    setCard([]);
  };

  return (
    <div className="container">
      <section className="card">
        <img src={image} alt="" />
        <div className="content">
          <div className="text">
            <h3>{title}</h3>
            <h4>$ {price}</h4>
          </div>
          <p>{description}</p>
          <button className="btn" onClick={OnClickHandler}>
            Not interested
          </button>
        </div>
      </section>
    </div>
  );
};

export default Card;

