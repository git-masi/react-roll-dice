import React, { Fragment } from 'react';
import './Die.css';

const die = props => {
  return (
    <div className="Die">
      <i className={`fas fa-dice-${props.number}`}></i>
    </div>
  )
}

export default die;