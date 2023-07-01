import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Donations from './components/Donations';
import Pictures from './components/Pictures';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Pictures />
      <Donations />
      <Contact />
    </div>
  );
}

export default App;
