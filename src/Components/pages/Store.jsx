import { Row, Col } from "react-bootstrap";
import { productsArray } from "../../ProductStore";

const Store = () => {
    return (
        <>
            <h1 align='center' className="p-3">Welcome to Our Store!</h1>

            <Row xs={1} md={3} className="g-4">
                {productsArray.map(product => (
                    <Col align='center' key={product.id}>
                        <h1>{product.title}</h1>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Store;
