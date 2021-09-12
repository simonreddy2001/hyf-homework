// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


const Todo = function (props) {

  const [checked, setChecked] = useState(false);

  return <>
    <li style={{ textDecorationLine: checked ? 'line-through' : 'none' }}>{props.todo}</li>
    <input id={props.id} type='checkbox' onClick={() => setChecked(!checked)}></input>
  </>
}

export default Todo;
