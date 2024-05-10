import {useEffect, useRef} from 'react';
import Lenis from 'lenis'
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Answer from './components/Answer';


const App = () => {

  useEffect(() => {
    const lenis = new Lenis();
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  }, []); // Empty dependency array to run this effect only once on mount


  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/book/:index" element={<Answer />} />
          {/* define other routes here */}
        </Routes>
      </main>
    </Router>
  )
}

export default App