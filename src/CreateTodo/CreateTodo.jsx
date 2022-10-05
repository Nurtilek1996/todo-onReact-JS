
import { useState } from 'react'
import './CreateTodo.css'

const CreateTodo = (props) => {
const [value,setValue] = useState ('')

const onFormSubmit = (event) => {
event.preventDefault()
props.addTask(value)
setValue('')
console.log(event);
}
 
const onInputChange = (event) => {
setValue (event.target.value);
}

    return (
        <form onSubmit={onFormSubmit} className='create-wrapper'>
            <input value={value} onChange={onInputChange} type="text" placeholder='Add Task' />
            <button>+ Add</button>
        </form>
    )
}
export default CreateTodo