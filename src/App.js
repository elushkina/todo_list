import React, {useEffect, useState} from 'react'
import './App.css'
import Context from "./context";
import {Preloader} from "./Preloader/Preloader";
import Header from "./TodoList/Header/Header";
import {array} from "prop-types";


const TodoList = React.lazy(() => import ("./TodoList/TodoList"))
const AddTodo = React.lazy(() => import ("./TodoList/AddTodo/AddTodo"))
const SearchForm = React.lazy(() => import ("./TodoList/SearchForm/SearchForm"))
const ItemStatus = React.lazy(() => import ("./TodoList/ItemStatus/ItemStatus"))

const initialState = [
    {id: 1, completed: false, important: false, title: 'Купить молочко'},
    {id: 2, completed: false, important: false, title: 'Купить хлебушек'},
    {id: 3, completed: false, important: false, title: 'Купить чипсики'},
    {id: 4, completed: false, important: false, title: 'Купить печеньки'},
    {id: 5, completed: false, important: false, title: 'Басюша - лучшая кисюша'},

]

export const App = () => {
    const [todoList, setTodoList] = useState(initialState)
    const [filteredTodoList, setFilteredTodoList] = useState(todoList)
    const [searchText, setSearchText] = useState('')
    const [status, setStatus] = useState('all')

    useEffect(() => {
        const filteredBySearchText = filterBySearchText(todoList)
        const filteredByStatus = filterByStatus(filteredBySearchText)

        setFilteredTodoList(filteredByStatus)
    }, [todoList,searchText, status])

    function toggleTodoChecked(id) {
        setTodoList(todoList.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        }))
    }

    function onMarkImportant(id) {
        setTodoList(todoList.map(item => {
            if (item.id === id) {
                item.important = !item.important
            }
            return item
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

    function filterBySearchText (array) {
        return array.filter((item) => item.title.toLowerCase().indexOf(searchText.trim()) !== -1)
    }

    function filterByStatus(array) {
        switch (status) {
            case 'done':
                return array.filter((item) => item.completed)
            case 'important':
                return array.filter((item) => item.important)
            case 'inProgress':
                return array.filter((item) => !item.completed)
            default:
                return array
        }
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className='wrapper'>
                <Header/>
                <React.Suspense fallback={<Preloader/>}>
                    <SearchForm searchText={searchText} setSearchText={setSearchText}/>
                    <ItemStatus setStatus={setStatus}/>
                    <TodoList todos={filteredTodoList} toggleTodoChecked={toggleTodoChecked}
                              onMarkImportant={onMarkImportant}/>
                    <AddTodo createTodo={createTodo}/>
                </React.Suspense>
            </div>
        </Context.Provider>
    )
}