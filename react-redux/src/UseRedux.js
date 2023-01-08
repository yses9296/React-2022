import React, { useState } from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';
function reducer(currentState, action){
    // init
    if(currentState === undefined){
        return {
            num: 1
        }
    }
    
    const newState = {...currentState} //현재 값 복제해서 새로운 변수 생성

    if(action.type === 'ADD'){
        newState.num++;
    }
    else if(action.type === 'SUBTRACT'){
        newState.num--;
    }
    return newState
}
const _store = createStore(reducer);

const UseRedux = () => {
    
    // const [num, setNum] = useState(1);
    return (
        <div id="container">
        <h1>Root :  </h1>
        <div id='grid'>
            <Provider store={_store}>
                <Left1/>
                <Right1/>
            </Provider>
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
    // function getNum(state){
    //     return state.num
    // }
    const number = useSelector(state => state.num);
    return(
        <div>
        <h1>Left3 : {number}</h1>
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
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Right3 : </h1>
            <button onClick={() => { dispatch({ type:'ADD' }) }}>Add</button>
            <button onClick={() => { dispatch({ type:'SUBTRACT' }) }}>SUBTRACT</button>
        </div>
    )
}

