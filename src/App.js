import './App.css';
import About from './Components/About';
import Bottom from './Components/Bottom';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Service from './Components/Service';

function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <About />
     <Service />
     <Footer />
     <Bottom />
    </div>
  );
}

export default App;
