import React from 'react';
import './Die.css';

const die = props => {
  const classes = ["Die", props.rolling ? "wobble-hor-bottom" : null];
  return (
    <div className={classes.join(' ')}>
      <i className={`fas fa-dice-${props.number}`}></i>
    </div>
  )
}

export default die;