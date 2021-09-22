import React, { useState, useEffect } from 'react';
import { getNextId, getTodos } from './Helper';
import Todo from './Todo';

const AddTodo = function () {

    const [list, setList] = useState([]);
    const [textValue, changeTextValue] = useState('');
    const [dateValue, changeDateValue] = useState('');
    const [editMode, updateEditMode] = useState(-1)
    const [newDescription, changeDescription] = useState('');

    useEffect(() => {
        setList([]);
        getTodos().then(data => setList(data));
    }, []);

    const nextId = getNextId(list);
    let newTodo = { id: nextId, description: textValue, deadline: dateValue };

    function addItem() {
        setList(list.concat(newTodo));
        changeTextValue('');
        changeDateValue('');
    }
    function deleteItem(id) {
        const newList = list.filter((a) => a.id !== id);
        setList(newList);
    }
    function editItem(id, description) {
        if (description) {
            const newList = list.map(todo => {
                if (todo.id === id) {
                    todo.description = description;
                } return todo
            })
            setList(newList);
            changeDescription('');
        }
    }
    return (
        <div>
            <input type="text" value={textValue} onChange={(event) => {
                let value = event.target.value
                changeTextValue(value);
            }} />
            <input type="date" value={dateValue} onChange={(event) => {
                let value = event.target.value
                changeDateValue(value);
            }} />
            <button onClick={addItem}>Add Todo</button>
            <ul>
                {list.length !== 0 ? list.map((aTodo) =>
                    editMode !== aTodo.id ? (<div key={aTodo.id} style={{ borderStyle: 'solid' }}>
                        <Todo key={aTodo.id} description={aTodo.description} deadline={aTodo.deadline} />
                        <button onClick={() => deleteItem(aTodo.id)}>Delete</button>
                        <button onClick={() => updateEditMode(aTodo.id)}>Edit</button></div>) :
                        (<div key={aTodo.id} style={{ borderStyle: 'solid' }}>
                            <li /><input type="text" value={newDescription} onChange={(event) => {
                                let value = event.target.value
                                changeDescription(value);
                            }} /><button onClick={() => { editItem(aTodo.id, newDescription); updateEditMode(-1) }}>Update</button>
                            <button onClick={() => deleteItem(aTodo.id)}>Delete</button></div>

                        )) : <h1>No todos left</h1>}
            </ul>
        </div>
    );

}

export default AddTodo;
