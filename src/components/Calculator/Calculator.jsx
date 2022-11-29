import React from 'react';
import './Calculator.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calc-cont">
        <div className="calculator">
          <div className="display">0</div>
          <div className="main">AC</div>
          <div className="main">+/-</div>
          <div className="main">%</div>
          <div className="side">÷</div>
          <div className="main">7</div>
          <div className="main">8</div>
          <div className="main">9</div>
          <div className="side">x</div>
          <div className="main">4</div>
          <div className="main">5</div>
          <div className="main">6</div>
          <div className="side">-</div>
          <div className="main">1</div>
          <div className="main">2</div>
          <div className="main">3</div>
          <div className="side">+</div>
          <div className="zero main">0</div>
          <div className="main">.</div>
          <div className="side">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
