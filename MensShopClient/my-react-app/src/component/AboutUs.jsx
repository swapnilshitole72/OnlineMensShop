import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


function AboutUs() {
  return (
    <div className="about-us container" style={{marginTop:"200px"}}>
      <div className="row text-center">
      <div className="col-xs-12 col-md-6">
        <div >
          <img
            src="/assets/aboutus.png"
            alt=""
            className="img-fluid"
          />
          </div>
       
       </div>
        <div className="col-xs-12 col-md-6 mt-4">
    
          <h1>About Our Menswear Store</h1>
          <p>
            Welcome to the finest destination for men's fashion. At MensWear, we pride ourselves on offering a curated selection of stylish and high-quality clothing and accessories for modern men.
          </p>
          <p>
            Our mission is to help you look and feel your best every day. Whether you're dressing up for a special occasion or upgrading your everyday style, we've got you covered.
          </p>
          <p>
            We source the latest trends from top designers and offer a wide range of clothing options, from casual wear to formal attire. Our team is dedicated to providing exceptional customer service to make your shopping experience memorable.
          </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;