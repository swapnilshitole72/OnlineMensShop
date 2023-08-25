import { useState } from 'react';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faUser ,faMobile,faLock} from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import userService from '../../Services/user.service';
import './SignUp.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function AddUser() {
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');

    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [password, setPassword] = useState('');
   const [confirmpassword, setConfirmpassword] = useState('');
    const [mobile, setMobile] = useState('');

    
    const { id } = useParams();

    const resetPage=()=>{

        setFirstname('');
        setAddress('');
        setEmail('');
        setLastname('');
        setPassword('');
        setMobile('');

    }


    const saveUser=(e)=>{
    e.preventDefault();
    const user = {
    firstName,
    lastName,
    email,
    password,
    address,
    mobile,
    
  };

  userService
  .create(user)
  .then((response)=>{
    console.log('user registered successfully',response.data)
    toast.success("user registered successfully");

  })
  .catch((error)=>{
    toast.error("something went wrong")
   
    console.log("something went wrong",error.response)
  })

 
  }
  useEffect(()=>{
    if (id) {
        userService
          .get(id)
          .then((user) => {
            setFirstname(user.data.firstName);
            setLastname(user.data.lastName);
            setEmail(user.data.email);
            setPassword(user.data.password);
            setAddress(user.data.address);
            setMobile(user.data.mobile);
          })
          .catch((error) => {
            console.log('Something went wrong', error);
          });
      }

    
  },[]);

  return (
   <>
            <div className='container '> 
            
              <div className='Outerclass' >
              <br /><br /> 
              <div>
                  <h1 className='SignTitle'>Sign up</h1>

                </div>
                <br />
                
                <div className='content'>  {/*inner data box */}
                <form action='/'>
                       <div className='icon' >  {/*Div for ur name */}
                       <FontAwesomeIcon icon={ faUser} size="xl" /> 
                                             
                       <input className='inputBOX' type="text"  autoComplete='off'
                       id='fisrtname'
                       value={firstName}
                       onChange={(e)=>setFirstname(e.target.value)}
                         placeholder='    Fisrt Name '/>
                      
                                             </div>
                       <br /><br />
                       
                       <div className='icon' >  {/*Div for ur name */}
                       <FontAwesomeIcon icon={ faUser} size="xl" /> 
                                             
                       <input className='inputBOX' type="text"  autoComplete='off'
                       id='lastName'
                       value={lastName}
                       onChange={(e)=>setLastname(e.target.value)}
                       
                         placeholder='    Last Name '/>
                      
                                             </div>
                       <br /><br />
                       <div className='icon'>  {/*Div for ur Email */}
                       {/* <FontAwesomeIcon icon={faEnvelope} size="lg"/>  */}
                       <FontAwesomeIcon icon={faEnvelope} size="xl" />
                      <input className='inputBOX' type="text"  autoComplete='off' 
                      id='email'
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                       placeholder='    Your Email'/>

                       </div>
                       <br /><br />

                       <div className='icon'>  {/*Div for ur name */}
                       <FontAwesomeIcon  icon={faMobile} size="xl" />
                       <input className='inputBOX' type="mobile"  autoComplete='off' 
                       id='mobile'
                       value={mobile}
                       onChange={(e)=>setMobile(e.target.value)}
                        placeholder='    Mobile Number'/>

                       </div>

                       <br /><br />

                          <div className='icon'>  {/*Div for ur name */}
                          <FontAwesomeIcon  icon={faMobile} size="xl" />
                          <input className='inputBOX' type="text"  autoComplete='off'
                          id='address'
                          value={address}
                          onChange={(e)=>setAddress(e.target.value)}
                            placeholder='    Address'/>

                          </div>
                       <br /><br />

                       <div className='icon'>  {/*Div for ur name */}
                       <FontAwesomeIcon icon={faLock} size="xl" />
                       <input className='inputBOX' type="password"  autoComplete='off' 
                       id='password'
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                        placeholder='     Password' />

                       </div>

                       <br />

                       <small >Already a user? <span><a href='/login'>Log In</a></span></small>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <h6 onClick={()=>resetPage()} className='btn btn-outline-secondary' >Reset</h6>

                       <br />
                       <br />

                       <div className="container d-flex justify-content-center align-items-center">

                        <br></br>
                       <input type='submit' onClick={(e)=>saveUser(e)} className='btn btn-dark btn-lg' value={'SignUp'}/> 
                       
                        </div>
                        <br></br>
                       <br></br>                       
                       </form>

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
              </div>
             
            </div>
         

    </>
  )
}