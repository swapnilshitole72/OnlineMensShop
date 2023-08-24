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
      <Route path="/customerList" component={CustomerList}/>
      <Route path="/allProductsList" component={AllProducts}/>
    </Switch>
<footer>
    <Footer></Footer>
    </footer>
   </>
  );
}

export default App;
