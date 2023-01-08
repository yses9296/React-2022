import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [num, setNum] = useState(1);
  const onClickHandler = () => {
    setNum(num + 1)
  }
  return (
    <div id="container">
      <h1>Root : {num} </h1>
      <div id='grid'>
        <Left1 number={num}/>
        <Right1 onClickHandler={() => onClickHandler()}/>
      </div>
    </div>
  );
}
export default App;

const Left1 = (props) => {
  return(
    <div>
      <h1>Left1 section & number : {props.number}</h1>
      <Left2 number={props.number}/>
    </div>
  )
}
const Left2 = (props) => {
  return(
    <div>
      <h1>Left2 section & number : {props.number}</h1>
      <Left3 number={props.number}/>
    </div>
  )
}
const Left3 = (props) => {
  return(
    <div>
      <h1>Left3 section & number : {props.number}</h1>
    </div>
  )
}

const Right1 = (props) => {
  return(
    <div>
      <h1>Right1 section</h1>
      <Right2 onClickHandler={() => {props.onClickHandler()}}/>
    </div>
  )
}
const Right2 = (props) => {
  return(
    <div>
      <h1>Right2 section</h1>
      <Right3 onClickHandler={() => {props.onClickHandler()}}/>
    </div>
  )
}
const Right3 = (props) => {
  return(
    <div>
      <h1>Right3 section</h1>
      <button onClick={() => {props.onClickHandler()}}>Add</button>
    </div>
  )
}

