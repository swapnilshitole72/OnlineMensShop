import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faUser ,faMobile,faLock,faCircleCheck } from '@fortawesome/free-solid-svg-icons'
export default function SignUp() {
  return (
    <>
            <div className='container '> 

              <div className='Outerclass'>
              <br /><br /> 
              <div>
                  <h1 className='SignTitle'>Sign up</h1>

                </div>
                <br />
                
                <div className='content'>  {/*inner data box */}
                       <div className='icon' >  {/*Div for ur name */}
                       <FontAwesomeIcon icon={ faUser} size="xl" /> 
                
                                             
                       <input className='inputBOX' type="text"  autoComplete='off' variant='outlined' fullWidth placeholder='    Your Name '/>
                      
                                             </div>
                       <br /><br />
                       <div className='icon'>  {/*Div for ur Email */}
                       {/* <FontAwesomeIcon icon={faEnvelope} size="lg"/>  */}
                       <FontAwesomeIcon icon={faEnvelope} size="xl" />
                                           <input className='inputBOX' type="text"  autoComplete='off'  placeholder='    Your Email'/>

                       </div>
                       <br /><br />

                       <div className='icon'>  {/*Div for ur name */}
                       <FontAwesomeIcon  icon={faMobile} size="xl" />
                       <input className='inputBOX' type="text"  autoComplete='off'  placeholder='    Mobile Number'/>

                       </div>
                       <br /><br />

                       <div className='icon'>  {/*Div for ur name */}
                       <FontAwesomeIcon icon={faLock} size="xl" />
                       <input className='inputBOX' type="password"  autoComplete='off'  placeholder='     Password'/>

                       </div>
                       <br /><br />
                        <div className='icon'>  {/*Div for ur name */}
                      
                        <FontAwesomeIcon icon={faCircleCheck}  size="xl" />                        
                        <input className='inputBOX' type="text"  autoComplete='off'  placeholder='    confirm your password'/>

                       </div>
                       <br /><br /><br />
                       <input type="button" className='RegisterBut' value="Register" />
                      



                </div>
              </div>
                
            </div>
         

    </>
  )
}
