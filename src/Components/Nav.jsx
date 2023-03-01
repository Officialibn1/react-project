import React from 'react';
import { Button, Container, Navbar, Modal } from "react-bootstrap";

const Nav = () => {
    return (
        <Navbar expand='sm'>
            <Navbar.Brand href='/'>E-commerce Store</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Button>Cart 0 Items</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Nav;
