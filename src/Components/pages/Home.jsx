import React from 'react';
import { Col, Row } from "react-bootstrap";
import { ProductArray } from '../../ProductAPI';
import ProductCard from '../ProductCard';


const Home = () => {
    return (
        <>
            <h1 className='text-center p-3'>Welcome to our store!</h1>
            <Row xs={1} md={3} className='g-3'>
                {ProductArray.map((product) => (
                    <Col align='center' key={product.id}>
                        <ProductCard  product={product}/>
                    </Col>
                ))}
                
            </Row>
        </>
    );
}

export default Home;
