import React, { useState } from "react";
import "./styles.css";

function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "-", "+", "."];
  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
  };

  const solve = () => {
    try {
      setResult(eval(calc));
    } catch (error) {
      console.log(error);
      setResult("Invalid Input");
    }
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const clearAll = () => {
    setCalc("");
    setResult("");
  };

  return (
    <div className="calculator-container">
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{result}</div>
          <div className="current-operand">{calc || "0"}</div>
        </div>
        <button className="span-two function-btn" onClick={() => clearAll()}>
          AC
        </button>
        <button className="function-btn" onClick={() => deleteLast()}>
          DEL
        </button>
        <button className="function-btn" onClick={() => updateCalc("/")}>
          ÷
        </button>
        <button onClick={() => updateCalc("1")}>1</button>
        <button onClick={() => updateCalc("2")}>2</button>
        <button onClick={() => updateCalc("3")}>3</button>
        <button className="function-btn" onClick={() => updateCalc("*")}>
          x
        </button>
        <button onClick={() => updateCalc("4")}>4</button>
        <button onClick={() => updateCalc("5")}>5</button>
        <button onClick={() => updateCalc("6")}>6</button>
        <button className="function-btn" onClick={() => updateCalc("-")}>
          -
        </button>
        <button onClick={() => updateCalc("7")}>7</button>
        <button onClick={() => updateCalc("8")}>8</button>
        <button onClick={() => updateCalc("9")}>9</button>
        <button className="function-btn" onClick={() => updateCalc("+")}>
          +
        </button>
        <button onClick={() => updateCalc(".")}>.</button>
        <button onClick={() => updateCalc("0")}>0</button>
        <button className="span-two function-btn" onClick={() => solve()}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
