import logo from './logo.svg';
import './App.css';
import { useRef, useState, useEffect } from 'react';
import StackComponent from './components/StackComponent.js';

function App() {
  const [randomNum,setRandomNum] = useState(0)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  function handleClick(){
    let random = Math.floor(Math.random() * 50)
    setRandomNum(random);
    setTimeout(() => {
    ref1.current.getElementsByClassName('pop-button')[0].click();
    ref2.current.getElementsByClassName('pop-button')[0].click();
    },1000)
  }
  function handleStart(){
    ref1.current.getElementsByClassName('push-button')[0].click();
    ref2.current.getElementsByClassName('push-button')[0].click();
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
      <StackComponent ref={ref1} value={randomNum} Name={'Me'}></StackComponent>
      <StackComponent ref={ref2} value={randomNum} Name={'Robot'}></StackComponent>
      </div>
    </div>
  );
}

export default App;
