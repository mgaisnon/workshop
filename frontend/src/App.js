import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Consulation from './pages/consultation';
import Contact from './pages/contact';
import Login from './pages/login'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consulation />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;
