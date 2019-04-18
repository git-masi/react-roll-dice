import React, { Component } from 'react'
import Die from './Die';
import './RollDice.css';

export default class RollDice extends Component {
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice--dice-container">
          <Die number="two"/>
          <Die number="five"/>
        </div>
        <button className="RollDice--btn">Roll Dice!</button>
      </div>
    )
  }
}
