import React from 'react'
import './styles.css'

function Calculator() {
  return (
<div className="calculator-container">
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">1,232 x</div>
          <div className="current-operand">15,355</div>
        </div>
        <button className="span-two function-btn">AC</button>
        <button className="function-btn">DEL</button>
        <button className="function-btn">÷</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="function-btn">x</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="function-btn">-</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="function-btn">+</button>
        <button>.</button>
        <button>0</button>
        <button className="span-two function-btn">=</button>
      </div>
    </div>
  )
}

export default Calculator
