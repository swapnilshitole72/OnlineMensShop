import React from 'react'
import './Profile.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faMobile, faLock } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import userService from '../../Services/user.service';
import ProfilePage from './ProfilePage';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Profile1() {

    const history=useHistory();
    const [cust, setCust] = useState([]);

    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');

    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');


    const { id } = useParams();

    const editHandler=()=>{
        history.push('/editProfile')
    };

    const saveUser = (e) => {
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
            .then((response) => {
                console.log('user registered successfully', response.data)
                // toast.success("user registered successfully");

            })
            .catch((error) => {
                // toast.error("something went wrong")

                console.log("something went wrong", error.response)
            })



    }

    const init = () => {
        debugger
        userService
            .get(sessionStorage.getItem('userId'))
            .then((user) => {
                setCust(user);
                console.log(cust);
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
    };

    useEffect(() => {
        init();
    }, []);


    return (
        <>
                <ProfilePage firstName={firstName} top={"90px"}></ProfilePage>
            
            <div className="container1">
                <div className="welcomComponentMain">
                   

                    <div className="containtInf justify-content-center ">
                        <div className="container ">
                            <div className="row justify-content-center ">

                                <div className='container justify-content-center'>
                                    <br />

                    <h1 className='d-flex justify-content-center align-items-center  ' style={{ alignContent: 'center' ,color: '#125',fontStyle:'italic' ,marginTop: '-100px'  }}>
                        Profile
                        </h1>

                                    <div className='Outerclass1 ' >
                                        {/* <div> */}

                                        {/* </div> */}
                                        <br />

                                        <div className='content   ' style={{ marginTop: '50px'  }}>  {/*inner data box */}
                                            <form action='/'>
                                                <div className='icon' >  {/*Div for ur name */}
                                                    <FontAwesomeIcon icon={faUser} size="xl" />

                                                    <input className='inputBOX' type="text" autoComplete='off'
                                                        id='fisrtname'
                                                        value={firstName}
                                                        onChange={(e) => setFirstname(e.target.value)}
                                                        placeholder='    Fisrt Name ' readOnly/>

                                                </div>
                                                <br /><br />

                                                <div className='icon' >  {/*Div for ur name */}
                                                    <FontAwesomeIcon icon={faUser} size="xl" />

                                                    <input className='inputBOX' type="text" autoComplete='off'
                                                        id='lastName'
                                                        value={lastName}
                                                        onChange={(e) => setLastname(e.target.value)}

                                                        placeholder='    Last Name ' readOnly/>

                                                </div>
                                                <br /><br />
                                                <div className='icon'>  {/*Div for ur Email */}
                                                    {/* <FontAwesomeIcon icon={faEnvelope} size="lg"/>  */}
                                                    <FontAwesomeIcon icon={faEnvelope} size="xl" />
                                                    <input className='inputBOX' type="text" autoComplete='off'
                                                        id='email'
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        placeholder='    Your Email' readOnly/>

                                                </div>
                                                <br /><br />

                                                <div className='icon'>  {/*Div for ur name */}
                                                    <FontAwesomeIcon icon={faMobile} size="xl" />
                                                    <input className='inputBOX' type="text" autoComplete='off'
                                                        id='mobile'
                                                        value={mobile}
                                                        onChange={(e) => setMobile(e.target.value)}
                                                        placeholder='    Mobile Number' readOnly/>

                                                </div>

                                                <br /><br />

                                                <div className='icon'>  {/*Div for ur name */}
                                                    <FontAwesomeIcon icon={faMobile} size="xl" />
                                                    <input className='inputBOX' type="text" autoComplete='off'
                                                        id='address'
                                                        value={address}
                                                        onChange={(e) => setAddress(e.target.value)}
                                                        placeholder='    Address' readOnly/>

                                                </div>
                                                <br></br>
                                                <br></br>
                                                <div className=' d-flex justify-content-center  '  >
                                                    {/*Div for ur name */}
                                                 <button className='btn btn-dark col-6'  onClick={editHandler}> Edit </button>

                                                </div>








                                                {/* <small >Already a user? <span><a href='/login'>Log In</a></span></small>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; */}
                                                {/* <h6 onClick={()=>resetPage()} className='btn btn-outline-secondary' >Reset</h6> */}


                                                <div className="container d-flex justify-content-center align-items-center">

                                                    {/* <input type='submit' onClick={(e)=>saveUser(e)} className='btn btn-dark btn-lg' value={'SignUp'}/>  */}

                                                </div>
                                                <br></br>
                                                <br></br>
                                          </form>
        

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}