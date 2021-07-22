import React, {useEffect, useState} from 'react'
import TodoList from "./TodoList/TodoList";
import './App.css'
import Context from "./context";
import AddTodo from "./TodoList/AddTodo/AddTodo";
import {Preloader} from "./Preloader/Preloader";

const initialState = [
    {id: 1, completed: false, title: 'купить молочко'},
    {id: 2, completed: false, title: 'купить хлебушек'},
    {id: 3, completed: false, title: 'купить чипсики'},
    {id: 4, completed: false, title: 'купить печеньки'},

]

export const App = () => {
    const [todoList, setTodoList] = useState(initialState)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTodoList(todos)
                setLoading(false)
            })
    }, [])



    function toggleTodo(id) {
        setTodoList(todoList.map(todoItem => {
            if (todoItem.id === id) {
                todoItem.completed = !todoItem.completed
            }
            return todoItem
        }))
    }

    function removeTodo(id) {
        setTodoList(todoList.filter(todoItem => todoItem.id !== id))
    }

    function createTodo(title) {
        setTodoList(todoList => ([...todoList,
            {id: Date.now(), completed: false, title: title}
        ]))
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className='wrapper'>
                <h1>Todo List</h1>
                <AddTodo createTodo={createTodo}/>
                {loading && <Preloader />}
                {todoList.length
                    ? <TodoList todos={todoList} toggleTodo={toggleTodo}/>
                    : loading ? null : (<p>No todos :( </p>)
                }

            </div>
        </Context.Provider>
    )
}