import { Routes, Route } from 'react-router-dom'
import Pagenotfound from './pages/Pagenotfound';
import Contact from './pages/Contact';
// import Programs from './pages/Programs';
// import BlogPost from './pages/BlogPost';
function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<Pagenotfound />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/programs' element={<Programs />} /> */}
        {/* <Route path='/post' element={<BlogPost />} /> */}
      </Routes>

    </>
  );
}

export default App;
