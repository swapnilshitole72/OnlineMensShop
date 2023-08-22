import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';

export default function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setloading] = useState(false);
    let componentMounted = true;


    useEffect(() => {
        const getProduct = async () => {
            setloading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setloading(false);
            }
            return () => {
                componentMounted = false;
            }

        }
        getProduct();
    }, []);
      

    const Loading = () => {
        return (
            <>
             <div className='col-md-3 ' >
                <Skeleton>
                    
                </Skeleton>
             </div>
                
            </>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                <div className='buttons  d-flex justify-content-center '>
                    <button className='btn btn-outline-dark me-2'> All</button>
                    <button className='btn btn-outline-dark me-2'>Top Wear </button>
                    <button className='btn btn-outline-dark me-2'>Buttom Wear</button>
                    <button className='btn btn-outline-dark me-2'>Festival Wear</button>
                    <button className='btn btn-outline-dark me-2'>Casual</button>
                </div>
                
                {filter.map((Products) => {
                    return (
                        <>
                            <div className='col-md-3 mb-4' >
                               {/* this code template copy from boostrap card */}
                               {/* p-4 p-3 used for adjust the width of product image  */}
                                <div class="card h-100 text-center p-3" key={Products.id}  >
                                    <img src={Products.image} class="card-img-top" alt={Products.title} height="250px"/>
                                    <div class="card-body">
                                        <h5 class="card-title mb-0  ">{Products.title}....</h5>
                                       
                                        {/* fw-bold  used for bold text */}
                                        <p class="card-text lead fw-bold">
                                            $ {Products.price}</p>

                                        <a href="#" class="btn btn-outline-dark">Buy Now</a>
                                    </div>
                                </div>



                            </div>
                        </>
                    );
                })}
            </>
        );
    }


    return (

        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'> Latest Products</h1>
                        <hr></hr>
                    </div>

                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>


        </div>
    )
}
