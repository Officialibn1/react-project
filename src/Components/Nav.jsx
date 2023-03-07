import { useState, useContext } from 'react';
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import {CartContext} from '../CartContext' 
import CartProduct from './CartProduct';

const Nav = () => {
    const cart = useContext(CartContext);
    const totalItems = cart.item.reduce((sum, product) => sum += product.quantity, 0);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    
    const handleClose = () => setShow(false);

    return (
        <>
            <Navbar expand='sm'>
                <Navbar.Brand href='/'>E-Commerce</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                <Button onClick={handleShow} >Items in Cart: {totalItems}</Button>
                </Navbar.Collapse>

                {/* Modal  */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Shopping Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {totalItems > 0 ?
                            <Container>
                                <p className='lean mx-3'>
                                    Items in your Cart!
                                </p>
                                <p>
                                    {cart.item.map(product => (<CartProduct product={product} />))}
                                </p>
                                <hr className='mt-5'/>
                                <h3>Total Cost: ${cart.getTotalCost().toFixed(2)}</h3>
                                <Button variant='success'>Checkout</Button>
                            </Container>
                            :
                            <p className='lean'>
                                    Your Cart is Empty
                            </p>
                        }
                    </Modal.Body>
                </Modal>
            </Navbar>
        </>
    );
}

export default Nav;
