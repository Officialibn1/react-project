import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../CartContext";


const ProductCard = ({product}) => {
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                {productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column='true' sm='6'>In Cart: {productQuantity} </Form.Label>
                            <Col sm='6'>
                                <Button sm='6' onClick={() => cart.addOneToCart(product.id)} className='mx-2'>+</Button>
                                <Button sm='6' onClick={() => cart.removeOneFromCart(product.id)} className='mx-2'>-</Button>
                            </Col>
                        </Form>
                        <Button variant='danger' onClick={() => cart.deleteFromCart(product.id)} className='my-2'>Delete From Cart!</Button>
                    </>
                    :
                    <Button onClick={() => cart.addOneToCart(product.id)} >Add to Cart</Button>
                }
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
