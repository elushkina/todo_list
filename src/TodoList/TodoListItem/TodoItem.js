import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import './TodoItem.css'
import Context from "../../context";

const TodoItem = ({todoItem, index, toggleTodoChecked, onMarkImportant}) => {
    const {removeTodo} = useContext(Context)
    let classNames = ''
    if (todoItem.completed) {
        classNames += ' todo__item_done'
    }
    if (todoItem.important) {
        classNames += ' todo__item_important'
    }

    return (
        <li className='todo__item'>
            <p>
                <label>
                    <input type="checkbox" checked={todoItem.completed} onChange={() => toggleTodoChecked(todoItem.id)}/>
                    <span className={classNames}>{index + 1}  {todoItem.title} </span>
                </label>
            </p>

            <div>
                <button onClick={() => onMarkImportant(todoItem.id)} className="waves-effect blue cyan accent-4 btn">
                    <i className="material-icons ">priority_high</i></button>
                <button onClick={() => removeTodo(todoItem.id)} className="waves-effect red btn">
                    <i className="material-icons ">delete</i></button>
            </div>
        </li>

    )
}

TodoItem.propTypes = {
    todoItem: PropTypes.object.isRequired,
    index: PropTypes.number,
    toggleTodoChecked: PropTypes.func.isRequired
}

export default TodoItem
