import React, { useState } from 'react'

export const TodoForm = () => {

    const [value, setValue] = useState('')

    return (
        <form className='TodoForm'>
            <input type='text' placeholder='Nhập công việc mới' className='todo-input' onChange={(e) => setValue(e.target.value)} value={value}/>
            <button type='submit' className='todo-btn'>Thêm</button>
        </form>
    )
}
