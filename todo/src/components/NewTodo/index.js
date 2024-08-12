/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function NewTodo({ onNewTodo }) {
    const [value, setValue] = useState('');

    const erase = () => {
        setValue('');
    };

    const submit = () => {
        if (onNewTodo) {
            onNewTodo(value);
            erase();
        }
    };

    const Onchange = (event) => {
        setValue(event.target.value);
    };

    const onKeyDown = (event) => {
        if (event.which === 13) {
            submit();
        } else if (event.which === 27) {
            erase();
        }
    };

    return (
        <input
            className="new-todo"
            placeholder="Oque precisa ser feito?"
            value={value}
            onChange={Onchange}
            onKeyDown={onKeyDown}
        />
    );
}

NewTodo.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;
