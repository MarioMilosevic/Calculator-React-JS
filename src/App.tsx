import "./App.css";
import { useState } from "react";
function App() {
  const [firstOperand, setFirstOperand] = useState("0");
  const [secondOperand, setSecondOperand] = useState('');

  const operations = [".", "/", "+", "-", "*"];
  const equals = "="

  const choose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = (e.target as HTMLButtonElement).id;

    const isFirstValueOperation = operations.some((operation) =>
      value.startsWith(operation)
    );

    if(operations.includes(firstOperand.slice(-1))){
      console.log(firstOperand)
      return
    }
    // if (operations.some(operation => firstOperand.includes(operation))) {
    //   console.log(firstOperand);
    //   return;
    // }
    

    if (isFirstValueOperation) {
      setFirstOperand(firstOperand + value);
    }
  };

  const chooseOperator = () => {

  }


    // if (firstOperand.startsWith("0") && firstOperand.length === 1) {
    //   console.log("odje 2");
    //   setFirstOperand("");
    //   setFirstOperand((prev) => prev + value);
    // }
    // const isFirstDigit =
    //   firstOperand === "" && ["+", "-", "*", "/", "="].indexOf(value) === -1;
    // const isStartsWithZero =
    //   firstOperand === "0" && ["+", "-", "*", "/", "="].indexOf(value) === -1;
    // console.log(isFirstDigit)
    // console.log(isStartsWithZero)

    // setFirstOperand(prev => {
    //   if(prev.startsWith("0")){
    //     return prev = value
    //   } else {
    //     return prev += value
    //   }
    // })

  return (
    <>
      <div className="calculator">
        <div className="display">
          <div className="secondOperand">{secondOperand}</div>
          <div className="resultDiv">{firstOperand}</div>
        </div>
        <div className="clearDelete">
          <button className="clear">CLEAR</button>
          <button className="delete">DELETE</button>
        </div>
        <div className="buttons">
          <button id="7" onClick={(e) => choose(e)} className="number7 btn">
            7
          </button>
          <button id="8" onClick={choose} className="number8 btn">
            8
          </button>
          <button id="9" onClick={choose} className="number9 btn">
            9
          </button>
          <button id="/" onClick={choose} className="divide btn">
            /
          </button>
          <button id="4" onClick={choose} className="number4 btn">
            4
          </button>
          <button id="5" onClick={choose} className="number5 btn">
            5
          </button>
          <button id="6" onClick={choose} className="number6 btn">
            6
          </button>
          <button id="*" onClick={choose} className="multiply btn">
            *
          </button>
          <button id="1" onClick={choose} className="number1 btn">
            1
          </button>
          <button id="2" onClick={choose} className="number2 btn">
            2
          </button>
          <button id="3" onClick={choose} className="number3 btn">
            3
          </button>
          <button id="-" onClick={choose} className="minus btn">
            -
          </button>
          <button id="0" onClick={choose} className="number0 btn">
            0
          </button>
          <button id="." onClick={choose} className="dot btn">
            .
          </button>
          <button id="=" onClick={choose} className="equals btn">
            =
          </button>
          <button id="+" onClick={choose} className="plus btn">
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
