import React, { useEffect, useState } from 'react';
import ProductImage from './Products/ProductImage';
import userService from '../Services/user.service';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [product, setProduct] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [show, setShow] = useState(true);

    

    const handleAdmin=()=>{
        if(sessionStorage.getItem('userRole')=='ROLE_ADMIN')
        setShow(false);
        else
        setShow(true);
    };

    const handleSearch = () => {
        sessionStorage.setItem('query', searchQuery);
        
        debugger
        userService
            .getAllProducts()
            .then((response) => {
                setProduct(response.data);
                const filteredResults = response.data.filter(
                    (item) => item.productName.toLowerCase().includes(sessionStorage.getItem('query').toLowerCase())
                );
                setSearchResults(filteredResults);
                debugger
            })
            .catch((error) => {
                console.log('Something went wrong', error);
            });
       
    };

    useEffect(() => {
        handleAdmin();
        // init();
    }, [handleAdmin]);
    debugger

    return (
        <>
        {show?(
        <div className='container '>
        <div className='d-flex justify-content-center ' style={{ marginTop: "50px" ,display:'flex', marginBottom: "40px"}}>
            <div className='d-flex justify-content-center '>

                <input className="form-control me-2" type="text" placeholder="Search"
                    aria-label="Search" value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-dark" onClick={handleSearch}>Search</button>
                <br></br>
            </div>
            <br></br>
            <hr></hr>

        </div>
            <div style={{ display: 'flex' }} >


                {searchResults.map((Products) => {

                    return (
                        <>
                        <div className=' col-md-3 scroll-arrow'>
                            <div className=' d-flex justify-content-center '>
                                <div class="card h-10 text-center  " key={Products.id}  >

                                    <ProductImage prodId={Products.id} height={250} />
                                    <div class="card-body">
                                        <h5 class="card-title ">{Products.productName.substring(0, 18)}....</h5>

                                        <p class="card-text lead fw-bold">
                                            ₹ {Products.price}</p>

                                        <NavLink to={`/product/${Products.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
        ):(
            <>
            <div className='col-md-3 mb-4 h-100  d-flex justify-content-center' >
                                <div class="text-center p-5 "   >

                                    <div class="card-body">
                                    </div>
                                </div>
                            </div>
            </>
        )}
        </>

    );
};

export default SearchComponent;
