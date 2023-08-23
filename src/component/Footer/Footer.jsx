import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer  py-5">
      <div >
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <h3>Categories</h3>
            <ul className="list-unstyled">
              <li>Women</li>
              <li>Men</li>
              <li>Shoes</li>
              <li>Accessories</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h3>Links</h3>
            <ul className="list-unstyled">
              <li>FAQ</li>
              <li>Pages</li>
              <li>Stores</li>
              <li>Compare</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h3>Contact</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <span className="logo">Lamastore</span>
            <span className="d-block text-light mt-2">© 2023. All Rights Reserved</span>
          </div>
          <div className="col-md-6 text-md-right">
            <img src="/img/payment.png" alt="Payment Methods" className="img-fluid" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
