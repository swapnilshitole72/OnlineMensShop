import React from 'react'
import './login.css';
import { useLocation } from 'react-router-dom';

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import userService from '../../Services/user.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
export default function Login() {

  const location = useLocation();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { id } = useParams();
  const resetPage=()=>{
    setEmail('');
    setPassword('');
}



  const loginUser = (e) => {
    e.preventDefault();
    const user = {
      email,
      password
    };
debugger
    userService
      .login(user)
      .then((response) => {
        console.log('user loged in successfully', response.data);
        sessionStorage.setItem('IsUserLoggedIn',true);
        sessionStorage.setItem('userId',response.data.id);
        // console.log(sessionStorage.getItem('userId')+sessionStorage.getItem('IsUserLoggedIn'))
        toast.success("user loged in successfully");

        const newLocation = { ...location, pathname: '/' };
        const newLocationString = `${newLocation.pathname}${newLocation.search}${newLocation.hash}`;
        window.location.href = newLocationString;


      })
      .catch((error) => {
        toast.error(error.response.data)
        sessionStorage.setItem('IsUserLoggedIn',false);
        console.log("something went wrong", error.response.data)

      })
  }
  useEffect(() => {
    
    if (id) {
      userService
        .get(id)
        .then((user) => {
          setEmail(user.data.email);
          setPassword(user.data.password);
        })
        .catch((error) => {
          console.log('Something went wrong', error);
        });
    }
  }, []);

  return (

    <>
      <div className="container">
<form action='/'>
        <div className='login'>
        <br /> <br />
          <h2 align='center'>Sign In</h2>

          <br /> <br />  
          <div className='icon'>  {/*Div for ur Email */}
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
            <input className='inputBOX' type="text" autoComplete='off'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='    Your Email' />
          </div>
          <br /> <br /> 
          <div className='icon'>  {/*Div for ur name */}
            <FontAwesomeIcon icon={faLock} size="xl" />
            <input className='inputBOX' type="password" autoComplete='off'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='     Password' />
          </div>
          <br />
          <div>
         <small >Forgot password ?<span><a href="/forgotPass">Click Here</a></span></small>
         &emsp;&emsp;&emsp;
         <h6 onClick={()=>resetPage()} className='btn btn-outline-secondary' >Reset</h6>
         </div>

          <div >
          <div className="container d-flex justify-content-center align-items-center">
            
            <input type='submit' onClick={(e)=>loginUser(e)} className='btn btn-dark btn-lg' value={'Login'}/> 
          </div>
          </div>
          <br /> 
          <ToastContainer
                              position="top-right"
                              autoClose={2500}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme="colored"
                              />       
        </div>
        </form>
      </div>
      <br /> <br /> <br /> <br /> <br />
    </>
  )
}
