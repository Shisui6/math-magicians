import React, { Component } from 'react';
import calculate from '../../logic/calculate';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calculator: {
        total: null,
        next: null,
        operation: null,
      },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => ({ calculator: calculate(state.calculator, e.target.innerText) }));
  }

  render() {
    const { calculator } = this.state;

    const displayValue = () => {
      if (calculator.next) {
        return Number(calculator.next).toLocaleString();
      }
      if (calculator.total) {
        return Number(calculator.total).toLocaleString();
      }

      return '0';
    };

    return (
      <div className="calc-cont">
        <div className="calculator">
          <div className="display">{displayValue()}</div>
          <button type="button" className="main" onClick={this.handleClick}>AC</button>
          <button type="button" className="main" onClick={this.handleClick}>+/-</button>
          <button type="button" className="main" onClick={this.handleClick}>%</button>
          <button type="button" className="side" onClick={this.handleClick}>÷</button>
          <button type="button" className="main" onClick={this.handleClick}>7</button>
          <button type="button" className="main" onClick={this.handleClick}>8</button>
          <button type="button" className="main" onClick={this.handleClick}>9</button>
          <button type="button" className="side" onClick={this.handleClick}>x</button>
          <button type="button" className="main" onClick={this.handleClick}>4</button>
          <button type="button" className="main" onClick={this.handleClick}>5</button>
          <button type="button" className="main" onClick={this.handleClick}>6</button>
          <button type="button" className="side" onClick={this.handleClick}>-</button>
          <button type="button" className="main" onClick={this.handleClick}>1</button>
          <button type="button" className="main" onClick={this.handleClick}>2</button>
          <button type="button" className="main" onClick={this.handleClick}>3</button>
          <button type="button" className="side" onClick={this.handleClick}>+</button>
          <button type="button" className="main zero" onClick={this.handleClick}>0</button>
          <button type="button" className="main" onClick={this.handleClick}>.</button>
          <button type="button" className="side" onClick={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
