import React, { useState } from 'react';
import todos from './todos';
import Todo from './Todo'
import Header from './Header';

const App = function () {

    const [list, setList] = useState(todos);

    let newTodo = { id: Math.floor(Math.random() * 100), todo: "Random Text for New Todo" };

    function deleteItem(id) {
        const newList = list.filter((a) => a.id !== id);
        setList(newList);
    }

    return (
        <div>
            <Header />

            <button onClick={() => setList(list.concat(newTodo))}>Add Todo</button>

            <ul>
                {list.length !== 0 ? list.map((aTodo, i) => <><Todo key={i} todo={aTodo.todo} /><br /><button onClick={() => deleteItem(aTodo.id)}>Delete</button></>) : <h1>No todos left</h1>}
                {console.log(list)}
            </ul>
        </div>
    );
}

export default App;
