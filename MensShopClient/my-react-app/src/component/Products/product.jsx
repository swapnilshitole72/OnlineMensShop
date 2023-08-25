import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import userService from '../../Services/user.service';
import ProductImage from './ProductImage';
import { Link } from 'react-router-dom';
// import {SpinningCircles} from 'react-loading-icons'

export default function ({ addToCart }) {
    debugger
    const { id } = useParams();
    const [data, setData] = useState([]);


    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);


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

    const Loading = () => {

        return (
            <>
                Loading..............
                {/* <SpinningCircles></SpinningCircles> */}
            </>
        )
    }
    const addToCartHandler = () => {
        // Pass the product data to addToCart function
        addToCart(product);
    };

    const ShowProducts = () => {
        return (
            <>
                <div className='col-md-6'>
                    <ProductImage prodId={id} height={400} width={400} />
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>
                        {data.productName}
                    </h4>
                    <h1 className='display-5'>
                        {product.title}
                    </h1>
                    <p className='lead fw-bolder'>
                        Rating{data.rating}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        ₹{data.price}
                    </h3>
                    <p className='lead'>{data.description}</p>
                    <button className='btn btn-outline-dark px-4 py-2' onClick={addToCartHandler} > Add to Cart</button>

                    <Link to={`/order/${data.id}`} className="btn btn-dark ms-2 px-4 py-2">Buy Now</Link>
                    {/* <a href="/order" className="btn btn-dark ms-2 px-4 py-2">Buy Now</a> */}

                </div>


            </>
        )
    }


    return (
        <div>
            <div className='container py-5'>
                <div className='row py-5'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}