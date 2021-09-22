import React from 'react';
// import todos from './todos';
// import Todo from './Todo'
import Header from './Header';
// import { searchTodosApi } from './Helper';
import AddTodo from './AddTodo';
import DisplayTodos from './DisplayTodos';

const App = function () {




    return (
        <div>
            <Header />
            <AddTodo />
            <DisplayTodos />
        </div>
    );
}

export default App;
