import React, { useState } from 'react';
import calculate from './logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [calculator, setCalculator] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setCalculator(calculate(calculator, e.target.innerText));
  };

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
        <button type="button" className="main ac" onClick={handleClick}>AC</button>
        <button type="button" className="main" onClick={handleClick}>+/-</button>
        <button type="button" className="main" onClick={handleClick}>%</button>
        <button type="button" className="side divide" onClick={handleClick}>÷</button>
        <button type="button" className="main" onClick={handleClick}>7</button>
        <button type="button" className="main" onClick={handleClick}>8</button>
        <button type="button" className="main" onClick={handleClick}>9</button>
        <button type="button" className="side" onClick={handleClick}>x</button>
        <button type="button" className="main" onClick={handleClick}>4</button>
        <button type="button" data-testid="five" className="main" onClick={handleClick}>5</button>
        <button type="button" className="main" onClick={handleClick}>6</button>
        <button type="button" className="side" onClick={handleClick}>-</button>
        <button type="button" className="main" onClick={handleClick}>1</button>
        <button type="button" className="main" onClick={handleClick}>2</button>
        <button type="button" className="main" onClick={handleClick}>3</button>
        <button type="button" className="side" onClick={handleClick}>+</button>
        <button type="button" className="main zero" onClick={handleClick}>0</button>
        <button type="button" className="main" onClick={handleClick}>.</button>
        <button type="button" className="side equal" onClick={handleClick}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
