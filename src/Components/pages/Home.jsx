import React from 'react';
import { Row, Col } from "react-bootstrap";
import { ProductArray } from '../../ProductAPI';


const Home = () => {
    return (
        <>
            <h1 className='text-center'>Welcome to our store!</h1>
            <Row xs={1} md={3} >
                {ProductArray.map((product, index) => (
                    <Col align='center'>
                        <h1>{product.title}</h1>
                    </Col>
                ))}
                
            </Row>
        </>
    );
}

export default Home;
