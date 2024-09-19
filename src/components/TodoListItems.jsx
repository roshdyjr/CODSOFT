import React from 'react'
import { FaCheck, FaTrash, FaTimes } from 'react-icons/fa'

const TodoListItems = ({ task, id, isComplete, deleteTask, toggleTask }) => {
    return (
        <div className='flex items-center gap-3 my-3 px-2'>
            <div
                onClick={() => toggleTask(id)}
                className='flex items-center cursor-pointer'
            >
                <div className={`rounded-full p-2 bg-orange-500 flex items-center justify-center text-white`}>
                    {isComplete ? <FaCheck size={22} /> : <FaTimes size={22} />}
                </div>
                <p className={`ml-2 text-lg p-1 break-words ${isComplete ? "line-through text-gray-500" : ""}`}>{task}</p>
            </div>

            <div className='ml-auto'>
                <FaTrash size={22} className='text-red-500 cursor-pointer' onClick={() => deleteTask(id)} />
            </div>
        </div>
    )
}

export default TodoListItems
