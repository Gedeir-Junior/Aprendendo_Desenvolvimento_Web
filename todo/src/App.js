/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);

    const onNewTodo = (value) => {
        setTodos([
            ...todos,
            { id: new Date().getTime(), title: value, checked: false },
        ]);
    };
    const onToggle = (todo) => {
        setTodos(
            // eslint-disable-next-line no-unused-vars
            todos.map((obj) =>
                obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
            )
        );
    };

    const onRemove = (todo) => {
        setTodos(todos.filter((obj) => obj.id !== todo.id));
    };
    return (
        <section id="App" className="container">
            <header>
                <h1 className="title"> ToDo</h1>
            </header>
            <section className="main">
                <NewTodo onNewTodo={onNewTodo} />
                <TodoList
                    todos={todos}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            </section>
        </section>
    );
}

export default App;
