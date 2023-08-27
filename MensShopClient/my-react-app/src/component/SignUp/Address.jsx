import React from 'react'
import './Address.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import userService from '../../Services/user.service';
export default function Address() {

  const history = useHistory();
  
  var [Addres, setAddre] = useState('');
  const [pin, setPin] = useState();
  const [house, setHouse] = useState('');
  const [locality, setLocality] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

const Back=()=>{
  history.goBack();
};


  const saveAddress = () => {
    setAddre(house + ', ' + locality + ', ' + city + ', ' + state+'- '+pin);

    debugger
    userService
      .setAddress(sessionStorage.getItem('userId'), Addres)
      .then((response) => {
        debugger
        console.log(response);
        // history.goBack();

      })
      .catch((error) => {

      })
  }

  return (
    <>
      <div className='container'>
        <div className='AddressContent '>
        <br></br>
        <center>

          <h2>Change Address</h2>
          <br></br>
          </center>
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
                  <td><br></br></td>
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
                  <td><br></br></td>
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
                  <td><br></br></td>
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
                  <td><br></br></td>
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
                  <td><br></br></td>
                </tr>

                <tr>
                  <td></td>
                  <td >

                  <button className='btn btn-primary' onClick={saveAddress}> Change Address</button>&emsp;&emsp;&emsp;
                  <button className='btn btn-secondary' onClick={Back}> Go Back</button>

                  </td>
                </tr>
              </tbody>
            </table>
             
            <br></br>


            <div>
            </div>



          </div>




        </div>

<br></br>
<br></br>
<br></br>
      </div>



    </>
  )
}