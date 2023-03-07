import {useContext} from 'react';
import { CartContext } from '../CartContext';
import { getProductData } from '../ProductStore';
import {Button, Card} from 'react-bootstrap';

const CartProduct = ({product}) => {
    const cart = useContext(CartContext);
    const productData = getProductData(product.id);
    return (
        <Card className="text-center m-3 p-3">
            <h3>{productData.title}</h3>
            <>
                <p>Amount: {product.quantity}</p>
                <Button className='m-2' size='sm' onClick={() => cart.addOneToCart(product.id)}>+</Button>
                <Button className='m-2' size='sm' onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
            </>
            <hr />
            <p>Total: ${(product.quantity * productData.price).toFixed(2)}</p>
            <Button variant='danger' onClick={() => cart.deleteFromCart(product.id)}>Remove From Cart</Button>

        </Card>
    );
}

export default CartProduct;
