import userService from "../Services/user.service";
import { useEffect, useState } from 'react';
//import { Link} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react'

export default function UpdateCust() {

  const [user,setUser]=useState([]);
  // const id=2;
// const init=(id)=>{
 
//     userService
//     .get(id)
//     .then((response)=>{
//      console.log("responsed data",response.data);
//      setUser(response.data);
//     })
//     .catch((error)=>{
//          console.log('something went wrong',error.response);

//     });
// };


useEffect(()=>{
  axios.get('http://localhost:8080/customer/1')
  .then((response)=>{
    
   console.log(response.data.id);
   setUser(response.data);
   toast.success("user registered successfully");

  })
  .catch((error)=>{
       console.log('something went ',error.response);
       toast.error("something went wrong")


  });
  
},[]);




  return (
    <div className='container'>
   
    <hr />
    <div>
      {/* <Link to='/add' className='btn btn-primary mb-2'>
        Add Employee
      </Link> */}
      <table className='table table-bordered table-striped'>
        <thead className='thead-dark'>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>address</th>
            <th>mobile</th>
          
            <th>password</th>
            
            <th colSpan={3}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((error) => (
            <tr key={error.reponse.data.id}>
              <td>{error.reponse.data.firstName}</td>
              <td>{error.reponse.data.lastName}</td>
              <td>{error.reponse.data.email}</td>
              <td>{error.reponse.data.address}</td>
              <td>{error.reponse.data.mobile}</td>
              <td>{error.reponse.data.password}</td>
              
              <td>
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
                {/* <Link
                  className='btn btn-info'
                  to={`/employees/edit/${customer.id}`}
                >

                  Update
                </Link> */}
                {/* <a className='btn btn-info' href={href}>Go to Edit Employee</a> */}
              </td>

              {/* <td>
                <Link
                  className='btn btn-info'
                  to={`/uploadImage/${employee.id}`}
                >
                  Image Upload
                </Link>
              </td> */}
              <td>
                {/* <button
                  className='btn btn-danger ml-2'
                  onClick={() => {
                    handleDelete(customer.id);
                  }}
                >
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}
