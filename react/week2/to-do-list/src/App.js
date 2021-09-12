import React, { useState } from 'react';
import todos from './todos';
import Todo from './Todo'
import Header from './Header';
//import AddTodo from './AddTodo';

const App = function () {

    const [state, setstate] = useState(todos);

    const newTodo = { id: Math.floor(Math.random() * 100), todo: "Random Text for New Todo" };

    return (
        <div>
            <Header />
            <button onClick={() => setstate(todos.push(newTodo))}>Add Todo</button>

            <ul>
                {todos.map((aTodo, i) => <Todo key={i} todo={aTodo.todo} />)}
            </ul>
        </div>
    );
}

export default App;
