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
            <input type='text'  placeholder='Add new to do' value={value} onChange={(event) => {
                return setValue(event.target.value)
            }}/>
            <button className="btn waves-effect waves-light" type="submit" name="action">
                <i className="material-icons left">add</i> Add

            </button>
        </form>

    )
}

AddTodo.propTypes = {
    createTodo: PropTypes.func.isRequired
}

export default AddTodo

