import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux';

// import { addcart } from '../redux/action'  
import { useParams } from 'react-router'
// import {SpinningCircles} from 'react-loading-icons'



export default function ({ addToCart }) {
         debugger
    const { id } = useParams();

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);

            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        debugger
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
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

    const ShowProducts=()=>{
        return(
            <>
              <div className='col-md-6'>
                <img src={product.image} alt={product.title}  height={400} width={400}/>
                
            </div>
            <div className='col-md-6'>
                <h4 className='text-uppercase text-black-50'>
                    {product.category}
                </h4>
                <h1 className='display-5'>
                  {product.title}
                </h1>
                <p className='lead fw-bolder'>
                    Rating{product.rating && product.rating.rate}
                     <i className='fa fa-star'></i>
                </p>
               <h3 className='display-6 fw-bold my-4'>
               ${product.price}
               </h3>
               <p className='lead'>{product.description}</p>
             <button className='btn btn-outline-dark px-4 py-2'onClick={addToCartHandler} > Add to Cart</button>
             

             <a href="/cart" className="btn btn-dark ms-2 px-4 py-2">Go to Cart </a>
             
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