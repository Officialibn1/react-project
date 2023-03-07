import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Nav from './Components/Nav';
import { Routes, Route } from "react-router-dom";
import Store from './Components/pages/Store';
import Success from './Components/pages/Success';
import Cancel from './Components/pages/Cancel';
import CartProvider from './CartContext';


function App() {
  return (
    <CartProvider>
      <Container>
        <Nav />
        <Routes>
          <Route index element={<Store />} />
          <Route path='success' element={<Success />} /> 
          <Route path='cancel' element={<Cancel />} /> 
        </Routes>
      </Container>
    </CartProvider>
    );
}


export default App;
  