import React, { Component } from 'react'
import Die from './Die';

export default class RollDice extends Component {
  render() {
    return (
      <div>
        <Die number="two"/>
        <Die number="five"/>
      </div>
    )
  }
}
