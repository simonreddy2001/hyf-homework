import logo from './logo.svg';
import './App.css';

const Todo = function (props) {
  return <li>{props.todo}, {props.deadline}</li>
}


export default Todo;
