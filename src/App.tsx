import "./App.css";
import { useState } from "react";
function App() {
  const [firstOperand, setFirstOperand] = useState("0");
  const [secondOperand, setSecondOperand] = useState();

  const operations = [".", "/", "+", "-", "*"];
  const equals = "=";

  const choose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = (e.target as HTMLButtonElement).id;

    const isFirstValueOperation = operations.some((operation) =>
      value.startsWith(operation)
    );

    if (operations.includes(firstOperand.slice(-1))) {
      console.log(firstOperand);
      return;
    }
    // if (operations.some(operation => firstOperand.includes(operation))) {
    //   console.log(firstOperand);
    //   return;
    // }

    if (isFirstValueOperation) {
      setFirstOperand(firstOperand + value);
    }
  };

  const chooseOperator = (e) => {
    const value = e.target.id;
    console.log(value);
    
    if (operations.some(operation => firstOperand.includes(operation))) return;
    if (firstOperand === "0") {
      setFirstOperand(prev => prev + value);
    }
  };
  
  
  


  const chooseEquals = () => {};

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
          <div id="/" onClick={chooseOperator} className="divide btn">
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
          <div id="." onClick={chooseOperator} className="dot btn">
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
