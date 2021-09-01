import React from 'react'
import FormComponent from '../Components/FormComponent';
import { useForm } from '../hooks/FormHandler';
import { useHttpClient } from '../hooks/HttpRequest';
import './CreateTasks.css'
function CreateTasks() {
    const initialValues = {
        title: '',
        description: '',
        priority: 'Normal',
      }
    const [ formState, inputHandler, reset ] = useForm(initialValues);
    const { sendRequest} = useHttpClient();
    const createTask = async (e) => {
        e.preventDefault();
        const data = {...formState, completed: false};
        try {
            await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/api/todos`, 'POST', JSON.stringify(data),
            {'Content-Type': 'application/json'});
        } catch (error) {  
            console.log(error.message)
        }
        reset(initialValues)
    };
    return (
        <div className='FormComponent'>
            <h3 id='FormComponent__title'>Create Task</h3>
            <FormComponent submit={createTask} onInput={inputHandler} reset={reset} values={formState} />
        </div>
    )
}

export default CreateTasks
