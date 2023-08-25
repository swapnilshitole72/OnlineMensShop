import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import './Address.css'
import { useState } from 'react';


import userService from '../../Services/user.service';
export default function Address() {

  const [Addres, setAddress] = useState('');
  const [pin, setPin] = useState();
  const [house, setHouse] = useState('');
  const [locality, setLocality] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');


  function sayHello() {
    alert('hello');
    // <img src="598847.jpeg" alt="" />

  }

  const saveAddress = (e) => {
    setAddress(house + ', ' + locality + ', ' + city + ', ' + state+'- '+pin);

    debugger
    userService
      .setAddress(sessionStorage.getItem('userId'), Addres)
      .then((response) => {
        debugger
        console.log(response);

      })
      .catch((error) => {

      })
  }

  return (
    <>
      <div className='container'>

        <div className='AddressContent'>

          <h2>Edit Address</h2>
          <br></br>
          <div>



            <table class="">
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PIN</td>
                  <td><input className='inputBOX' type="text" placeholder='Pin Code*'
                    id='pin'
                    value={pin}
                    onChange={(e) => setPin(e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td>Landmark</td>
                  <td><input className='inputBOX' type="text" placeholder='Address(house No,Building,street,Area)*'
                id='house'
                value={house}
                onChange={(e) => setHouse(e.target.value)}
              /></td>
                </tr>
                <tr>
                  <td>Town</td>
                  <td><input className='inputBOX' type="text" placeholder='Locality / Town*'
                id='locality'
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
              /></td>
                </tr>
                <tr>
                  <td>City</td>
                  <td><input className='inputSmallBOX' type="text" placeholder='City / District*'
                id='city'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              /></td>
                </tr>
                <tr>
                  <td>State</td>
                  <td><input className='inputSmallBOX' type="text" placeholder='State*'
                id='state'
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              </td>
                </tr>

                <tr>
                  <td colSpan={2}>

                  <button className='btn btn-primary' onClick={saveAddress}> ADD ADDRESS</button>

                  </td>
                </tr>
              </tbody>
            </table>


            <div>
            </div>



          </div>




        </div>


      </div>



    </>
  )
}