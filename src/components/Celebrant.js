import React from 'react';
import '../index.css'

const Celebrant = ({image, name, age}) => {
  return (
      <div className="celebrant">
        <img
          src={image}
          alt=""
        />
        <div>
          <h3>{name}</h3>
          <h4>{age}</h4>
      </div>
      
      </div>
  );
}

export default Celebrant
