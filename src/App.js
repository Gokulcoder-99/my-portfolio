import {Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';


function App() {
  return (
    <div className='layout'>
      <div className='box1'>
       <Navbar/>
      </div>
      <div className='routes'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={ <About/>} />
          <Route path='/project' element={<h1>project</h1>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
      </div>
  );
}

export default App;
