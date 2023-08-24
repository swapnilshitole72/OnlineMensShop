import React from 'react'
import './login.css';
import ForgotPassword from './Forgpas'

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLock} from '@fortawesome/free-solid-svg-icons'

export default function Login() {
  
  




  //  const signup=()=>{
    
// <img src="598847.jpeg" alt="" />
//   } 
  return (

    <>


       <div className="container">
       
          <div  className='login'>
          <h2 align='center'>Sign In</h2>
          
                    <br /> <br />  <br /> <br />

                    <div className='icon'>  {/*Div for ur Email */}
                       {/* <FontAwesomeIcon icon={faEnvelope} size="lg"/>  */}
                       <FontAwesomeIcon icon={faEnvelope} size="xl" />
                  <input className='inputBOX' type="text"  autoComplete='off'  placeholder='    Your Email'/>

                       </div>
              <br /> <br />
              <div className='icon'>  {/*Div for ur name */}
                       <FontAwesomeIcon icon={faLock} size="xl" />
                       <input className='inputBOX' type="password"  autoComplete='off'  placeholder='     Password'/>

                       </div>
                       
              <br />
              <a href="/ForgotPassword">Forgot password</a>
              
             <br /><br />
             
              <div className='buttonDIV' >
              {/* <input type="button" value="forgot password"  /> */}
              <i></i>
                {/* <input type="button" value="Sign in" className='buttonBOX' /> */}
                {/* <button   className='buttonBOX' onClick={signup}></button> */}
                <Button  className='buttonBOX' variant="success">Sign up</Button>


                {/* <input type="button" value="Sign up" className='buttonBOX'/> */}
                
              </div>
              


              
          </div>
          

       </div>
  

    </>
  )
}
