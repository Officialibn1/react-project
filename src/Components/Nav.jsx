import React, { useState, useContext } from 'react';
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import ModalContent from './ModalContent';

const Nav = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const cart = useContext(CartContext);

    const totalQuantity = cart.items.reduce((a, b) => (a += b.quantity), 0);
    return (
        <>
            <Navbar expand='sm'>
                <Navbar.Brand href='/'>E-commerce Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Link   Link to='/' className='h4 position-relative' onClick={handleShow}>
                        <h6 className="position-absolute top-25 start-100 text-dark" > {totalQuantity} </h6>
                        <i className="bi bi-cart3 text-dark"></i>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    Shopping Cart
                </Modal.Header>
                <Modal.Body>        
                    {totalQuantity > 0 ?
                        <>
                            {cart.items.map(item => (
                               <ModalContent item={item} />
                            ))} 

                            <h2 className='lean'>Total: $ {cart.getTotalCost().toFixed(2)}</h2>

                            <Button variant='success'>Purchase Items</Button>
                        </>
                        :
                        <p className="lean">Cart is Empty!</p>
                    }
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Nav;
