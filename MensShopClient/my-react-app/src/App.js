// import logo from './logo.svg';
import './App.css';
import {Switch ,Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import AddUser from './component/SignUp/register';
import Footer from './component/Footer/Footer';
import Login from './component/SignIn/login';
import product from './component/Products/product';
import ProfileDetails from './component/Profile/Profile';
import CustomerList from './Admin/CustomerList';
import AllProducts from './Admin/AllProducts';
import ProductImage from './component/Products/ProductImage';
import Admin from './Admin/Admin';
import Addproducts from './Admin/Addproducts';
import FileUploadComponent from './Admin/FileUpload';
import UploadImageComponent from './Admin/FileUpload';
import AboutUs from './component/AboutUs';
import ContactUs from './ContactUs';
import ProfilePage from './component/Profile/ProfilePage';
import Address from './component/SignUp/Address';
import StyledDiv from './component/Order/Order';

function App() {
  return (
   <>
   {/* <Navbar></Navbar>
   <Home></Home> */}
   {/* <AddUser></AddUser> */}
   <header>

   <Navbar></Navbar>

   </header>
   <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/register" component={AddUser} />
      <Route path="/login" component={Login} />
      <Route path="/product/:id" component={product} />
      <Route path="/profile" component={ProfileDetails}/>
      <Route path="/image" component={ProductImage}/>
      <Route path="/admin" component={Admin}/>
      <Route path="/addproducts" component={Addproducts}/>
      <Route path="/allProductsList" component={AllProducts}/>
      <Route path="/imageupload" component={FileUploadComponent}/>
      <Route path="/aboutus" component={AboutUs}/>
      <Route path="/contactUs" component={ContactUs}/>
      <Route path="/order/:id" component={StyledDiv}/>
      <Route path="/address" component={Address}/>
    </Switch>
<footer>
    <Footer></Footer>
    </footer>
    {/* <ProductImage prodId={1} /> */}
    {/* <FileUploadComponent prodId={4}></FileUploadComponent> */}
    {/* <UploadImageComponent empId={4}></UploadImageComponent> */}
{/* <ProfilePage></ProfilePage> */}
   {/* <Address></Address>
   </div> */}
  {/* <StyledDiv></StyledDiv> */}
   </>
  );
}

export default App;
