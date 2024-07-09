import { Routes, Route } from 'react-router-dom'
import Pagenotfound from './pages/Pagenotfound';
import Contact from './pages/Contact';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Programs from './pages/Programs';
import WhyUs from './pages/WhyUs';
import Testimonials from './pages/Testimonials';
import ProgramsPage from './pages/ProgramsPage';
import {programData1, title1, c1, head1} from './data/goal-academic'
import {programData2, title2, c2, head2} from './data/research-scholar'
import {programData3, title3, c3, head3} from './data/sat'
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';
import ManageBlogs from './pages/Admin/ManageBlogs';
import ContactQueries from './pages/Admin/ContactQueries';
import CreateBlog from './pages/Admin/CreateBlog';
import CreateEvent from './pages/Admin/CreateEvent';
import ManageEvents from './pages/Admin/ManageEvents';
import Blog from './pages/Blog';
import Home from './pages/Home';
import StudyInSingapore from './pages/StudyInSingapore';
import CallBackQueries from './pages/Admin/CallBackQueries';
import StudyInUK from './pages/StudyInUK';
import StudyInUSA from './pages/StudyInUSA';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<Pagenotfound />} />
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/programs' element={<Programs />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:titleHash" element={<Blog />} />
        <Route path='/why-us' element={<WhyUs />} />
        <Route path='/study-in-singapore' element={<StudyInSingapore />} />
        <Route path='/study-in-uk' element={<StudyInUK />} />
        <Route path='/study-in-usa' element={<StudyInUSA />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/goals-academic' element={<ProgramsPage title1={title1} programData1={programData1} c1={c1} head1={head1} />} />
        <Route path='/research-scholar' element={<ProgramsPage title1={title2} programData1={programData2} c1={c2} head1={head2} />} />
        <Route path='/sat' element={<ProgramsPage title1={title3} programData1={programData3} c1={c3} head1={head3} />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/home" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }>
          <Route path="create-blog" element={<CreateBlog />} />
          <Route path="manage-blogs" element={<ManageBlogs />} />
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="manage-events" element={<ManageEvents />} />
          <Route path="contact-queries" element={<ContactQueries />} />
          <Route path="callback-queries" element={<CallBackQueries />} />
      </Route>
      </Routes>

    </>
  );
}

export default App;
