import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import userService from '../Services/user.service';
import SearchComponent from './SearchComponent';



export default function Navbar() {
    const location = useLocation();
    const history = useHistory();
    const [data, setData] = useState([]);
    const [showLink, setShowLink] = useState(false);
    const [showRole, setShowRole] = useState(false);
    const userRole = () => {
        const role=sessionStorage.getItem('userRole');
    
        if (role=='ROLE_CUSTOMER') {
          return true;
        } else if (role=='ROLE_ADMIN'){
          return false;
        }
      };

     

         


    useEffect(() => {
        setShowLink(sessionStorage.getItem('IsUserLoggedIn'));
        setShowRole(userRole);
    }, [])

    const logoutUser = () => {
        sessionStorage.removeItem('userId');
        // sessionStorage.setItem('IsUserLoggedIn',false);
        sessionStorage.removeItem('IsUserLoggedIn');
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem('userRole');
        setShowLink(false);
        setShowRole(true);
        history.push('/login');
    }

    return (
        <div>
            <div>

                <nav className="navbar navbar-expand-lg  navbar-light  bg-dark bg-gray py-2 shadow-sm fixed-top " style={{ zIndex: 100 }} >

                    <div className="container-fluid">

                        {/* fs-4 fs-1 fs-3 hyane font increase decrease karta yeto */}
                        <a className="navbar-brand fw-bold fs-2 " href="/" style={{ marginLeft: '50px', color: '#FFFFFF' }} >
                            <i className='fa fa-shopping-bag'></i> &nbsp;
                            shopX  </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* mx kel tr links lamb jatet */}
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                               
                            {showRole && showLink ? (
                                <li className="nav-item">
                                    <a className="nav-link  text-light btn btn-dark" aria-current="page" href="/">
                                        <b> Home</b>
                                    </a>
                                </li>):(
                                    <li className="nav-item">
                                    <a className="nav-link  text-light btn btn-dark" aria-current="page" href="/">
                                        <b> Dashboard</b>
                                    </a>
                                </li>
                                )}


                                <li className="nav-item">
                                    <a className="nav-link  text-light btn btn-dark" href="/Products">
                                        <b>   Products</b>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  text-light btn btn-dark" href="/aboutus">
                                        <b>About</b>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  text-light btn btn-dark" href="/contactUs">
                                        <b>Contact</b>
                                    </a>

                                </li>
                                <div className="container-fluid">
                                    <form className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>


                            </ul>

                            <div className='buttons'>



                                {showLink ? (
                                    <div class="btn-group" >
                                        <button className="btn btn-outline-light   dropdown-toggle  " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <b>
                                                <i className='fa fa-user me-1'></i>
                                                {sessionStorage.getItem('userName')}</b>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a className="dropdown-item" href="profile">My Profile</a></li>
                                            <li><a className="dropdown-item" href="editProfile">Edit Profile</a></li>
                                            
                                            {showRole?(
                                            <li><a className="dropdown-item" href="myorder">My orders</a></li>):(<></>)}
                                            <li><a className="dropdown-item" href="/" onClick={() => logoutUser()}>Logout</a></li>

                                        </ul>
                                    </div>)
                                    : (
                                        <a href='/login' className='btn btn-outline-light '>
                                            <b> <i className='fa fa-sign-in me-1'></i>
                                                Login</b>
                                        </a>
                                    )}&nbsp;&nbsp;

                                {showLink ? (
                                    <a href='/' className='btn btn-outline-light' onClick={() => logoutUser()}>
                                        <b> <i className='fa fa-sign-out me-1'></i>
                                            Logout</b>
                                    </a>) : (
                                    <a href='/register' className='btn btn-outline-light ms-2'>   {/*  ms-2 ne button madhe space yeto */}
                                        <i className='fa fa-user-plus me-1'></i>
                                        <b>  Register</b>
                                    </a>

                                )}

                                <a href='shoppingcart' className='btn btn-outline-light ms-2 '>
                                    <i className='fa fa-shopping-cart me-1'></i>
                                    <b>  Cart(0)</b>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    )
}