import FormLog from "./pages/loginPage"
import Home from './pages/homePage'
import Water from'./pages/servicesPage/waterPage'
import Laundry from'./pages/servicesPage/laundryPage'
import AboutPage from'./pages/aboutPage'
import OwnerView from './pages/ownerView'
import LaundryOrder from './pages/orderPage/laundryOrderPage'
import WaterOrder from './pages/orderPage/waterOrderPage'
import Profile from './pages/profilePage'
import PageNotFound from "./pages/pageNotFound"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import AnnouncementsPage from "./pages/announcementPage"
import OrderInvoices from "./pages/invoicePage/page"
import OrderAdmin from "./pages/invoicePage/adminPage"


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
          <Route path ="/employee/home" element={<OrderAdmin/>}/>
          <Route path ="/about" element={<AboutPage/>}/>
          <Route path ="/announcements" element={<AnnouncementsPage />}/>
          <Route path ="/orderLaundry" element={<LaundryOrder/>}/>
          <Route path ="/orderWater" element={<WaterOrder/>}/>
          <Route path ="/profile" element={<Profile/>}/>
          <Route path ="/orderHistory" element={<OrderInvoices/>}/>
          <Route path ="/adminOrderHistory" element={<OrderAdmin/>}/>
          <Route path ="/pageNotFound" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
