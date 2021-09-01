import React from 'react';
import { Form } from 'react-bootstrap';
import { useHttpClient } from '../hooks/HttpRequest';
import { useStateValue } from '../Context/ContextProvider';
import { FaTrash } from "react-icons/fa";
import './TaskItem.css';
function TasksItem({ data, changeStatus, notIcons }) {
    const { sendRequest } = useHttpClient();
    const [, dispatch] = useStateValue()
    const handleClick = async () => {
        let completed = data.completed ? 0 : 1
        changeStatus(data.id, completed)
        try {
            await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/api/todos/${data.id}/complete`, "PATCH", 
            JSON.stringify({completed: !data.completed}), {'Content-Type': 'application/json'});
        } catch (error) {
            console.log(error.message);
        }
        
    }
    const deleteTask = async (e) => {
        try {
            await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/api/todos/${data.id}/`,
             "DELETE",{}, {'Content-Type': 'application/json'});
        } catch (error) {
            console.log(error.message);
        }
        dispatch({
            type: 'REMOVE_TASK',
            id: data.id
        })
    }
    return (
        <li className={`TaskItem ${data.priority}-${data.completed}`}  >
            <div className='TaskItem__header'>
                <h6 className='TaskItem__title'>{data.title}</h6>
                <small className='TaskItem__date'>{data.date}</small>
            </div>
            <p className='TaskItem__description'>{data.description}</p>
            {!notIcons && (<Form.Check
                inline
                name="group"
                type='switch'
                style={{backgroundColor: 'inherit'}}
                onClick={handleClick}
            />)}
           {!notIcons && < FaTrash onClick={deleteTask}/>}
        </li>
    )
}

export default TasksItem
