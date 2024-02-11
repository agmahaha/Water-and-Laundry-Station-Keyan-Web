import FormLog from "./pages/loginPage"
import Home from './pages/homePage'
import Service from './pages/servicesPage'
import About from'./pages/aboutPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import PageNotFound from "./pages/pageNotFound"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/login" element={<FormLog/>}/>
          <Route path ="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
