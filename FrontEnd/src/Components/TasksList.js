import React, { useEffect, useState } from 'react'
import './TaskList.css';
import TaskItem from '../Components/TasksItem';
import { useHttpClient } from '../hooks/HttpRequest';
import { Form } from 'react-bootstrap';
import { useStateValue } from '../Context/ContextProvider';
function TasksList() {
    const [{ task }, dispatch] = useStateValue();
    const { isLoading, error, sendRequest } = useHttpClient();
    const [filter, setFilter] = useState(false);
    const filterAction = () => {
        setFilter(!filter);
    }
    let filteredTasks
    useEffect(() => {
        const getTasks = async () => {
            try {
                 const response = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/api/todos/`);
                if(!response.length > 0){
                    return
                }
                dispatch({
                    type: "ADD_TASKS",
                    task: response
                })
            } catch (error) {
                console.log(error);
            }
            
        }
        getTasks()
    }, [])
    const changeStatus = (id, status) => {
        dispatch({
            type: "CHECK_TASKS",
            task: {
                id: id,
                completed: status
            }
        })
    }
    if(task.length > 0){
        filteredTasks = task?.filter(element => element.completed === 1);
    }
    return (
        <>
        {!isLoading && task && <h1>Tasks List</h1>}
        {!isLoading && (<Form.Check
                inline
                name="group1"
                type='switch'
                label="Show only completed"
                style={{backgroundColor: 'inherit'}}
                onClick={filterAction}
            />)}
        <ul className='TaskList'>
            {!isLoading && task && !filter && !error && task?.map((element, index) => <TaskItem key={index} data={element} changeStatus={changeStatus}/>)}
            {!isLoading && task && filter && !error && filteredTasks?.map((element, index) => <TaskItem key={index} data={element} changeStatus={changeStatus}/>)}
        </ul>
        </>
    )
}

export default TasksList
