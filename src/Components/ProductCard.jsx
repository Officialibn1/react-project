import React, {useContext} from 'react';
import { Col, Card, Row, Button, Form } from "react-bootstrap";
import { CartContext } from '../CartContext';

const ProductCard = ({product}) => {
        const cart = useContext(CartContext);
        const productQuantity = cart.getProductQuantity(product.id);

        console.log(cart.items)
    return (

        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column='true' sm='6'>In Cart: {productQuantity}</Form.Label>
                            <Col sm='6' >
                                <Button sm='6' className='mx-2' onClick={() => cart.addOneToCart(product.id)}>+</Button>
                                <Button sm='6' className='mx-2' onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
                            </Col>
                        </Form>
                        <Button className='my-2' variant='danger' onClick={() => cart.deleteFromCart(product.id)}>Delete From Cart</Button>
                    </>
                    :
                    <Button variant='warning' onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                    
                }
            </Card.Body>
        </Card> 
    );
}

export default ProductCard;
