import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Nav from "./Components/Nav";
import Cancel from './Components/pages/Cancel';
import Home from './Components/pages/Home';
import NotFound from './Components/pages/NotFound';
import Success from './Components/pages/Success';

const TotalsData = [
  {title: 'Total State', points: '36', id: 1},
  {title: 'Total Pooling Units', points: '4,800', id: 2},
  {title: 'Total L.G.A\'s', points: '138', id: 3},
  {title: 'Total Votes', points: '37,000,000', id: 4},
  {title: 'Total Atiku\'s Vote\'s', points: '27,000,000', id: 5},
]

function App() {
  return (
      <Container>
        <Nav/>
        <Routes>
          <Route index element={<Home />} />
          <Route path='success' element={<Success />} />
          <Route path='cancel' element={<Cancel />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    );
}


export default App;
  