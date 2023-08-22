import React from 'react'
import './login.css';
import { useHistory } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLock} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
export default function Login() {
  const history = useHistory();

  const handleNavigate = () => {
    // Navigate to the target route
    history.push('/target-route');
  };





//   const signup=()=>{
    
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
              <Link to="./Forgpas.jsx">Go to Home</Link>
              
              <h5  > <a >forgot password</a> </h5> 
              <button onClick={handleNavigate}>Navigate</button>
             
              <div className='buttonDIV' >
              <input type="button" value="forgot password"  />
              
                {/* <input type="button" value="Sign in" className='buttonBOX' /> */}
                <Button  className='buttonBOX' variant="success">Sign in</Button>{' '}
                {/* <button   className='buttonBOX' onClick={signup}></button> */}
                <Button  className='buttonBOX' variant="success">Sign up</Button>{' '}

                {/* <input type="button" value="Sign up" className='buttonBOX'/> */}
                
              </div>
              


              
          </div>
          

       </div>
  

    </>
  )
}
