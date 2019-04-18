import React from 'react';
import './Die.css';

const die = props => {
  const classes = ["Die", props.rolling && "wobble-hor-bottom"].join(' ');
  return (
    <div className={classes}>
      <i className={`fas fa-dice-${props.number}`}></i>
    </div>
  )
}

export default die;