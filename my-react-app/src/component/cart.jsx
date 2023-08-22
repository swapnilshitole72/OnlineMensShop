// Cart.js
import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
    console.log(cartItems);
    debugger
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Shopping Cart</h2>
            <div className="row">
                <div className="col-lg-8">
                    <ul className="list-group">

                        {cartItems.map((item) => {
                          
                          debugger;
                          return (
                                <li className="list-group-item" key={item.id}>
                                    <div className="d-flex justify-content-between">
                                        <span>{item.title}</span>
                                        <span>${item.price}</span>
                                    </div>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            );
                        })}

                    </ul>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Order Summary</h5>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <span>Subtotal:</span>
                                <span>
                                    $
                                    {cartItems.reduce((total, item) => total + item.price, 0)}
                                </span>
                            </div>
                            <div className="text-center mt-3">
                                <button className="btn btn-success btn-lg">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
