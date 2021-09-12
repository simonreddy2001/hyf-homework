// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import todos from './todos';

const Todo = function (props) {

  const [checked, setchecked] = useState(false);
  return <label>
    <li key={props.id} style={{ textDecorationLine: checked ? 'line-through' : 'none' }}>{props.todo}</li>
    <input type='checkbox' onClick={() => setchecked(!checked)}></input>
    <br /><button onClick={() => {
      //const index = todos.findIndex(props.id);
      //todos.splice(index, 1)
    }}>Delete</button></label>
}

export default Todo;
