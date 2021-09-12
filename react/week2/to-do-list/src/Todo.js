// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


const Todo = function (props) {

  const [checked, setchecked] = useState(false);

  return <>
    <li key={props.id} style={{ textDecorationLine: checked ? 'line-through' : 'none' }}>{props.todo}</li>
    <input type='checkbox' onClick={() => setchecked(!checked)}></input>
  </>
}

export default Todo;
