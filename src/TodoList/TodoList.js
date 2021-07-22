import React from 'react'
import TodoItem from "./TodoListItem/TodoItem";
import './TodoList.css'
import PropTypes from 'prop-types'


const TodoList = (props) => {
    return (
        <div>
            <div className='todo__list'>
                <ul>
                    {props.todos.map((todoItem, index) => {
                        return <TodoItem key={todoItem.id} index={index}
                                         todoItem={todoItem} toggleTodo={props.toggleTodo}/>
                    })}</ul>
            </div>
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList