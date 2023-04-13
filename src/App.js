import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantDetails from './components/RestaurantDetails';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/details/:id' element={<RestaurantDetails/>} />
              <Route path='/contact-us/:id' element={<ContactUs />} />
            </Routes>
          </Container>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
