


import React, { useEffect, useState } from 'react';
import './Showcart.css';
import { Link, useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import userService from '../../Services/user.service';
import ProductImage from './ProductImage';

const ShoppingCart = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  

  const [quantity, setQuantityId] = useState(1);
  const history=useHistory();


  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantityId(quantity - 1);
    }
  };


  const handleIncrement = () => {
    setQuantityId(quantity + 1);
  };

  const init = () => {
    userService
      .getProduct(id)
      .then((response) => {
        setData(response.data);
        // console.log(productName);
        console.log(data);
        debugger
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const deleteHandler=()=>{
    history.goBack();
  };

  const currentDate = new Date();

    // Add 3 days to the current date
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 7);

    const day = futureDate.getDate();
    const monthIndex = futureDate.getMonth();
    const year = futureDate.getFullYear();

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const formattedDate = `${day} ${months[monthIndex]} ${year}`;


  return (
    <section class="h-100 gradient-custom" style={{marginTop:"-195px"}}>
      <div class="container py-5">
        <div class="row d-flex justify-content-center my-4">
          <div class="col-md-8">
            <div class="card mb-4">
              <div class="card-header py-3">
                <h5 class="mb-0">Cart items</h5>
              </div>
              <div class="card-body">
                {/* <!-- Single item --> */}
                <div class="row">
                  <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    {/* <!-- Image --> */}
                    <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                      <ProductImage prodId={id} height={200} width={400} />
                    </div>
                  </div>

                  <div class="col-lg5 col-md-6 mb-4 mb-lg-0">
                    {/* <!-- Data --> */}
                    <p><strong>{data.productName}</strong></p>
                    <p>Discription: {data.description}</p>
                    <p>Category: {data.category}</p>
                    <p><strong>₹ {data.price}</strong> </p>
                    <button type="button" className="btn btn-primary btn-sm me-1 mb-2 " data-mdb-toggle="tooltip"
                      title="Remove item" onClick={deleteHandler}>
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>

                  <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    {/* <!-- Quantity --> */}
                    <div>
                      <br></br>
                      &emsp;&emsp;&emsp;
                      <button onClick={handleDecrement}>-</button>
                      <input
                        type="text"
                        value={quantity}
                        onChange={(e) => setQuantityId(parseInt(e.target.value) || 0)}
                        style={{ width: '40px', textAlign: 'center' }}
                      />
                      <button onClick={handleIncrement}>+</button>
                      <br></br>
                      <br></br>

                    </div>
                    <p class="text-start text-md-center">
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div class="card mb-4">
              <div class="card-body">
                <p><strong>Expected shipping delivery</strong></p>
                <p class="mb-0">{formattedDate}</p>
              </div>
            </div>
            <div class="card mb-4 mb-lg-0">
              <div class="card-body">
                <p><strong>We accept</strong></p>
                <img class="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa" />
                <img class="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express" />
                <img class="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard" />
                <img class="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                  alt="PayPal acceptance mark" />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-header py-3">
                <h5 class="mb-0">Summary</h5>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>{data.productName}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis..</span>
                  </li>
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p class="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span><strong>₹ {data.price*quantity}</strong></span>
                  </li>
                </ul>

                <Link to={`/order/${data.id}`} className="btn btn-dark ms-2 px-4 py-2">Go to checkout</Link>

                {/* <button type="button" class="btn btn-primary btn-lg btn-block">
                  Go to checkout
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;