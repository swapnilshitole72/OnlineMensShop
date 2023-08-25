import React from 'react';


export default function App() {
  return (
    <footer className='bg-light text-center text-dark'>
      <div className='container-fluid p-4 pb-0'>
        <div className='row'>
          <hr></hr>
          <div className='col-md-2 offset-md-1'>
          <section className='mb-1'>
           <h3 text-dark >ShopX</h3>
          <p>
          Welcome to the finest destination for men's fashion.
          </p>
        </section>
            <h3 >Follow Us</h3>
            <div className='d-flex justify-content-center'>
              <a
                className='btn btn-outline-dark rounded-circle m-1'
                href='https://www.facebook.com/'
                role='button'
              >
                <i className='fa fa-facebook'></i>
              </a>

              <a
                className='btn btn-outline-dark rounded-circle m-1'
                href='https://twitter.com/i/flow/login'
                role='button'
              >
                <i className='fa fa-twitter'></i>
              </a>

              <a
                className='btn btn-outline-dark rounded-circle m-1'
                href='https://www.google.com/'
                role='button'
              >
                <i className='fa fa-google'></i>
              </a>
              <a
                className='btn btn-outline-dark rounded-circle m-1'
                href='https://www.instagram.com/'
                role='button'
              >
                <i className='fa fa-instagram'></i>
              </a>

              <a
                className='btn btn-outline-dark rounded-circle m-1'
                href='https://www.linkedin.com/login'
                role='button'
              >
                <i className='fa fa-linkedin'></i>
              </a>

              <a
                className='btn btn-outline-dark rounded-circle m-1'
                href='https://github.com/'
                role='button'
              >
                <i className='fa fa-github'></i>
              </a>
            </div>
          </div>
          
          <div className='col-md-6'>
            <h5>NewProducts</h5>
            <form action=''>
              <div className='row justify-content-center'>
                <div className='col-md-7'>
                  <div className='input-group mb-3'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email address'
                    />
                    <div className='input-group-append'>
                      <button
                        className='btn btn-dark'
                        type='button'
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            
          </div>
          <section className=' col-md-3 mb-4  row justify-content-center'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
              <h5 className='text-uppercase text-dark'>Links</h5>

              <ul className='list-unstyled'>
                <li>
                  <a href='/Home' className='text-dark fa fa-home'>
                  Home
                  </a>
                </li>
                <li>
                  <a href='/products' className='text-Dark fa fa-shopping-bag' >
                    Products
                  </a>
                </li>
                <li>
                  <a href='/AboutUs' className='text-dark fa fa-info'>
                    AboutUs
                  </a>
                </li>
                <li>
                  <a href='/contactUs' className='text-dark fa fa-phone-square'>
                    ContactUs
                  </a>
                </li>
              </ul>
            </div>

            {/* Repeat similar sections for other columns */}
          </div>
        </section>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <div className='text-center p-3 bg-dark bg-gray  shadow-sm fixed-bottom nav-link active text-primary ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', zIndex: 100 }}>
        © {new Date().getFullYear()} Copyright:
        <a className='text-dark' href='/Home'>
            :- ShopX.com
        </a>
      </div>
    </footer>
  );
}


