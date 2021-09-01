import React from 'react';
import { Form, Button } from 'react-bootstrap';

import './FormComponent.css';
export default function FormComponent({ onInput, reset, values, submit }) {
  
    const onchange = (e) => {
        onInput(e.target.value, e.target.id)
    }

    const denied = (e) => {
        reset({title: '', description: '', priority: ''})
    }
    return (
            <Form id='FormComponent'>
                <Form.Group className="mb-3" controlId="title" >
                    <Form.Label>Task name</Form.Label>
                    <Form.Control size="sm" type="text"  onChange={onchange} value={values.title} placeholder="Task name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description" >
                    <Form.Label>Description </Form.Label>
                    <Form.Control size="sm" onChange={onchange} value={values.description} as="textarea" rows={3} />
                </Form.Group>
                <Form.Label>Priority</Form.Label>
                <div className='Form__footer'>
                    <Form.Select id='priority' style={{width: "50%"}} 
                        size="sm" onChange={onchange} value={values.priority} aria-label="Default select example">
                        <option value="Normal" defaultValue>Normal</option>
                        <option value="High" >High</option>
                        <option value="Urgent">Urgent</option>
                    </Form.Select>
                </div>
                <div className='Form__buttons'>
                    <Button size="sm" onClick={submit} variant="outline-dark" >Crear</Button>
                    <Button size="sm" onClick={denied} variant="outline-danger" >Cancelar</Button>
                </div>
            </Form>
    )
}
