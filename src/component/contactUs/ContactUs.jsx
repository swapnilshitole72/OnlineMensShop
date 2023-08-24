import React from 'react';

function ContactUs() {
  return (
    <div className="contact-us container  justify-content-center">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 ">
          <h1 style={{ }}>Contact Us</h1>
          <p>
            Have a question, suggestion, or just want to say hello? Feel free to reach out to us using the contact form below, or through our other contact information.
          </p>
          <p>
            Address: 123 Fashion Avenue, Karad, 415-410
          </p>
          <p style={{ color:'violet' }}>
            Phone: (+91) 9370182303
          </p>
          <p>
            Email: shopX@menswearshop.com
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
        <form>
  <div className="form-group">
    <label>Name</label>
    <input type="text" className="form-control " style={{ transition: 'border 0.s' }} placeholder="Your Name" />
  </div>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control " style={{ transition: 'border 0.3s' }} placeholder="Your Email" />
  </div>
  <div className="form-group">
    <label>Message</label>
    <textarea className="form-control " style={{ transition: 'border 0.3s' }} rows="5" placeholder="Your Message"></textarea>
  </div>
  <button type="submit" className="btn btn-success" style={{ transition: 'background-color 0.3s, border 0.3s, color 0.3s' }}>
    Submit
  </button>
</form>

        </div>
      </div>
    </div>
  );
}

export default ContactUs;
