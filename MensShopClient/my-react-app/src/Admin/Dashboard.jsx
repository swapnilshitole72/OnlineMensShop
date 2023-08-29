import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Dashboard() {
    const history=useHistory();
    
    const handleCustomer=()=>{
        history.push('/customerList');
    };
    
    const handleProduct=()=>{
        history.push('/productList');
    };

    const handleAddProduct=()=>{
        history.push('/addproducts');
    };

    const handlePayment=()=>{
        history.push('/paymentList');
    };

    
  
    return (

    <center>
        {/* <PaymentActivityChart>< /PaymentActivityChart> */}
    <div className="container  mt-5"  >

                <h1 style={{marginTop:'00px',color:'blue'}}>Welcome </h1>
      <h2>{sessionStorage.getItem('userName')}</h2>

      <div className="row" style={{marginTop:'0px',marginLeft:'150px'}}>


        <div className="col-md-5 mb-5">
          <div className="custom-card justify-content-center"  style={{marginTop:'50px' ,height:'250px' ,backgroundColor:'red'}}>
         <br></br>
          <h3> Customers</h3>
            <button className='btn btn-dark' style={{marginTop:'50px'}} onClick={handleCustomer}> Show Customers</button>

          </div>
        </div>

        <div className="col-md-5 mb-5">
          <div className="custom-card justify-content-center" style={{marginTop:'50px' ,height:'250px',backgroundColor:'red'}}>
         <br></br>
          <h3>Products</h3>
          <button className='btn btn-dark' style={{marginTop:'50px'}} onClick={handleProduct}> Show Products</button>
            
            
          </div>
        </div>

        <div className="col-md-5 mb-5">
          <div className="custom-card justify-content-center" style={{marginTop:'50px',height:'250px',backgroundColor:'red'}}>
          <h3>Add Product</h3>
          <button className='btn btn-dark' style={{marginTop:'50px'}} onClick={handleAddProduct}> Add Product</button>
          
        
          </div>
        </div>

        <div className="col-md-5 mb-5">
          <div className="custom-card justify-content-center" style={{marginTop:'50px',height:'250px',backgroundColor:'red'}}>
          <h3>Show Payment</h3>
          <button className='btn btn-dark' style={{marginTop:'50px'}} onClick={handlePayment}> Show Payments</button>
        
        
          </div>

          
        </div>
       

          
      </div>
    </div>
    </center>
  );
}

export default Dashboard;