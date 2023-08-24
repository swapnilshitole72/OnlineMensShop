
import React from "react";
import './Cart.css'
export default function cart() {
return (
<section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
 <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12">
        <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
          <div className="card-body p-0">
            <div className="row g-0">
              <div className="col-lg-8">
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                    <h6 className="mb-0 text-muted">3 items</h6>
                  </div>

                  <hr className="my-4" />

                  {/* Repeat the item rows here with regular HTML tags */}
                  
                  <div className="pt-5">
                    <h6 className="mb-0">
                      <a href="#!" className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2"></i> Back to shop
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 bg-grey">
                <div className="p-5">
                  <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr className="my-4" />

                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="text-uppercase">items 3</h5>
                    <h5>€ 132.00</h5>
                  </div>

                  <h5 className="text-uppercase mb-3">Shipping</h5>

                  <div className="mb-4 pb-2">
                    <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                      <option value="1">Standard-Delivery- €5.00</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                    </select>
                  </div>

                  <h5 className="text-uppercase mb-3">Give code</h5>

                  <div className="mb-5">
                    <input type="text" className="form-control form-control-lg" placeholder="Enter your code" />
                  </div>

                  <hr className="my-4" />

                  <div className="d-flex justify-content-between mb-5">
                    <h5 className="text-uppercase">Total price</h5>
                    <h5>€ 137.00</h5>
                  </div>

                  <button type="button" className="btn btn-dark btn-block btn-lg">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</section>
);
}