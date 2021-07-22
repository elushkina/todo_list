import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './AddTodo.css'

const AddTodo = ({createTodo}) => {
    const [value,setValue] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        if (value.trim()) {
            createTodo(value)
            setValue('')
        }
    }
    return (
        <form className='addTodo' onSubmit={submitHandler}>
            <input type='text' value={value} onChange={(event) => {
                return setValue(event.target.value)
            }}/>
            <button type='submit'>Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    createTodo: PropTypes.func.isRequired
}

export default AddTodo

