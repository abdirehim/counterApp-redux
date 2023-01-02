 import {useSelector,useDispatch } from "react-redux";
 import React from 'react';
 import {actions } from './store/index'
 import './App.css'

function App() {
  const counter =useSelector ((state) => state.counter);
const dispach = useDispatch();
  const increment =()=>{
    dispach(actions.increament());
       

  }
  const decrement =()=>{
    dispach(actions.decrement());

  }
  const addby =()=>{
    dispach(actions.addby(10))
  }
  const minusby =()=>{
    dispach(actions.subby(10))
  } 
  return (
    <div className="App">
      <h1>counter app</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addby}>add by 10</button>
      <button onClick={minusby}>minus by 10</button>
       
     
    </div>
  );
}

export default App;
