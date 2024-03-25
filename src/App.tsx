import "./App.css";
import { useState } from "react";

function App() {
  const [firstOperand, setFirstOperand] = useState("0");
  const [secondOperand, setSecondOperand] = useState("");
  const [operation, setOperation] = useState("");

  const chooseNumber = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const value = (e.target as HTMLButtonElement).id;

    if (firstOperand === "0") {
      setFirstOperand("");
    }
    setFirstOperand((prev) => prev + value);
  };

  const chooseOperator = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const value = (e.target as HTMLButtonElement).id;

    if (firstOperand && secondOperand && operation) {
      const result = String(
        calculateResult(firstOperand, secondOperand, operation)
      );
      setSecondOperand(result + value);
      setFirstOperand("");
      setOperation("");
    } else {
      setSecondOperand(firstOperand);
      setFirstOperand("");
      setOperation(value);
    }
  };

  const chooseEquals = () => {
    const result = String(
      calculateResult(firstOperand, secondOperand, operation)
    );
    setFirstOperand(result);
    setSecondOperand("");
    setOperation("");
  };

  const calculateResult = (
    first: string,
    second: string,
    operation: string
  ) => {
    const firstToNumber = Number(first);
    const secondToNumber = Number(second);
    let result;
    switch (operation) {
      case "+":
        result = secondToNumber + firstToNumber;
        break;
      case "-":
        result = secondToNumber - firstToNumber;
        break;
      case "*":
        result = secondToNumber * firstToNumber;
        break;
      case "/":
        result = secondToNumber / firstToNumber;
        break;
      default:
        result = NaN;
    }
    return result;
  };

  const chooseDot = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const value = (e.target as HTMLButtonElement).id;
    if (firstOperand.length === 0 && !firstOperand.includes(".")) {
      setFirstOperand("0" + value);
    } else if (!firstOperand.includes(".")) {
      setFirstOperand((prev) => prev + value);
    }
  };

  const clearOperands = () => {
    setFirstOperand("0");
    setSecondOperand("");
  };

  const deleteOperand = () => {
    if (firstOperand !== "0") {
      setFirstOperand((prev) => {
        const newResult = prev.slice(0, -1);
        return newResult === "" ? "0" : newResult;
      });
    }
  };

  return (
    <>
      <div className="calculator">
        <div className="display">
          <div className="calculations">
            {secondOperand}
            {operation}
          </div>
          <div className="resultDiv">{firstOperand}</div>
        </div>

        <div className="clearDelete">
          <div className="clear" onClick={clearOperands}>
            CLEAR
          </div>
          <div className="delete" onClick={deleteOperand}>
            DELETE
          </div>
        </div>
        <div className="buttons">
          <div id="7" onClick={chooseNumber} className="number7 btn">
            7
          </div>
          <div id="8" onClick={chooseNumber} className="number8 btn">
            8
          </div>
          <div id="9" onClick={chooseNumber} className="number9 btn">
            9
          </div>
          <div id="/" onClick={(e) => chooseOperator(e)} className="divide btn">
            /
          </div>
          <div id="4" onClick={chooseNumber} className="number4 btn">
            4
          </div>
          <div id="5" onClick={chooseNumber} className="number5 btn">
            5
          </div>
          <div id="6" onClick={chooseNumber} className="number6 btn">
            6
          </div>
          <div id="*" onClick={chooseOperator} className="multiply btn">
            *
          </div>
          <div id="1" onClick={chooseNumber} className="number1 btn">
            1
          </div>
          <div id="2" onClick={chooseNumber} className="number2 btn">
            2
          </div>
          <div id="3" onClick={chooseNumber} className="number3 btn">
            3
          </div>
          <div id="-" onClick={chooseOperator} className="minus btn">
            -
          </div>
          <div id="0" onClick={chooseNumber} className="number0 btn">
            0
          </div>
          <div id="." onClick={chooseDot} className="dot btn">
            .
          </div>
          <div id="=" onClick={chooseEquals} className="equals btn">
            =
          </div>
          <div id="+" onClick={chooseOperator} className="plus btn">
            +
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
