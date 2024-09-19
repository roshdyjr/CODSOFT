import React, { useEffect, useRef, useState } from 'react'
import { FaClipboardList, FaPlusCircle } from 'react-icons/fa'
import TodoListItems from './TodoListItems'
import { Bounce, toast } from 'react-toastify';

const Todo = () => {
    const [listData, setListData] = useState(localStorage.getItem("TODO LIST") ? JSON.parse(localStorage.getItem("TODO LIST")) : []);
    const taskRef = useRef();

    const addTask = () => {
        const inputTask = taskRef.current.value.trim();
        if (inputTask === "") {
            return;
        }

        const newTask = {
            id: Date.now(),
            text: inputTask,
            isComplete: false,
        }

        setListData((prev) => [...prev, newTask]);
        toast.success('Your task has been added', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
        taskRef.current.value = "";
    }

    const deleteTask = (id) => {
        setListData((prev) => prev.filter((task) => task.id !== id));
        toast.success('Your task has been deleted', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
    }

    const toggleTask = (id) => {
        setListData((prev) => prev.map((task) => task.id === id ? { ...task, isComplete: !task.isComplete } : task));
    }

    useEffect(() => {
        localStorage.setItem("TODO LIST", JSON.stringify(listData));
    }, [listData])

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    }

    return (
        <div className='flex justify-center items-center p-4'>
            <div className='bg-black text-orange-500 max-w-2xl w-full md:w-11/12 rounded-2xl min-h-[600px] flex flex-col'>
                <div className='flex items-center justify-center gap-4 mt-10 px-4'>
                    <FaClipboardList size={24} />
                    <h1 className='font-bold text-2xl'>To-Do List</h1>
                </div>

                <div className='flex items-center bg-gray-200 my-8 rounded-full mx-3 p-2'>
                    <input
                        ref={taskRef}
                        type="text"
                        placeholder='Add a task'
                        className='flex-1 bg-transparent rounded-lg p-3 outline-none text-lg font-semibold'
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={addTask} className='p-3'>
                        <FaPlusCircle size={24} />
                    </button>
                </div>

                <div className='flex-1 overflow-y-auto px-4'>
                    {listData.map((item) => (
                        <TodoListItems
                            task={item.text}
                            key={item.id}
                            id={item.id}
                            isComplete={item.isComplete}
                            deleteTask={deleteTask}
                            toggleTask={toggleTask}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Todo
