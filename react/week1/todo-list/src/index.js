import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './App';
import todos from './todos';


ReactDOM.render(
  <>
    <h1>Todo List</h1>
    <ul>
      {todos.map((aTodo) => <Todo todo={aTodo.todo} deadline={aTodo.deadline} />)}
    </ul>
  </>,
  document.getElementById('root')
);
