import React, { useContext } from 'react';
import { Button, Card } from "react-bootstrap";
import { CartContext } from '../CartContext';
import { getProductData } from '../ProductAPI';

const ModalContent = ({item}) => {
    const cart = useContext(CartContext);

    const productData = getProductData(item.id);


    return (
        <Card className='my-3'>
            
            <Card.Body>
                <Card.Title>
                    {productData.title}
                </Card.Title>
                
                <Card.Text>
                    <p className="lean">
                        Price: ${productData.price}
                    </p>
                    <p className="lean">
                       Amount: {item.quantity}
                    </p>
                </Card.Text>
            </Card.Body>
            
            <Card.Footer className='d-flex'>
                <Button className='mx-2' onClick={() => cart.addOneToCart(item.id)}>+</Button>
                <Button className='mx-2' onClick={() => cart.removeOneFromCart(item.id)}>-</Button>
                <Button variant='danger' className='ms-auto' onClick={() => cart.deleteFromCart(item.id)}>Remove</Button>
            </Card.Footer>
        </Card>
    );
}

export default ModalContent;
