// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import AddUser from './component/SignUp/register';
import Footer from './component/Footer/Footer';
import Login from './component/SignIn/login';
import Product from './component/Products/product';
import Footerr from './component/Footer/Footerr';
import CustomerList from './component/Admin/CustomerList';
import AllProducts from './component/Admin/AllProducts';
import AboutUs from './component/AboutUs/AboutUs';
import ContactUs from './component/contactUs/ContactUs';


function App() {
  return (
    <>
    



       
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<AddUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />


      </Routes>
      <br></br> <br></br> <br></br>
      <br></br>
      <hr class="mt-1 mb-1"/>
      <Footerr /> 
      
      
 
     {/* <Navbar />
      <Routes>
        <Route path="/CustomerList" element={<CustomerList />} />
        <Route path="/AllProducts" element={<AllProducts/>} />

        
      </Routes> 
     */}

    </>
  );
}

export default App;
