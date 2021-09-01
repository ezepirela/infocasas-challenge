import React, {  useState } from 'react';
import { useHttpClient } from '../hooks/HttpRequest';
import TasksItem from '../Components/TasksItem';
import { useStateValue } from '../Context/ContextProvider';
import { Form, Button } from 'react-bootstrap';

export default function SearchTask() {
    const [, dispatch] = useStateValue();
    const [inputValue, setInputValue] = useState('')
    const [task, setTask] = useState();
    const { isLoading, sendRequest } = useHttpClient();
    const submit = async () => {
        try {
            const response = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/api/todos/${inputValue}/`);
            setTask(response)
        } catch (error) {
            console.log(error)
        }
        setInputValue('')
    }
    return (
        <>
            <Form.Group className="mb-3" controlId="title" >
                    <Form.Label>Task name</Form.Label>
                    <Form.Control 
                        size="sm" 
                        type="text"  
                        onChange={(e) => setInputValue(e.target.value)} 
                        value={inputValue} 
                        placeholder="Task name" />
                </Form.Group>
                <Button style={{marginBottom: "20px"}} onClick={submit} variant="outline-dark">Search</Button>

                {!isLoading && task && <TasksItem data={task} notIcons={true} />}
        </>
    )
}
