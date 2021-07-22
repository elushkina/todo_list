import {React, useContext }from 'react'
import PropTypes from 'prop-types'
import './TodoItem.css'
import Context from "../../context";

const TodoItem = ({todoItem, index, toggleTodo}) => {
    const {removeTodo} =useContext(Context)
    return (
        <li className='todo__item'>
            <span className={todoItem.completed ? 'todo__item_done': ''}>
                <input type='checkbox' checked={todoItem.completed}
                       onChange={() => toggleTodo(todoItem.id)}
                />
            <strong>{index + 1}</strong>
                {todoItem.title}
            </span>
            <button onClick={() => removeTodo(todoItem.id)}>Удалить</button>
        </li>

    )
}

TodoItem.propTypes = {
    todoItem: PropTypes.object.isRequired,
    index: PropTypes.number,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoItem
