import React, { useState } from 'react';
import './StyledDiv.css'; // Import your custom styles if needed
import userService from '../../Services/user.service';
import { useEffect } from 'react';
import Address from '../SignUp/Address';
// import Address from './component/SignUp/Address';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ProductImage from '../Products/ProductImage';
import { counter } from '@fortawesome/fontawesome-svg-core';


function StyledDiv() {

    const history = useHistory();
    const [Addres, setAddress] = useState('');
    const [data, setData] = useState([]);
    const [productId, setProductId] = useState();
    const [customerId, setCustomerId] = useState();
    const [quantity, setQuantityId] = useState(1);
    const [count, setCount] = useState(1);
    const { id } = useParams();

    debugger
    console.log(id);


    const currentDate = new Date();

    // Add 3 days to the current date
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 4);

    const day = futureDate.getDate();
    const monthIndex = futureDate.getMonth();
    const year = futureDate.getFullYear();

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const formattedDate = `${day} ${months[monthIndex]} ${year}`;

    const handleIncrement = () => {
        setQuantityId(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantityId(quantity - 1);
        }
    };



    const handleAddress = () => {
        debugger
        history.push('/address');
    };


    const confirmOrder = (e) => {
        e.preventDefault();
        const order = {
            quantity,
            customerId,
            productId

        };
        // debugger
        userService
            .setOrder(order)
            .then((orderDone) => {
                console.log(orderDone);
            })
            .catch((error) => {
                console.log('Something went wrong', error);
            });
    };

    const handleOrder = () => {
        // debugger
        userService
            .getProduct(id)
            .then((user) => {
                setData(user.data)
                console.log(data);
            })
            .catch((error) => {
                console.log('Something went wrong', error);
            });
    };

    const cancelOrder = () => {
        history.push(`/product/${id}`)
    };

    const init = () => {
        debugger
        userService
            .get(sessionStorage.getItem('userId'))
            .then((user) => {
                setAddress(user.data.address);
                console.log(user.data.address);
                console.log(Address);
            })
            .catch((error) => {
                console.log('Something went wrong', error);
            });
    };

    useEffect(() => {
        setCustomerId(sessionStorage.getItem('userId'));
        setProductId(id);
        init();
        handleOrder();
    }, []);
    return (
        <>
            <div className='container'>
                <div className="styled-div" style={{ marginTop: "100px" }}>
                    <div className="content">
                        <h3>Address Details</h3>
                        <hr></hr>
                        <p>{Addres}</p>
                    </div>
                    <div className="button-container">
                        <button className="btn btn-primary" onClick={handleAddress}>Change</button>
                    </div>
                </div>

                <div className="styled-div" style={{ marginTop: "30px" }}>
                    <div className="content">

                        <h3>Order Summary</h3>
                        <hr></hr>
                        <div style={{ display: 'flex' }}>
                            <div className="col-md-6 col-sm-6 col-lg-2 d-md-block ">
                                <ProductImage prodId={id} height="30%" width='100%' />
                            </div>
                            &emsp;
                            <div className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                                <h2>{data.productName}</h2>
                                <h3>₹{data.price}.00</h3>
                                Quantity
                                <div>

                                    <button onClick={handleDecrement}>-</button>
                                    <input
                                        type="text"
                                        value={quantity}
                                        onChange={(e) => setQuantityId(parseInt(e.target.value) || 0)}
                                        style={{ width: '40px', textAlign: 'center' }}
                                    />
                                    <button onClick={handleIncrement}>+</button>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3 d-md-block bg-light sidebar">
                                <p>{data.description}</p>
                            </div>

                            <div className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                                <p>Delivery by {formattedDate}</p>
                            </div>
                        </div>
                        <div></div>
                        <div></div>


                    </div>
                    <div className="button-container">
                        <button className="btn btn-success" onClick={confirmOrder}>Confirm Order</button>&emsp;
                        <button className="btn btn-secondary" onClick={cancelOrder}>Cancel Order</button>
                    </div>
                </div>

                <div className="styled-div" style={{ marginTop: "30px" }}>
                    <div className="content">
                        <h3>Payment Option</h3>
                    
                    </div>
                    <div className="button-container">
                        <button className="btn btn-primary">Change</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StyledDiv;
