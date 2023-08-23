import React, { useState, useEffect  } from 'react'
// import { Bars} from 'react-loading-icons'
import {NavLink} from 'react-router-dom'
import product from '../Products/product';
import CustomerService from './Customer.service';



export default function  AllProducts() {
     
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

    const handleDelete = (id) => {
        console.log('Printing id', id);
        CustomerService
          .remove(id)
          .then((response) => {
            console.log('employee deleted successfully', response.data);
            
          })
          .catch((error) => {
            console.log('Something went wrong', error);
          });
      };
      

    const Loading = () => {
        return (
            <>
             {/* <div className='col-md-3 ' >
                <Skeleton height={350}/>
             </div>
             <div className='col-md-3 ' >
                <Skeleton height={350}/>
             </div>
             <div className='col-md-3 ' >
                <Skeleton height={350}/>
             </div>
             <div className='col-md-3 ' >
                <Skeleton height={350}/>
             </div>
              */}
              Loading........
             {/* <Bars></Bars> */}
                
            </>
        );
    };
    



   
    const ShowProducts1 = () => {
        return (
            <>
               
                <div>
                    <br></br>
                    <br></br>
                </div>
                {filter.map((Products) => {
                   
                   return (
                        <>
                            <div className='col-md-3 mb-4 h-100' >
                               {/* this code template copy from boostrap card */}
                               {/* p-4 p-3 used for adjust the width of product image  */}
                                <div class="card h-100 text-center p-5" key={Products.id}  >
                                    <img src={Products.image} class="card-img-top" alt={Products.title} height="250px"/>
                                    <div class="card-body">
                                        <h5 class="card-title mb-0  ">{Products.title.substring(0, 18)}....</h5>
                                       
                                        {/* fw-bold  used for bold text */}
                                        <p class="card-text lead fw-bold">
                                            $ {Products.price}</p>

                                            <button onClick={handleDelete(Products.id)} className="btn btn-outline-danger">Delete</button>

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
                        <h1 className='display-6 fw-bolder text-center' style={{ color: '#808080' }}>All Product List</h1>
                        <hr></hr>
                    </div>

                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts1 />}
                </div>
            </div>


        </div>
    
    )
}