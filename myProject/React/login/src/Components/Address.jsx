import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import './Address.css'


export default function Address() {

function sayHello(){
  alert('hello');
  // <img src="598847.jpeg" alt="" />
  
}

  return (
    <>
     <div className='container'>

          <div className='AddressContent'>
               
     <br /> <br /> <br />
                 <br /><br />
            <div>

            <div className='inputDIV'>
                       <input className='inputBOX' type="text" placeholder='Pin Code*' />
                 </div>
                 <br /><br />
                <div>
                <input className='inputBOX' type="text" placeholder='Address(house No,Building,street,Area)*' />

                </div>
                <br /><br />

                <div>
                <input className='inputBOX' type="text" placeholder='Locality / Town*' />

                </div>
                <br /><br />

                <div className='DIVinputSmallBOX'>
                <input className='inputSmallBOX' type="text" placeholder='City / District*' />
                <input className='inputSmallBOX' type="text" placeholder='State*' />

                </div>

              <br /><br />
                <div>
               <p>SAVE ADDRESS AS</p>
                  
                </div>
                <br /><br />

                <div className='homebutton'>
                {/* <Button variant="success">Success</Button>{' '}
                <Button variant="success">Success</Button>{' '} */}
                <button className='button'>Home </button>
                <button className='button'>Work </button>

                </div>

 <br />  <br />
                <div>
                <button className='Addaddress' onClick={sayHello}> ADD ADDRESS</button>
                </div>
                
                 

            </div>
                

                 

          </div>
          

     </div>
        


    </>
  )
}
