import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Cart from './component/cart'; // Make sure the path is correct

import Navbar from './component/Navbar';
import Home from './component/Home';
import Product from './component/Product';
import Products from './component/Products';
import { Switch, Route } from 'react-router-dom'


function App() {


  const [cartItems, setCartItems] = useState([]); // Initialize cart as an empty array

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };





  return (

    <>
      <Navbar cartItemCount={cartItems.length} />
      {/* Navbar should be outside of the Switch */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/products">
          <Product addToCart={addToCart} />
        </Route>
        <Route path="/product/:id" component={Product} />
        <Route path="/Cart">
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </Route>

        {/* Add more routes here */}
      </Switch>
    </>
  );
}

export default App;






