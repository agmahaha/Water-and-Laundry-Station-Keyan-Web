import FormLog from "./pages/loginPage"
import Home from './pages/homePage'
import Water from'./pages/servicesPage/waterPage'
import Laundry from'./pages/servicesPage/laundryPage'
import AboutPage from'./pages/aboutPage'
import OwnerView from './pages/ownerView'
import PageNotFound from "./pages/pageNotFound"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import AnnouncementsPage from "./pages/announcementPage"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/login" element={<FormLog/>}/>
          <Route path ="/home" element={<Home/>}/>
          <Route path ="/water" element={<Water/>}/>
          <Route path ="/laundry" element={<Laundry/>}/>
          <Route path ="/employee/home" element={<OwnerView/>}/>
          <Route path ="/about" element={<AboutPage/>}/>
          <Route path ="/announcements" element={<AnnouncementsPage />}/>
          <Route path ="/pageNotFound" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
