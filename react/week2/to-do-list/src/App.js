import React, { useState } from 'react';
import todos from './todos';
import Todo from './Todo'
import Header from './Header';

const App = function () {

    const [state, setstate] = useState(todos);

    const newTodo = { id: Math.floor(Math.random() * 100), todo: "Random Text for New Todo" };

    function deleteItem(index) {
        setstate(todos.splice(index, 1))
    }

    return (
        <div>
            <Header />

            <button onClick={() => setstate(todos.push(newTodo))}>Add Todo</button>

            <ul>
                {todos.map((aTodo, i) => <><Todo key={i} todo={aTodo.todo} /><br /><button onClick={() => deleteItem(i)}>Delete</button></>)}
            </ul>
        </div>
    );
}

export default App;
