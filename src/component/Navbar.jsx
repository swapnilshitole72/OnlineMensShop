import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


export default function Navbar() {
  const location = useLocation();

    const [showLink, setShowLink] = useState(false);

    useEffect(() => {
        setShowLink(sessionStorage.getItem('IsUserLoggedIn'));

    }, [])

    const logoutUser=()=>{
        sessionStorage.removeItem('userId');
        // sessionStorage.setItem('IsUserLoggedIn',false);
        sessionStorage.removeItem('IsUserLoggedIn');
        setShowLink(false);
        const newLocation = { ...location, pathname: '/home' };
        const newLocationString = `${newLocation.pathname}${newLocation.search}${newLocation.hash}`;
        window.location.href = newLocationString;

    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-light bg-light bg-white py-2 shadow-sm fixed-top" style={{ zIndex: 100 }} >
                <div className="container-fluid">

                    {/* fs-4 fs-1 fs-3 hyane font increase decrease karta yeto */}
                    <a className="navbar-brand fw-bold fs- " href="/" style={{ marginLeft: '50px' }}>
                    <i className='fa fa-shopping-bag'></i> &nbsp;
                        ShOpX</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* mx kel tr links lamb jatet */}
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    Home
                                </a>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link" href="/AllProducts">
                                    Products
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contact
                                </a>

                            </li>
                            <div class="container-fluid">
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>


                        </ul>

                        <div className='buttons'>
                            {/* button over effect */}



                            {showLink ? (
                                <a href='/profile' className='btn btn-outline-dark '>
                                    <i className='fa fa-user me-1'></i>
                                    Profile
                                </a>) : (
                                <a href='/login' className='btn btn-outline-dark'>
                                    <i className='fa fa-sign-in me-1'></i>
                                    Login
                                </a>
                            )}&nbsp;&nbsp;

                            {showLink ? (
                                <a href='/logout' className='btn btn-outline-dark' onClick={()=>logoutUser()}>
                                    <i className='fa fa-sign-out me-1'></i>
                                    Logout
                                </a>) : (
                                <a href='/register' className='btn btn-outline-dark ms-2'>   {/*  ms-2 ne button madhe space yeto */}
                                    <i className='fa fa-user-plus me-1'></i>
                                    ragister
                                </a>

                            )}

                            <a href='' className='btn btn-outline-dark ms-2 '>
                                <i className='fa fa-shopping-cart me-1'></i>
                                Cart(0)
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

