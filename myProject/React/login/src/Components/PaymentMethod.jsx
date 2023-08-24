import React from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const notify = () =>  toast.error("fill the box's");

  return (
    <div className="container py-5">
    <div className="row justify-content-center">
    <div className="col-md-10 col-lg-9 col-xl-6"> {/* Increased column size */}
            <div className="card rounded-3">
          <div className="card-body p-4">
            <div className="text-center mb-4">
              <h3>Settings</h3>
              <h6>Payment</h6>
            </div>
            <p className="fw-bold mb-4 pb-2">Saved cards:</p>
            <div className="d-flex flex-row align-items-center mb-4 pb-1">
              <img
                className="img-fluid"
                src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                alt="Mastercard Logo"
              />
              <div className="flex-fill mx-3">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    id="form1"
                    placeholder="**** **** **** 3193"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center mb-4 pb-1">
              <img
                className="img-fluid"
                src="https://img.icons8.com/color/48/000000/visa.png"
                alt="Visa Logo"
              />
              <div className="flex-fill mx-3">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    id="form2"
                    placeholder="**** **** **** 4296"
                  />
                </div>
              </div>
            </div>
            <p className="fw-bold mb-4">Add new card:</p>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="form3"
                placeholder="Cardholder's Name"
              />
            </div>
            <div className="row my-4">
              <div className="col-md-7">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    id="form4"
                    placeholder="Card Number"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    id="form5"
                    placeholder="MM/YYYY"
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    id="form6"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>
            <button className="btn btn-success btn-lg btn-block"onClick={notify} >
              Add card
              
             
            </button>
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
    </div>
  </div>
  
  );
}