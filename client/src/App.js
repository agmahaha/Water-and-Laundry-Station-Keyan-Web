import FormLog from "./pages/loginPage"
import Home from './pages/homePage'
import Service from './pages/servicesPage'
import About from'./pages/aboutPage'
import OwnerView from './pages/ownerView'
import PageNotFound from "./pages/pageNotFound"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/login" element={<FormLog/>}/>
          <Route path ="/homepage" element={<OwnerView/>}/>
          <Route path ="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
