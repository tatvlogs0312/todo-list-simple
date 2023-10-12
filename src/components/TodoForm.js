import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (value) {
            addTodo(value)
        }
        setValue('')
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' placeholder='Nhập công việc mới' className='todo-input' onChange={(e) => setValue(e.target.value)} value={value}/>
            <button type='submit' className='todo-btn'>Thêm</button>
        </form>
    )
}
