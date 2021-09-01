import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, Button } from 'react-bootstrap';
import './NavComponent.css';
function NavComponent() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to='/create-task' className='navbar_link' ><Button variant="outline-dark">Create Task</Button></Nav.Link>
                <Nav.Link as={Link} to='/get-tasks' className='navbar_link' ><Button variant="outline-dark">Show task</Button></Nav.Link>
                <Nav.Link as={Link} to='/search-by-name' className='navbar_link' ><Button variant="outline-dark">Search</Button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavComponent
