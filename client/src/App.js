import FormLog from "./pages/loginPage"
import Home from './pages/homePage'
import Service from './pages/servicesPage'
import About from'./pages/aboutPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/login" element={<FormLog/>}/>
          <Route path ="/about" element={<About/>}/>
          <Route path ="/services" element={<Service/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
