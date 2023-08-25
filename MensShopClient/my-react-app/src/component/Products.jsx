import React, { useState, useEffect } from 'react'
// import { Bars} from 'react-loading-icons'
import { NavLink } from 'react-router-dom'
import userService from '../Services/user.service';
import ProductImage from './Products/ProductImage';


export default function Products() {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(false);

    const productHandler=(category)=>{
        debugger
        userService.
        getByCategory(category)
        .then((response)=>{
            setData(response.data);
        })
        .catch((error) => {
            console.log('Something went wrong', error);
        });
    };

    const init = () => {
        userService
            .getAllProducts()
            .then((response) => {
                setData(response.data);
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
                Loading........
            </>
        );
    };

    const ShowProducts = () => {
        return (
            <>
                <div className='buttons  d-flex justify-content-center '>

                    <button className='btn btn-outline-dark me-2' onClick={()=>init()} > All</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>productHandler('SHIRT')}>Top Wear </button>  {/* onClick={()=>filterProducts("Top Wear")} */}
                    <button className='btn btn-outline-dark me-2' onClick={()=>productHandler('PANT')}>Buttom Wear</button> {/*onClick={()=>filterProducts("Buttom Wear")}*/}
                    <button className='btn btn-outline-dark me-2' onClick={()=>productHandler('FESTIVAL')}>Festival Wear</button> {/*onClick={()=>filterProducts("Festival Wear")}*/}
                    <button className='btn btn-outline-dark me-2'onClick={()=>productHandler('TROUSER')}>Casual</button>         {/* onClick={()=>filterProducts("Casual")} */}
                </div>
                <div>
                    <br></br>
                    <br></br>
                </div>
                {data.map((Products) => {

                    return (
                        <>
                            <div className='col-md-3 mb-4 h-100' >
                                <div class="card h-100 text-center p-5" key={Products.id}  >

                                    <ProductImage prodId={Products.id} height={250} />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0  ">{Products.productName.substring(0, 18)}....</h5>

                                        <p class="card-text lead fw-bold">
                                            ₹ {Products.price}</p>

                                        <NavLink to={`/product/${Products.id}`} className="btn btn-outline-dark">Buy Now</NavLink>

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
            <div className='container my-5 py-5 top-margin'>
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