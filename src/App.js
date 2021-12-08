import './App.scss';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Destination from './components/Destination';
import Testimonials from './components/Testimonials';
import Why from './components/Why';
import Offers from './components/Offers';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Destination />
      <Testimonials />
      <Why />
      <Offers />
      <Footer />
    </>
  );
}

export default App;
