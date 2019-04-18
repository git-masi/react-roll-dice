import React, { Component } from 'react'
import Die from './Die';
import './RollDice.css';

export default class RollDice extends Component {
  state = {
    die1: 'two',
    die2: 'five',
    rolling: false
  }

  randomDieValue = () => {
    const diceValues = ['one', 'two', 'three', 'four', 'five', 'six'];
    return diceValues[Math.floor(Math.random() * 6)]; 
  }

  rollDiceHandler = (e) => {
    e.preventDefault();
    const updateDie1 = this.randomDieValue();
    const updateDie2 = this.randomDieValue();
    this.setState({rolling: true});
    setTimeout(() => {
      this.setState({
        die1: updateDie1,
        die2: updateDie2,
        rolling: false
      })
    }, 500);
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice--dice-container">
          <Die number={this.state.die1} rolling={this.state.rolling}/>
          <Die number={this.state.die2} rolling={this.state.rolling}/>
        </div>
        <button className="RollDice--btn" onClick={this.rollDiceHandler}>{this.state.rolling ? 'Rolling...' : 'Roll Dice!'}</button>
      </div>
    )
  }
}
