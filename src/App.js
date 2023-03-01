import Announcement from "./Components/Announcement";
import Nav from "./Components/Nav";
import Totals from "./Components/Totals";
import { Container } from "./Components/Styles/Container";
import Header from "./Components/Header";

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
      <Announcement />
      <Nav />
      <Header />
      <Totals datas={TotalsData} />
    </Container>
  );
}


export default App;
  