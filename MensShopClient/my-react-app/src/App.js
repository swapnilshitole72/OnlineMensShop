// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import AddUser from './component/SignUp/register';
import Footer from './component/Footer/Footer';
import Login from './component/SignIn/login';
import product from './component/Products/product';
import ProfileDetails from './component/Profile/Profile';
import CustomerList from './Admin/CustomerList';
import ProductImage from './component/Products/ProductImage';
import Admin from './Admin/Admin';
import Addproducts from './Admin/Addproducts';
import FileUploadComponent from './Admin/FileUpload';
import UploadImageComponent from './Admin/FileUpload';
import AboutUs from './component/AboutUs';
import ContactUs from './ContactUs';
import Address from './component/SignUp/Address';
import StyledDiv from './component/Order/Order';
import Profile1 from './component/Profile/Profile1';
import EditProfile from './component/Profile/EditProfile';
import ChangePassword from './component/Profile/ChangePassword';
import MyOrder from './component/Profile/MyOrderList';
import ProtectedRoute from './ProtectedRoute';
import ProtectedAdminRoute from './ProtectedAdminRoute';
import HomePageRoute from './HomePage';
import ForgotPassword from './component/Profile/Forgpas';
import Dashboard from './Admin/Dashboard';
import ProductList from './Admin/ProductList';
import AddImage from './Admin/AddImage';
import PaymentList from './Admin/PaymentList';
import ProductReview from './component/Products/AddReview';
import SearchComponent from './component/SearchComponent';
import ShoppingCart from './component/Products/ShowCart';

function App() {
  return (
    <>

      <header>

        <Navbar></Navbar>
      </header>
      <SearchComponent></SearchComponent>

      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/home" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={AddUser} />
        <Route path="/image" component={ProductImage} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/product/:id" component={product} />
        <Route path="/forgotpass" component={ForgotPassword} />
        

        <ProtectedRoute exact path="/address" component={Address} />
        <ProtectedRoute exact path="/order/:id" component={StyledDiv} />
        <ProtectedRoute exact path="/profile" component={Profile1} />
        <ProtectedRoute exact path="/editProfile" component={EditProfile} />
        <ProtectedRoute exact path="/changePassword" component={ChangePassword} />
        <ProtectedRoute exact path="/myorder" component={MyOrder} />
        <ProtectedRoute exact path="/productReview/:id" component={ProductReview}/>
        <ProtectedRoute exact path="/shoppingcart/:id" component={ShoppingCart}/>
        


        <ProtectedAdminRoute exact path="/imageUpload" component={FileUploadComponent} />
        <ProtectedAdminRoute exact path="/addproducts" component={Addproducts} />
        <ProtectedAdminRoute exact path="/admin" component={Admin} />
        <ProtectedAdminRoute exact path="/dashboard" component={Dashboard} />
        <ProtectedAdminRoute exact path="/customerList" component={CustomerList} />
        <ProtectedAdminRoute exact path="/productList" component={ProductList} />
        <ProtectedAdminRoute exact path="/addimage/:id" component={AddImage} />
        <ProtectedAdminRoute exact path="/paymentList" component={PaymentList} />
        
        
        {/* <ProtectedAdminRoute exact path="/" component={Home} /> */}

        <HomePageRoute exact path="/" component={Home}/>
        {/* <Route exact path="/" component={Home} /> */}

      </Switch>

      <footer>
        <Footer></Footer>
      </footer>

    </>
  );
}

export default App;
