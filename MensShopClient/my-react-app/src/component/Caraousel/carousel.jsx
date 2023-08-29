import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const MyCarousel = () => {
  useEffect(() => {
    // Initialize the Bootstrap carousel
    const carousel = document.querySelector('#carouselBasicExample');
    new window.bootstrap.Carousel(carousel, {
      interval: 3000, // Set the interval for automatic sliding (in milliseconds)
    });
  }, []);

  return (
    <div id="carouselBasicExample" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{marginTop:-160}}>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselBasicExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselBasicExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselBasicExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="/assets/back.webp" className="card-img" alt="Background " height={850}/> 
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div className="carousel-item">
        <img src="/assets/ravi1.jpg" className="card-img" alt="Background " height={850}/>           <div className="carousel-caption d-none d-md-block">
           
          </div>
        </div>
        <div className="carousel-item">
        <img src="/assets/bg.jpg" className="card-img" alt="Background " height={850}/>           <div className="carousel-caption d-none d-md-block">
            
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselBasicExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselBasicExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MyCarousel;
