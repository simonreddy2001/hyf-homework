// import logo from './logo.svg';
import './App.css';

const Todo = function (props) {
  return <li key={props.id}>{props.todo}, {props.deadline}</li>
}

export default Todo;
