import { Routes, Route } from 'react-router-dom'
import Pagenotfound from './pages/Pagenotfound';
import Contact from './pages/Contact';
import About from './pages/About';
import Programs from './pages/Programs';
import WhyUs from './pages/WhyUs';
function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<Pagenotfound />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/why-us' element={<WhyUs />} />
      </Routes>

    </>
  );
}

export default App;
