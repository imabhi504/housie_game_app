import logo from './logo.svg';
import './App.css';
import { useRef, useState, useEffect } from 'react';
import StackComponent from './components/StackComponent.js';
let childCallables1= {}
let childCallables2 = {}
function App() {
  const [randomNum,setRandomNum] = useState(0)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const setChildCallables1 = (callables) => {
    childCallables1 = callables;
  }
  const setChildCallables2 = (callables) => {
    childCallables2 = callables;
  }
  function handleClick(event){
    let random = Math.floor(Math.random() * 50)
    setRandomNum(random);
      childCallables1.handlePop(event)
      childCallables2.handlePop(event)
  }
  function handleStart(event){
    childCallables1.handlePush(event)
    childCallables2.handlePush(event)
  }
  return (
    <div className="App">
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleClick} style={{
    margin: '50px'
  }}>
        Click Me
      </button>
      <div>{randomNum}</div>
      <div className='rowC'>
      <StackComponent ref={ref1} value={randomNum} Name={'Me'} setCallables1={setChildCallables1}></StackComponent>
      <StackComponent ref={ref2} value={randomNum} Name={'Robot'} setCallables2={setChildCallables2}></StackComponent>
      </div>
    </div>
  );
}

export default App;
