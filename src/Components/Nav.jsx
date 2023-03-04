import React from 'react';
import { Button, Container, Navbar, Modal } from "react-bootstrap";


const Nav = () => {
    return (
        <>
            <Navbar expand='sm'>
                <Navbar.Brand href='/'>E-Commerce</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Button>Items in Cart: 0</Button>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Nav;
