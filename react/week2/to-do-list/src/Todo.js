// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


const Todo = function (props) {

  const [checked, setChecked] = useState(false);

  return <>


    <li key={props.id} style={{ textDecorationLine: checked ? 'line-through' : 'none' }}>{props.todo}</li>
    <input type='checkbox' onClick={() => setChecked(!checked)}></input>

  </>
}

export default Todo;
