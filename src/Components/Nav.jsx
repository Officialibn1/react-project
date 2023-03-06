import { useState } from 'react';
import { Button, Container, Navbar, Modal } from "react-bootstrap";


const Nav = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    
    const handleClose = () => setShow(false);

    return (
        <>
            <Navbar expand='sm'>
                <Navbar.Brand href='/'>E-Commerce</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Button onClick={handleShow} >Items in Cart: 0</Button>
                </Navbar.Collapse>

                {/* Modal  */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Shopping Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        This is the Modals Body
                    </Modal.Body>
                </Modal>
            </Navbar>
        </>
    );
}

export default Nav;
