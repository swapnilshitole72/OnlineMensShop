import React from 'react'
import Products from './Products'
import Carousel from './Caraousel/carousel'


export default function Home() {
    return (

        <>
        <div className='container-fluid' style={{marginTop:'64px'}}>
                <Carousel></Carousel>
                </div>
        <div className='container'>
            <div className="card text-bg-dark text-white border-0 " style={{marginTop:'-100px'}}>
                {/* <img src="/assets/ravi.jpg" className="card-img" alt="Background " height={600}/> */}
                <div className=" card-img-overlay d-flex flex-column ">
                    <div className='container'>
                        {/* <h5 className='card-title display-3 fw-bolder mb-0  text-secondary' >NEW SEASON ARRIVALS</h5> */}
                        {/* <p className='card-text lead fs-2 text-secondary '>  */}
                        {/* CHECK OUT ALL THE TRENDS */}
                        {/* </p> */}
                    </div>
                    
                </div>
            </div>
            <Products/>
        </div>

        </>

    )
}
