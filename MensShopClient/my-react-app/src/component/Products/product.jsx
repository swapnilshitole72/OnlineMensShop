import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import userService from '../../Services/user.service';
import ProductImage from './ProductImage';
import { Link } from 'react-router-dom';
import Review from './DisplayReview';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import StarRating from './StarRating';
// import {SpinningCircles} from 'react-loading-icons'

export default function ({ addToCart }) {
    debugger
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [ratingP,setRatingP]=useState();

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const rating=()=>{
        userService
            .getRating(id)
            .then((response) => {
                setRatingP(response.data);
                // console.log(productName);
                console.log(data);
                debugger
            })
            .catch((error) => {
                console.log('Something went wrong', error);
            });
    }

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
        rating();
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
        
    };

    const ShowProducts = () => {
        return (
            <>
            <div style={{marginTop:"-100px"}}></div>
                <div className='col-md-6' style={{marginTop:"-200px"}}>
                    <ProductImage prodId={id} height={400} width={400} />
                </div>
                <div className='col-md-6' style={{marginTop:"-200px"}}>
                    <h4 className='text-uppercase text-black-50'>
                        {data.productName}
                    </h4>
                    <h1 className='display-5'>
                        {product.title}
                    </h1>
                    <p className='lead fw-bolder'>
                        
                        <StarRating rating={ratingP}></StarRating>
                       
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        ₹{data.price}
                    </h3>
                    <p className='lead'>{data.description}</p>
                    {/* <button className='btn btn-outline-dark px-4 py-2' onClick={addToCartHandler} > Add to Cart</button> */}
                    <NavLink to={`/shoppingcart/${data.id}`} className="btn btn-outline-dark">Add Cart</NavLink>

                    <Link to={`/order/${data.id}`} className="btn btn-dark ms-2 px-4 py-2">Buy Now</Link>
                    {/* <a href="/order" className="btn btn-dark ms-2 px-4 py-2">Buy Now</a> */}
                    <br></br>
                    <br></br>
                    <br></br>
                    <Review id={data.id}></Review>
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