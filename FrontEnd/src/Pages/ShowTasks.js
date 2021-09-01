import React from 'react'
import TasksList from '../Components/TasksList';
function ShowTasks() {
    return (
        <ul className='TaskList'>
            {<TasksList />}
        </ul>
    )
}

export default ShowTasks
