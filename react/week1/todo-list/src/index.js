import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Todo = function (props) {
  return <li>{props.todo}, {props.deadline}</li>
}
ReactDOM.render(
  <>
    <h1>Todo List</h1>
    <ul>
      <Todo todo="Get out of bed" deadline={"Wed Sep 13 2017"} />
      <Todo todo="Brush teeth" deadline={"Thu Sep 14 2017"} />
      <Todo todo="Eat breakfast" deadline={"Fri Sep 15 2017"} />
    </ul>
  </>,
  document.getElementById('root')
);
