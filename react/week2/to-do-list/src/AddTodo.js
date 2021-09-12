import React from 'react';
import Todo from './Todo';

const AddTodo = function () {


    return (

        <Todo key={Math.floor(Math.random() * 100)} todo={"Random Text for New Todo"} />

    );

}

export default AddTodo;
