import React, { useState } from 'react';
import './App.css';
import { createStore } from 'redux'
const store = createStore();
const UseRedux = () => {
    
    const [num, setNum] = useState(1);
    const onClickHandler = () => {
        setNum(num + 1)
    }
    return (
        <div id="container">
        <h1>Root : {num} </h1>
        <div id='grid'>
            <Left1/>
            <Right1/>
        </div>
        </div>
    );
}
export default UseRedux;

const Left1 = (props) => {
    return(
        <div>
        <h1>Left1 : </h1>
        <Left2/>
        </div>
    )
}
const Left2 = (props) => {
    return(
        <div>
        <h1>Left2 : </h1>
        <Left3/>
        </div>
    )
}
const Left3 = (props) => {
    return(
        <div>
        <h1>Left3 : </h1>
        </div>
    )
}

const Right1 = (props) => {
    return(
        <div>
        <h1>Right1 : </h1>
        <Right2/>
        </div>
    )
}
const Right2 = (props) => {
    return(
        <div>
        <h1>Right2 : </h1>
        <Right3/>
        </div>
    )
}
const Right3 = (props) => {
    return(
        <div>
        <h1>Right3 : </h1>
        <button onClick={() => {}}>Add</button>
        </div>
    )
}

