import './App.css';

function App() {
return (
    <>
      <div className="calculator">
        <div className="display">
          <div className="calculations"></div>
          <div className="resultDiv">0</div>
        </div>

        <div className="clearDelete">
          <div className="clear">CLEAR</div>
          <div className="delete">DELETE</div>
        </div>
        <div className="buttons">
          <div id="7" className="number7 btn">7</div>
          <div id="8" className="number8 btn">8</div>
          <div id="9" className="number9 btn">9</div>
          <div id="/" className="divide btn">/</div>
          <div id="4" className="number4 btn">4</div>
          <div id="5" className="number5 btn">5</div>
          <div id="6" className="number6 btn">6</div>
          <div id="*" className="multiply btn">*</div>
          <div id="1" className="number1 btn">1</div>
          <div id="2" className="number2 btn">2</div>
          <div id="3" className="number3 btn">3</div>
          <div id="-" className="minus btn">-</div>
          <div id="0" className="number0 btn">0</div>
          <div id="." className="dot btn">.</div>
          <div id="=" className="equals btn">=</div>
          <div id="+" className="plus btn">+</div>
        </div>
      </div>
    </>
  );
}

export default App;
