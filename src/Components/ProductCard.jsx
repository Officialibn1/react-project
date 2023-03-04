import { Card, Button, Form, Row, Col } from "react-bootstrap";


const ProductCard = ({product}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button>Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
