import "./App.css";
import { useState } from "react";
import { addFn, subtractFn, multiplyFn, divideFn } from "./helperFunctions";
function App() {
  const [firstOperand, setFirstOperand] = useState("0");
  const [secondOperand, setSecondOperand] = useState("");

  const operations = ["/", "+", "-", "*"];
  const equals = "=";
  const dot = ".";

  const choose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const value = (e.target as HTMLButtonElement).id;

    if (firstOperand === "0") {
      setFirstOperand("");
    }
    setFirstOperand((prev) => prev + value);
  };

  const chooseOperator = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const value = (e.target as HTMLButtonElement).id;

    console.log(value);

    if (operations.some((operation) => firstOperand.includes(operation)))
      return;

    setSecondOperand(firstOperand + value);
    setFirstOperand("");
  };

  const chooseEquals = () => {
    const a = firstOperand;
    const bAndOperation = secondOperand;
    const b = bAndOperation.slice(0, -1);
    const operation = bAndOperation.slice(-1);
    const result = String(calculateResult(a, b, operation));
    setFirstOperand(result)
    setSecondOperand('')
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
  // OVO IZNAD TREBAM

  const chooseDot = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const value = (e.target as HTMLButtonElement).id;

    if (firstOperand === "0" && !firstOperand.includes(".")) {
      console.log("ako je nula i nema tacku");
      setFirstOperand("0" + value);
    } else if (!firstOperand.includes(".")) {
      console.log("ako nema tacku");
      setFirstOperand((prev) => prev + value);
    }
  };

  return (
    <>
      <div className="calculator">
        <div className="display">
          <div className="calculations">{secondOperand}</div>
          <div className="resultDiv">{firstOperand}</div>
        </div>

        <div className="clearDelete">
          <div className="clear">CLEAR</div>
          <div className="delete">DELETE</div>
        </div>
        <div className="buttons">
          <div id="7" onClick={choose} className="number7 btn">
            7
          </div>
          <div id="8" onClick={choose} className="number8 btn">
            8
          </div>
          <div id="9" onClick={choose} className="number9 btn">
            9
          </div>
          <div id="/" onClick={(e) => chooseOperator(e)} className="divide btn">
            /
          </div>
          <div id="4" onClick={choose} className="number4 btn">
            4
          </div>
          <div id="5" onClick={choose} className="number5 btn">
            5
          </div>
          <div id="6" onClick={choose} className="number6 btn">
            6
          </div>
          <div id="*" onClick={chooseOperator} className="multiply btn">
            *
          </div>
          <div id="1" onClick={choose} className="number1 btn">
            1
          </div>
          <div id="2" onClick={choose} className="number2 btn">
            2
          </div>
          <div id="3" onClick={choose} className="number3 btn">
            3
          </div>
          <div id="-" onClick={chooseOperator} className="minus btn">
            -
          </div>
          <div id="0" onClick={choose} className="number0 btn">
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
